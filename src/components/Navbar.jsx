import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
      animate={scrolled
        ? { backgroundColor: 'rgba(255,254,249,0.92)', backdropFilter: 'blur(12px)' }
        : { backgroundColor: 'rgba(255,254,249,0)',     backdropFilter: 'blur(0px)' }
      }
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <a href="/" className="font-bold text-[15px] tracking-[0.08em] uppercase" style={{ color: '#84CC16' }}>
        MS
      </a>
      <a
        href="mailto:mubashirsakhi@gmail.com"
        className="text-[13px] font-medium tracking-[0.04em] opacity-70 hover:opacity-100 transition-opacity duration-200"
        style={{ color: '#0F172A' }}
      >
        Get in touch →
      </a>
    </motion.nav>
  )
}
