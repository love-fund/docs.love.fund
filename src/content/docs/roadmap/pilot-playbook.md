---
title: "Pilot playbook"
description: "How an AI-run wide-path pilot moves from idea to readout: stages, human gates, success metrics, and when a pilot graduates or stops."
sidebar:
  order: 3.5
---

<details class="tldr" open>
<summary>TL;DR</summary>

- Agents do the repeatable work of a [wide-path](/roadmap/wide-aperture-path/) pilot. Humans decide at five fixed gates, and nowhere else unless something goes wrong.
- Every pilot is measured on the same small set of metrics, with thresholds written down before launch.
- A pilot graduates into a campaign when it meets those thresholds and can pay its own way. Otherwise we change it or stop it.

</details>

This is a draft. The stages, time targets and thresholds below are starting proposals, not benchmarks. They'll change once we've logged real numbers from the first pilots. They're targets, not commitments.

## Why a playbook

The [wide path](/roadmap/wide-aperture-path/) asks four questions of every pilot: where the money comes from, where the audience comes from, one outcome we can check, and the theory of change. It also says what a pilot needs before it becomes a campaign: branding, a disclosed fee model, good software and good operations.

This page turns those into a process we can run over and over.

Our capacity isn't headcount. Agent time is cheap and plentiful. The scarce things are founder attention, funder and partner trust, legal accountability, and real money to anchor a round. In our cost model, people's operations time is the biggest variable cost of a pilot. That's a model, not a measurement, but it points the same way: let agents do every step that repeats, and spend human attention only where it counts.

## Who does what

| Who | Does | Never does |
|---|---|---|
| **Agents** | Intake, screening, spec drafts, rules and FAQ drafts, recipient checks, donor support drafts, sybil analysis, match calculation, payout file prep, readout and retro drafts, metric logging. | Move money, publish, contact anyone outside, sign anything, or change rules mid-pilot. |
| **Founder (or delegate)** | Decides at gates G1–G5. Owns funder and partner relationships. | Routine operations. |
| **Pilot partner** | Brings the audience, local knowledge and the recipient list. Runs the community. | Hold the matching funds, unless counsel approves. |
| **Rails partner** (for example a charity or donor-advised fund) | Holds and pays out funds, issues receipts, screens recipients. | — |
| **Counsel** | Reviews anything that holds or moves money, [as with every experiment](/roadmap/experiments/). | — |

love.fund doesn't hold pilot funds. The rails partner does, and the rails partner sends the payouts, not the agents.

## Stages and gates

Each stage has agent work, a written artifact, and an exit condition. The gates (G1–G5) are the only places a human has to show up. Time targets are guesses until we have real logs.

### S0: Intake (agents, up to 2 days)

