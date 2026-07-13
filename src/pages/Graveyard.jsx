/* ============================================================
   THE IDEA GRAVEYARD — floating unfinished ideas
   Loose-gravity physics · drag & throw · click for the story
   ============================================================ */
import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useKarachiTime } from '../hooks'
import './graveyard.css'

const GRAVITY = 0.018
const DRIFT = 0.05

/* ---- the dead ideas (placeholders — edit freely) ---- */
const IDEAS = [
  {
    id: 'tidepool',
    title: 'Tidepool',
    stageName: 'Prototype',
    pct: 42,
    started: 'Mar 2023',
    abandoned: 'Aug 2023',
    tag: 'A notes app that filed your thoughts by mood, not by folder. Write when the tide was high, read it back when it was low.',
    lead: 'What if your notebook knew how you felt when you wrote in it?',
    what: 'A journaling app that tagged every entry with the emotional “tide” you were in — then resurfaced old notes when you returned to the same feeling. No folders. Just weather.',
    why: 'The tagging was the whole magic, and it needed to be invisible. Every version I built made you stop and label your own mood, which killed the feeling instantly. I never solved the quiet part.',
    reflection: 'I still think the idea is right. I just wasn’t patient enough to make it disappear.',
    tags: ['ios', 'journaling', 'on-device ml'],
    torn: 'torn-1', accent: 'blue',
    note: 'revisit the tagging?',
  },
  {
    id: 'slowmail',
    title: 'Slowmail',
    stageName: 'Working prototype',
    pct: 61,
    started: 'Jan 2024',
    abandoned: 'May 2024',
    tag: 'Email that arrived once a day, at dusk. One delivery. No pings. You read it like a newspaper and then you were done.',
    lead: 'The inbox, but it only breathed once a day.',
    what: 'A mail client that batched everything and delivered a single quiet digest at sunset, local time. No notifications, no unread count, no infinite scroll. You opened it, you finished it, you closed it.',
    why: 'It worked beautifully — for me. But it turned out almost nobody wants less email badly enough to change clients for it. I built a thing for an audience of one.',
    reflection: 'The happiest four months of building I’ve had. Sometimes the market of one is enough to learn from.',
    tags: ['email', 'calm tech', 'web'],
    torn: 'torn-2', accent: 'orange',
    note: 'audience of one',
  },
  {
    id: 'afterdark',
    title: 'Karachi After Dark',
    stageName: 'Sketch',
    pct: 18,
    started: 'Sep 2022',
    abandoned: 'Nov 2022',
    tag: 'A living map of the city after midnight — the chai spots, the presses still running, where the night actually happens.',
    lead: 'The city I love is a different city at 2am. Nobody had mapped that one.',
    what: 'A community map of Karachi’s nightlife — not clubs, but the real after-hours: 24-hour dhabas, the fish harbour at dawn, the streets that only come alive once everyone else is asleep.',
    why: 'This one needed people, not code. It needed a hundred night-owls contributing, and I tried to solve that with a slicker interface. You can’t design your way to a community that isn’t there yet.',
    reflection: 'Wrong first move, not wrong idea. Should’ve started with a WhatsApp group and a spreadsheet.',
    tags: ['maps', 'community', 'karachi'],
    torn: 'torn-3', accent: 'magenta',
    note: 'start with people',
  },
  {
    id: 'warehouse',
    title: 'The Warehouse Sessions',
    stageName: 'Idea',
    pct: 12,
    started: 'Jun 2023',
    abandoned: 'Jul 2023',
    tag: 'Intimate live sets in a real working warehouse. Fifty people, one band, concrete and reverb.',
    lead: 'A gig series in the kind of room a gig was never supposed to happen in.',
    what: 'A recurring live-music night staged in an actual industrial warehouse — stripped back, fifty tickets, no stage, the crowd close enough to see the setlist. Half concert, half secret.',
    why: 'The warehouse got sold three weeks in. The whole thing was married to one specific room, and when the room disappeared so did the idea. I never found another that felt right.',
    reflection: 'Some ideas are really just a place. Lose the place, lose the idea. I’m still looking for the room.',
    tags: ['live events', 'music', 'irl'],
    torn: 'torn-4', accent: 'lime',
    note: 'still looking for the room',
  },
  {
    id: 'ledger',
    title: 'Ledger for Two',
    stageName: 'Prototype',
    pct: 54,
    started: 'Feb 2024',
    abandoned: 'Sep 2024',
    tag: 'Shared money for couples, kept quietly. No lectures, no charts shaming you — just a calm, honest picture of us.',
    lead: 'Every couples-finance app felt like a spreadsheet with opinions. Ours would just listen.',
    what: 'A joint-finance app built around trust instead of budgeting. It tracked the shared picture gently, flagged nothing, judged nothing, and made the money conversation easier by making it smaller.',
    why: 'Money plus relationships plus regulation is three hard problems wearing a trench coat. Every feature opened two more, and “calm” kept losing to “compliant.” The scope quietly ate me.',
    reflection: 'The restraint was the product, and restraint is the first thing to die under scope creep.',
    tags: ['fintech', 'relationships', 'mobile'],
    torn: 'torn-5', accent: 'blue',
    note: 'restraint died first',
  },
]

