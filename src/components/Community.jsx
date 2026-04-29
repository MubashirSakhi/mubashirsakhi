import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const certs = [
  'Growth Driven Design',
  'Digital Garage — Google',
  'Data Structures & Algorithms',
  'Meditation & Mindfulness',
]

export default function Community() {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const target = 12000
    const duration = 1600
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(ease * target))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView])

  return (
    <section className="px-8 md:px-12 py-20" style={{ borderTop: '1px solid #E2E8F0' }}>
      <div className="max-w-[1100px] mx-auto">

        {/* Enormous number */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div
            ref={countRef}
            style={{
              fontSize: 'clamp(5rem, 18vw, 16rem)',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.85,
              color: '#84CC16',
            }}
          >
            {count.toLocaleString()}+
          </div>
        </motion.div>

        {/* Bottom row — label + certs */}
        <motion.div
          className="flex justify-between items-end flex-wrap gap-8 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#64748B',
              marginBottom: '12px',
            }}>
              Members / Tech Geeks of Pakistan
            </p>
            <p style={{ fontFamily: 'Caveat, cursive', fontSize: '1.3rem', color: '#64748B', marginBottom: '12px', lineHeight: 1.5 }}>
              No noise. Just builders. People share work, collaborate, and actually ship things.
            </p>
            <a
              href="https://www.facebook.com/groups/tgpak"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ fontSize: '13px', color: '#65A30D' }}
              onMouseEnter={e => e.currentTarget.style.color = '#0F172A'}
              onMouseLeave={e => e.currentTarget.style.color = '#65A30D'}
            >
              Visit community →
            </a>
          </div>

          <div style={{ maxWidth: '300px' }}>
            <p style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#64748B',
              marginBottom: '16px',
            }}>
              Certifications
            </p>
            {certs.map((cert) => (
              <div
                key={cert}
                className="py-3 text-[0.875rem]"
                style={{ borderBottom: '1px solid #E2E8F0', color: '#64748B' }}
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
