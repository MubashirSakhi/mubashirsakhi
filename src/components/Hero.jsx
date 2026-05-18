import { useState, useEffect, useRef } from 'react'
import { Reveal, SplitLetters, __tickers, __startTicker } from '../hooks'

const HERO_STATS = [
  { num: '12K+', label: 'Community', accent: false },
  { num: '$10K', label: 'Raised',    accent: true  },
  { num: '5K+',  label: 'Vehicles',  accent: false },
  { num: '3',    label: 'Ventures',  accent: true  },
]

const RIGHT_NOW = [
  { tag: 'EVENTS', text: 'Running real-time event production across Pakistan' },
  { tag: 'ENERGY', text: 'Scaling Enova — sourcing, funnels, distribution' },
  { tag: 'TECH',   text: 'Helping startups ship faster' },
]

function HeroName() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const letters = el.querySelectorAll('.letter')
    const tick = () => {
      const off = document.body.dataset.tilt === 'off'
      const t = Math.min(window.scrollY / 700, 1)
      letters.forEach((l, i) => {
        if (off) { l.style.transform = ''; return }
        const local = Math.max(0, Math.min(1, t - i * 0.006))
        l.style.transform = `translateY(${local * -8}px) rotateX(${local * -14}deg) rotateY(${local * 28 * (i % 2 === 0 ? 1 : -1)}deg)`
      })
    }
    __tickers.add(tick)
    __startTicker()
    return () => { __tickers.delete(tick) }
  }, [])

  return (
    <div ref={ref} className="hero-name display">
      <div className="line line-1"><SplitLetters text="MUBASHIR" /></div>
      <div className="line line-2"><SplitLetters text="SAKHI" /></div>
    </div>
  )
}

export default function Hero() {
  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />

      <div className="wrap hero-frame">
        <div className={`reveal ${reveal ? 'in' : ''}`}>
          <div className="hero-meta">
            <span className="eyebrow">
              <span className="hero-status"><span className="live" /></span>
              Karachi · Always building
            </span>
            <span className="eyebrow" style={{ color: 'var(--ink-faint)' }}>
              v3.0 · May 2026
            </span>
          </div>
        </div>

        <HeroName />

        <div className="hero-second">
          <Reveal delay={3}>
            <p className="hero-tag">
              Operator. Builder. <em>In the trenches</em> across{' '}
              <span className="swap">live events</span>,{' '}
              <em>energy</em>, and the tech that <em>actually ships</em>.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <p className="hero-blurb">
              I build systems that move — live events, energy supply chains,
              and tech that actually gets used. No long decks. No theory.
              Just figuring it out and moving.
            </p>
          </Reveal>
        </div>

        <Reveal delay={5}>
          <div className="stats">
            {HERO_STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-num">
                  <span className={s.accent ? 'accent-num' : ''}>{s.num}</span>
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={6}>
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {RIGHT_NOW.map((r) => (
              <div key={r.tag} style={{ borderTop: '1px solid var(--ink-hair)', paddingTop: 16 }}>
                <span className="mono" style={{ color: 'var(--accent)' }}>{r.tag} →</span>
                <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.5 }}>{r.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
