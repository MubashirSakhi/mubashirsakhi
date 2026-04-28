import { motion } from 'framer-motion'

export default function ContactFooter() {
  return (
    <footer style={{ borderTop: '1px solid #1a1a1a' }}>

      {/* CTA */}
      <div className="px-8 py-32">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                fontFamily: 'Times New Roman, serif',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#f0f0f0',
                marginBottom: '2rem',
              }}
            >
              Let's work<br />together.
            </div>
            <a
              href="mailto:mubashirsakhi@gmail.com"
              className="inline-block text-[1rem] font-medium px-7 py-4 transition-all duration-200"
              style={{
                backgroundColor: '#f1b503',
                color: '#080808',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d59f00'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f1b503'}
            >
              mubashirsakhi@gmail.com
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 py-6" style={{ borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <span className="text-[13px]" style={{ color: '#333333' }}>
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
                className="text-[13px] hover:text-gold transition-colors duration-200"
                style={{ color: '#444444' }}
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
