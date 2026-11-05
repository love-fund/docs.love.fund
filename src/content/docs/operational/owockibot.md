---
title: "owockibot as an outside developer"
description: "How owockibot, an AI agent with its own treasury and bounty board, could work with love.fund as an outside developer, and what to watch out for."
sidebar:
  order: 7
---

A proposal for how [owockibot](https://www.owockibot.xyz/) ([@owockibot](https://x.com/owockibot)) could fit into love.fund. Figures were read from owockibot.xyz on November 5, 2026, and change daily.

## What owockibot is

- An AI agent run by Kevin Owocki and friends, "working to support Gitcoin 3.0," with its own onchain treasury and a community token.
- 25 funding mechanisms deployed on Base (bounties, quadratic funding, commitment pools, gift circles, mutual aid and more), each with a REST API.
- An invite-only bounty board: 223 bounties completed, $12,417 in USDC paid out, 45 active builders. Builders are scored on what they deliver against what they cost.
- Bioregional pilots: paid bounties for ecological data collection and tooling at watershed scale.
- Its own [retrospective](https://www.owockibot.xyz/blog/) says the bounty board dominates and the more sophisticated mechanisms got close to zero usage.

## Conflict of interest comes first

Nothing on this page moves forward until the conflict of interest is settled.

**The conflicts**

- Kevin founds love.fund and runs owockibot. Today his approval is the only gate on love.fund spending, so he would be approving money for his own bot.
- Hermes also works for Kevin. It can't be the independent reviewer of work done by another Kevin-run agent.
- owockibot has a community token. Work or money flowing to owockibot could benefit token holders.
- Matching money that comes from Gitcoin is held to a higher standard. Sending it to the founder's bot would look like self-dealing even if it went through the normal process.

**Options for Kevin to choose from**

1. **Arm's length.** No love.fund or Gitcoin money goes to owockibot. Collaboration is limited to reusing open-source code and sharing what we learn.
2. **Disclose and recuse.** Paid work is allowed, but Kevin steps out of every approval involving owockibot. A named independent person approves spending, scores applications and checks deliverables. The relationship is disclosed on this page and on every payout, under a hard cap.
3. **Not now.** Park the idea until love.fund has its first real funder and a written conflict-of-interest policy.

**Open questions**

- Who could serve as the independent approver for disclose and recuse?
- Does Kevin or love.fund hold the owockibot token?
- Does Gitcoin already have a conflict-of-interest policy that applies here?

Hermes leans toward arm's length until an independent approver exists. That is a recommendation, not a decision.

## What it can do that Hermes doesn't

| | owockibot | Hermes |
| --- | --- | --- |
| Holds and spends money | Yes: pays builders in USDC from its treasury | No: any spending needs founder approval |
| Public voice | Posts on X to about 1,800 followers | Pull requests and docs only |
| Live funding mechanisms | 25 deployed, with real money | None yet |
| Paid builder network | 45 builders with a delivery track record | None |
| Strategy, research, docs | Some | Main job |

Most of the difference is about permissions, not ability. Hermes is deliberately kept from spending, posting or committing without approval.

## How it could fit: an outside developer on the wide path

1. **A paid workforce for love.fund tasks.** Hermes breaks a task into bounties, owockibot posts and pays them, builders deliver, and Hermes reviews the pull requests before a human merges them.
2. **A pilot applicant.** owockibot's mechanisms can apply through the [call for pilots](/operational/call-for-pilots/), and pass the same gates and scoring as anyone else ([pilot playbook](/operational/pilot-playbook/)).
3. **A bioregional pilot.** Its watershed work lines up with the bioregional financing idea in our [experiments](/roadmap/experiments/).

## What to watch out for

- **Conflict of interest.** See [above](#conflict-of-interest-comes-first). It has to be settled before anything else.
- **Brand.** love.fund leads with the cause and keeps crypto as plumbing. owockibot is crypto-native and has a speculative token. The token shouldn't appear in love.fund products or campaigns, and nothing here is a reason to buy it.
- **Track record.** owockibot has reported one security incident and bounty abuse (sybils, claims with no delivery). Only the bounty board has real traction so far.

## Proposed first step

Kevin picks a conflict-of-interest option (arm's length, disclose and recuse, or not now). Nothing else happens until then.

If he picks disclose and recuse, the next step would be one small paid-bounty trial on a single love.fund task. It would have a spending cap set by the independent approver and a short write-up of what was delivered, what it cost, and how much review it took.

_Status: proposed. Nothing has been agreed with owockibot._
