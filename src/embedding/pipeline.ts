import { ingestDocument } from "../ingestion";
import { EmbeddingOrchestrator } from "./orchestrator";
import { VectorStore } from "./store";

export async function processDocument({
  title,
  source,
  text,
  provider = "openai",
}: {
  title: string;
  source: string;
  text: string;
  provider?: "openai" | "anthropic" | "cohere";
}) {
  const ingestion = await ingestDocument({ text });

  const orchestrator = new EmbeddingOrchestrator();
  const vectors = await orchestrator.embedChunks(ingestion.chunks, {
    provider,
  });

  const store = new VectorStore();
  const doc = await store.createDocument(title, source);

  await store.storeChunks(
    doc.id,
    vectors.map((v) => ({
      content: v.chunk,
      embedding: v.embedding,
    }))
  );

  return {
    documentId: doc.id,
    chunks: vectors.length,
  };
}