- Turn the idea or application into a pilot spec (fields [below](#the-pilot-spec)).
- Until we open a call for applications, intake only covers ideas that are already public or sent to us directly.
- **Exit:** every screening field is filled in or marked unknown.

### S1: Screen (agents, up to 3 days)

Hard gates. Fail any one and the pilot is turned down without spending founder time:

- No money source named. If a pilot can't say where the money comes from, it isn't ready.
- The outcome can't be checked.
- Payouts would need love.fund to hold funds, with no rails partner.
- Matching pool money would pay for fees or operations. Pool money goes to recipients.

Soft criteria, scored 0–3: audience, money leverage, outcome and theory of change, fit with these docs, partner strength, operations burden, novelty.

- **Artifact:** a one-page screening memo with the verdict, scores, red flags, unknowns, and how many founder minutes the pilot will likely need.
- **G1. Founder: back it, don't, or ask for something specific.** Target: 10 minutes.

### S2: Design (agents, up to 5 days)

- Mechanism and rules: quadratic funding, a match, 1:1, or something else. Eligibility, dates, caps.
- How the pilot's costs are covered ([money rules](#money-rules)).
- A sybil plan for any mechanism that pays out per person. [Anything that counts people will get gamed](/start-here/track-record/#lessons).
- Donor disclosures: say plainly whether a gift is tax-deductible, and say when crypto is involved ([narrow path](/roadmap/narrow-aperture-path/#criteria) 10 and 19).
- How recipients get verified.
- Metrics and thresholds written into the spec before launch. After G3 they only change through a logged amendment approved at a gate.
- The pilot's founder-attention budget.
- A checklist for counsel if money moves.
- **G2. Founder, plus counsel if money moves: approve the design.** Target: 30 minutes.

### S3: Setup (agents and partner, up to 10 days)

- Setup instructions for the rails partner.
- Recipients verified: legal name, registration where it applies, payout destination confirmed by the rails partner, and sanctions screening by the rails partner.
- Drafts of the landing page, rules, FAQ, receipt text, a comms kit for the partner, and support replies.
- An end-to-end dry run with play money on [app.love.fund](http://app.love.fund/), with defects logged.
- **G3. Founder: approve publishing and launch.** Target: 20 minutes. Publishing always needs a human yes. There's no shortcut.

### S4: Live (agents, daily)

- A daily log: match committed, crowd dollars, unique donors, donations, sybil flags, support tickets, open issues.
- Support: agents draft replies, and a human sends them unless a standing approval exists.
- Sybil monitoring per the plan. Flagged donations are set aside, not judged, until settlement.
- No rule changes. Escalate only on the triggers [below](#attention-budget-and-escalation).

### S5: Settlement (agents, up to 7 days after close)

- Sybil review, then the final eligible set, with the appeal window stated in the rules.
- The match is calculated twice, by two independent agent runs, and the results compared. Then a draft results table goes out with the method.
- A payout file for the rails partner.
- **G4. Founder: sign off results and payouts.** Target: 20 minutes.

### S6: Readout and retro (agents, up to 14 days after payout, and again at 90 days)

- A "what your money did" readout for each recipient: amounts in, dates paid, what recipients say they spent it on, with sources. No invented impact scores ([narrow path](/roadmap/narrow-aperture-path/#criteria) 11, 12 and 18).
- A retro: metrics against the thresholds set before launch, hours logged, defects, and what agents couldn't do.
- **G5. Founder: graduate, run again, change, or stop,** decided against the [criteria below](#graduation-and-kill-criteria). Target: 15 minutes.

## Success metrics

Every pilot uses the same set. Thresholds are set per pilot at G2. The defaults below are starting guesses for a pilot with a roughly $25k matching pool.

| # | Metric | Why | Default threshold |
|---|---|---|---|
| M1 | Match dollars committed in writing before launch | Set the money anchor first | 100% of the stated pool |
| M2 | Unique donors, after sybil review | QF is a breadth machine | 100 or more |
| M3 | Crowd dollars ÷ match dollars | Shows real demand, not just pool spend | 0.35 or more |
| M4 | Payouts made by the date in the rules | Trust is the product | 100% |
| M5 | Readout published within 14 days of payout | Show what the money did | Yes |
| M6 | Donors who give again within 90 days or in the next campaign | Do people come back? | 20% or more |
| M7 | Human hours per pilot (operations, sybil review, support) | The main cost lever | 25 hours or fewer |
| M8 | Founder minutes per pilot | The scarcest input | 120 minutes or fewer |
| M9 | The pilot's own checkable outcome | One outcome we can check | Set per pilot |
| M10 | Share of donors flagged or removed as sybils, and appeals upheld | Gaming is expected | Reported, no threshold |
| M11 | Cost coverage from sources other than the matching pool | Campaigns have to pay their way | 100% or more |

M7 and M8 test the playbook itself. If agents can't bring human hours near the target, AI-run pilots don't scale the way we hope, and we'll say so.

## The pilot spec

Each pilot gets one spec file, filled in by agents at intake and locked at launch. Unknowns stay marked as unknown rather than guessed. The same field names are meant to be used by the application form.

| Field | What goes in it |
|---|---|
| `slug`, `title`, `stage` | Short name, title, current stage (S0–S6). |
| `source` | Where the idea came from (public thread, application, direct) and a link. |
| `partner` | Who runs it on the ground, and evidence they deliver. |
| `money` | Source (named funder, matching pool, reachable donors), funder, match amount, whether it's committed in writing, whether pool money would pay fees or operations (it shouldn't), and how operating costs are covered (sponsor fee, flat fee, R&D budget). |
| `audience` | Who shows up, through which channel, and the evidence. |
| `outcome` | One outcome, whether it can be checked, and how. |
| `theory_of_change` | Why we can help when others can't or won't. |
| `mechanism` | QF, a 1:1 match, a commitment pool or other; whether it pays per person; the sybil plan. |
| `rails` | Rails partner, whether love.fund would hold funds (it shouldn't), whether counsel has reviewed. |
| `disclosures` | Tax-deductibility statement, crypto involvement, small-donor fee (always zero). |
| `dates` | Open, close, payout deadline. |
| `attention_budget_founder_min` | Founder minutes budgeted for the pilot. |
| `thresholds` | The M1–M11 targets for this pilot. |
| `soft_scores` | The 0–3 screening scores. |
| `amendments` | Logged changes after launch, each approved at a gate. |

## Attention budget and escalation

- Per pilot: five gates and about 120 founder minutes in total. Actual minutes are logged at each gate.
- Across pilots: the number running at once is capped by the founder's weekly minutes for the wide path, divided by minutes per pilot per week. For example, 60 minutes a week at about 15 minutes per pilot per week is about four pilots at once.
- Escalate between gates only for: suspected fraud, or a sybil attack on more than about 10% of donors; a recipient failing verification after launch; a rails partner incident; a press or legal inquiry; anyone outside asking for a commitment; or a rule ambiguity that would change payouts. Everything else waits for the next gate.
- An open idea: **standing approvals** for low-risk repeat actions, like sending pre-approved support replies or posting pre-approved daily stats. It's the biggest lever on founder minutes. For now, every publish and every outside contact needs a human yes.

## Money rules

- Matching pool money goes to recipients. It doesn't pay love.fund fees or pilot operations.
- So pilot operating costs need their own source: a sponsor fee, a flat setup fee, or an explicit R&D budget. While we're learning, we treat pilots as capped, funded R&D and say so in the budget.
- Small donors are never charged. Payment fees are absorbed, not taken out of gifts ([narrow path](/roadmap/narrow-aperture-path/#criteria) 8).
- Any fee is disclosed before anyone gives.

## Graduation and kill criteria

A pilot graduates into a campaign when all of these hold over at least one run. They're the wide path's four campaign requirements, made measurable:

1. **Branding:** the partner agrees in writing to love.fund branding or co-branding.
2. **Fee model:** M11 reaches 100% from disclosed fees on a re-run budget with no R&D subsidy, and fees are shown before anyone gives.
3. **Software:** donors finish checkout and recipients get onboarded without manual workarounds, against thresholds set at G2.
4. **Operations:** payouts on time (M4), readout published (M5), human hours within target (M7).

Plus: the money anchor was met (M1) and donors came back at or above the threshold (M6).

We stop or redesign a pilot when any of these happen:

- M1 isn't met by G3. Don't launch.
- Payouts are late (M4) and it wasn't the partner's side.
- Founder minutes run over twice the budget (M8).
- The pilot's outcome (M9) is missed, and the retro finds no cheaper variant worth trying.
- A hard gate turns out to have been broken after launch.

## Open questions

- Are the default thresholds right, especially donors, return rate, human hours and founder minutes? Or should they only be set per pilot?
- How many founder minutes a week go to the wide path? That sets how many pilots can run at once.
- Should standing approvals exist for support replies and daily stats?
- Who pays pilot operating costs: an R&D budget, a sponsor fee or a flat fee?

## Limits of this draft

- Thresholds are assumptions, not benchmarks. We haven't found a good benchmark for donor return rate yet.
- Stage time targets are guesses, to be replaced by logged numbers after the first pilot.
- The legal steps are a checklist for counsel, not legal advice. Nothing here is financial advice.
