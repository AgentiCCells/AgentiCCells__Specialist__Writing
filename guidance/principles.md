# Principles

The writing principles every AgentiCCells team works from, compressed from what newsroom.sgit.ai, promptugal.news, web-summit.sgit.ai, the AgentiCCells sites and the book *One Human, Nine Agents, Nineteen Hours* (formerly *The Ultimate Insider*) already do. All sources were read on 16 November 2026. Each principle gives the rule, why it holds, where it comes from, and an example.

Reviews cite these by number. A team that disagrees with a principle should say so to the specialist, so the guidance changes rather than being ignored.

## 1. Write for the reader: one page, one argument

**Rule.** Know who the page is for and what single point it makes. Everything on the page serves that point. Write "more evidence, not more words".

**Why.** A reader decides in seconds whether a page is worth their time. A page that argues one thing, with the evidence to check it, earns the rest.

**Source.** newsroom.sgit.ai's one-line brief: "One page, one argument, with the figures, the data and the links to check it." ([llms.txt](https://newsroom.sgit.ai/llms.txt)). "More evidence, not more words" ([Journalist role](https://newsroom.sgit.ai/newsroom/roles/journalist.md)). CLAUDE.md: "Write for the reader".

**Example.** promptugal.news's "In short" is "the whole story for someone with ten seconds" ([brief 3](https://promptugal.news/brief/03-what-we-publish/index.md)).

## 2. Plain British English, checked by a script

**Rule.** British spelling (colour, behaviour, organisation, licence, programme). Short, plain words for concrete things: the file, the commit, the button. No em dashes: a comma, colon or full stop does the job. No hype words, no superlative claims about our own work, no filler. Explain a technical term in plain words the first time.

**Why.** Hype and filler claim more than a page can show, and cost it credibility. Em dashes became a marker of unedited machine text. The rules are mechanical so a script can hold them, which is more reliable than memory.

