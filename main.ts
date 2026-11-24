// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
// Writes one fixed line (<=200 chars) about a small good thing today
// to /output/entry.txt. Deterministic: no clock, no randomness, no I/O
// beyond creating the output directory and writing the single line.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "This morning the warung lady slid an extra fried egg onto my rice and whispered, 'for the road' — I carried that small kindness home like sunlight in my pocket.";

const OUT = "/output/entry.txt";

// Gate guard: the entry must be 1-200 characters, not only whitespace.
// Fail loudly here rather than shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
