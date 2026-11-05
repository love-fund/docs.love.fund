---
title: "Payment rails"
description: "How money could move through love.fund: the requirement any rail has to meet, and the options under review. No rail has been chosen."
sidebar:
  order: 9
---

<details class="tldr" open>
<summary>TL;DR</summary>

- The requirement: giving should feel like ordinary fiat giving, with the speed, reach and transparency of web3 underneath.
- Five option families are under review: DAF and giving rails, fiscal sponsorship, our own 501(c)(3), a company plus a licensed partner, and stablecoin settlement under a fiat front end.
- Status: options under review, no rail chosen. This page is not legal, tax or financial advice.

</details>

**Status: options under review, no rail chosen.** This page summarizes research done to prepare for a conversation with qualified counsel. It is not legal, tax or financial advice. Fees and vendor terms change, and every vendor claim here needs to be confirmed in writing before anyone relies on it. Dates are targets, not commitments.

## The requirement

Payment rails should feel fiat, with the convenience of web3.

**What the donor sees: a normal fiat experience.**

- Pay by card, Apple Pay or bank transfer.
- Amounts in US dollars.
- A receipt, and a plain answer on whether the gift is tax-deductible.
- No wallet, no seed phrase, no token to buy first.

**What runs underneath: web3 convenience.**

- Settlement that is fast and works across borders.
- Low fees, so a small gift is still worth making.
- Programmable splits, so one gift can go to several organizations.
- Programmable matching, so a pool can be split by quadratic funding (QF).
- A transparent ledger, so anyone can see where the money went.

This is love.fund's "crypto as plumbing rather than the pitch" approach (see [GTC](/roadmap/gtc/)): crypto can run underneath, and it is disclosed wherever it's used.

## The rules any rail has to follow

These come from the [narrow aperture path](/roadmap/narrow-aperture-path/) and [experiments](/roadmap/experiments/):

- **Settle the legal structure first.** Decide nonprofit, fiscal sponsor or company before taking donations (criterion 10).
- **Be plain about tax-deductibility.** Tell donors whether a gift is deductible (criterion 10).
- **Never charge the small donor.** Fees can't make a small gift pointless (criterion 8).
- **Disclose fees before anyone gives** (criterion 20).
- **Disclose crypto** wherever it's involved (criterion 19).
- **Legal review before shipping.** Anything that holds or moves money is reviewed first. love.fund doesn't offer escrow, investments or financial advice.

Fees matter more than they look. A typical card fee of 2.2% + $0.30 takes $0.41 from a $5 gift, about 8%. So someone has to cover card fees on small gifts (love.fund, a sponsor or the rail), or steer small gifts to cheaper methods like bank transfer.

## Two separate questions

1. **Who receives the gift and issues the receipt?** The rail answers this.
2. **What is love.fund itself?** Some states regulate websites that let people solicit gifts for charities. California (AB 488) and Hawaii (Act 108, 2025) have "charitable fundraising platform" laws that can require registration, charity consent and disclosures before giving, including a statement on tax-deductibility. These laws may apply to love.fund whichever rail it uses, even if it never touches the money. Counsel needs to confirm.

## The option families

Vendor names below are examples of each family, taken from their public pages. They aren't endorsements, and nothing has been signed or set up.

### 1. DAF and giving rails

An existing donor-advised fund (DAF) charity or giving platform is the legal recipient. It issues the receipt and grants the money on to the named 501(c)(3)s. love.fund is the front end and, ideally, never holds donor money. Examples include Every.org, Endaoment, Pledge, Daffy and PayPal Giving Fund.

| Against the requirement | |
| --- | --- |
| **Fiat feel** | Strong. Card, bank and Apple Pay checkouts with automatic receipts already exist. |
| **Web3 underneath** | Mixed. Some accept crypto and convert it to USD. Endaoment can pay recipients in USDC and has run a QF matching pool where card donors took part without any crypto knowledge. |
| **Splits and matching** | Partial. Multi-organization fundraisers and matching exist, but QF is usually calculated outside the rail and submitted as a grant recommendation. |
| **Small-donor rule** | Depends on the rail. Every.org charges no platform fee, but card processing still applies. Endaoment charges 1.5% on a direct gift. Some platforms charge 5% to partners. |
| **Deductibility** | Yes, as a gift to the DAF charity, for US taxpayers. The charity keeps final legal control, so designations are recommendations. |
| **Speed to a first dollar** | Fastest: weeks, not months. |

