import { useState } from 'react'
import { motion } from 'framer-motion'

const ctaStyle = {
  fontSize: 'clamp(3rem, 7vw, 6rem)',
  fontFamily: 'Archivo, sans-serif',
  fontWeight: 700,
  letterSpacing: '-0.03em',
  lineHeight: 1,
}

const inputBase = {
  width: '100%',
  backgroundColor: 'transparent',
  border: '2px solid #CBD5E1',
  padding: '14px 16px',
  fontSize: '0.875rem',
  color: '#0F172A',
  outline: 'none',
  display: 'block',
  fontFamily: 'inherit',
  marginTop: '-2px',
}

const labelStyle = {
  fontSize: '10px',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#64748B',
  display: 'block',
  marginBottom: '8px',
  marginTop: '20px',
}

export default function ContactFooter() {
  const [name, setName]       = useState('')
  const [message, setMessage] = useState('')

  const handleFocus = e => { e.target.style.borderColor = '#84CC16' }
  const handleBlur  = e => { e.target.style.borderColor = '#CBD5E1' }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${name || 'your site'}`)
    const body    = encodeURIComponent(message)
    window.location.href = `mailto:mubashirsakhi@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <footer style={{ borderTop: '1px solid #E2E8F0' }}>

      {/* Contact form */}
      <div className="px-8 md:px-12 py-20" style={{ borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — intent list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Get in touch</span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#0F172A',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
              Have something<br />to build?
            </h2>
            <p style={{ fontFamily: 'Caveat, cursive', fontSize: '1.35rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '24px' }}>
              No long decks. No theory. Just figuring it out and moving.
            </p>
            {[
              'Running an event and want real-time attention',
              'Building in energy or distribution',
              'Stuck on tech decisions',
            ].map((line) => (
              <p key={line} style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 2 }}>
                <span style={{ color: '#84CC16', marginRight: '10px' }}>→</span>{line}
              </p>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <label htmlFor="contact-name" style={{ ...labelStyle, marginTop: 0 }}>Name</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                style={{ ...inputBase, marginTop: 0 }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="contact-message" style={labelStyle}>Message</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                rows={5}
                required
                style={{ ...inputBase, resize: 'none' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full cursor-pointer"
              style={{
                backgroundColor: '#84CC16',
                border: '2px solid #84CC16',
                marginTop: '-2px',
                padding: '16px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#FFFEF9',
                display: 'block',
                fontFamily: 'inherit',
              }}
              whileHover={{ backgroundColor: '#0F172A', borderColor: '#0F172A' }}
              transition={{ duration: 0.15 }}
            >
              Send it →
            </motion.button>
          </motion.form>

        </div>
      </div>

      {/* LET'S WORK TOGETHER */}
      <div className="px-8 md:px-12 py-24">
        <div className="max-w-[1100px] mx-auto">

          <div className="overflow-hidden">
            <motion.div
              style={{ ...ctaStyle, color: '#0F172A' }}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            >
              LET'S WORK
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              style={{ ...ctaStyle, color: '#84CC16', textAlign: 'right' }}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            >
              TOGETHER.
            </motion.div>
          </div>

          <motion.div
            className="-mx-8 md:-mx-12 origin-left my-8"
            style={{ height: '1px', backgroundColor: '#E2E8F0' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          />

          <motion.a
            href="mailto:mubashirsakhi@gmail.com"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
              color: '#65A30D',
              fontWeight: 500,
              display: 'inline-block',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ opacity: 0.7 }}
          >
            mubashirsakhi@gmail.com →
          </motion.a>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-12 py-6" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <span style={{ fontSize: '13px', color: '#94A3B8' }}>
            © {new Date().getFullYear()} Mubashir Sakhi
          </span>
          <div className="flex gap-6">
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/mubashirsakhi' },
              { label: 'GitHub',   href: 'http://github.com/mubashirsakhi' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ fontSize: '13px', color: '#64748B' }}
                onMouseEnter={e => e.currentTarget.style.color = '#0F172A'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
