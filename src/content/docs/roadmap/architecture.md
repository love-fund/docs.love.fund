---
title: "Architecture"
description: "The proposed architecture for love.fund: a funding network that gets more capable with every cycle of capital deployment and return."
sidebar:
  order: 6
---

We have compelling mechanisms for distributing capital, but not yet a complete system for turning funding relationships into durable, self-replenishing capital flows.

**Proposed architecture:** a funding network that becomes more capable with every cycle of capital deployment and return.

<svg font-weight="400" fill="currentColor" viewBox="0 0 340 245" width="100%" style="max-width:420px;display:block;margin:1.5rem auto;font-family:inherit" role="img" aria-label="Proposed architecture: social graph and trust feeds AI capital allocation, which funds productive ventures, which produce shared returns that loop back into the social graph." xmlns="http://www.w3.org/2000/svg">
<rect x="40" y="5" width="260" height="48" rx="9" fill="#64748b" fill-opacity=".12" stroke="#64748b" stroke-opacity=".55"/>
<text x="170" y="24" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">Social graph + trust</text>
<text x="170" y="40" text-anchor="middle" font-size="10.5" fill="currentColor" opacity=".7">ATProto / portable reputation</text>
<path d="M170 53 v12" stroke="currentColor" stroke-width="1.6" fill="none"/>
<path d="M166 60 l4 5 4 -5" stroke="currentColor" fill="none"/>
<rect x="40" y="65" width="260" height="48" rx="9" fill="#0d9488" fill-opacity=".12" stroke="#0d9488" stroke-opacity=".55"/>
<text x="170" y="84" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">AI capital allocation</text>
<text x="170" y="100" text-anchor="middle" font-size="10.5" fill="currentColor" opacity=".7">Love Fund / funding agents</text>
<path d="M170 113 v12" stroke="currentColor" stroke-width="1.6" fill="none"/>
<path d="M166 120 l4 5 4 -5" stroke="currentColor" fill="none"/>
<rect x="40" y="125" width="260" height="48" rx="9" fill="#2563eb" fill-opacity=".12" stroke="#2563eb" stroke-opacity=".55"/>
<text x="170" y="153" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">Productive ventures</text>
<path d="M170 173 v12" stroke="currentColor" stroke-width="1.6" fill="none"/>
<path d="M166 180 l4 5 4 -5" stroke="currentColor" fill="none"/>
<rect x="40" y="185" width="260" height="48" rx="9" fill="#7c3aed" fill-opacity=".12" stroke="#7c3aed" stroke-opacity=".55"/>
<text x="170" y="204" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">Shared returns</text>
<text x="170" y="220" text-anchor="middle" font-size="10.5" fill="currentColor" opacity=".7">Co-op ownership / reinvestment</text>
<path d="M305 208 H326 V28 H304" fill="none" stroke="#0d9488" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M310 23 L303 28 L310 33" fill="none" stroke="#0d9488" stroke-width="2"/>
<text x="319" y="119" text-anchor="middle" font-size="9" fill="#0d9488" transform="rotate(-90 319 119)">REGENERATIVE LOOP</text>
</svg>

## Built on Techne

This is all built on **[Techne](https://techne.computer/)**, an SDK for building apps on shared, permissioned data: "apps that get better together." The record types every Techne app reads and writes are documented at **[techne.pub](https://techne.pub/)**.

How it works, in brief:

- **People own their data.** Users sign in with their own identity and their records live in their own data repository (a PDS, on the AT Protocol), not in any one app's database.
- **Apps share record types.** Lexicons, the shared schemas published at techne.pub, define what a record means, so any app can read what another app wrote.
- **Data is permissioned.** Public records are readable by anyone. Records in a *space* are readable only by the people its policy admits, and a *circle* is a space for a collective's members.
- **Agents are first-class.** Through an MCP server, an AI agent can act for a user, with exactly that user's permissions and no more.
- **Yours or ours, all the way down.** Your PDS or ours, your lexicons or ours, your platform or ours, your apps or ours.

## Implications: love.fund as a subset of apps in a shared ecosystem

If Techne is the backbone, love.fund isn't a platform that owns a funding network. It's a subset of apps, a family of funding apps, in a wider ecosystem of apps that all write to the same graph of people, projects, relationships and funding flows.

### 1. The network effect belongs to the ecosystem, not to us

In the commodified economy, a commanding height wins by hoarding the data that makes it useful. Here the data stays with the people who created it. Every app that adds a vouch, a donation, an attestation or a repayment makes every other app smarter. Value compounds in the commons, and love.fund's apps have to earn their place by being the most useful way to act on that data, not by locking it up.

This is the "run it, then progressively decentralize it" plan from [Opportunity](/roadmap/opportunity/), except decentralization is built in from day one rather than promised later.

### 2. The trust graph becomes a public good

The moat we described for love.fund (trust, capital relationships, repayment history, impact, recurring flows) stops being a moat and becomes shared infrastructure. A funding round run in one app, a gift circle run in another and a local venture financed in a third all leave behind records the others can read. Reputation is portable because it was never ours to begin with.

### 3. Every mechanism in the design space can be an app

The [Design Space](/roadmap/design-space/) is full of mechanisms: quadratic funding, retro funding, gift circles, rotating savings, conviction voting, bonding curves. On shared record types, each one can be a small, focused app that reads the same people and projects and writes back the same kinds of results. Mechanisms become composable. You could run a gift circle, feed its outcomes into a quadratic funding round, and use the impact attestations in a retro round, with no integration work between the three.

That's what the [wide aperture path](/roadmap/wide-aperture-path/) needs: a plugin ecosystem of bespoke funding networks, where each pilot is an app and the best ones graduate.

### 4. Lexicons are where the real leverage is

If apps agree on what a "project," a "contribution," a "vouch" or a "funding flow" is, the definitions shape the whole economy built on top. Whoever writes the lexicons defines what counts as value. That makes them a place to encode the [sacred economy rails](/roadmap/opportunity/#rails-for-a-sacred-economy): record types for gifts and gratitude, not only transactions; for meaning in a community's own words, not only metrics. 

### 5. Spaces are the boundary and the membrane

Permissioned spaces and circles map directly onto two of the sacred economy rails. A community can keep its plans, its knowledge or its treasury inside a circle (the **boundary**), and choose what to publish to the wider network and when (the **membrane**). Shield first, then interface on your own terms, is something the data model supports, not just a value we hold.

### 6. AI agents can work across the whole ecosystem

Because agents act with a user's permissions across any app's records, a funding agent isn't trapped inside love.fund. A "Fund Your Graph" agent can read your relationships from every app you use, find the people and projects you trust, and route capital through them, while seeing nothing you haven't been allowed to see.

### 7. Communities can fork, self-host and leave

With "your PDS or ours, your platform or ours," a community can run its own infrastructure and still be part of the network. No one is locked in, including by us. That keeps love.fund honest: we stay in the ecosystem because we're useful, not because leaving is hard.


