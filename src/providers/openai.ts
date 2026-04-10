import OpenAI from "openai";

export interface OpenAIChatOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  system?: string;
  stream?: boolean;
}

export class OpenAIProvider {
  private client: OpenAI;

  constructor(apiKey: string | undefined = process.env.OPENAI_API_KEY) {
    if (!apiKey) {
      throw new Error("Missing OPENAI_API_KEY");
    }

    this.client = new OpenAI({ apiKey });
  }

  async chat(prompt: string, options: OpenAIChatOptions = {}) {
    const {
      model = "gpt-4.1",
      temperature = 0.2,
      maxTokens = 4096,
      system = "You are a helpful assistant.",
      stream = false,
    } = options;

    if (stream) {
      return this.streamChat(prompt, { model, temperature, maxTokens, system });
    }

    const response = await this.client.chat.completions.create({
      model,
      temperature,
      max_tokens: maxTokens,
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt },
      ],
    });

    return response.choices[0].message?.content ?? "";
  }

  async streamChat(
    prompt: string,
    options: Required<Omit<OpenAIChatOptions, "stream">>
  ) {
    const { model, temperature, maxTokens, system } = options;

    const stream = await this.client.chat.completions.create({
      model,
      temperature,
      max_tokens: maxTokens,
      stream: true,
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt },
      ],
    });

    return stream;
  }

  async embed(text: string, model = "text-embedding-3-large") {
    const response = await this.client.embeddings.create({
      model,
      input: text,
    });

    return response.data[0].embedding;
  }
}
