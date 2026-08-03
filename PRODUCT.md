# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are people deciding whether to hire, partner with, or work alongside Mubashir Sakhi across three tracks: live event production/social content (Streamguys), renewable-energy B2B/wholesale (Enova and related work), and JavaScript/Node.js dev + no-code/startup advisory. This spans hiring managers, prospective clients/partners, and collaborators evaluating him as an operator. All three tracks are equally weighted — the site is not meant to push one track over the others.

## Product Purpose

A personal portfolio proving Mubashir ships real things across multiple, seemingly unrelated tracks (events, energy, tech, community), so a visitor walks away with credibility in him as an executor rather than a specialist. Success is inbound interest/hires/partnerships across any of the three tracks, not conversion on a single funnel.

## Positioning

A founder/operator generalist profile — someone who moves between live event production, renewable-energy supply chains, and shipped code, not a traditional single-discipline dev portfolio or agency site. The mechanism a specialist competitor can't copy: real, verifiable execution across disconnected industries (Streamguys events, Enova energy ops, Tech Geeks of Pakistan community, past acquisitions), not a single deep specialty.

## Operating Context

- Streamguys (co-founder, 2020–present): live event production and real-time social content; notable events WOW Festival (British Council Pakistan), 021Disrupt.
- Renewable energy: Enova (B2B renewable-energy brand — solar panels, inverters, lithium batteries, 12V DC, lighting; sourcing from China, supplier relationships, retailers/installers, digital funnels) has a dedicated case study at `/work/enova`. "Wholesale energy" in prior notes refers to this same effort, not a separate venture.
- JavaScript/Node.js developer: REST APIs, open-sourcing Node.js projects; NED University engineering grad (GPA 3.445).
- No-code tools advocate helping startups validate ideas without technical hires.
- Community: Founder of Tech Geeks of Pakistan (12,000+ members); EIR at The Nest I/O (2017–2020).
- Past: Managing Partner at Two Dots Design Studio (acquired by 10Pearls, 2019–2021); co-founder of Wrapkar (vehicle-wrapping startup, raised $10K, 5,000+ vehicles wrapped, 2016–2019).

## Capabilities and Constraints

- React 18 + Vite SPA, deployed to GitHub Pages via `.github/workflows/deploy.yml`, custom domain via `public/CNAME` (mubashirsakhi.com).
- Routes: `/` (home, stacked sections), `/graveyard` (Idea Graveyard — physics playfield of shelved side-project ideas, content explicitly marked as placeholders in code, not verified real facts), `/work/:slug` (case studies; only `enova` exists today). Unknown routes redirect home.
- No backend/CMS — all content is hardcoded in components; updates require code edits.
- LinkedIn (linkedin.com/in/mubashirsakhi) is the source of truth for dates/descriptions when content needs verification.

## Brand Commitments

- Tone: founder/operator energy — "gets shit done," not generic agency-speak, not fluffy mission statements, not a traditional dev-portfolio voice.
- Real contact channels already live in the footer: mailto:mubashirsakhi@gmail.com, linkedin.com/in/mubashirsakhi, github.com/mubashirsakhi, medium.com/@mubashirsakhi, facebook.com/groups/tgpak.
- Existing taglines in use: "Operator. Builder." / "LET'S BUILD something REAL." / "Built in Karachi · Always shipping."

## Evidence on Hand

- Home page (src/App.jsx) section stack: Hero → Marquee → WhatIDo → TrackRecord → Community → Listening → Writing → Goodreads → Coffee → ContactFooter.
- Hero stats: 12K+ Community, $10K Raised, 5K+ Vehicles, 3 Ventures.
- Track record (src/components/TrackRecord.jsx): Streamguys (2020–now), Enova (2024–now), Tech Geeks of Pakistan (2016–now, 12,000+ builders), Twodots → 10Pearls (2019–2021), Wrapkar (2016–2019, $10K raised / 5,000+ vehicles), The Nest I/O (2017–2020, EIR), NED University (2015, B.E. Engineering, GPA 3.445).
- Enova case study (`/work/enova`, src/pages/CaseStudy.jsx): 2023–present, 7 project fronts (Google Business +340% pin views/90 days; enova.pk storefront, 80+ SKUs; 200+ product photos; social across FB/IG/TikTok/LinkedIn; brand identity; ads generating ~1,200 qualified leads/month; China sourcing, 18 new SKUs); closing stats "07 fronts built, 2 yrs hands on the wheel, 99.4% ops uptime kept."
- Writing (Medium, medium.com/@mubashirsakhi): real published articles on Reddit-sourced startup ideas, WOW Festival's 3-stage livestream build, a no-code energy stack, Tech Geeks' growth to 12K, and Wrapkar lessons.
- Reading (Goodreads, goodreads.com/mubashirsakhi): Hard Thing About Hard Things, Zero to One, Thinking Fast and Slow (currently reading), Shoe Dog, Sapiens, The Lean Startup.
- Listening (podcasts, no external link): My First Million, Stuff You Should Know, What's Your Problem?, End of the World, Thought Behind Things.
- Certifications (Community section): Growth Driven Design (HubSpot), Digital Garage (Google), Data Structures & Algorithms (Coursera), Meditation & Mindfulness (Masterclass).
- No testimonials, press mentions, or third-party proof currently on the site beyond the facts above — do not fabricate any.

## Product Principles

1. Prove execution, don't claim it — every section should trace to a real, checkable fact (a stat, a link, a date), never generic self-description.
2. Keep all three tracks (events, energy, tech/community) equally weighted; no track should visually or narratively dominate the others.
3. Generalist ≠ unfocused — the throughline across sections is "ships real things," not a scattershot resume.
4. No agency-speak, no mission-statement fluff, no claim the code/content can't back up.
5. LinkedIn is the tiebreaker for factual accuracy on dates/roles; when site copy and outside notes disagree, verify against it rather than guessing.
