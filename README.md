# docs.love.fund

The working docs for love.fund. A standard docs site (Astro + Starlight) in the love.fund look.

## Write

Every page is a markdown file in `src/content/docs/`. Frontmatter needs `title` and `description`
(the description also lands on the page's social card).

- `index.md` is the home page: the philosophy.
- New page: add `src/content/docs/<slug>.md`, then add it to `sidebar` in `astro.config.mjs`.
- Folders become URL paths: `src/content/docs/practice/scorecard.md` → `/practice/scorecard/`.

## Run

```
npm install
npm run dev      # http://localhost:4321
npm run build    # social cards (scripts/og.mjs → public/og/) + static site in dist/
```

## Brand

- Colors and type: `src/styles/theme.css`, mapped from love.fund's `tokens.css` (dark plum, rose, warm ink).
- Header lockup: `src/components/SiteTitle.astro` (split heart + DynaPuff "love" + Chakra Petch ".fund").
- Social cards: `scripts/og.mjs`, one 1200x630 png per page, wired in by `src/components/Head.astro`.
- Analytics: same Google Analytics property as love.fund (`G-F5QVEN6V3V`), in `astro.config.mjs`.

## Deploy

Static output in `dist/`. On Vercel: framework preset Astro, build `npm run build`, output `dist`,
then add the `docs.love.fund` domain to the project.
