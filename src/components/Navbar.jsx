import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useKarachiTime, __tickers, __startTicker } from '../hooks'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const time = useKarachiTime()

  useEffect(() => {
    const tick = () => setScrolled(window.scrollY > 40)
    __tickers.add(tick)
    __startTicker()
    return () => { __tickers.delete(tick) }
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        <span className="dot" />
        <span>Mubashir Sakhi</span>
      </Link>
      <div className="nav-time" style={{ display: 'flex', gap: 24 }}>
        <span style={{ opacity: 0.6 }}>Karachi</span>
        <span>{time}</span>
      </div>
      <a className="nav-cta" href="mailto:mubashirsakhi@gmail.com">
        Get in touch ↗
      </a>
    </nav>
  )
}
