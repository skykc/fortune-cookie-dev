// Fortune Cookie Wisdom for Developers — entry program.
//
// Writes one original fortune-cookie line for a software developer to
// /output/entry.txt, where the house gate and judge read it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The bug you cannot reproduce is reproducing happily in production, waiting for your weekend.";

// Gate check (mirrors the house scorer): 1–120 chars, one line, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`line is ${LINE.length} chars, gate wants 1-120`);
}
if (LINE.trim().length === 0) {
  throw new Error("line is only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${outDir}/entry.txt (${LINE.length} chars)`);
