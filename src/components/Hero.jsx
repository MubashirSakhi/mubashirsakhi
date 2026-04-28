import { motion } from 'framer-motion'
import photo from '../assets/mubashir.png'

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
  fontFamily: 'Times New Roman, serif',
  fontWeight: 700,
  letterSpacing: '-0.04em',
  lineHeight: 0.88,
  color: '#f0f0f0',
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#080808' }}
    >
      {/* Photo — bleeds to right viewport edge */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-[42vw] hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <img
          src={photo}
          alt="Mubashir Sakhi"
          className="w-full h-full object-cover object-top grayscale"
        />
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#080808] to-transparent" />
      </motion.div>

      {/* Left content */}
      <div className="relative z-10 flex flex-col min-h-screen px-8 md:px-12 pt-24 pb-8">

        {/* Name block — grows to center vertically */}
        <div className="flex-grow flex flex-col justify-center">

          {/* MUBASHIR — slides from left */}
          <div className="overflow-hidden">
            <motion.div
              style={nameStyle}
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
            >
              MUBASHIR
            </motion.div>
          </div>

          {/* Full-bleed rule */}
          <motion.div
            className="-mx-8 md:-mx-12 origin-left my-4"
            style={{ height: '1px', backgroundColor: '#2a2a2a' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
          />

          {/* SAKHI — slides from right */}
          <div className="overflow-hidden">
            <motion.div
              style={{ ...nameStyle, textAlign: 'right' }}
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
            >
              SAKHI
            </motion.div>
          </div>

          {/* Track labels */}
          <motion.div
            className="flex flex-wrap gap-6 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444444' }}
          >
            {[['01', 'Live Events'], ['02', 'Energy'], ['03', 'Technology']].map(([num, label]) => (
              <span key={num}>
                <span style={{ color: '#f1b503' }}>{num}</span>
                {' — '}{label}
              </span>
            ))}
          </motion.div>

        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555555' }}>
            Karachi, Pakistan
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
                className="transition-colors duration-200 hover:text-[#f0f0f0]"
                style={{ color: '#555555' }}
              >
                <Icon />
              </a>
            ))}
            <a
              href="mailto:mubashirsakhi@gmail.com"
              className="transition-colors duration-200 hover:text-[#f0f0f0]"
              style={{ fontSize: '13px', color: '#555555' }}
            >
              Get in touch →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
