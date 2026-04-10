import Anthropic from "@anthropic-ai/sdk";

export interface AnthropicChatOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  system?: string;
  stream?: boolean;
}

export class AnthropicProvider {
  private client: Anthropic;

  constructor(apiKey: string | undefined = process.env.ANTHROPIC_API_KEY) {
    if (!apiKey) {
      throw new Error("Missing ANTHROPIC_API_KEY");
    }

    this.client = new Anthropic({ apiKey });
  }

  /**
   * Unified chat interface
   */
  async chat(prompt: string, options: AnthropicChatOptions = {}) {
    const {
      model = "claude-3-5-sonnet-20241022",
      temperature = 0.2,
      maxTokens = 4096,
      system = "You are a helpful assistant.",
      stream = false,
    } = options;

    if (stream) {
      return this.streamChat(prompt, { model, temperature, maxTokens, system });
    }

    const response = await this.client.messages.create({
      model,
      max_tokens: maxTokens,
      temperature,
      system,
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.content?.[0];
    if (content && content.type === "text") {
      return content.text;
    }

    return "";
  }

  /**
   * Streaming chat interface
   */
  async streamChat(
    prompt: string,
    options: Required<Omit<AnthropicChatOptions, "stream">>
  ) {
    const { model, temperature, maxTokens, system } = options;

    const stream = await this.client.messages.create({
      model,
      max_tokens: maxTokens,
      temperature,
      system,
      stream: true,
      messages: [{ role: "user", content: prompt }],
    });

    return stream;
  }

  /**
   * Embeddings
   */
  async embed(text: string, model = "claude-3-embedding-20240229") {
    const response = await this.client.embeddings.create({
      model,
      input: text,
    });

    return response.data[0].embedding;
  }
}
