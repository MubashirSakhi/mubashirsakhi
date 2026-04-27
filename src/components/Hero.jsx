import { motion } from 'framer-motion'

const HERO_IMG = 'https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/602ff5261a3a39f325b92021_Screen%20Shot%202021-02-19%20at%2010.27.28%20PM.png'

const chips = [
  { label: '12K+ Community', top: '8%',  right: '-8%', rotate: '5deg',  delay: 0 },
  { label: '$10K Raised',    bottom: '12%', right: '-6%', rotate: '-3deg', delay: 0.4 },
  { label: '3 Ventures',     top: '42%',  left: '-10%', rotate: '3deg',  delay: 0.8 },
]

const stagger = (i) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-12"
      style={{ background: 'linear-gradient(135deg, #0d1130 0%, #23286b 100%)' }}
    >
      <div className="max-w-[940px] mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="flex flex-col items-start">
            <motion.span
              {...stagger(0)}
              className="mb-5 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase"
              style={{ backgroundColor: 'rgba(241,181,3,0.15)', color: '#f1b503', border: '1px solid rgba(241,181,3,0.3)' }}
            >
              Based in Karachi, Pakistan
            </motion.span>

            <motion.h1
              {...stagger(1)}
              className="text-white mb-5"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontFamily: 'Times New Roman, serif', lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              I build, operate,<br />and ship.
            </motion.h1>

            <motion.p
              {...stagger(2)}
              className="mb-8 text-[1rem] leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '420px' }}
            >
              Multi-track founder across live event production (Streamguys), wholesale renewable energy, and JavaScript development. I help startups launch fast without needing a tech team.
            </motion.p>

            <motion.a
              {...stagger(3)}
              href="#contact"
              className="primary-button"
            >
              Lets Connect
            </motion.a>
          </div>

          {/* Right — photo + chips */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <img
              src={HERO_IMG}
              alt="Mubashir Sakhi"
              className="w-full rounded-lg"
              style={{ filter: 'brightness(0.95)' }}
            />

            {chips.map((chip) => (
              <motion.div
                key={chip.label}
                className="absolute"
                style={{ top: chip.top, bottom: chip.bottom, right: chip.right, left: chip.left, rotate: chip.rotate }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { delay: 0.6 + chip.delay, duration: 0.4 },
                  scale:   { delay: 0.6 + chip.delay, duration: 0.4 },
                  y: { delay: 0.6 + chip.delay, duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <span
                  className="whitespace-nowrap text-[12px] font-bold px-3 py-2 rounded-full"
                  style={{ backgroundColor: '#fff', color: '#23286b', boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
                >
                  {chip.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
