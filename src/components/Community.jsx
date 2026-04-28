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
    <section className="px-8 py-32" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-[1100px] mx-auto">
        <span className="section-label">Community</span>

        <div className="grid md:grid-cols-2 gap-24">

          {/* Community number */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              ref={countRef}
              style={{
                fontSize: 'clamp(4rem, 9vw, 7rem)',
                fontFamily: 'Times New Roman, serif',
                fontWeight: 700,
                color: '#f1b503',
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}
            >
              {count.toLocaleString()}+
            </div>
            <p className="mt-4 text-[1rem]" style={{ color: '#f0f0f0' }}>
              Members in Tech Geeks of Pakistan
            </p>
            <p className="text-[0.875rem] mt-1" style={{ color: '#555555' }}>
              Facebook community for Pakistani tech professionals
            </p>
            <a
              href="https://www.facebook.com/groups/tgpak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-[13px] font-medium hover:text-gold transition-colors duration-200"
              style={{ color: '#f0f0f0' }}
            >
              Visit community →
            </a>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-6" style={{ color: '#444444' }}>
              Certifications
            </p>
            <div className="flex flex-col gap-0">
              {certs.map((cert) => (
                <div
                  key={cert}
                  className="py-4 text-[0.95rem]"
                  style={{
                    borderBottom: '1px solid #1a1a1a',
                    color: '#888888',
                  }}
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
