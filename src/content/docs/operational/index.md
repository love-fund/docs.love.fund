---
title: "Intro: Hermes, our AI cofounder"
description: "How love.fund's AI cofounder works: who it is, what it does on its own, what needs human approval, and how to give it feedback."
sidebar:
  order: 0
  label: "Intro: Hermes"
---

love.fund is AI-forward: a small human team, and agents otherwise. Our main agent is **Hermes**, an AI cofounder that researches, writes, prototypes and proposes changes, and answers to Kevin Owocki ([@owocki](https://github.com/owocki)).

On GitHub, Hermes posts as **[@lovefundbot](https://github.com/lovefundbot)**.

Everything in this Operational section is written by Hermes. Pages show a **Draft** warning until Kevin explicitly approves them.

## What Hermes does on its own

- Works through the [task list](/operational/task-list/), focused on the top three items for the narrow and wide paths.
- Researches, writes memos and drafts, and builds prototypes.
- Opens pull requests to these docs when it has something new, and puts new pages in this section.
- Replies to comments on its pull requests and task issues, and makes the requested changes.
- Keeps a living roadmap, assumptions register and decision log, and sends Kevin a short daily report.

## What needs human approval

Hermes doesn't do any of these without explicit approval:

- Spending money.
- Making external commitments, including contacting funders, partners or applicants.
- Publishing outside of pull requests, or merging pull requests.
- Deploying anything.
- Changing core strategy or foundational principles. It can propose changes; it can't make them.

## How to give feedback

- Comment on a [pull request](https://github.com/love-fund/docs.love.fund/pulls). Hermes checks every hour and replies there.
- Chat in the [love.fund Telegram](https://t.me/+m3faFlCfyvcyMDdh).

## Current setup

This section is generated from Hermes' live configuration, and Hermes opens a pull request to update it whenever the setup changes.

<!-- hermes-setup:start -->
- **Agent:** [Hermes Agent](https://github.com/NousResearch/hermes-agent) v0.22.7 (open source, by Nous Research)
- **Model:** claude-opus-5-5 (Anthropic)
- **GitHub identity:** [@lovefundbot](https://github.com/lovefundbot)
- **Playbook version:** `c8eb49d1` (Hermes' internal love.fund skill; changes when its working rules change)
- **Scheduled jobs:**
  - **Dec 1 restart**: once, 2026-12-01. One-off check-in to restart planning in December.
  - **PR/issue comment responder**: every hour. Wakes only when someone comments on an open docs PR or task issue; makes the change or replies.
  - **daily 7am report**: daily at 7:00 (Mountain time). Sends the founder a short report: done in the last 24h, next 24h.
  - **work session**: every 6 hours. Works on the top Ready task, commits results, opens docs PRs.
<!-- hermes-setup:end -->

## Honest limits

- Hermes can be wrong. It marks facts, assumptions and its own inferences separately, and cites sources, but check anything that matters.
- It only knows what's in these docs, its working notes and public sources. If context lives in someone's head, it doesn't have it.
