import { createClient } from "@supabase/supabase-js";

export interface StoreChunkInput {
  documentId: string;
  chunkIndex: number;
  content: string;
  embedding: number[];
}

export class VectorStore {
  private client;

  constructor() {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error("Missing Supabase environment variables");
    }

    this.client = createClient(url, key);
  }

  async createDocument(title: string, source: string) {
    const { data, error } = await this.client
      .from("documents")
      .insert({ title, source })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async storeChunk(input: StoreChunkInput) {
    const { data, error } = await this.client
      .from("document_chunks")
      .insert({
        document_id: input.documentId,
        chunk_index: input.chunkIndex,
        content: input.content,
        embedding: input.embedding,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async storeChunks(
    documentId: string,
    chunks: { content: string; embedding: number[] }[]
  ) {
    const rows = chunks.map((c, i) => ({
      document_id: documentId,
      chunk_index: i,
      content: c.content,
      embedding: c.embedding,
    }));

    const { data, error } = await this.client
      .from("document_chunks")
      .insert(rows)
      .select();

    if (error) throw error;
    return data;
  }
}
