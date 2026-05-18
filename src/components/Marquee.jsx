import { useEffect, useRef } from 'react'
import { __tickers, __startTicker } from '../hooks'

const TOP_ITEMS = [
  { text: 'Streamguys',        kind: 'solid'   },
  { text: 'WOW Festival',      kind: 'outline' },
  { text: '021Disrupt',        kind: 'solid'   },
  { text: 'Enova',             kind: 'outline' },
  { text: 'Tech Geeks of Pakistan', kind: 'solid' },
  { text: 'Wrapkar',           kind: 'outline' },
  { text: 'Twodots → 10Pearls', kind: 'solid'  },
  { text: 'The Nest I/O',      kind: 'outline' },
]

const BOT_ITEMS = [
  'Live Events', 'Renewable Energy', 'JavaScript / Node.js',
  'No-Code Tooling', 'Community', 'Operations', 'Sourcing', 'Distribution',
]

const DOT_COLORS = ['var(--accent)', 'var(--accent-3)', 'var(--accent-4)']

function MarqueeTrack({ items, baseSpeed = 30, direction = 1, render }) {
  const trackRef = useRef(null)
  const xRef = useRef(0)
  const widthRef = useRef(0)
  const lastScrollRef = useRef(window.scrollY)
  const velocityRef = useRef(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    widthRef.current = el.scrollWidth / 2
    let last = performance.now()
    const tick = (now) => {
      now = now || performance.now()
      const dt = Math.min(now - last, 50)
      last = now
      const cur = window.scrollY
      const dy = cur - lastScrollRef.current
      lastScrollRef.current = cur
      velocityRef.current = velocityRef.current * 0.88 + dy * 0.12
      const boost = 1 + Math.min(Math.abs(velocityRef.current) * 3, 3)
      xRef.current -= direction * (baseSpeed / 1000) * dt * boost
      const w = widthRef.current
      if (w > 0) {
        if (xRef.current <= -w) xRef.current += w
        if (xRef.current >= 0 && direction < 0) xRef.current -= w
      }
      el.style.transform = `translateX(${xRef.current}px)`
    }
    __tickers.add(tick)
    __startTicker()
    const ro = new ResizeObserver(() => { widthRef.current = el.scrollWidth / 2 })
    ro.observe(el)
    return () => { __tickers.delete(tick); ro.disconnect() }
  }, [baseSpeed, direction])

  return (
    <div className="marquee-track" ref={trackRef}>
      {[...items, ...items].map((it, i) => render(it, i))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" style={{ padding: 0 }}>
      <div style={{ borderBottom: '1px solid var(--ink-hair)', padding: '14px 0' }}>
        <MarqueeTrack
          items={TOP_ITEMS}
          baseSpeed={40}
          direction={1}
          render={(it, i) => (
            <span key={i} className={`marquee-item ${it.kind === 'outline' ? 'outline' : ''}`}>
              {it.text}
              <span className="dot-sep" style={{ background: DOT_COLORS[i % 3] }} />
            </span>
          )}
        />
      </div>
      <div style={{ padding: '14px 0' }}>
        <MarqueeTrack
          items={BOT_ITEMS}
          baseSpeed={28}
          direction={-1}
          render={(it, i) => (
            <span key={i} className="marquee-item outline" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>
              {it}
              <span className="dot-sep" style={{ background: 'var(--accent-2)' }} />
            </span>
          )}
        />
      </div>
    </div>
  )
}
