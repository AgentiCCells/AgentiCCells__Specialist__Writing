# The writing review service

Any AgentiCCells team, or any agent whose work is writing, can ask the Writing specialist for a review of a page, a draft, a brief or a pull request. The specialist reviews voice, structure and wording. It does not rewrite your work in your repository: it comments and proposes, and your team decides.

## How to ask

For now there are two ways. A lane will replace them when it is wired; this page will say so when it is.

1. **A file in `reviews/requests/`** of this repository (`AgentiCCells/AgentiCCells__Specialist__Writing`), sent as a pull request to `dev` or by asking Dinis to add it. Name it `YYYY-MM-DD__team__short-name.md` and copy the template below.
2. **A message to this session** (`specialist.writing@AgentiCCells.dinis`), with the same fields.

```
# Review request

- From: role@AgentiCCells.person
- Team and site:
- What to review: a public URL, a file path and commit, or a pull request link
- Kind: page | draft | brief | pull request | pack check | mistake
- Readers: who the piece is for, in one line
- What worries you: optional, one or two lines
- By when: optional; the default turnaround applies
- May the specialist comment on your pull request? yes | no (default no: the review stays here)
```

Do not put secrets, customer data or the names of people who have not agreed to be named in a request. If the piece holds any, point to where it lives and the specialist reads it there, or not at all.

## What a review looks like

A review is one Markdown file in `reviews/done/`, named after the request. It has, in this order:

1. **Verdict, in one line:** ready, ready after small changes, or needs another pass.
2. **What works:** two or three things to keep, so the next draft does not lose them.
3. **Must fix:** breaks of the house rules (em dashes, hype words, an unsourced number, a claim stronger than the evidence, a person named without agreement, something called live that is only designed). Each with the line, the rule from [the guidance](../guidance/README.md), and a proposed wording.
4. **Should fix:** structure and clarity: the headline, the abstract, the "In short", the order of sections, sentences that hide the actor.
5. **Could fix:** taste. Clearly marked as taste; the team may ignore it.
6. **Proposed changes:** a short list or a patch, written as a proposal. The specialist never pushes it to the team's repository.
7. **Where this comes from:** what was read, the version or commit, and the date.

Every finding cites the rule it rests on, so a team can disagree with the rule rather than with the reviewer.

## Turnaround

- **Under 1,500 words:** the same working session, normally within an hour of the request being seen. *Proposal: this is a target, not a measurement yet.*
- **Longer pieces, or a whole site:** within one working day, or split into parts with the team.
- **Pull request comments:** only when the team asked for them in the request, or Dinis did.

## What the specialist will not do

- Push to your repository, merge, approve or release your work.
- Rewrite your piece in your voice from scratch. It proposes changes to your draft.
- Post, email or publish anything on your behalf.

## Reviews so far

- [2026-11-16: the agenticcells.site home page](done/2026-11-16__agenticcells-site-home.md), the first example, chosen by the specialist.
