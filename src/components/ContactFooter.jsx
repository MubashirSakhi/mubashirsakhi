import { motion } from 'framer-motion'

const ctaStyle = {
  fontSize: 'clamp(3rem, 7vw, 6rem)',
  fontFamily: 'Times New Roman, serif',
  fontWeight: 700,
  letterSpacing: '-0.03em',
  lineHeight: 1,
}

export default function ContactFooter() {
  return (
    <footer style={{ borderTop: '1px solid #1a1a1a' }}>

      {/* CTA */}
      <div className="px-8 md:px-12 py-24">
        <div className="max-w-[1100px] mx-auto">

          {/* LET'S WORK — from left */}
          <div className="overflow-hidden">
            <motion.div
              style={{ ...ctaStyle, color: '#f0f0f0' }}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            >
              LET'S WORK
            </motion.div>
          </div>

          {/* TOGETHER. — from right, gold */}
          <div className="overflow-hidden">
            <motion.div
              style={{ ...ctaStyle, color: '#f1b503', textAlign: 'right' }}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            >
              TOGETHER.
            </motion.div>
          </div>

          {/* Rule */}
          <motion.div
            className="-mx-8 md:-mx-12 origin-left my-8"
            style={{ height: '1px', backgroundColor: '#2a2a2a' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          />

          {/* Email */}
          <motion.a
            href="mailto:mubashirsakhi@gmail.com"
            className="inline-block transition-colors duration-200"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
              color: '#f1b503',
              fontWeight: 500,
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
          >
            mubashirsakhi@gmail.com →
          </motion.a>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-12 py-6" style={{ borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <span style={{ fontSize: '13px', color: '#333333' }}>
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
                className="hover:text-gold transition-colors duration-200"
                style={{ fontSize: '13px', color: '#444444' }}
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
