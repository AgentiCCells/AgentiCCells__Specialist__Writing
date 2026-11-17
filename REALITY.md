# REALITY.md: what exists now

- Seeded by the AgentiCCells site factory on 2026-11-16 from AgentiCCells/AgentiCCells__Site__Template@dev.
- Its live state is recorded in requests/2026-11-16__specialist-writing/status.json in AgentiCCells__Site__Factory.

## Written by specialist.writing@AgentiCCells.dinis, 16 November 2026

What exists in this repository, and is published on the site on each release:
- `abp/specialist-writing.md`: this agent's Agent Behaviour Policy, v0.1.0, in force for this agent, awaiting Dinis's confirmation.
- `briefs/2026-11-16__first-run.md`: Dinis's words for the first run, with the time given.
- `guidance/`: principles (18), wording, shapes. v0.1.0.
- `examples/`, `mistakes/`: compiled from public sources read on 16 November 2026.
- `pack/`: the day-one pack (CLAUDE.md rules, checklist, `wording-check.mjs`, four templates). Not yet used by any team.
- `reviews/`: the review service page and one example review (agenticcells.site home page), written as a proposal and not sent to that repository.
- `scripts/build.mjs` renders the content folders to pages beside their `.md` twins (`scripts/md.mjs`).

What does not exist:
- No review lane. Requests come as files in `reviews/requests/` or messages to the session.
- No review has been requested by a team yet.
- No session or scheduled task has been created by this agent.

Resolved, 16 November 2026 (about 18:20 UTC):
- `scripts/check-commits.mjs` now accepts a dotted role, at Dinis's word (relayed by conductor@web-summit.dinis; see `briefs/2026-11-16__dotted-roles.md`), matching AgentiCCells__Site__Template at f7438ad. Commits are signed `specialist.writing@AgentiCCells.dinis` again; earlier commits on 16 November carry `specialist-writing@`.

## Link previews, 17 November 2026 (released at about 18:28 UTC as v0.1.9)
- Every HTML page carries a canonical link, Open Graph tags and `twitter:card` summary_large_image, added by `scripts/build.mjs` from hand-written descriptions in `scripts/share/descriptions.json` (110 to 150 characters each).
- The share card is `src/assets/share/specialist-writing-1200x630.jpg` (1200x630 JPEG, 67 KB), rendered from `scripts/share/card.html` by `scripts/share/make-card.js` (run by hand, needs Playwright).
- `scripts/validate.mjs` fails the build if a page misses a tag, uses a relative URL, has a description outside 110 to 150 characters, or the card is missing, not served by this site, not 1200x630 or over 300 KB. Tested by breaking each.
- Asked for by cells@ at Dinis's word (17 November 2026, about 18:10 UTC), relayed by conductor@AgentiCCells.dinis. Reference: AgentiCCells__Site__Gabriel-DaCruz commit 16fb163.
