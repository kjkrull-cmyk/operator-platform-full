import { createClient } from "@supabase/supabase-js";
import { CohereProvider } from "../providers/cohere";

export interface RetrievalOptions {
  topK?: number;
  rerank?: boolean;
}

export class RetrievalOrchestrator {
  private client;
  private cohere: CohereProvider;

  constructor() {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error("Missing Supabase environment variables");
    }

    this.client = createClient(url, key);
    this.cohere = new CohereProvider();
  }

  /**
   * Vector search using Supabase
   */
  async vectorSearch(queryEmbedding: number[], topK = 10) {
    const { data, error } = await this.client.rpc("match_document_chunks", {
      query_embedding: queryEmbedding,
      match_count: topK,
    });

    if (error) throw error;
    return data;
  }

  /**
   * Hybrid search: vector search + optional reranking
   */
  async retrieve(
    query: string,
    queryEmbedding: number[],
    options: RetrievalOptions = {}
  ) {
    const topK = options.topK ?? 10;
    const rerank = options.rerank ?? true;

    // Step 1: vector search
    const vectorResults = await this.vectorSearch(queryEmbedding, topK);

    if (!rerank) {
      return vectorResults;
    }

    // Step 2: rerank using Cohere
    const documents = vectorResults.map((r: any) => r.content);

    const reranked = await this.cohere.rerank(query, documents, {
      topN: topK,
    });

    return reranked.map((r) => ({
      content: r.document,
      score: r.relevanceScore,
    }));
  }
}
