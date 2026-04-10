import { loadTextFile, loadFromString } from "./loaders";
import { cleanText } from "./cleaner";
import { chunkText } from "./chunker";

export interface IngestParams {
  path?: string;
  text?: string;
}

export async function ingestDocument({ path, text }: IngestParams) {
  let raw: string;

  if (path) {
    raw = await loadTextFile(path);
  } else if (text) {
    raw = await loadFromString(text);
  } else {
    throw new Error("Must provide either path or text to ingest");
  }

  const cleaned = cleanText(raw);
  const chunks = chunkText(cleaned);

  return {
    raw,
    cleaned,
    chunks,
  };
}
