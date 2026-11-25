// SPDX-License-Identifier: MIT
// One Star for Monday — writes a single one-star review of Monday,
// as if Monday were a restaurant, to /output/entry.txt.
// Stdlib only; Node 22 runs this TypeScript file as-is.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Waited an hour for a table, then the waiter served me a whole week. Monday's kitchen should stay closed forever.";

// Self-check against the gate: one line, at most 25 words, 1-180 chars.
const words = REVIEW.trim().split(/\s+/).length;
if (words > 25) throw new Error(`review is ${words} words, over the 25-word cap`);
if (REVIEW.length < 1 || REVIEW.length > 180) {
  throw new Error(`review is ${REVIEW.length} chars, outside the 1-180 gate`);
}
if (REVIEW.includes("\n")) throw new Error("review must be a single line");

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REVIEW + "\n", "utf8");
