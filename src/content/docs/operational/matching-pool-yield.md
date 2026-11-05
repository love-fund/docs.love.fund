---
title: "Matching pool: funding with yield"
description: "How big Gitcoin's matching pool is, and how much matching love.fund pilots could fund from its yield alone."
sidebar:
  order: 4
---

How much matching could come from yield alone, without spending the matching pool itself. Numbers were read onchain on November 5, 2026 (Ethereum block 26,350,207) with ETH at $2,249. They move with the ETH price.

## How big the matching pool is

Gitcoin's matching pool sits in two addresses, listed in the [put the idle treasury to work](https://gov.gitcoin.co/t/temp-check-put-the-idle-treasury-to-work/25429) temp check:

| Address | Stables | ETH | Value |
| --- | --- | --- | --- |
| [Matching pool safe](https://etherscan.io/address/0x25A84CC1014062463a829Fbc2B0848798BF5E378) | $3.30M | 2,247 | $8.36M |
| [Matching pool, second address](https://etherscan.io/address/0xde21f729137c5af1b01d73af1dc21effa2b8a0d6) | $0.11M | 450 | $1.13M |
| **Total** | **$3.42M** | **2,697** | **$9.48M** |

This counts ETH and major stablecoins on Ethereum mainnet only. It leaves out GTC, older donated tokens and other chains. Gitcoin's Q3 report put the matching pool at $12.59M on September 30; most of the gap is the lower ETH price since then.

Today almost all of it sits in plain USDC and ETH, earning nothing.

## What yield could fund

Yields observed on November 5, 2026: Sky savings (sUSDS) 3.8%, Aave USDC 3.8% ([DefiLlama](https://defillama.com/yields)), and ETH staking via Lido 2.3% to 4.25% depending on the source ([DefiLlama](https://defillama.com/yields), [Lido](https://lido.fi/)).

| Scenario | Stables | ETH staking | Yield per year | Per month |
| --- | --- | --- | --- | --- |
| Low | 3.5% | 2.3% | ~$259k | ~$22k |
| Base | 3.8% | 3.0% | ~$312k | ~$26k |
| High | 4.0% | 4.25% | ~$394k | ~$33k |

What that means for pilots:

- **By launch:** if the pool were put to work on December 1, it would have earned about **$53k to $81k** by February 14, 2027. That's enough for one to three small matched pilots, not a big launch round.
- **Per year:** about **$310k** in the base case. The [wide path](/roadmap/wide-aperture-path/) sketches two $500k rounds in 2027, and yield alone would cover about **31%** of that.
- **ETH swings:** ETH staking yield is paid in ETH, so its dollar value rises and falls with the price.

## What has to happen first

- **Deploying the yield is still a proposal.** A February 2026 vote said all matching-pool yield is earmarked for future matching rounds. Actually putting the pool to work is still at the temp-check stage.
- **love.fund has to make the case.** Using part of that yield for love.fund pilots needs a governance proposal. Other matching rounds will want the same yield.
- **No rake.** Matching-pool money goes to recipients only. love.fund's own fees can't come out of it.
- **Bring outside money.** Yield goes further as leverage: pair it with at least one outside co-funder per round.

## Sizing a first round (proposal)

The match only has to exist when pilots pay out, not on the day the call opens. If a call opens February 14, 2027 and pilots pay out around late May, yield earned since deployment is what counts:

| Pool put to work | Low | Base | High |
| --- | --- | --- | --- |
| December 1 | ~$122k | ~$147k | ~$186k |
| January 1 | ~$100k | ~$120k | ~$152k |

Three sizes for a first round:

| Option | Gitcoin match | Pilots at $25k each | With 60% outside money | Covered by yield? |
| --- | --- | --- | --- | --- |
| Small | $50k | 2 | $125k | Yes, already earned by February 14 |
| **Medium (proposed)** | **$100k** | **4** | **$250k** | Yes, even if deployment slips to January 1 (low case) |
| Large | $250k | 10 | $625k | No. It would spend the pool itself |

Why medium: it keeps the "yield-only matching" promise, it uses about a third of a year's yield and leaves the rest for other rounds, and it's a round the team can actually run well. Proposed guardrails:

- 100% of the match goes to recipients. No fees or operating costs come out of the pool.
- Each pilot brings outside money. The full $25k needs at least a 1:1 outside match, and pilots without a co-funder get a smaller cap. If a pilot raises less than 80% of its outside goal, the Gitcoin match shrinks with it, as in GG24.
- Unspent match goes back to the pool, and results are posted within 14 days of payouts.

## Timeline to February 14 (proposal)

Gitcoin's [governance process](https://gov.gitcoin.co/t/gitcoin-dao-governance-process-v3/10358) needs at least 5 days of forum discussion with input from 5 independent stewards, then a [Snapshot](https://snapshot.org/#/gitcoindao.eth) vote. The vote currently runs 7 days, and quorum is 1.5M GTC.

| Step | Target date |
| --- | --- |
| Formal proposal to put the pool to work | mid-November 2026 |
| Pool earning yield | December 1, 2026 |
| love.fund round 1 allocation posted to the forum | early January 2027 |
| Allocation voted and payment rails chosen | February 1, 2027 |
| Call for pilots opens | February 14, 2027 |

These are targets, not commitments, and every step needs a governance vote or a founder decision.

_Not financial advice. Rates change daily, and there is smart contract risk._
