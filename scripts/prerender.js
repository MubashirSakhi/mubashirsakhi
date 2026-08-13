/* ============================================================
   POST-BUILD — one real HTML file per route.

   Without this, GitHub Pages falls back to 404.html for every
   non-root URL and serves it with a genuine 404 status, so
   /graveyard, /desk and /work/enova never get indexed. Writing
   dist/<route>/index.html makes them 200s, and lets each route
   carry its own <head> for crawlers that don't run JS.

   ROUTES is also the source of truth for sitemap.xml, so the
   two can't drift.
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const ORIGIN = 'https://mubashirsakhi.com'
const DIST = 'dist'

/* Trailing slashes are deliberate: GitHub Pages 301s /graveyard
   -> /graveyard/, so the slashed form is the URL that resolves.
   React Router matches it against path="/graveyard" unchanged. */
const ROUTES = {
  '/': {
    title: 'Mubashir Sakhi — Operator. Builder.',
    description:
      'Mubashir Sakhi — co-founder, tech builder, wholesale renewable energy, live event production. Based in Karachi, Pakistan.',
  },
  '/graveyard/': {
    title: 'Idea Graveyard — Mubashir Sakhi',
    description:
      'Ideas that never quite made it. Half-built, half-dreamed, then set down for reasons that made sense at the time — the unfinished projects of Mubashir Sakhi.',
  },
  '/desk/': {
    title: 'The Desk — Mubashir Sakhi',
    description:
      'A pixel diorama of where the work happens. Mubashir Sakhi’s desk in Karachi — morning calm to late-night chaos, plus whatever’s currently spinning.',
  },
  '/work/enova/': {
    title: 'Enova — Mubashir Sakhi',
    description:
      'Case study: building the operating surface for Enova, a B2B renewable-energy brand in Karachi — solar panels, inverters, lithium batteries. Brand to ops, end to end.',
  },
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/* Swap the content="" of one meta tag, matched on its identifying attribute. */
const setMeta = (html, attr, key, value) =>
  html.replace(new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`), `$1${esc(value)}$2`)

const template = readFileSync(join(DIST, 'index.html'), 'utf8')

for (const [route, { title, description }] of Object.entries(ROUTES)) {
  if (route === '/') continue // index.html is already correct

  let html = template
    .replace(/(<title>)[^<]*(<\/title>)/, `$1${esc(title)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${ORIGIN}${route}$2`)
  html = setMeta(html, 'name', 'description', description)
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', description)
  html = setMeta(html, 'property', 'og:url', `${ORIGIN}${route}`)
  html = setMeta(html, 'name', 'twitter:title', title)
  html = setMeta(html, 'name', 'twitter:description', description)

  const dir = join(DIST, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`prerender  ${route}`)
}

/* lastmod/changefreq/priority omitted on purpose: a lastmod that
   updates on every build is a lie, and Google ignores the other two. */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(ROUTES)
  .map((r) => `  <url><loc>${ORIGIN}${r}</loc></url>`)
  .join('\n')}
</urlset>
`
writeFileSync(join(DIST, 'sitemap.xml'), sitemap)
console.log(`sitemap    ${Object.keys(ROUTES).length} urls`)
