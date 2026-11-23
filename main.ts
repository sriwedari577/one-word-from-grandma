import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word: the single word a grandma would text about AI.
// "chatterbox" is a real grandmother word for someone who never stops
// talking, applied here to a chatbot / talking machine: warm, a little
// baffled, and tied to AI in both halves of the word (chatter + box).
// Output is exactly this word plus a trailing newline; no other bytes are written.
const WORD = "chatterbox";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
