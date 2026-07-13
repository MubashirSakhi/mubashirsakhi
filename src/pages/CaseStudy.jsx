/* ============================================================
   CASE STUDY — reusable "my work at a company" page.
   One data object per company in CASES; pinboard layout.
   ============================================================ */
import { useState, useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal, __tickers, __startTicker } from '../hooks'
import ScrollProgress from '../components/ScrollProgress'
import './case-study.css'

/* Emphasis arrays: even-index parts plain, odd-index parts wrapped. */
const emph = (parts) =>
  typeof parts === 'string' ? parts : parts.map((p, i) => (i % 2 ? <em key={i}>{p}</em> : p))
const soft = (parts) =>
  typeof parts === 'string' ? parts : parts.map((p, i) => (i % 2 ? <span className="em" key={i}>{p}</span> : p))
/* outcome: even-index non-empty parts are the bold metric */
const outcome = (parts) =>
  typeof parts === 'string' ? parts : parts.map((p, i) => (i % 2 === 0 && p.trim() ? <b key={i}>{p}</b> : p))
const pad2 = (n) => String(n).padStart(2, '0')

const CASES = {
  enova: {
    company: 'Enova',
    companyEmphasis: 'nova',          // trailing letters set in italic serif ('' to disable)
    status: '2023 — present · ongoing',
    what: ['A B2B renewable-energy brand — solar panels, inverters, lithium ',
           'batteries, 12V DC and lighting.', ' I built the operating surface around it.'],
    facts: [
      { k: 'My role', v: 'Operator & builder' },
      { k: 'Where', v: 'Karachi, PK' },
      { k: 'Span', v: '2 years, hands-on' },
      { k: 'Scope', v: 'Brand → ops, end to end' },
    ],
    intro: ['I joined Enova when it was little more than an idea and a warehouse. ',
            'Over two years I ended up touching almost every part of it',
            ' — how people find it, what they see, what shows up at their door. Here are the pieces I’m proudest of.'],

    /* A few highlighted projects (no strict order). 4–7 works best.
       Optional img field renders inside the slot; otherwise striped placeholder. */
    projects: [
      {
        kicker: 'Discoverability',
        title: ['Put Enova ', 'on the map', '.'],
        blurb: 'Nobody could find us, so I started with the basics — a real Google Business profile, clean categories, photos, hours, the works. It sounds small; it changed everything.',
        outcome: ['+340% ', 'pin views in 90 days'],
        note: 'started here',
        cap: 'Google Business profile',
      },
      {
        kicker: 'Foundation',
        title: ['Ship the ', 'website', '.'],
        blurb: 'A mobile-first catalog that actually loads on a Karachi 3G connection. I wrote the copy, structured the SKUs, and quietly tuned it to rank for the searches that matter.',
        outcome: ['80+ SKUs live', ' · SEO-ranked catalog'],
        note: 'wrote every line',
        cap: 'enova.pk storefront',
      },
      {
        kicker: 'Craft',
        title: ['Shoot every ', 'product', ', properly.'],
        blurb: 'Box lights, a white sweep, a canvas backdrop, and a lot of patience. Two hundred consistent, honest product shots — zero stock imagery anywhere on the brand.',
        outcome: ['200+ ', 'in-house product photos'],
        note: 'box lights + patience',
        cap: 'Product photography',
      },
      {
        kicker: 'Presence',
        title: ['Stand up ', 'social', '. Post daily.'],
        blurb: 'Four channels, one voice. I set the tone, built the grid, and kept it warm and useful instead of loud. People started replying — then buying.',
        outcome: ['FB · IG · TikTok · LinkedIn', ' — one voice'],
        note: 'kept it human',
        cap: 'Instagram grid',
      },
      {
        kicker: 'System',
        title: ['Lock the ', 'identity', '.'],
        blurb: 'A wordmark, a palette, a type system people started to recognise on a shelf. The kind of coherence that makes a young brand look like it has been around for years.',
        outcome: ['Logo · palette · type', ' — a real system'],
        note: '',
        cap: 'Enova wordmark + palette',
      },
      {
        kicker: 'Growth',
        title: ['Run the ', 'ads', '. Catch the ', 'leads', '.'],
        blurb: 'Meta and Google funnels feeding a lead pipeline I actually managed — not just spend, but the follow-up, the quotes, the closing. Demand you can measure.',
        outcome: ['~1,200 ', 'qualified leads / month'],
        note: 'and answered them',
        cap: 'Meta Ads Manager',
      },
      {
        kicker: 'Sourcing',
        title: ['Fly to ', 'China', '. Bring back the future.'],
        blurb: 'Factory floors in Shenzhen, samples in a suitcase, then onto a Karachi shelf. Finding products before the market knew it wanted them is the part I love most.',
        outcome: ['18 ', 'new SKUs launched'],
        note: 'my favourite part',
        cap: 'Shenzhen factory visit',
      },
    ],

    closing: {
      heading: ['And underneath it all — ', 'operations', ', end to end.'],
      summary: [
        { num: ['07'], lab: 'Fronts built' },
        { num: ['2', 'yrs'], lab: 'Hands on the wheel' },
        { num: ['99.4', '%'], lab: 'Ops uptime kept' },
      ],
      line: 'Import, warehouse, fulfilment, customer — the unglamorous machine behind every project above. That’s the part I quietly ran on repeat, and the reason any of it stuck.',
    },
  },
}

