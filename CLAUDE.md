# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio website for Mubashir Sakhi, live at mubashirsakhi.com. Originally exported from Webflow (July 2021) and now maintained as a static site on GitHub Pages.

## Development

No build step. Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

## File structure and what to edit

| File | Status |
|------|--------|
| `index.html` | Edit freely — all content and structure |
| `style.css` | Custom styles start at line 12 ("Start of custom Webflow CSS"). Lines 1–10 are minified Webflow/normalize boilerplate — do not touch. |
| `main.js` | **Do not edit** — this is the Webflow front-end library bundle (~684KB, webpack). It drives all animations, the scroll progress bar, slider, and navbar collapse. |

## Architecture notes

- **Webflow IX2 animations**: elements with `data-w-id` attributes are animated by `main.js` via Webflow's Interactions 2.0 system. The hero section fades in on load; some grid sections animate on scroll. These are driven by the library, not custom code.
- **Images**: all hosted on Webflow CDN (`uploads-ssl.webflow.com`). If migrating off Webflow, these would need to be self-hosted.
- **Contact form**: the CTA/form section is commented out in `index.html` (lines 255–275). It was originally a Netlify form (`data-netlify="true"`).
- **Features card section** (`.section.bg-dark`): set to `display: none` in `style.css` line 60. Content is placeholder copy ("This is a featured title") that was never updated.
- **Nav links**: most href values are `#` — placeholder links never wired up.

## Site owner — professional context

Mubashir Sakhi is a multi-hyphenate professional based in Karachi, Pakistan:
- **Streamguys** (co-founder, 2020–present) — live event production & real-time social media content. Notable events: WOW Festival (British Council Pakistan), 021Disrupt.
- **Renewable energy** — wholesale (current, in headline)
- **JavaScript/Node.js developer** — REST APIs, open-sourcing Node.js projects; NED University engineering grad (GPA 3.445)
- **No-code tools** advocate — helps startups validate ideas without tech knowledge
- **Community**: Founder of Tech Geeks of Pakistan (12K+ members); EIR at The Nest I/O (2017–2020)
- **Past**: Managing Partner at Two Dots Design Studio (acquired by 10Pearls); Co-founder of Wrapkar (vehicle wrapping startup, raised $10K)

Use his LinkedIn (linkedin.com/in/mubashirsakhi) as source of truth for dates and descriptions when editing content.

## Site direction

- **Tone**: Founder/operator profile — generalist, "gets shit done" energy. Not a traditional dev portfolio or agency site.
- **Goal**: Credibility as an executor, to get hired across multiple tracks (event production, tech, renewable energy, startup advisory)
- **Contact form**: Not needed — keep commented out
- **Images**: Migrate off Webflow CDN to Cloudflare (free) when touched
- **No-nos**: Generic agency-speak, fluffy mission statements, anything that doesn't reinforce "this person ships things"

## Design tokens

- Brand navy: `#23286b`
- Gold/yellow (buttons, hero heading): `#f1b503`
- Blue accent: `#428cfb`
- Body font: DM Sans (Google Fonts)
- Heading font (h1, h2): Times New Roman/serif
- Feature headings (`.feature-heading`): DM Sans
