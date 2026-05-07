import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ease = [0.33, 1, 0.68, 1]

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const nameStyle = {
  fontSize: 'clamp(3.5rem, 10vw, 9rem)',
  fontFamily: 'Archivo, sans-serif',
  fontWeight: 700,
  letterSpacing: '-0.04em',
  lineHeight: 0.88,
  color: '#0F172A',
}

const stats = [
  { num: '12K+', label: 'Community' },
  { num: '$10K', label: 'Raised'    },
  { num: '5K+',  label: 'Vehicles'  },
  { num: '3',    label: 'Ventures'  },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const mubashirX = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const sakhiX    = useTransform(scrollYProgress, [0, 1], ['0%',  '18%'])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#FFFEF9' }}
    >

<div className="relative z-10 flex flex-col min-h-screen px-8 md:px-12 pt-24 pb-8">
        <div className="flex-grow flex flex-col justify-center">

          {/* MUBASHIR */}
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

          {/* Pink rule — 2px, full bleed */}
          <motion.div
            className="-mx-8 md:-mx-12 origin-left my-4"
            style={{ height: '2px', backgroundColor: '#84CC16' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
          />

          {/* SAKHI */}
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
            <p style={{ fontFamily: 'Caveat, cursive', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: '#0F172A', fontWeight: 600, letterSpacing: '0.01em', marginBottom: '8px' }}>
              Operator. Builder. In the trenches.
            </p>
            <p style={{ fontSize: '0.875rem', color: '#64748B', maxWidth: '480px', lineHeight: 1.6 }}>
              I build systems that move — live events, energy supply chains, and tech that actually gets used.
            </p>
          </motion.div>

          {/* Brutalist stat grid */}
          <motion.div
            className="flex flex-wrap mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            {stats.map(({ num, label }) => (
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
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748B', marginBottom: '10px' }}>
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
              { href: 'https://linkedin.com/in/mubashirsakhi', Icon: LinkedInIcon },
              { href: 'https://github.com/mubashirsakhi',     Icon: GitHubIcon },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
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
    </section>
  )
}