const ACCENT_CSS = {
  blue: 'oklch(0.72 0.20 252)',
  magenta: 'oklch(0.72 0.20 0)',
  lime: 'oklch(0.78 0.20 130)',
  orange: 'oklch(0.72 0.20 50)',
}

/* margin-note offsets so notes hang off different corners */
const NOTE_POS = [
  { bottom: -26, right: -8 },
  { top: -24, left: 18 },
  { bottom: -28, left: -6 },
  { top: -22, right: -4 },
  { bottom: -26, right: 30 },
]

const REVIVE_LINES = [
  'Revived. Give it a week.',
  'Back from the dead — briefly.',
  'It stirred. Then it remembered why it stopped.',
  'Alive for exactly as long as this message.',
  'One more shot. For old times’ sake.',
]

function GraveyardNav() {
  const time = useKarachiTime()
  return (
    <nav className="nav scrolled">
      <Link to="/" className="nav-back">
        <span aria-hidden="true">←</span>
        <span className="nav-brand" style={{ display: 'inline-flex' }}>
          <span className="dot" />
          <span>Mubashir Sakhi</span>
        </span>
      </Link>
      <div className="nav-time" style={{ display: 'flex', gap: 24 }}>
        <span style={{ opacity: 0.6 }}>Karachi</span>
        <span>{time}</span>
      </div>
      <a className="nav-cta" href="mailto:mubashirsakhi@gmail.com">Get in touch ↗</a>
    </nav>
  )
}

/* ------------------------------------------------------------
   PHYSICS STAGE
   ------------------------------------------------------------ */
