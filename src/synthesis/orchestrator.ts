import { EmbeddingOrchestrator } from "../embedding/orchestrator";
import { RetrievalOrchestrator } from "../embedding/retrieval";
import { OpenAIProvider } from "../providers/openai";
import { AnthropicProvider } from "../providers/anthropic";

export interface SynthesisOptions {
  provider?: "openai" | "anthropic";
  maxContext?: number;
  temperature?: number;
}

export class SynthesisOrchestrator {
  private embedder: EmbeddingOrchestrator;
  private retriever: RetrievalOrchestrator;
  private openai: OpenAIProvider;
  private anthropic: AnthropicProvider;

  constructor() {
    this.embedder = new EmbeddingOrchestrator();
    this.retriever = new RetrievalOrchestrator();
    this.openai = new OpenAIProvider();
    this.anthropic = new AnthropicProvider();
  }

  async answer(query: string, options: SynthesisOptions = {}) {
    const {
      provider = "openai",
      maxContext = 3000,
      temperature = 0.2,
    } = options;

    // Step 1: embed the query
    const queryEmbedding = await this.embedder.embedText(query, {
      provider: "openai",
    });

    // Step 2: retrieve relevant chunks
    const results = await this.retriever.retrieve(query, queryEmbedding, {
      topK: 10,
      rerank: true,
    });

    // Step 3: build context window
    const context = results
      .map((r: any) => r.content)
      .join("\n\n")
      .slice(0, maxContext);

    const prompt = `
You are an expert assistant. Use ONLY the context below to answer the question.

Context:
${context}

Question:
${query}

Answer:
    `.trim();

    // Step 4: call the chosen LLM
    if (provider === "openai") {
      return this.openai.chat(prompt, { temperature });
    }

    if (provider === "anthropic") {
      return this.anthropic.chat(prompt, { temperature });
    }

    throw new Error(`Unknown provider: ${provider}`);
  }
}
