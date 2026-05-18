import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

const tracks = [
  {
    num: '01',
    title: 'Live Events — Streamguys',
    body: "Most people don't attend your event. They watch it. We built Streamguys around that reality. We capture, edit, and publish in real-time — while your event is still happening. First post goes live in under 60 minutes. By the time the session ends, your content is already out.",
    metrics: [
      { n: '120+', l: 'Events'      },
      { n: '8.4M', l: 'Impressions' },
      { n: '<60m', l: 'First Post'  },
    ],
    link: { label: 'streamguys.pk', href: 'http://www.streamguys.pk' },
  },
  {
    num: '02',
    title: 'Energy — Enova',
    body: "Pakistan's energy market is unstable. That's exactly why it's interesting. With Enova I'm building on the supply side — sourcing from China, building supplier relationships, supplying retailers and installers, creating demand through digital funnels. Margin, logistics, timing.",
    link: { label: 'enova.pk', href: 'http://www.enova.pk' },
  },
  {
    num: '03',
    title: 'Technology — Execution Layer',
    body: "I use tech to remove bottlenecks — APIs, automation, internal tools. No-code where it works, custom systems where it matters. For early-stage teams: what to build, what to skip, how to move faster this week.",
    link: { label: 'github.com/mubashirsakhi', href: 'http://github.com/mubashirsakhi' },
  },
]

function Card({ track, i }) {
  const cardRef = useRef(null)
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false })

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const ghostY = useTransform(scrollYProgress, [0, 1], ['30px', '-30px'])

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), { stiffness: 260, damping: 28 })
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]),  { stiffness: 260, damping: 28 })

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    rawX.set(x)
    rawY.set(y)
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  function handleMouseLeave() {
    rawX.set(0)
    rawY.set(0)
    setSpot(s => ({ ...s, visible: false }))
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden p-8 md:p-10 cursor-default"
      style={{
        border: '3px solid #E2E8F0',
        backgroundColor: '#FFFEF9',
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
      whileHover={{ backgroundColor: '#0F172A', borderColor: '#0F172A' }}
    >
      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          zIndex: 0,
          opacity: spot.visible ? 1 : 0,
          background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, rgba(132,204,22,0.18), transparent 70%)`,
        }}
      />

      {/* Ghost number — parallax watermark */}
      <motion.div
        aria-hidden="true"
        className="absolute right-0 top-0 pointer-events-none select-none
                   text-[#EDF7DC] group-hover:text-white transition-colors duration-300"
        style={{
          zIndex: 0,
          fontSize: 'clamp(5rem, 11vw, 8rem)',
          fontFamily: 'Archivo, sans-serif',
          fontWeight: 700,
          lineHeight: 1,
          opacity: 0.9,
          y: ghostY,
        }}
      >
        {track.num}
      </motion.div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <span
          className="block mb-3 text-[#84CC16] group-hover:text-white transition-colors duration-200"
          style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          {track.num}
        </span>

        <h2
          className="text-[#0F172A] group-hover:text-white transition-colors duration-200 mb-4"
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          {track.title}
        </h2>

        <div className="bg-[#E2E8F0] group-hover:bg-[#334155] transition-colors duration-200 mb-4" style={{ height: '1px' }} />

        <p className="text-[#64748B] group-hover:text-[#94A3B8] transition-colors duration-200 leading-relaxed mb-4" style={{ fontSize: '0.875rem' }}>
          {track.body}
        </p>

        {/* Inline metrics strip (Streamguys only) */}
        {track.metrics && (
          <div className="flex gap-0 mb-5" style={{ flexWrap: 'wrap' }}>
            {track.metrics.map(({ n, l }) => (
              <div
                key={l}
                className="border border-[#E2E8F0] group-hover:border-[#334155] transition-colors duration-200"
                style={{ padding: '10px 16px', minWidth: '76px', textAlign: 'center', marginRight: '-1px', marginBottom: '-1px' }}
              >
                <div
                  className="group-hover:text-[#84CC16] transition-colors duration-200"
                  style={{ fontSize: '1.05rem', fontFamily: 'Archivo, sans-serif', fontWeight: 700, color: '#84CC16', lineHeight: 1 }}
                >
                  {n}
                </div>
                <div
                  className="group-hover:text-[#94A3B8] transition-colors duration-200"
                  style={{ fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748B', marginTop: '4px' }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        )}

        {track.link && (
          <a
            href={track.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#65A30D] group-hover:text-[#84CC16] transition-colors duration-200 cursor-pointer"
            style={{ fontSize: '13px' }}
          >
            {track.link.label} →
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function WhatIDo() {
  return (
    <section style={{ borderTop: '1px solid #E2E8F0' }}>

      <div className="px-8 md:px-12 pt-20 pb-10">
        <div className="max-w-[1100px] mx-auto flex items-end justify-between flex-wrap gap-4">
          <span className="section-label" style={{ marginBottom: 0 }}>What I Do</span>
          <p style={{ fontSize: '0.8rem', color: '#64748B', maxWidth: '340px', textAlign: 'right', lineHeight: 1.6 }}>
            Three operating tracks. Each one active, each one compounding.
          </p>
        </div>
      </div>

      <div className="px-8 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tracks.map((track, i) => (
            <Card key={track.num} track={track} i={i} />
          ))}
        </div>
      </div>

    </section>
  )
}
