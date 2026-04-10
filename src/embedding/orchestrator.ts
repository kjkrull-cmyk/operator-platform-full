import { OpenAIProvider } from "../providers/openai";
import { AnthropicProvider } from "../providers/anthropic";
import { CohereProvider } from "../providers/cohere";

export type EmbeddingProviderName = "openai" | "anthropic" | "cohere";

export interface EmbeddingOrchestratorOptions {
  provider: EmbeddingProviderName;
  model?: string;
}

export class EmbeddingOrchestrator {
  private openai: OpenAIProvider;
  private anthropic: AnthropicProvider;
  private cohere: CohereProvider;

  constructor() {
    this.openai = new OpenAIProvider();
    this.anthropic = new AnthropicProvider();
    this.cohere = new CohereProvider();
  }

  async embedText(
    text: string,
    options: EmbeddingOrchestratorOptions = { provider: "openai" }
  ) {
    const { provider, model } = options;

    switch (provider) {
      case "openai":
        return this.openai.embed(text, model);
      case "anthropic":
        return this.anthropic.embed(text, model);
      case "cohere":
        return this.cohere.embed(text, { model });
      default:
        throw new Error(`Unknown provider: ${provider}`);
    }
  }

  async embedChunks(
    chunks: string[],
    options: EmbeddingOrchestratorOptions = { provider: "openai" }
  ) {
    const vectors = [];

    for (const chunk of chunks) {
      const vector = await this.embedText(chunk, options);
      vectors.push({
        chunk,
        embedding: vector,
      });
    }

    return vectors;
  }
}