/* ------------------------------------------------------------
   PINBOARD — draggable index cards
   ------------------------------------------------------------ */
function Pinboard({ projects, company }) {
  const stageRef = useRef(null)
  const posRef = useRef({})       // idx -> {x, y, r}
  const dragRef = useRef(null)
  const zRef = useRef(10)
  const [layout, setLayout] = useState(null)

  useEffect(() => {
    const w = stageRef.current.clientWidth
    // ponytail: cols picked once at mount; a mid-session resize re-lays out on reload
    const cols = w < 700 ? 1 : w < 1020 ? 2 : 3
    const colW = Math.min(300, (w - 44) / cols)
    const key = `cs-pin-pos-${company.toLowerCase()}-${cols}`
    let saved = {}
    try { saved = JSON.parse(localStorage.getItem(key)) || {} } catch { /* ignore */ }

    const rowH = 380, jx = 34, jy = 26
    const pos = {}
    projects.forEach((p, i) => {
      const col = i % cols, row = Math.floor(i / cols)
      // deterministic pseudo-jitter (0..1) so layout is stable across reloads
      const rj = (n) => { const s = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453; return s - Math.floor(s) }
      const x = 22 + col * colW + (rj(1) - 0.5) * jx * 2
      const y = 70 + row * rowH + (rj(2) - 0.5) * jy * 2
      const r = (rj(3) - 0.5) * 5
      pos[i] = saved[i] || { x: Math.max(4, Math.min(w - 272, x)), y, r }
    })
    posRef.current = pos
    setLayout({ key, minHeight: 60 + Math.ceil(projects.length / cols) * rowH + 120 })
  }, [projects, company])

  const save = () => {
    try { localStorage.setItem(layout.key, JSON.stringify(posRef.current)) } catch { /* ignore */ }
  }

  const onDown = (e) => {
    const pin = e.target.closest('.pin')
    if (!pin) return
    const idx = pin.dataset.idx
    const p = posRef.current[idx]
    dragRef.current = { pin, idx, startX: e.clientX, startY: e.clientY, origX: p.x, origY: p.y, moved: false }
    pin.classList.add('dragging')
    pin.style.zIndex = ++zRef.current
    pin.setPointerCapture(e.pointerId)
  }
  const onMove = (e) => {
    const d = dragRef.current
    if (!d) return
    const dx = e.clientX - d.startX, dy = e.clientY - d.startY
    if (Math.abs(dx) + Math.abs(dy) > 3) d.moved = true
    const p = posRef.current[d.idx]
    p.x = d.origX + dx
    p.y = d.origY + dy
    d.pin.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)`
  }
  const onUp = () => {
    const d = dragRef.current
    if (!d) return
    d.pin.classList.remove('dragging')
    dragRef.current = null
    if (d.moved) save()
  }

  return (
    <div
      className="pin-stage"
      ref={stageRef}
      style={layout ? { minHeight: layout.minHeight } : undefined}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <div className="pin-hint">
        <span className="k">drag</span> the cards — arrange them however the story reads for you
      </div>
      {layout && projects.map((p, i) => {
        const pos = posRef.current[i]
        return (
          <div
            key={i}
            className="pin"
            data-idx={i}
            data-tack={(i % 4) + 1}
            style={{ transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.r}deg)` }}
          >
            <span className="pin-tack" />
            <div className="pin-body">
              <div className="pin-kicker"><span>{p.kicker}</span><span className="n">{pad2(i + 1)}</span></div>
              <h3 className="pin-title">{emph(p.title)}</h3>
              <div className="pin-slot cs-slot">
                {p.img && <img src={p.img} alt={p.cap} draggable="false" />}
                <span className="cap">{p.cap}</span>
              </div>
              <p className="pin-blurb">{p.blurb}</p>
              <div className="pin-outcome">↳ {outcome(p.outcome)}</div>
            </div>
            {p.note && <span className="cs-note">{p.note}</span>}
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------
   PAGE
   ------------------------------------------------------------ */
