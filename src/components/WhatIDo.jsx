import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const tracks = [
  {
    num: '01',
    title: 'Live Events — Streamguys',
    body: "Most people don't attend your event. They watch it. We built Streamguys around that shift. We don't just livestream — we run the full attention engine: capture, edit, publish, and distribute in real-time while your event is still happening. By the time the session ends, your content is already out.",
    link: { label: 'streamguys.pk', href: 'http://www.streamguys.pk' },
  },
  {
    num: '02',
    title: 'Energy — Enova',
    body: "Pakistan's energy market is unstable. That's exactly why it's interesting. With Enova I'm building on the supply side — sourcing from China, building supplier relationships, supplying retailers and installers, creating demand through digital funnels. Margin, logistics, and timing. Most people don't see that layer. I operate in it.",
    link: null,
  },
  {
    num: '03',
    title: 'Technology — Execution Layer',
    body: "I don't build tech for the sake of it. I use it to remove bottlenecks — APIs, automation, internal tools. No-code where it works, custom systems where it matters. For early-stage teams: what to build, what to skip, how to move faster this week.",
    link: { label: 'github.com/mubashirsakhi', href: 'http://github.com/mubashirsakhi' },
  },
]

const ease = [0.33, 1, 0.68, 1]

function RowWithParallax({ track, i }) {
  const rowRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  })
  const ghostY = useTransform(scrollYProgress, [0, 1], ['40px', '-40px'])

  return (
    <motion.div
      ref={rowRef}
      key={track.num}
      className="relative overflow-hidden px-8 md:px-12 py-14"
      style={{ borderBottom: '1px solid #E2E8F0' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
      whileHover={{ backgroundColor: '#F5FAF0' }}
    >
      {/* Ghost number — parallax watermark */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-0.02em',
          top: '-0.1em',
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          fontFamily: 'Archivo, sans-serif',
          fontWeight: 700,
          color: '#EDF7DC',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          y: ghostY,
        }}
      >
        {track.num}
      </motion.div>

      <div className="max-w-[1100px] mx-auto relative">

        {/* Index label */}
        <span
          style={{
            display: 'block',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#84CC16',
            marginBottom: '12px',
          }}
        >
          {track.num}
        </span>

        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: '#0F172A',
            marginBottom: '20px',
          }}
        >
          {track.title}
        </h2>

        {/* Animated rule */}
        <motion.div
          className="-mx-8 md:-mx-12 origin-left"
          style={{ height: '1px', backgroundColor: '#E2E8F0', marginBottom: '20px' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
        />

        {/* Body + link */}
        <div className="md:pl-[clamp(2rem,5vw,4rem)]">
          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: '0.875rem', color: '#64748B', maxWidth: '560px' }}
          >
            {track.body}
          </p>
          {track.link && (
            <a
              href={track.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ fontSize: '13px', color: '#65A30D' }}
              onMouseEnter={e => e.currentTarget.style.color = '#0F172A'}
              onMouseLeave={e => e.currentTarget.style.color = '#65A30D'}
            >
              {track.link.label} →
            </a>
          )}
        </div>

      </div>
    </motion.div>
  )
}

export default function WhatIDo() {
  return (
    <section style={{ borderTop: '1px solid #E2E8F0' }}>
      {tracks.map((track, i) => (
        <RowWithParallax key={track.num} track={track} i={i} />
      ))}
    </section>
  )
}
