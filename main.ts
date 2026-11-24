import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of office comedy for "Make the AI Judge Laugh: the Office Joke Open".
// The joke: a dead office plant replaced by a photo of a plant — and the photo
// is the one getting promoted. Setup, misdirection, payoff in the last words.
// Verified locally: the program writes exactly 122 characters, one line, no
// trailing newline, so the gate's 1–200 character window is comfortably met.
const JOKE =
  "The office plant died. Facilities replaced it with a photo of a plant, which is doing great and has already been promoted.";

// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("Joke must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
