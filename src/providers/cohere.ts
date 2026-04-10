import { CohereClient } from "cohere-ai";

export interface CohereEmbedOptions {
  model?: string;
}

export interface CohereRerankOptions {
  model?: string;
  topN?: number;
}

export class CohereProvider {
  private client: CohereClient;

  constructor(apiKey: string | undefined = process.env.COHERE_API_KEY) {
    if (!apiKey) {
      throw new Error("Missing COHERE_API_KEY");
    }

    this.client = new CohereClient({ apiKey });
  }

  /**
   * Embeddings
   */
  async embed(text: string, options: CohereEmbedOptions = {}) {
    const { model = "embed-english-v3.0" } = options;

    const response = await this.client.embed({
      model,
      texts: [text],
    });

    return response.embeddings[0];
  }

  /**
   * Reranking
   */
  async rerank(
    query: string,
    documents: string[],
    options: CohereRerankOptions = {}
  ) {
    const { model = "rerank-v3.0", topN = documents.length } = options;

    const response = await this.client.rerank({
      model,
      query,
      documents,
      topN,
    });

    return response.results.map((r) => ({
      index: r.index,
      relevanceScore: r.relevanceScore,
      document: documents[r.index],
    }));
  }
}
