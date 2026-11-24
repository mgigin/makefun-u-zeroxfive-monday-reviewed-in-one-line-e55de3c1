// Monday, Reviewed in One Line — make.fun entry program.
// Writes one single-line review of the entrant's own Monday (under 200
// characters) to /output/entry.txt and validates the bounty gate inside the
// program: UTF-8 text, 1-200 characters, not only whitespace, exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday review: my inbox doubled, my coffee went cold, and my to-do list had babies before lunch. One star \u2014 would not recommend the week.";

const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`gate failed: entry is ${chars.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("gate failed: entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("gate failed: entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