export default function CaseStudy() {
  const { slug } = useParams()
  const CASE = CASES[slug]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!CASE) return
    document.body.classList.add('cs')
    document.title = `${CASE.company} — Case study · Mubashir Sakhi`
    const tick = () => setScrolled(window.scrollY > 24)
    __tickers.add(tick)
    __startTicker()
    return () => {
      document.body.classList.remove('cs')
      document.title = 'Mubashir Sakhi'
      __tickers.delete(tick)
    }
  }, [CASE])

  if (!CASE) return <Navigate to="/" replace />
  const c = CASE.closing
  const { company, companyEmphasis } = CASE
  const companyName = companyEmphasis && company.endsWith(companyEmphasis)
    ? <>{company.slice(0, -companyEmphasis.length)}<em>{companyEmphasis}</em></>
    : company

  return (
    <>
      <ScrollProgress />

      <header className={`cs-chrome ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="cs-back">← M · Sakhi</Link>
        <Link to="/graveyard" className="cs-back">The idea graveyard →</Link>
      </header>

      <header className="cs-head">
        <div className="cs-head-top">
          <span className="live"><i />{CASE.status}</span>
          <span>Case study · M. Sakhi</span>
        </div>
        <h1 className="cs-company">{companyName}</h1>
        <div className="cs-head-grid">
          <p className="cs-what">{soft(CASE.what)}</p>
          <div className="cs-facts">
            {CASE.facts.map((f) => (
              <div className="cs-fact" key={f.k}><span className="k">{f.k}</span><span className="v">{f.v}</span></div>
            ))}
          </div>
        </div>
      </header>

      <section className="cs-intro">
        <Reveal as="p">{soft(CASE.intro)}</Reveal>
      </section>

      <div className="cs-section-label">
        <div className="eyebrow">The work · {CASE.projects.length} fronts</div>
      </div>

      <main className="cs-pinboard">
        <Pinboard projects={CASE.projects} company={CASE.company} />
      </main>

      <section className="cs-close">
        <Reveal as="h2" className="cs-close-h">{emph(c.heading)}</Reveal>
        <div className="cs-summary">
          {c.summary.map((s, i) => (
            <div className="cs-sum" key={i}>
              <div className="num">{s.num.map((p, j) => j % 2 ? <span className="accent" key={j}>{p}</span> : p)}</div>
              <div className="lab">{s.lab}</div>
            </div>
          ))}
        </div>
        <Reveal as="p" className="cs-close-line">{c.line}</Reveal>
      </section>

      <footer className="cs-foot">
        <div className="cs-foot-grid">
          <span>© MMXXVI · M. Sakhi</span>
          <span>{CASE.company} · case study</span>
          <span><a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>↑ Top</a></span>
        </div>
      </footer>
    </>
  )
}
