import { useState, useEffect } from 'react'
import { Reveal } from '../hooks'

const PODCASTS = [
  { id: 'mfm',  title: 'My First Million',        desc: 'Business ideas, trends, and the thinking behind them.',   color: 'var(--c-blue)',    href: 'https://www.mfmpod.com/' },
  { id: 'sysk', title: 'Stuff You Should Know',   desc: 'How pretty much everything actually works.',              color: 'var(--c-magenta)', href: 'https://stuffyoushouldknow.com' },
  { id: 'wyp',  title: "What's Your Problem?",    desc: 'Founders and engineers on hard problems.',                color: 'var(--c-orange)',  href: 'https://www.pushkin.fm/podcasts/whats-your-problem' },
  { id: 'eotw', title: 'End of the World',        desc: 'Existential threats. The next 200 years.',                color: 'var(--c-lime)',    href: 'https://podcasts.apple.com/us/podcast/the-end-of-the-world-with-josh-clark/id1437682381' },
  { id: 'tbt',  title: 'Thought Behind Things',   desc: "Asia's brightest minds on art, culture, tech.",           color: 'var(--c-blue)',    href: 'https://www.youtube.com/@TBTGO' },
]

function FanCard({ p, offset, active }) {
  const abs = Math.abs(offset)
  if (abs > 2) return null
  const rotZ  = offset * 7
  const x     = offset * 90
  const y     = abs * 8
  const z     = -abs * 60
  const scale = active ? 1.04 : 1 - abs * 0.04
  const rotX  = active ? 0 : 6
  return (
    <div
      className={`fan-card ${active ? 'active' : ''}`}
      style={{
        transform: `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rotZ}deg) rotateX(${rotX}deg) scale(${scale})`,
        zIndex: 100 - abs,
        background: `linear-gradient(135deg, ${p.color}, color-mix(in oklab, ${p.color} 30%, #111))`,
      }}
    >
      <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
        <div className="fan-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.9) 100%)' }}>
          <div style={{ position: 'absolute', top: 22, left: 22, right: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span className="mono" style={{ color: 'rgba(255,255,255,0.9)' }}>EP · {p.id.toUpperCase()}</span>
            <span style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11 }}>↗</span>
          </div>
          <div style={{
            position: 'absolute', top: '30%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 140, height: 140, borderRadius: '50%',
            background: 'radial-gradient(circle at 50% 50%, #fff 0%, #fff 8%, transparent 9%, transparent 18%, rgba(255,255,255,0.08) 19%, rgba(255,255,255,0.08) 21%, transparent 22%), conic-gradient(from 0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.4))',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.4)',
            animation: active ? 'spin 18s linear infinite' : 'none',
          }} />
          <div className="fan-title">{p.title}</div>
          <div className="fan-desc">{p.desc}</div>
        </div>
      </a>
    </div>
  )
}

export default function Listening() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % PODCASTS.length), 3500)
    return () => clearInterval(id)
  }, [])

  const signedOffset = (i) => {
    const len = PODCASTS.length
    const raw = i - active
    const alt = raw > 0 ? raw - len : raw + len
    return Math.abs(alt) < Math.abs(raw) ? alt : raw
  }

  return (
    <section className="listening">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">§ 04 / Signal</span>
              <h2>
                Not motivation.<br />
                <span className="swap">Signal.</span>
              </h2>
            </div>
            <p className="desc">
              I care about how things work — and how to use that.
              These are the ones I keep returning to.
            </p>
          </div>
        </Reveal>

        <div className="fan">
          {PODCASTS.map((p, i) => (
            <FanCard key={p.id} p={p} offset={signedOffset(i)} active={signedOffset(i) === 0} />
          ))}
        </div>

        <div className="fan-controls">
          <button className="fan-arrow" onClick={() => setActive((a) => (a - 1 + PODCASTS.length) % PODCASTS.length)} aria-label="Prev">←</button>
          {PODCASTS.map((p, i) => (
            <button key={p.id} className={`fan-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} aria-label={p.title} />
          ))}
          <button className="fan-arrow" onClick={() => setActive((a) => (a + 1) % PODCASTS.length)} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  )
}
