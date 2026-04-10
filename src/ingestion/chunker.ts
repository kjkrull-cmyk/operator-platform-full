export function chunkText(text: string, maxLength = 800) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];

  let current = "";

  for (const sentence of sentences) {
    if ((current + sentence).length > maxLength) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current += " " + sentence;
    }
  }

  if (current.trim().length > 0) {
    chunks.push(current.trim());
  }

  return chunks;
}