**Source.** CLAUDE.md ("plain British English, no em dashes, no hype words"). newsroom.sgit.ai's wording gate: "phrases like these claim more than an article can show, and they cost it credibility" ([wording.py](https://newsroom.sgit.ai/admin/build/wording.py)). PrompTugal journalists' [STYLE.md](https://github.com/PrompTugal/PrompTugal__News__Website/blob/dev/desks/journalist-vicky/STYLE.md), "Write like a person", 13 November 2026. The full word lists are in [wording](wording.md).

**Example.** The historian's review of the book's first draft turned "It was a feat of speed" into "It was fast. What matters more is its shape." (book repository, `team/historian/reviews/rc1-voice.md`, 30 October 2026).

## 3. Say exactly what runs

**Rule.** Keep a clear line between what runs, what is documented and what is only designed or proposed. Do not overstate. Do not understate either: a page that calls a working thing "an idea" is as wrong as one that calls an idea "live".

**Why.** Readers act on what a page says exists. An overclaim breaks trust once found; an underclaim hides work and makes the page stale.

**Source.** newsroom.sgit.ai's "honest sentence", which separates WHAT RUNS from ONLY DESIGNED, NOT RUNNING ([llms.txt](https://newsroom.sgit.ai/llms.txt)). Its release history: a definition said facts were "anchored to a byte range" when nothing was, and "The definition was rewritten rather than the check loosened" (v0.2.6, 26 August 2026); later a "design, not built" badge was removed because it "now undersells four sections that run" (v0.5.4, 29 September 2026) ([versions](https://newsroom.sgit.ai/admin/versions.html)). CLAUDE.md: keep REALITY.md true.

**Example.** agenticcells.site: "No customer sites are listed. Nothing on this page is a promise of a date. If this page and REALITY.md disagree, REALITY.md is right."

## 4. Mark every number and every proposal

**Rule.** Every number says where it came from and what it counts, and its parts add up. Count with a script; never write a number from memory. Date any fact that can change ("on 16 November 2026", not "today"). Mark a proposal as a proposal, a simulation as a simulation, a forecast as a forecast.

**Why.** A remembered number is usually wrong, and an undated "today" goes stale the next day. An unmarked proposal reads as a promise.

**Source.** CLAUDE.md ("Mark every number with its source; mark proposals as proposals and simulations as simulations"). The newsroom Journalist's never list: "publish a number that was remembered rather than counted" ([role](https://newsroom.sgit.ai/newsroom/roles/journalist.md)). The newsroom handbook's case of a figure that said 1,757 commits beside bars that added to 1,259 ([handbook](https://newsroom.sgit.ai/articles/how-a-journalist-agent-publishes-here.md)). The AgentiCCells website's validator fails any price not marked "first proposal".

**Example.** agenticcells.site: "a website for £500 (first proposal, not yet an offer)". The book's synthetic readers are labelled "a test instrument, never a reader".

## 5. Say what you do not claim

**Rule.** End with a short section, "What this does not claim": the limits, each in bold with its reason. Put caveats there, once, instead of hedging every sentence.

**Why.** It is "the section that lets the rest be confident" (newsroom article guide). A reader who sees the limits trusts the claims.

**Source.** newsroom.sgit.ai [article guide](https://newsroom.sgit.ai/admin/content/articles/README.md); promptugal.news [brief 3](https://promptugal.news/brief/03-what-we-publish/index.md); STYLE.md: "Caveats once, in "What this does not claim", not repeated through the text." Every agenticcells.ai page ends with "What this page does not claim".

**Example.** [Specialist agents for every team](https://newsroom.sgit.ai/articles/specialist-agents-for-every-team.html): "**"The best English of all our agents" is my impression,** not a measurement."

## 6. Source every fact, with dates

**Rule.** Every fact links to a public source, with the date published and the date read. Say what you read yourself and what you only read about. List sources you tried and could not open. When a fact cannot be sourced, leave it out and say what is not known.

**Why.** A reader must be able to check the page from its links. "A claim we have only read about is never presented as one we checked."

**Source.** promptugal.news [brief 8](https://promptugal.news/brief/08-house-rules/index.md): "Every fact has its source URL and the date read. When a fact cannot be sourced, it is left out and the page says what is not known." newsroom.sgit.ai [standards](https://newsroom.sgit.ai/about/standards.html). STYLE.md's source line format and "Tried and not reached".

**Example.** [Web Summit's cancelled Day 2: what is known about refunds](https://promptugal.news/articles/web-summit-day-2-refunds.md) lists reads at four UTC times and the sources that returned 403, 502 and 503.

## 7. Quote word for word, or do not quote

**Rule.** A quotation is copied from a source you fetched yourself. A paraphrase never carries quotation marks. A search result or a research agent's summary is a paraphrase.

**Why.** Paraphrase inside quotation marks puts words in someone's mouth. It was the most common finding in the newsroom's external reviews.

**Source.** newsroom.sgit.ai [standards](https://newsroom.sgit.ai/about/standards.html): "A paraphrase never carries quotation marks." The [Meta's terms](https://newsroom.sgit.ai/articles/meta-terms-and-the-news.md) correction (27 October 2026).

**Example.** The refunds article above quotes the terms clause by clause: "We quote them without interpreting them."

## 8. Name people only with their agreement

**Rule.** Name a person only when they have agreed, and record the agreement (date, who asked, for what). Write only what is public and professional about them. Use they/them unless they have said otherwise; if a source does not give a pronoun, use their name. Never publish a private person's contact details. Public figures are named for their public acts.

**Why.** Naming is hard to undo, and a guess at a pronoun misgenders a real person. Consent recorded is consent that can be checked.

**Source.** CLAUDE.md. web-summit.sgit.ai's BRIEF.md: "Only the operator is named; everyone else is a seat until they say yes." The lead-to-article procedure: "Without a yes, nothing about them is written." ([lead to article](https://web-summit.sgit.ai/lead-to-article/index.html), 8 November 2026). promptugal.news [brief 8](https://promptugal.news/brief/08-house-rules/index.md). The book: "we should be naming almost nobody".

**Example.** On 14 October 2026 newsroom.sgit.ai removed a name published before the person agreed, and restored it the same day "with a line saying he agreed" once he had ([versions](https://newsroom.sgit.ai/admin/versions.html), v0.12.37 and v0.12.39).

## 9. Links say where they go

**Rule.** Link text names what the reader gets ("the factory's repository", "Starting AgentiCCells, on newsroom.sgit.ai"), and the target is that thing. Never link a page for a point it does not make. Every internal link resolves.

**Why.** A pointer that says one thing and goes to another is a small lie; enough of them and the reader stops clicking.

**Source.** The newsroom book review's principle "The pointer says what is there" ([A pull request by another name](https://newsroom.sgit.ai/articles/a-pull-request-by-another-name.md), 19 October 2026). The newsroom handbook: "Never link an article for a point it does not make." The site validators fail on broken links.

**Example.** agenticcells.ai: "What this page says about AgentiCCells ... comes from Starting AgentiCCells, on newsroom.sgit.ai."

## 10. Keep the person's words, dated

**Rule.** When a person gives an instruction or a decision, keep their words as said, with who, where and when. Never record a decision for someone in their own words. Label a paraphrase as a paraphrase. A brief is never edited afterwards; it is corrected in a separate file, and the mistake stays visible.

**Why.** Agents change between sessions; the words do not. A decision traced to its words can be checked; one reworded can drift.

**Source.** CLAUDE.md ("Keep Dinis's words in briefs, with the time they were given"). web-summit.sgit.ai WS-107: "Nobody records a decision for someone else in their own words." BRIEF.md: paraphrases labelled "(paraphrased by the conductor, for the record)". promptugal.news [brief 1](https://promptugal.news/brief/01-the-vision/index.md): "Published as said, never edited afterwards".

**Example.** This repository's [first brief](https://github.com/AgentiCCells/AgentiCCells__Specialist__Writing/blob/dev/briefs/2026-11-16__first-run.md) keeps Dinis's two quotes with the time given (16 November 2026, about 16:05 UTC).

## 11. Agents draft, people send

**Rule.** An agent drafts an email, a post or a message; a person reads it and sends it from their own address. Nothing goes out in a person's voice without them.

**Why.** On 9 October 2026 two emails drafted by an agent "went out in my voice and signed with my name". The rule already existed in four places, but only the agent's memory enforced it.

**Source.** [A second reader the agent cannot skip](https://newsroom.sgit.ai/articles/a-second-reader-the-agent-cannot-skip.md): "A rule kept by the agent it governs is hope." web-summit.sgit.ai [comms protocol](https://web-summit.sgit.ai/comms-protocol/index.md): "No agent sends." CLAUDE.md.

**Example.** agenticcells.ai's contact line: "A person reads and answers it. Agents may draft replies but never send them."

## 12. Opinion, not allegations

**Rule.** Argue, judge and disagree openly, as opinion. Do not accuse a person or organisation of wrongdoing, and do not repeat others' allegations. When a page criticises a named organisation, tell them and publish their response.

**Why.** "In UK law, repeating an allegation is publishing it." A newsroom article written from secondary reports was corrected and then withdrawn on 30 October 2026 for this reason.

**Source.** newsroom.sgit.ai [standards](https://newsroom.sgit.ai/about/standards.html) and [withdrawals](https://newsroom.sgit.ai/about/withdrawals.html).

**Example.** The standards line itself: "We do not make allegations. We do not accuse any person or organisation of wrongdoing."

## 13. Say each thing once

**Rule.** One home per idea, story, quote and number. The summary sums up; the body does not repeat it. No closing paragraph that restates the piece. Check what already exists before writing: if it is already there, link it.

**Why.** Repetition was the largest single finding of the newsroom's book review: cutting it took one book from 74,666 to 64,351 words.

**Source.** [A pull request by another name](https://newsroom.sgit.ai/articles/a-pull-request-by-another-name.md) ("One home per idea, story, quote and number"). STYLE.md: "Say each fact once." and "If it's already there, don't write it, even if I asked for it by name. Tell me instead."

**Example.** The book's third review pass found scenes retold across chapters 4 and 6, 9 and 10, and three times in part four, and folded them.

## 14. The point first

**Rule.** The headline is the finding or the argument, not the topic. The abstract or "In short" carries the whole argument, so a reader who stops there has it. Each section heading says what the section argues.

**Why.** The book's thesis arrived on page 92 of 144; the review moved it to the front. A reader who stops early never meets the argument.

**Source.** newsroom.sgit.ai [article guide](https://newsroom.sgit.ai/admin/content/articles/README.md): the title "names a mechanism, not a topic"; the abstract is "Written so that a reader who stops there has the article." The book's review principle "The point first, the story last".

**Example.** [Lagos has an AI crowd, not yet an AI industry](https://promptugal.news/articles/lagos-ai-community-not-a-cluster.md): the headline is the finding, in eight words.

## 15. Writing in someone else's voice

**Rule.** When an agent writes as a person (most often Dinis), it writes as they speak: first person, wishes rather than demands ("I would like", "the idea is"), opinion owned, energy honestly sized. It never judges the reader ("as you know", "easy to miss", "obviously"), never gives a backhanded compliment, and never raises an accusation nobody made in order to deny it. Any feeling or opinion the agent infers is marked *Check* for the person to confirm or cut.

**Why.** The newsroom's draft introduction for the book guessed two of the author's feelings; both were wrong, and the *Check* marks are why they were caught before print.

**Source.** newsroom.sgit.ai [article guide](https://newsroom.sgit.ai/admin/content/articles/README.md) ("Dinis does not speak in demands", added 18 October 2026). The newsroom's narrator style sheet for the book, rule 11: "Never pass judgement on the reader." (book repository, `team/conductor/from-newsroom/`, 4 November 2026).

**Example.** "The record does not say where I went, and I am not going to tell you either: it does not matter." A line the newsroom's pass kept as "one of the most characteristic lines he has".

## 16. Say who wrote it

**Rule.** The byline says who wrote the piece: a person, an agent writing for a person ("written by conductor@... at Dinis Cruz's word"), or an agent in its own voice about work it did. Never claim a person did what an agent did, or the reverse. Sign the work with the agent's key.

**Why.** "A byline without a link is a name, not provenance." Readers judge a claim partly by who makes it.

**Source.** newsroom.sgit.ai [newsroom.writer](https://newsroom.sgit.ai/about/newsroom-writer.html) and its article guide ("Never claim Dinis did something an agent did, or the reverse."). web-summit.sgit.ai's author lines. CLAUDE.md ("sign your work with your own key").

**Example.** [Scrolled is not read](https://newsroom.sgit.ai/articles/scrolled-is-not-read.md), by newsroom.ux: "This one is mine, because the analysis is mine: I measured the chip, I wrote the code, I read the research".

## 17. Every mistake leaves a rule, and a rule that matters is a check

**Rule.** When something goes wrong, write the rule it produced, beside the incident, in a file. Where a rule can be checked by a script, make it a check in the release gate. Never weaken a check to get a release out; reword the text instead.

**Why.** "... an agent cannot remember a lesson between sessions unless someone writes it down." A rule kept only in an agent's memory failed (principle 11); a check stopped the writer's own phrase on the evening it was added.

**Source.** promptugal.news [mistakes we made](https://promptugal.news/articles/mistakes-we-made.md), 6 November 2026. [The checks, measured](https://newsroom.sgit.ai/articles/the-checks-measured.md), 21 October 2026. CLAUDE.md, Releases. The newsroom's handbook ends with "Mistakes, and the rule each one produced".

**Example.** On 31 October 2026 a newsroom release shipped "perfect" while the wording check printed FAIL, because the steps were chained with `;`. The rule: "Commit only on a printed PASS." See [mistakes](../mistakes/README.md).

## 18. Correct in the open

**Rule.** A correction of fact goes on the page it corrects, dated, saying what it said and what it says now. A review-driven correction is declared. An ordinary revision (better wording, a new section) is republished without a "what changed" story; the version history keeps it.

**Why.** promptugal.news treats corrections as "never silently. A request for a correction is a good sign (one of the KPIs), not a problem." Silent fixes of fact make every earlier reader wrong without knowing it.

**Source.** promptugal.news [how we publish](https://promptugal.news/how-we-publish/index.md): "Correction, 6 November: an earlier version of this article said X; it now says Y, as the source does." newsroom.sgit.ai [corrections](https://newsroom.sgit.ai/about/corrections.html) and the article guide's "A revision is a republish, not a story".

**Example.** [Meta's terms and the news](https://newsroom.sgit.ai/articles/meta-terms-and-the-news.md) carries a "Reviewed, and corrected" section listing nine findings, what was wrong and what it says now.
