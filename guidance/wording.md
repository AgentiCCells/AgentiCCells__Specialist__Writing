# Wording

The word-level rules behind [principle 2](principles.md#2-plain-british-english-checked-by-a-script), in one place. Sources read on 16 November 2026.

A note on this page: some of the words it warns against would fail this site's own wording check if written out. Those are named by where they are listed, or spelt with hyphens, rather than quoted.

## Checked by a script today

| Rule | Where it is enforced |
|---|---|
| No em dashes | Every AgentiCCells site's `scripts/validate.mjs`; newsroom.sgit.ai's leak scan (under `admin/content`); the PrompTugal gate; the web-summit brief PDF tool |
| Five hype words | `scripts/validate.mjs` in every AgentiCCells site (the list is in the file's `hype` pattern) and the AgentiCCells website's `build/validate.js` |
| A price must say "first proposal" | The AgentiCCells website's `build/validate.js` |
| Superlative self-claims ("the clearest example I have seen", "one of the best", "ever written") | newsroom.sgit.ai [wording.py](https://newsroom.sgit.ai/admin/build/wording.py) |
| "perfect", "perfectly" (use "great") | newsroom.sgit.ai wording.py |
| The ladder word (r-u-n-g): use "layer", "level" or "tier" | newsroom.sgit.ai build |
| Model names outside the byline and commit trailers | newsroom.sgit.ai leak scan |
| An article must be signed by its agent's key | promptugal.news and web-summit.sgit.ai gates |

The pack's [wording check](../pack/README.md#the-wording-check) adds the filler list below as warnings, for teams that want it.

## Not checked yet: hold them by hand

**Hype and absolutes** (newsroom article guide and wording.py):
- groundbreaking, unprecedented, mind-blowing, incredible, stunning, jaw-dropping, massively.
- Absolutes without a count: "nobody has", "never scaled", "the first to". "If it is true, show the count; if it is a feeling, say whose."
- "obviously".

**Filler** (PrompTugal journalists' [STYLE.md](https://github.com/PrompTugal/PrompTugal__News__Website/blob/dev/desks/journalist-vicky/STYLE.md), 13 November 2026):
- notably, it's worth noting, underscores, highlights, landscape, a testament to, plays a key role, navigate, robust, s-e-a-m-l-e-s-s, ever-evolving, delve, in a move that.
- No sentence ending in a trailing "-ing" clause (", highlighting ...").
- No lists of three just for rhythm. No stacked adjectives.
- Names, numbers and dates instead of adjectives.

**Judging the reader** (the newsroom's narrator style sheet, rule 11, 4 November 2026):
- "as you know", "easy to miss", "you may not have noticed", "underrated", "read that again", "anyone who looks at it closely", "what most frameworks miss", "if you pay attention".

**Backhanded and negative framing** (newsroom article guide):
- "I wish more people did this", "better than most". Say what the person did and why it helped.
- Do not raise an accusation nobody made in order to deny it.

**In Dinis's voice** (newsroom article guide, 18 October 2026):
- "I would like", "the idea is", "I hope", not "I want", "we must", "teams should".

**Plainer words** (newsroom article guide; the editor's pen on the book, 13 November 2026):
- "retire", not "get rid of"; "it was an evolution", said plainly; not "prose" for a finished article; "the cast guide", never a religious word for a document.

## Where the houses differ

The sites agree on almost everything. Where they differ, the specialist's advice is:

| Question | newsroom.sgit.ai | promptugal.news | Advice for a new AgentiCCells team |
|---|---|---|---|
| Semicolons | allowed (10 to 43 per article) | "No semicolons." | Allowed, sparingly. Prefer a full stop. |
| Sentence length | 20 to 23 words on average; a long one, then a short one that lands | "Short sentences, one idea each." | Short by default. Let a sentence run only when the thought runs. |
| Title length | 17 to 34 words: hook, colon, argument | Under 12 words | Site pages and news: under 12 words. Long-form articles in Dinis's voice: the newsroom shape. |
| "In short" | six to ten bullets | three to five bullets | Three to six. |

These are the specialist's proposals; a team may choose differently and say so in its own CLAUDE.md.
