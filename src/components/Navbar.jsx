import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const links = ['Home', 'About', 'Services', 'Blog', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 20)
  })

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 py-4"
      animate={scrolled
        ? { backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0 1px 12px rgba(0,0,0,0.08)' }
        : { backgroundColor: 'rgba(255,255,255,0)', boxShadow: '0 0px 0px rgba(0,0,0,0)' }
      }
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div className="max-w-[940px] mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="font-bold text-[1.2em] no-underline transition-colors duration-200"
          style={{ color: scrolled ? '#23286b' : '#ffffff' }}
        >
          Mubashir Sakhi
        </a>
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a
              key={link}
              href="#"
              className="font-medium no-underline transition-colors duration-200"
              style={{ color: scrolled ? '#23286b' : 'rgba(255,255,255,0.85)' }}
            >
              {link}
            </a>
          ))}
        </div>
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-[2px] transition-colors duration-200" style={{ backgroundColor: scrolled ? '#23286b' : '#ffffff' }} />
          <span className="block w-6 h-[2px] transition-colors duration-200" style={{ backgroundColor: scrolled ? '#23286b' : '#ffffff' }} />
          <span className="block w-6 h-[2px] transition-colors duration-200" style={{ backgroundColor: scrolled ? '#23286b' : '#ffffff' }} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-navy font-medium no-underline hover:text-blue-accent transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
