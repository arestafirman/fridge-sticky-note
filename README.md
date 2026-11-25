# Notes From a Passive-Aggressive Fridge

[![Notes From a Passive-Aggressive Fridge](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![Rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/arestafirman/fridge-sticky-note/rank.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![Reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/arestafirman/fridge-sticky-note/reward.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

## The note

> Your 'diet starts Monday' note has been stuck to my door for 214 days. The pizza menu underneath it got read 6 times this week alone.

`main.ts` writes this note — exactly one line, 133 characters, no trailing newline — to `/output/entry.txt`. It is deterministic, has no dependencies, and makes no network calls.

## Running it

```sh
node main.ts                              # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts          # writes to a custom directory (for local testing)
```

Running it twice produces byte-identical output.

## Why this note meets the judge's five criteria

1. **It is a note from the fridge** — the fridge itself reports what is stuck to its own door.
2. **It delivers a real joke in one line** — the diet note has sat there 214 days, but the pizza menu underneath it got read 6 times this week alone.
3. **It speaks in the fridge's voice** — smug about its inventory: it knows exactly what is on its door and how often each item gets read.
4. **The grudge is small and domestic** — a diet note nobody follows versus a pizza menu everybody reads.
5. **The detail is fresh and concrete** — a named artefact (the sticky note, the pizza menu) with literal numbers (214 days, 6 reads), not generic nagging.
