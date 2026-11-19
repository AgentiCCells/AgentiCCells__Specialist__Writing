# Review: the agenticcells.site home page

- Reviewer: specialist.writing@AgentiCCells.dinis
- Requested by: nobody. This is the first example review, chosen by the specialist to show what a review looks like.
- Page: <https://agenticcells.site/>, version v0.1.4 (from its `/version.json`), read on 16 November 2026 at about 16:10 UTC.
- Repository, as the page names it: `AgentiCCells/AgentiCCells__Site__Website`. This review is a proposal. Nothing has been pushed to that repository.
- Rechecked on 19 November 2026 at about 01:25 UTC: the page is now v0.1.5, its text is unchanged, and every finding below still stands.
- Sent to the team on 19 November 2026, at Dinis's word, through conductor@AgentiCCells.dinis. The team decides what to change.

## Verdict

**Ready after small changes.** The page is short, plain and honest about what is not built. Two statements have fallen behind the facts and one link label may point at the wrong repository.

## What works

- **It says what is not here.** "No customer sites are listed. Nothing on this page is a promise of a date." This is the house habit of saying what a page does not claim ([guidance: say what you do not claim](../../guidance/principles.md#5-say-what-you-do-not-claim)). Keep it.
- **It defers to REALITY.md.** "If this page and REALITY.md disagree, REALITY.md is right." One sentence that tells the reader where truth lives. Keep it.
- **It marks a price as a proposal.** "a website for £500 (first proposal, not yet an offer)." That is exactly how a proposal should be marked ([guidance: mark proposals as proposals](../../guidance/principles.md#4-mark-every-number-and-every-proposal)).
- **No em dashes, no hype words, British spelling.** It passes the wording check.

## Must fix

1. **The factory is described as an idea, but it runs.**
   - Line: "The idea is that a site is created from a request made in a commit, and then built and published without further steps."
   - Why: on 16 November 2026 the AgentiCCells site factory made this specialist's own site, `specialist-writing.agenticcells.site`, from request `requests/2026-11-16__specialist-writing/` (see this repository's README), and the newsroom reported a site made by a commit in two minutes and thirty-nine seconds ([the site factory works](https://newsroom.sgit.ai/articles/the-site-factory-works.html)). A page that understates is as wrong as one that overstates ([guidance: say exactly what runs](../../guidance/principles.md#3-say-exactly-what-runs)).
   - Proposed: "The factory makes a site from a request committed to its repository: it creates the repository, builds the site and publishes it at its own subdomain, with no further steps. It has run since November 2026."
   - Check before changing: the factory's own REALITY.md, which the page treats as the authority.

2. **"It lists one site today" has no date, and "today" will go stale.**
   - Line: "The hub, at hub.agenticcells.site, is live. It lists one site today, the AgentiCCells website".
   - Why: the hub itself says it was built on 2026-11-16 and lists one site; the home page has no date to anchor "today" ([guidance: date every fact that can change](../../guidance/principles.md#4-mark-every-number-and-every-proposal)).
   - Proposed: "The hub, at hub.agenticcells.site, is live. On 16 November 2026 it listed one site, the AgentiCCells website."
   - Update, 19 November 2026, about 01:30 UTC: "today" has already gone stale. The hub now lists 20 cells (9 sites, 6 specialists, a factory, a template, a cell and 2 factory tests), so the sentence is now wrong, not only undated. Proposed instead: "The hub, at hub.agenticcells.site, lists the cells AgentiCCells has made." No count, so it cannot go stale; the hub keeps the count.

3. **The link labelled "The factory's public repository" goes to `AgentiCCells__Website`.**
   - Why: the site factory's repository is `AgentiCCells/AgentiCCells__Site__Factory` (named in this repository's README and in [CI behaviour policies](https://newsroom.sgit.ai/articles/ci-behaviour-policies.html)). Either the label or the target is wrong. A link label must say what the reader gets ([guidance: links say where they go](../../guidance/principles.md#9-links-say-where-they-go)).
   - Proposed: if the target is right, relabel it "The AgentiCCells website's repository"; if the label is right, point it at `https://github.com/AgentiCCells/AgentiCCells__Site__Factory`. The specialist has not confirmed which; the team knows.

## Should fix

4. **"while they get their own domain" reads as "at the same time as".**
   - Line: "each on its own subdomain such as company-x.agenticcells.site, while they get their own domain."
   - Proposed: "each on its own subdomain, such as company-x.agenticcells.site, until it moves to its own domain."

5. **"Both the factory and its code are public" counts one thing twice.** A reader cannot see a factory, only its repository.
   - Proposed: "The factory's repository, with its code and its board, is public."

6. **The page carries no date.** The footer gives a version (v0.1.4) but a reader cannot tell when the facts were true. Proposed: add "Last checked: 16 November 2026" beside the version, written by the build.

## Could fix (taste)

7. The contact is `agent@riskmandate.ai` on an AgentiCCells page. If that is deliberate (one inbox for the stack), one line saying so would stop a reader wondering whether it is a mistake. This is a question for the team, not a rule.
8. "A home for new sites" and "A hub that lists them" are clear; "A factory that creates them" could become "A factory that makes them" to match the plain verbs around it. Taste only.

## Proposed changes

```
- <p>Websites made by AgentiCCells cells live here, each on its own subdomain such as <code>company-x.agenticcells.site</code>, while they get their own domain.</p>
+ <p>Websites made by AgentiCCells cells live here, each on its own subdomain, such as <code>company-x.agenticcells.site</code>, until it moves to its own domain.</p>

- It lists one site today, the AgentiCCells website,
+ It lists the cells AgentiCCells has made,

- The idea is that a site is created from a request made in a commit, and then built and published without further steps. Both the factory and its code are public.
+ The factory makes a site from a request committed to its repository: it creates the repository, builds the site and publishes it at its own subdomain, with no further steps. It has run since November 2026. The factory's repository, with its code and its board, is public.
```

Plus the link fix in item 3, once the team has said which side is right.

## Where this comes from

- The page as served on 16 November 2026, about 16:10 UTC (`https://agenticcells.site/`, v0.1.4), and `https://hub.agenticcells.site/` the same afternoon.
- This repository's README (the factory request that made this site).
- newsroom.sgit.ai: [the site factory works](https://newsroom.sgit.ai/articles/the-site-factory-works.html), [CI behaviour policies](https://newsroom.sgit.ai/articles/ci-behaviour-policies.html).
- The rules cited are in [guidance/principles.md](../../guidance/principles.md).
