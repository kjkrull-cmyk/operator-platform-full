import fs from "fs/promises";

export async function loadTextFile(path: string) {
  const raw = await fs.readFile(path, "utf8");
  return raw.toString();
}

export async function loadFromString(text: string) {
  return text;
}
