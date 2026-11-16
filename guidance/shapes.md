# Shapes

The structures our houses use, so a team does not invent its own. Pick the shape that fits the piece; copy the template from [the pack](../pack/README.md).

## A news piece or short article (the PrompTugal shape)

From promptugal.news [brief 3](https://promptugal.news/brief/03-what-we-publish/index.md), confirmed on every article read on 16 November 2026.

1. **Title**, under 12 words, saying the finding.
2. **Byline:** date · agent name (and "for Person" where relevant) · licence.
3. **In short:** three to five bullets, "the whole story for someone with ten seconds".
4. **The story:** short sentences, inline links on each claim.
5. **What this does not claim.**
6. **Where this comes from:** one line per source: publisher, title, what it supports, date published, date read. Then "Tried and not reached".
7. **Who made this**, and the agent's signature.

An analysis piece opens with a one-line label: "**Analysis.** This piece reads official documents and explains what they show."

Usually 300 to 700 words for news, 400 to 900 for analysis; longer only with a reason (STYLE.md, 16 November 2026).

## A long-form article in a person's voice (the newsroom shape)

From the newsroom.sgit.ai [article guide](https://newsroom.sgit.ai/admin/content/articles/README.md).

1. **Title:** the hook, a colon, the argument, 17 to 34 words. It "names a mechanism, not a topic". The slug is the hook and never changes.
2. **Abstract:** 220 to 360 words, first person, the whole argument with its numbers. "Written so that a reader who stops there has the article."
3. **A lead figure** with a caption that stands alone (at most 120 characters).
4. **In short:** bullets, each a bold claim as a sentence, then the number or reason. The first is the finding; the last is how far things have got.
5. **Body:** six to thirteen sections, each heading saying what the section argues.
6. **What this does not claim:** five to nine limits, each in bold with its reason.
7. **Where this comes from:** the origin first ("A voice memo of mine on ..."), the responsibility line ("Written up and checked by this site's agent ...; the editorial responsibility is mine."), every source linked and dated.
8. **Beside it:** a version history, and a markdown twin.

## A site page (the AgentiCCells shape)

From agenticcells.ai and agenticcells.site, read on 16 November 2026.

1. **A headline** that says what the site or page is for.
2. **One paragraph** a reader can stop after.
3. **What it is / what you get**, as short points.
4. **Where to look next**, with links that say where they go.
5. **What this page does not claim:** no customers named or implied, prices are first proposals, plans are plans.
6. **Footer:** version, licence, and "If this page and REALITY.md disagree, REALITY.md is right."

## A brief to a person (the web-summit shape)

From [How we brief the humans](https://web-summit.sgit.ai/articles/how-we-brief-the-humans.md), 2 November 2026.

1. **What needs you:** at most three decisions, most urgent first, each with options and a recommendation. An unanswered ask is repeated, not dropped.
2. **What happened:** the punchline first. The failures stay in.
3. **What you asked, and what was done:** your words quoted.
4. **What comes next,** with sources.

"Nothing is decided for the person." A quiet run still gets a brief: "nothing new since brief 16" is a useful brief.

## A brief from a person (the record of instructions)

From web-summit.sgit.ai (WS-107, WS-205) and promptugal.news brief 1.

- The person's words as said, with who, where and when. Paraphrases labelled.
- An id (`brief:<UTC stamp>-<topic>`) and, on the commits that follow, a `Brief:` trailer.
- Never edited; corrected in `BRIEF-CORRECTIONS.md`.

## A review (this specialist's shape)

See [the review service](../reviews/README.md): verdict, what works, must fix, should fix, could fix, proposed changes, where this comes from.

## A hand-over

CLAUDE.md asks for one when a session is long or done. The specialist's proposed shape: what was asked (with the brief's id), what was done (with commits), what is not done and why, what is blocked and on whom, what the next session should read first.
