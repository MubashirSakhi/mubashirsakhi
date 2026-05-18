import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

const ease = [0.33, 1, 0.68, 1]

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

function FloatCard({ children, style, parallaxX, parallaxY, delay = 0 }) {
  return (
    <motion.div style={{ x: parallaxX, y: parallaxY }}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay, ease: [0.33, 1, 0.68, 1] }}
        className="float-card"
        style={{
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          background: 'rgba(255, 254, 249, 0.86)',
          border: '1px solid rgba(203, 213, 225, 0.8)',
          borderRadius: '18px',
          boxShadow:
            '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)',
          ...style,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const nameStyle = {
  fontSize: 'clamp(3.5rem, 10vw, 9rem)',
  fontFamily: 'Archivo, sans-serif',
  fontWeight: 700,
  letterSpacing: '-0.04em',
  lineHeight: 0.88,
  color: '#0F172A',
}

export default function Hero() {
  const sceneRef = useRef(null)
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const mouseRawX = useMotionValue(0)
  const mouseRawY = useMotionValue(0)
  const smoothX = useSpring(mouseRawX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseRawY, { stiffness: 50, damping: 20 })

  // Three parallax depth layers (shallow → deep)
  const xL1 = useTransform(smoothX, [-0.5, 0.5], [-8,  8])
  const yL1 = useTransform(smoothY, [-0.5, 0.5], [-6,  6])
  const xL2 = useTransform(smoothX, [-0.5, 0.5], [-18, 18])
  const yL2 = useTransform(smoothY, [-0.5, 0.5], [-12, 12])
  const xL3 = useTransform(smoothX, [-0.5, 0.5], [-30, 30])
  const yL3 = useTransform(smoothY, [-0.5, 0.5], [-20, 20])

  // Scroll parallax for name split
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const mubashirX = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const sakhiX    = useTransform(scrollYProgress, [0, 1], ['0%',  '18%'])

  function handleMouseMove(e) {
    if (!sceneRef.current || prefersReducedMotion) return
    const r = sceneRef.current.getBoundingClientRect()
    mouseRawX.set((e.clientX - r.left) / r.width  - 0.5)
    mouseRawY.set((e.clientY - r.top)  / r.height - 0.5)
  }

  function handleMouseLeave() {
    mouseRawX.set(0)
    mouseRawY.set(0)
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#FFFEF9' }}
    >

      {/* ── Ambient background ─────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Green glow — top right */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '55%', height: '65%',
          background: 'radial-gradient(ellipse at center, rgba(132,204,22,0.08) 0%, transparent 65%)',
        }} />
        {/* Blue glow — bottom left */}
        <div style={{
          position: 'absolute', bottom: '5%', left: '-5%',
          width: '40%', height: '50%',
          background: 'radial-gradient(ellipse at center, rgba(66,140,251,0.05) 0%, transparent 65%)',
        }} />

        {/* 3D Perspective grid — lower-right quadrant */}
        <svg
          aria-hidden="true"
          className="hidden md:block"
          style={{ position: 'absolute', bottom: 0, right: 0, width: '50%', height: '60%', opacity: 0.28 }}
          viewBox="0 0 500 400"
          fill="none"
          preserveAspectRatio="xMaxYMax meet"
        >
          <defs>
            <linearGradient id="gfade" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%"   stopColor="#CBD5E1" stopOpacity="0" />
              <stop offset="45%"  stopColor="#CBD5E1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Converging vertical lines, vanishing at (250, 0) */}
          {[-225, -160, -105, -58, -22, 0, 22, 58, 105, 160, 225].map((offset, i) => (
            <line
              key={`v${i}`}
              x1={250} y1={0}
              x2={250 + offset} y2={400}
              stroke="url(#gfade)" strokeWidth={0.75}
            />
          ))}
          {/* Perspective-spaced horizontal cross-lines */}
          {[0.04, 0.1, 0.2, 0.34, 0.52, 0.72, 1.0].map((t, i) => {
            const y  = 400 * t
            const hw = 250 * t
            return (
              <line
                key={`h${i}`}
                x1={250 - hw} y1={y}
                x2={250 + hw} y2={y}
                stroke="url(#gfade)" strokeWidth={0.75}
              />
            )
          })}
        </svg>
      </div>

      {/* ── Mouse-tracking 3D scene ─────────────────────────────── */}
      <div
        ref={sceneRef}
        className="relative min-h-screen"
        style={{ zIndex: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        {/* Floating card 1 — 120+ Events (deepest layer = most movement) */}
        <div
          className="hidden md:block"
          style={{ position: 'absolute', top: '15%', right: '6%', zIndex: 8 }}
        >
          <FloatCard parallaxX={xL3} parallaxY={yL3} delay={1.6} style={{ padding: '18px 22px', minWidth: '152px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '6px' }}>
              Events Covered
            </p>
            <div style={{ fontSize: '2.3rem', fontFamily: 'Archivo, sans-serif', fontWeight: 700, color: '#84CC16', lineHeight: 1 }}>
              120+
            </div>
            <p style={{ fontSize: '11px', color: '#64748B', marginTop: '5px', marginBottom: 0 }}>
              via Streamguys
            </p>
          </FloatCard>
        </div>

        {/* Floating card 2 — 8.4M Impressions (mid layer) */}
        <div
          className="hidden md:block"
          style={{ position: 'absolute', top: '44%', right: '4%', zIndex: 7 }}
        >
          <FloatCard parallaxX={xL2} parallaxY={yL2} delay={1.9} style={{ padding: '18px 22px', minWidth: '162px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '6px' }}>
              Impressions
            </p>
            <div style={{ fontSize: '2.3rem', fontFamily: 'Archivo, sans-serif', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>
              8.4M
            </div>
            <p style={{ fontSize: '11px', color: '#64748B', marginTop: '5px', marginBottom: 0 }}>
              real-time content
            </p>
          </FloatCard>
        </div>

        {/* Floating card 3 — First post (shallow layer = least movement) */}
        <div
          className="hidden lg:block"
          style={{ position: 'absolute', bottom: '26%', right: '12%', zIndex: 6 }}
        >
          <FloatCard parallaxX={xL1} parallaxY={yL1} delay={2.1} style={{ padding: '16px 20px', minWidth: '142px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '6px' }}>
              First Post Live
            </p>
            <div style={{ fontSize: '2rem', fontFamily: 'Archivo, sans-serif', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>
              &lt;60 min
            </div>
            <p style={{ fontSize: '11px', color: '#64748B', marginTop: '5px', marginBottom: 0 }}>
              into the event
            </p>
          </FloatCard>
        </div>

        {/* ── Main content ─────────────────────────────────────── */}
        <div
          className="relative flex flex-col min-h-screen px-8 md:px-12 pt-24 pb-8"
          style={{ zIndex: 10 }}
        >
          <div className="flex-grow flex flex-col justify-center">

            {/* MUBASHIR — slides in from left */}
            <motion.div className="overflow-hidden" style={{ x: mubashirX }}>
              <motion.div
                style={nameStyle}
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
              >
                MUBASHIR
              </motion.div>
            </motion.div>

            {/* Full-bleed lime rule */}
            <motion.div
              className="-mx-8 md:-mx-12 origin-left my-4"
              style={{ height: '2px', backgroundColor: '#84CC16' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
            />

            {/* SAKHI — slides in from right */}
            <motion.div className="overflow-hidden" style={{ x: sakhiX }}>
              <motion.div
                style={{ ...nameStyle, textAlign: 'right' }}
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.9, delay: 0.35, ease }}
              >
                SAKHI
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <p style={{
                fontFamily: 'Caveat, cursive',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                color: '#0F172A',
                fontWeight: 600,
                letterSpacing: '0.01em',
                marginBottom: '8px',
              }}>
                Operator. Builder. In the trenches.
              </p>
              <p style={{ fontSize: '0.875rem', color: '#64748B', maxWidth: '480px', lineHeight: 1.6 }}>
                I build systems that move — live events, energy supply chains, and tech that actually gets used.
              </p>
            </motion.div>

            {/* Stat grid */}
            <motion.div
              className="flex flex-wrap mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15 }}
            >
              {[
                { num: '120+', label: 'Events'      },
                { num: '8.4M', label: 'Impressions' },
                { num: '12K+', label: 'Community'   },
                { num: '3',    label: 'Ventures'    },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  style={{
                    border: '2px solid #CBD5E1',
                    padding: '16px 28px',
                    marginRight: '-2px',
                    marginBottom: '-2px',
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 700,
                    color: '#84CC16',
                    lineHeight: 1,
                  }}>
                    {num}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#64748B',
                    marginTop: '6px',
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right now */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.28 }}
            >
              <p style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#64748B',
                marginBottom: '10px',
              }}>
                Right now
              </p>
              {[
                'Running real-time event production across Pakistan',
                'Scaling Enova — sourcing, funnels, distribution',
                'Helping startups ship faster',
              ].map((line) => (
                <p key={line} style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.8 }}>
                  <span style={{ color: '#84CC16', marginRight: '8px' }}>→</span>{line}
                </p>
              ))}
            </motion.div>

          </div>

          {/* Bottom bar */}
          <motion.div
            className="flex items-center justify-between flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.45 }}
          >
            <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B' }}>
              Karachi — Always building
            </span>
            <div className="flex items-center gap-5">
              {[
                { href: 'https://linkedin.com/in/mubashirsakhi', Icon: LinkedInIcon, label: 'LinkedIn' },
                { href: 'https://github.com/mubashirsakhi',     Icon: GitHubIcon,   label: 'GitHub'   },
              ].map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors duration-200 cursor-pointer"
                  style={{ color: '#64748B' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#0F172A'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
                >
                  <Icon />
                </a>
              ))}
              <motion.a
                href="mailto:mubashirsakhi@gmail.com"
                className="cursor-pointer"
                style={{
                  fontSize: '13px',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  padding: '8px 16px',
                  display: 'inline-block',
                }}
                whileHover={{ backgroundColor: '#84CC16', color: '#FFFEF9', borderColor: '#84CC16' }}
                transition={{ duration: 0.15 }}
              >
                Get in touch →
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