function Stage({ onOpen, revivedId }) {
  const stageRef = useRef(null)
  const bodiesRef = useRef([])
  const elsRef = useRef({})          // id -> card element
  const dragRef = useRef(null)       // active drag state
  const rafRef = useRef(null)

  const setEl = useCallback((id, el) => {
    if (el) elsRef.current[id] = el
  }, [])

  // init bodies once stage is measured
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const buildBodies = () => {
      const rect = stage.getBoundingClientRect()
      const header = document.querySelector('.gv-header')
      const hb = header ? header.getBoundingClientRect() : { bottom: 96 }
      const narrow = rect.width < 640

      bodiesRef.current = IDEAS.map((idea, i) => {
        const el = elsRef.current[idea.id]
        const w = el ? el.offsetWidth : 260
        const h = el ? el.offsetHeight : 208
        // Narrow: 2x3 grid in the space below the header. Wide: 3x2, skip top-left.
        const cols = narrow ? 2 : 3
        const rows = narrow ? 3 : 2
        const cell = narrow ? i : i + 1
        const col = cell % cols
        const row = Math.floor(cell / cols)
        const top = narrow ? Math.min(rect.height * 0.52, hb.bottom + 14) : 0
        const gridH = rect.height - top
        const cellW = rect.width / cols
        const cellH = gridH / rows
        const jitter = (r) => (Math.random() - 0.5) * r
        let x = col * cellW + (cellW - w) / 2 + jitter(narrow ? 26 : 48)
        let y = top + row * cellH + (cellH - h) / 2 + jitter(narrow ? 20 : 48)
        x = Math.max(10, Math.min(rect.width - w - 10, x))
        y = Math.max(narrow ? top : 96, Math.min(rect.height - h - 10, y))
        return {
          id: idea.id, el, w, h,
          x, y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          rot: (Math.random() - 0.5) * 7,
          vrot: (Math.random() - 0.5) * 0.12,
          phase: Math.random() * Math.PI * 2,
          z: 10 + i,
        }
      })

      // paint initial positions synchronously (rAF may be throttled before first frame)
      for (const b of bodiesRef.current) {
        const el = b.el || elsRef.current[b.id]
        if (el) el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.rot}deg)`
      }
    }

    buildBodies()

    // re-scatter on a meaningful viewport change (rotation, breakpoint cross)
    let lastW = stage.getBoundingClientRect().width
    let rz = null
    const onResize = () => {
      clearTimeout(rz)
      rz = setTimeout(() => {
        const w = stage.getBoundingClientRect().width
        if (Math.abs(w - lastW) > 100 || (w < 640) !== (lastW < 640)) {
          lastW = w
          buildBodies()
        }
      }, 220)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)

    let t = 0
    const loop = () => {
      const r = stage.getBoundingClientRect()
      const bodies = bodiesRef.current
      t += 0.016

      // integrate
      for (const b of bodies) {
        if (dragRef.current && dragRef.current.id === b.id) continue
        // gravity (gentle) + buoyant bob so nothing fully settles
        b.vy += GRAVITY
        b.vy += Math.sin(t * 1.1 + b.phase) * 0.010
        b.vx += Math.cos(t * 0.9 + b.phase) * 0.008
        // ambient drift
        b.vx += (Math.random() - 0.5) * DRIFT
        b.vy += (Math.random() - 0.5) * DRIFT
        // friction
        b.vx *= 0.992
        b.vy *= 0.992
        // clamp speed
        const sp = Math.hypot(b.vx, b.vy)
        const max = 14
        if (sp > max) { b.vx = (b.vx / sp) * max; b.vy = (b.vy / sp) * max }

        b.x += b.vx
        b.y += b.vy
        b.rot += b.vrot
        b.vrot *= 0.98

        // walls — bounce with damping
        const pad = 8
        if (b.x < pad) { b.x = pad; b.vx = Math.abs(b.vx) * 0.7; b.vrot += 0.05 }
        if (b.x > r.width - b.w - pad) { b.x = r.width - b.w - pad; b.vx = -Math.abs(b.vx) * 0.7; b.vrot -= 0.05 }
        if (b.y < pad + 70) { b.y = pad + 70; b.vy = Math.abs(b.vy) * 0.7 }
        if (b.y > r.height - b.h - pad) { b.y = r.height - b.h - pad; b.vy = -Math.abs(b.vy) * 0.72; b.vrot += (Math.random() - 0.5) * 0.1 }
      }

      // soft pairwise repulsion so scraps don't fully stack
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i], c = bodies[j]
          const ax = a.x + a.w / 2, ay = a.y + a.h / 2
          const cx = c.x + c.w / 2, cy = c.y + c.h / 2
          let dx = cx - ax
          const dy = cy - ay
          const minx = (a.w + c.w) / 2 * 0.82
          const miny = (a.h + c.h) / 2 * 0.82
          if (Math.abs(dx) < minx && Math.abs(dy) < miny) {
            const push = 0.08
            if (dx === 0) dx = (Math.random() - 0.5)
            const nx = dx > 0 ? 1 : -1
            const ny = dy > 0 ? 1 : -1
            const dragging = dragRef.current
            if (!(dragging && dragging.id === a.id)) { a.vx -= nx * push; a.vy -= ny * push }
            if (!(dragging && dragging.id === c.id)) { c.vx += nx * push; c.vy += ny * push }
          }
        }
      }

      // paint
      for (const b of bodies) {
        const el = b.el || elsRef.current[b.id]
        if (el) {
          el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.rot}deg)`
          el.style.zIndex = b.z
        }
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(rz)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [])

  // pointer drag / throw / click
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const onDown = (e) => {
      const card = e.target.closest('.scrap')
      if (!card) return
      const id = card.dataset.id
      const b = bodiesRef.current.find((x) => x.id === id)
      if (!b) return
      card.setPointerCapture?.(e.pointerId)
      card.classList.add('dragging')
      // bring to front
      const maxZ = Math.max(...bodiesRef.current.map((x) => x.z))
      b.z = maxZ + 1
      dragRef.current = {
        id, pointerId: e.pointerId,
        lastX: e.clientX, lastY: e.clientY,
        vx: 0, vy: 0,
        moved: 0,
      }
      b.vx = 0
      b.vy = 0
    }

    const onMove = (e) => {
      const d = dragRef.current
      if (!d || e.pointerId !== d.pointerId) return
      const b = bodiesRef.current.find((x) => x.id === d.id)
      if (!b) return
      const dx = e.clientX - d.lastX
      const dy = e.clientY - d.lastY
      b.x += dx
      b.y += dy
      d.vx = dx
      d.vy = dy
      d.lastX = e.clientX
      d.lastY = e.clientY
      d.moved += Math.abs(dx) + Math.abs(dy)
    }

    const onUp = (e) => {
      const d = dragRef.current
      if (!d || e.pointerId !== d.pointerId) return
      const b = bodiesRef.current.find((x) => x.id === d.id)
      const card = elsRef.current[d.id]
      card?.classList.remove('dragging')
      if (b) {
        // throw with released velocity
        b.vx = Math.max(-24, Math.min(24, d.vx))
        b.vy = Math.max(-24, Math.min(24, d.vy))
        b.vrot += (Math.random() - 0.5) * 0.3
      }
      const wasClick = d.moved < 8
      dragRef.current = null
      if (wasClick) onOpen(d.id)
    }

    stage.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      stage.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [onOpen])

  // when an idea is revived, give it a little upward kick
  useEffect(() => {
    if (!revivedId) return
    const b = bodiesRef.current.find((x) => x.id === revivedId)
    if (b) { b.vy = -9; b.vrot += (Math.random() - 0.5) * 0.4 }
  }, [revivedId])

  return (
    <div className="gv-stage" ref={stageRef}>
      {IDEAS.map((idea, i) => (
        <Scrap
          key={idea.id}
          idea={idea}
          index={i}
          revived={revivedId === idea.id}
          setEl={setEl}
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------
   ONE FLOATING SCRAP
   ------------------------------------------------------------ */
function Scrap({ idea, index, revived, setEl }) {
  const notePos = NOTE_POS[index % NOTE_POS.length]
  return (
    <div
      className={`scrap ${idea.torn} ${revived ? 'revived' : ''}`}
      data-id={idea.id}
      ref={(el) => setEl(idea.id, el)}
      style={{ '--accent': ACCENT_CSS[idea.accent] }}
    >
      <div className="scrap-alive">Alive</div>
      <div className="scrap-body">
        <span className="scrap-sketch" />
        <div className="scrap-kicker">
          <span>Unfinished</span>
          <span className="stage-name">{idea.stageName}</span>
        </div>
        <h3 className="scrap-title">{idea.title}</h3>
        <p className="scrap-tag">{idea.tag}</p>
        <div className="scrap-prog">
          <span className="bar"><i style={{ width: `${idea.pct}%` }} /></span>
          <span className="pct">{idea.pct}%</span>
        </div>
      </div>
      <span className="scrap-note" style={notePos}>{idea.note}</span>
    </div>
  )
}

/* ------------------------------------------------------------
   DETAIL MODAL — the obituary
   ------------------------------------------------------------ */
function Modal({ idea, onClose, onRevive }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!idea) return null
  return (
    <div className="gv-modal-scrim" onClick={onClose}>
      <div
        className="gv-modal"
        style={{ '--accent': ACCENT_CSS[idea.accent] }}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="sketch-edge" />
        <button className="gv-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="gv-modal-kicker">
          <span>Unfinished idea</span>
          <span className="dead">Shelved {idea.abandoned}</span>
        </div>

        <h2 className="gv-modal-title">{idea.title}</h2>
        <div className="gv-modal-life">{idea.started} — {idea.abandoned}</div>

        <p className="gv-modal-lead">“{idea.lead}”</p>

        <div className="gv-modal-prog">
          <span className="track"><i style={{ width: `${idea.pct}%` }} /></span>
          <span className="num">{idea.pct}%<span className="stage">{idea.stageName}</span></span>
        </div>

        <div className="gv-field">
          <div className="gv-field-label">What it was</div>
          <p>{idea.what}</p>
        </div>

        <div className="gv-field">
          <div className="gv-field-label">Why it stalled</div>
          <p>{idea.why}</p>
        </div>

        <div className="gv-field">
          <div className="gv-field-label">Looking back</div>
          <p><span className="em">{idea.reflection}</span></p>
        </div>

        <div className="gv-modal-tags">
          {idea.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>

        <div className="gv-modal-foot">
          <button className="gv-revive" onClick={() => onRevive(idea)}>
            <span className="pulse" />
            Revive it
          </button>
          <span className="gv-revive-note">Won’t hurt to dream for a second.</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------
   PAGE
   ------------------------------------------------------------ */
export default function Graveyard() {
  const [openId, setOpenId] = useState(null)
  const [revivedId, setRevivedId] = useState(null)
  const [toast, setToast] = useState(null)
  const reviveTimer = useRef(null)
  const toastTimer = useRef(null)

  useEffect(() => {
    document.body.classList.add('graveyard')
    document.title = 'The Idea Graveyard — Mubashir Sakhi'
    return () => {
      document.body.classList.remove('graveyard')
      document.title = 'Mubashir Sakhi'
      clearTimeout(reviveTimer.current)
      clearTimeout(toastTimer.current)
    }
  }, [])

  const open = useCallback((id) => setOpenId(id), [])
  const close = useCallback(() => setOpenId(null), [])

  const revive = useCallback((idea) => {
    setOpenId(null)
    setRevivedId(idea.id)
    setToast(REVIVE_LINES[Math.floor(Math.random() * REVIVE_LINES.length)])
    clearTimeout(reviveTimer.current)
    clearTimeout(toastTimer.current)
    reviveTimer.current = setTimeout(() => setRevivedId(null), 4200)
    toastTimer.current = setTimeout(() => setToast(null), 3400)
  }, [])

  const openIdea = IDEAS.find((i) => i.id === openId) || null

  return (
    <>
      <GraveyardNav />

      <header className="gv-header">
        <span className="eyebrow">The idea graveyard</span>
        <h1 className="gv-title">
          Ideas that never<br /><em>quite made it.</em>
        </h1>
        <p className="gv-sub">
          Good ones, mostly. Half-built, half-dreamed, then set down for reasons
          that made sense at the time. They’re still drifting around in here.
        </p>
        <div className="gv-count">
          <span className="hair" />
          <span><b>{IDEAS.length}</b> unfinished ideas, floating</span>
        </div>
      </header>

      <Stage onOpen={open} revivedId={revivedId} />

      <div className="gv-hint">
        <span className="k">drag</span> to throw
        <span style={{ opacity: 0.4 }}>/</span>
        <span className="k">click</span> to open
      </div>

      {openIdea && <Modal idea={openIdea} onClose={close} onRevive={revive} />}

      <div className={`gv-toast ${toast ? 'show' : ''}`}>
        <b>Revived</b>{toast}
      </div>
    </>
  )
}
