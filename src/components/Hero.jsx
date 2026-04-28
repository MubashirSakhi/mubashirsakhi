import { motion } from 'framer-motion'
import photo from '../assets/mubashir.png'

const easeOut = [0.22, 1, 0.36, 1]

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

export default function Hero() {
  return (
    <div
      className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden px-8 pt-20 pb-8 md:px-12"
      style={{ backgroundColor: '#080808' }}
    >

      {/* Main Content */}
      <div className="relative grid w-full max-w-[1100px] flex-grow grid-cols-1 items-center md:grid-cols-3">

        {/* Left — intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: easeOut }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <span className="section-label">Mubashir Sakhi</span>
          <p className="mx-auto max-w-[220px] text-[0.875rem] leading-relaxed md:mx-0" style={{ color: '#888888' }}>
            Founder across live events, renewable energy, and technology.
          </p>
          <a
            href="mailto:mubashirsakhi@gmail.com"
            className="mt-4 inline-block text-[0.875rem] font-medium transition-colors duration-200 hover:text-gold"
            style={{ color: '#f0f0f0' }}
          >
            Get in touch →
          </a>
        </motion.div>

        {/* Center — photo + gold circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[360px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="absolute z-0 h-[280px] w-[280px] rounded-full md:h-[360px] md:w-[360px] lg:h-[440px] lg:w-[440px]"
            style={{ backgroundColor: '#f1b503' }}
          />
          <motion.img
            src={photo}
            alt="Mubashir Sakhi"
            className="relative z-10 w-52 md:w-60 lg:w-72 scale-150 object-cover object-top"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.4 }}
          />
        </div>

        {/* Right — large serif text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: easeOut }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1
            style={{
              fontFamily: 'Times New Roman, serif',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              fontSize: 'clamp(4rem, 9vw, 7.5rem)',
              color: '#f0f0f0',
            }}
          >
            BUILD.
            <br />
            <span style={{ color: '#f1b503' }}>GROW.</span>
          </h1>
        </motion.div>

      </div>

      {/* Footer — social + location */}
      <footer className="z-30 flex w-full max-w-[1100px] items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: easeOut }}
          className="flex items-center gap-5"
        >
          {[
            { href: 'https://linkedin.com/in/mubashirsakhi', Icon: LinkedInIcon },
            { href: 'https://github.com/mubashirsakhi',     Icon: GitHubIcon },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-[#f0f0f0]"
              style={{ color: '#555555' }}
            >
              <Icon />
            </a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, ease: easeOut }}
          className="text-[13px] font-medium"
          style={{ color: '#555555' }}
        >
          Karachi, Pakistan
        </motion.div>
      </footer>

    </div>
  )
}
