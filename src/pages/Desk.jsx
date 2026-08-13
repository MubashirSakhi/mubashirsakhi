/* ============================================================
   THE DESK — pixel diorama
   Calm ⇄ chaos crossfade · cursor parallax · playlist
   ============================================================ */
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { __tickers, __startTicker } from '../hooks'
import calmSrc from '../assets/desk-calm.mp4'
import chaosSrc from '../assets/desk-chaos.mp4'
import poster from '../assets/desk-poster.jpg'
import './desk.css'

const FONTS = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap'

export default function Desk() {
  const [night, setNight] = useState(false)
  const planeRef = useRef(null)
  const calmRef = useRef(null)
  const chaosRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('desk')
    // pixel fonts are only used here — don't tax every other page with them
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = FONTS
    document.head.appendChild(link)
    return () => {
      document.body.classList.remove('desk')
      link.remove()
    }
  }, [])

  // cursor parallax — refs + the shared ticker, never React state (this
  // writes every frame; re-rendering the tree that often would be silly)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const plane = planeRef.current
    if (!plane) return

    let tx = 0, ty = 0, x = 0, y = 0
    const aim = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const reset = () => { tx = 0; ty = 0 }
    const tick = () => {
      x += (tx - x) * 0.06
      y += (ty - y) * 0.06
      plane.style.transform =
        `scale(1.05) translate3d(${-x * 1.1}%, ${-y * 0.8}%, 0) rotateY(${-x * 1.4}deg) rotateX(${y * 0.9}deg)`
    }

    // pointermove fires for touch drags too; ignore those, the tilt is a hover affordance
    const onMove = (e) => { if (e.pointerType === 'mouse') aim(e) }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', reset)
    __tickers.add(tick)
    __startTicker()
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', reset)
      __tickers.delete(tick)
    }
  }, [])

  const toggle = () => {
    const to = night ? calmRef.current : chaosRef.current
    const from = night ? chaosRef.current : calmRef.current
    // land the crossfade mid-loop instead of snapping to whatever frame
    // the hidden video happened to be on
    if (to && from?.duration) to.currentTime = from.currentTime % to.duration
    to?.play().catch(() => {})
    setNight((n) => !n)
  }

  return (
    <div className={`dk ${night ? 'is-night' : ''}`}>
      <div className="dk-bg">
        <div className="dk-plane" ref={planeRef}>
          <video ref={calmRef} className="dk-va" src={calmSrc} poster={poster} autoPlay muted loop playsInline preload="auto" />
          <video ref={chaosRef} className="dk-vb" src={chaosSrc} autoPlay muted loop playsInline preload="auto" />
        </div>
      </div>

      <div className="dk-tint" />
      <div className="dk-wash" />
      <div className="dk-scrim" />

      <Link to="/" className="dk-back dk-px">← Back</Link>

      <div className="dk-ctl">
        <span>Calm</span>
        <button
          className="dk-sw dk-px"
          onClick={toggle}
          aria-pressed={night}
          aria-label="Toggle mood between calm and chaos"
        >
          <i />
        </button>
        <span>Chaos</span>
      </div>

      <div className="dk-ui">
        <div className="dk-head">
          <h1 className="dk-title">Mubashir Sakhi</h1>
          <div className="dk-badges">
            <span className="dk-chip dk-px">The desk — a pixel diorama</span>
            <span className="dk-chip dk-px" aria-live="polite">
              {night ? 'Chaos · snow · late' : 'Calm · clear · morning'}
            </span>
          </div>
        </div>

        <div className="dk-foot">
          <div className="dk-spot">
            <span className="dk-spot-label">Now spinning</span>
            <div className="dk-spot-frame">
              <span className="dk-frame" aria-hidden="true" />
              <iframe
                title="Mubashir's playlist"
                src="https://open.spotify.com/embed/playlist/5i30pFgZgcHyDsN1fUuWbE?utm_source=generator&si=d790f9fb2c2b4884&theme=0"
                height="76"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