**Pros:** no new charity needed, receipts handled, love.fund need not hold funds, fastest to launch.
**Cons:** checkout may hand off to the partner's site, platform terms for commercial users vary, US-only deductibility, and love.fund may still need to register as a platform.

### 2. Fiscal sponsorship

love.fund becomes a project of an existing 501(c)(3) sponsor, which holds the money and keeps legal control of it. Examples include HCB (Hack Club), Players Philanthropy Fund and Social Good Fund.

| Against the requirement | |
| --- | --- |
| **Fiat feel** | Good. Receipts come from the sponsor. |
| **Web3 underneath** | Weak. Depends on each sponsor's policies. |
| **Splits and matching** | Possible, but regranting donor gifts to other charities is pass-through activity that sponsors may restrict. |
| **Small-donor rule** | Poor. Typical fees are 6% to 8% of incoming funds, on top of card fees. |
| **Deductibility** | Yes, through the sponsor. |
| **Speed to a first dollar** | Days to weeks. |

**Pros:** a 501(c)(3) umbrella quickly, with banking and accounting included. A reasonable home for a sponsor's matching pool.
**Cons:** fees conflict with "never charge the small donor" unless a sponsor covers them. Less control over how funds move.

### 3. Our own 501(c)(3)

love.fund forms its own charity, or shares one with an aligned project. Experiments lists this as a backburner idea.

| Against the requirement | |
| --- | --- |
| **Fiat feel** | Good once running. Receipts come directly from love.fund. |
| **Web3 underneath** | Possible, with our own policies. |
| **Splits and matching** | Full control, as a grantmaker. |
| **Small-donor rule** | Good. No third-party platform fee, though card fees and running costs remain. |
| **Deductibility** | Yes, once the IRS approves. Approval can be retroactive to formation if filed within 27 months. Until then love.fund couldn't plainly tell donors a gift is deductible. |
| **Speed to a first dollar** | Slow. The IRS says it decides 80% of Form 1023 applications within 191 days, so a filing now likely lands after the February 14, 2027 launch target. |

**Pros:** independence, control and lower fees over time.
**Cons:** not ready for launch, ongoing filings and audits. A charity that routes donor-recommended splits may take on DAF-sponsor or platform-charity obligations.

### 4. A company plus a licensed payment partner

A company runs love.fund and uses a licensed processor or a donations API to collect and route money.

| Against the requirement | |
| --- | --- |
| **Fiat feel** | Strong. Full control of the checkout. |
| **Web3 underneath** | Depends on the partner. |
| **Splits and matching** | Full control in software. |
| **Small-donor rule** | Hard. Processing fees, plus fixed vendor and compliance costs. |
| **Deductibility** | No, unless the money flows through a charity. |
| **Speed to a first dollar** | Months. |

**Pros:** the most control over the product and revenue.
**Cons:** money-transmission and multi-state registration exposure (about 40 states regulate charitable solicitation). Some processors treat fundraising as a restricted business. Slowest and costliest path.

### 5. Stablecoin settlement under a fiat front end

Donors pay by card, Apple Pay or bank in dollars. Underneath, value settles in a dollar stablecoin on a public ledger, and recipients take USD or stablecoin. This is a settlement layer, not a full rail on its own: a charity still has to receive the gift for it to be deductible, so it would sit behind one of the options above.

| Against the requirement | |
| --- | --- |
| **Fiat feel** | Strong, if the conversion is hidden from donors and disclosed plainly. |
| **Web3 underneath** | Strongest fit. Fast, global settlement, programmable splits and matching, and an open ledger of where money went. |
| **Splits and matching** | Native, in code. |
| **Small-donor rule** | Settlement itself can be cheap, but card and conversion fees still apply at the edges. |
| **Deductibility** | Only through a charity recipient (options 1 to 3). |
| **Speed to a first dollar** | Depends on the partner and on legal review. |

**Pros:** delivers most of the "web3 underneath" list. There is precedent for card donors joining a QF pool without touching crypto.
**Cons:** whoever converts or holds the money takes on money-transmission questions, so love.fund should only do this through licensed partners after legal review. Crypto has to be disclosed. Recipients' ability to take stablecoin varies.

## What happens next

- Counsel reviews the options and the platform-law question.
- The founder picks a rail. Until then, love.fund takes no real donations; the [prototype](http://app.love.fund/) uses play money.
- Whatever is chosen, this page will be updated with the structure, fees and deductibility statement donors will see.

Disclaimer: This page compares options under review. It is not legal, tax or financial advice, and it doesn't describe a service love.fund offers today. Anything that holds or moves money would only ship through properly licensed partners, after legal review.
