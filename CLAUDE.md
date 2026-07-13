# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio website for Mubashir Sakhi, live at mubashirsakhi.com. React 18 + Vite SPA, deployed to GitHub Pages via `.github/workflows/deploy.yml` (custom domain in `public/CNAME`).

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # vite build + copies dist/index.html to dist/404.html (GH Pages deep-link fallback)
npm run preview
```

## Architecture

- **Entry**: `index.html` → `src/main.jsx` (BrowserRouter) → `src/App.jsx` (routes).
- **Routes**: `/` (home, section stack), `/graveyard` (Idea Graveyard — physics playfield of unfinished ideas), `/work/:slug` (case-study pages; data lives in the `CASES` object in `src/pages/CaseStudy.jsx`, currently `enova`). Unknown routes redirect home.
- **Styling**: hand-written CSS with custom-property tokens — no Tailwind, no CSS-in-JS. Global tokens and home-page styles in `src/index.css`; page-scoped styles co-located in `src/pages/*.css`. Components use semantic class names.
- **Animation**: hand-rolled, no animation library. Shared hooks in `src/hooks.jsx`: a global rAF ticker (`__tickers`/`__startTicker`), `useInView`, `Reveal` (scroll-reveal wrapper), `useScrollProgress`, `useKarachiTime`, `useCountUp`, `useTilt`, `SplitLetters`.
- **Reveal gating**: `App.jsx` adds `js-ready` to `<html>`; reveal CSS only hides/animates when that class is present, so content is visible without JS.
- **Page body classes**: Graveyard and CaseStudy pages add `graveyard` / `cs` to `<body>` in an effect (dark stage, overflow rules) and clean up on unmount.

## Design tokens (`src/index.css` `:root`)

- Ink/paper: `--ink #f5f1e8`, `--paper #0a0a0c`, `--paper-soft #15151a`, cream inversion zone `--cream #f0eadf`
- Accents (equal lightness/chroma, hue-only variants): `--c-blue/magenta/lime/orange` in oklch; `--accent` = lime
- Fonts (Google Fonts, loaded in `index.html`): `--f-display` Bricolage Grotesque, `--f-body` Space Grotesk, `--f-mono` JetBrains Mono, `--f-italic` Instrument Serif, `--f-hand` Caveat (defined in page CSS)
- Motion easing everywhere: `cubic-bezier(0.2, 1, 0.3, 1)`

## Site owner — professional context

Mubashir Sakhi is a multi-hyphenate professional based in Karachi, Pakistan:
- **Streamguys** (co-founder, 2020–present) — live event production & real-time social media content. Notable events: WOW Festival (British Council Pakistan), 021Disrupt.
- **Renewable energy** — wholesale (current, in headline); Enova (B2B renewable-energy brand, has a case study at `/work/enova`)
- **JavaScript/Node.js developer** — REST APIs, open-sourcing Node.js projects; NED University engineering grad (GPA 3.445)
- **No-code tools** advocate — helps startups validate ideas without tech knowledge
- **Community**: Founder of Tech Geeks of Pakistan (12K+ members); EIR at The Nest I/O (2017–2020)
- **Past**: Managing Partner at Two Dots Design Studio (acquired by 10Pearls); Co-founder of Wrapkar (vehicle wrapping startup, raised $10K)

Use his LinkedIn (linkedin.com/in/mubashirsakhi) as source of truth for dates and descriptions when editing content.

## Site direction

- **Tone**: Founder/operator profile — generalist, "gets shit done" energy. Not a traditional dev portfolio or agency site.
- **Goal**: Credibility as an executor, to get hired across multiple tracks (event production, tech, renewable energy, startup advisory)
- **No-nos**: Generic agency-speak, fluffy mission statements, anything that doesn't reinforce "this person ships things"
