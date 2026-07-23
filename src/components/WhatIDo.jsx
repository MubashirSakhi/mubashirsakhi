import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView, Reveal, __tickers, __startTicker } from '../hooks'

const TRACKS = [
  {
    num: '01',
    label: 'Live · Real-time',
    title: 'Streamguys',
    subtitle: 'the attention engine',
    body: "Most people don't attend your event. They watch it. We built Streamguys around that shift. We don't just livestream — we run the full attention engine: capture, edit, publish, distribute in real-time while your event is still happening. By the time the session ends, your content is already out.",
    tags: ['Live Events', 'Real-time', 'Social'],
    accent: 'accent',
    link: { label: 'streamguys.pk →', href: 'http://www.streamguys.pk' },
  },
  {
    num: '02',
    label: 'Wholesale · Margin',
    title: 'Enova',
    subtitle: 'energy supply side',
    body: "Pakistan's energy market is unstable. That's exactly why it's interesting. With Enova I'm building on the supply side — sourcing from China, supplier relationships, supplying retailers and installers, creating demand through digital funnels. Margin, logistics, and timing. Most people don't see that layer. I operate in it.",
    tags: ['Renewable', 'Wholesale', 'Logistics'],
    accent: 'accent-2',
    link: { label: 'Read more →', to: '/work/enova' },
  },
  {
    num: '03',
    label: 'Build · Ship',
    title: 'Execution layer',
    subtitle: 'code as bottleneck-removal',
    body: "I don't build tech for the sake of it. I use it to remove bottlenecks — APIs, automation, internal tools. No-code where it works, custom systems where it matters. For early-stage teams: what to build, what to skip, how to move faster this week.",
    tags: ['Node.js', 'Automation', 'No-code'],
    accent: 'accent-3',
    link: { label: 'github.com/mubashirsakhi →', href: 'http://github.com/mubashirsakhi' },
  },
]

function Track({ t, i }) {
  const [ref, inView] = useInView({ rootMargin: '-80px' })
  const numRef = useRef(null)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const tick = () => {
      const parent = el.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const p = 1 - (rect.top + rect.height / 2) / window.innerHeight
      el.style.transform = `translateY(${p * -40}px)`
    }
    __tickers.add(tick)
    __startTicker()
    return () => { __tickers.delete(tick) }
  }, [])

  return (
    <div
      ref={ref}
      className={`track reveal ${inView ? 'in' : ''}`}
      style={{ transitionDelay: `${i * 0.05}s` }}
    >
      <div className="track-num" ref={numRef}>{t.num}</div>
      <div>
        <span className="mono" style={{ color: `var(--${t.accent})` }}>{t.label}</span>
        <h3 className="track-title" style={{ marginTop: 14 }}>
          {t.title}<br /><em>{t.subtitle}.</em>
        </h3>
        <div className="track-meta">
          {t.tags.map((tg, k) => (
            <span key={tg} className={`tag ${k === 0 ? t.accent : ''}`}>{tg}</span>
          ))}
        </div>
      </div>
      <div className="track-body">
        <p>{t.body}</p>
        {t.link && (t.link.to ? (
          <Link
            className="link"
            to={t.link.to}
            style={{ color: `var(--${t.accent})`, borderBottomColor: `var(--${t.accent})` }}
          >
            {t.link.label}
          </Link>
        ) : (
          <a
            className="link"
            href={t.link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: `var(--${t.accent})`, borderBottomColor: `var(--${t.accent})` }}
          >
            {t.link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function WhatIDo() {
  return (
    <section className="what-i-do">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">§ 01 / Operating</span>
              <h2>
                Three tracks.<br />
                <span className="swap">One operator.</span>
              </h2>
            </div>
            <p className="desc">
              I run three businesses in parallel because the patterns rhyme.
              Events teach you distribution. Energy teaches you supply.
              Tech ties them together.
            </p>
          </div>
        </Reveal>
        {TRACKS.map((t, i) => <Track key={t.num} t={t} i={i} />)}
      </div>
    </section>
  )
}
