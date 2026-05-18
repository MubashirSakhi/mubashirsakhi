import { useRef } from 'react'
import { useScroll, useVelocity, useSpring, useMotionValueEvent } from 'framer-motion'

const topItems = [
  '120+ Events Covered',
  '8.4M Impressions',
  'First Post in <60 Min',
  '$10K Raised',
  '12,000+ Community Members',
  'WOW Festival',
  '021Disrupt',
  'No fluff. Just things shipped.',
]

const bottomItems = [
  'Live Events',
  'Renewable Energy',
  'JavaScript / Node.js',
  'No-Code Tooling',
  'Streamguys',
  'Enova',
  'Tech Geeks of Pakistan',
]

export default function Marquee() {
  const topTrackRef = useRef(null)
  const bottomTrackRef = useRef(null)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 80, damping: 30 })

  useMotionValueEvent(smoothVelocity, 'change', (v) => {
    const factor = Math.min(1 + Math.abs(v) / 1200, 4)
    if (topTrackRef.current)
      topTrackRef.current.style.animationDuration = `${28 / factor}s`
    if (bottomTrackRef.current)
      bottomTrackRef.current.style.animationDuration = `${22 / factor}s`
  })

  return (
    <div
      className="overflow-hidden"
      style={{ borderTop: '2px solid #CBD5E1', borderBottom: '2px solid #CBD5E1' }}
    >
      {/* Top track — left to right */}
      <div
        ref={topTrackRef}
        className="flex whitespace-nowrap marquee-track"
        style={{ padding: '11px 0', borderBottom: '1px solid #E2E8F0' }}
      >
        {[...topItems, ...topItems].map((item, i) => (
          <span
            key={i}
            style={{
              padding: '0 2.8rem',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#84CC16',
            }}
          >
            {item}
            <span style={{ color: '#CBD5E1', marginLeft: '2.8rem' }}>·</span>
          </span>
        ))}
      </div>

      {/* Bottom track — right to left */}
      <div
        ref={bottomTrackRef}
        className="flex whitespace-nowrap marquee-track-reverse"
        style={{ padding: '11px 0' }}
      >
        {[...bottomItems, ...bottomItems].map((item, i) => (
          <span
            key={i}
            style={{
              padding: '0 2.8rem',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#94A3B8',
            }}
          >
            {item}
            <span style={{ color: '#E2E8F0', marginLeft: '2.8rem' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
