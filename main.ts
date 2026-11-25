import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fridge's note: one line, 133 characters, no trailing newline.
// Written exactly as-is to /output/entry.txt, byte-identical every run.
const ENTRY =
  "Your 'diet starts Monday' note has been stuck to my door for 214 days. The pizza menu underneath it got read 6 times this week alone.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Gate guard: the sealed scorer requires UTF-8 text of 1-200 characters.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-200 gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
