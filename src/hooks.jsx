import { useState, useEffect, useRef } from 'react'

// ── Global RAF ticker ──────────────────────────────────────────────────────
export const __tickers = new Set()
let __tickerRaf = null

export function __startTicker() {
  if (__tickerRaf) return
  const loop = () => {
    for (const fn of __tickers) {
      try { fn() } catch (e) {}
    }
    __tickerRaf = __tickers.size > 0 ? requestAnimationFrame(loop) : null
  }
  __tickerRaf = requestAnimationFrame(loop)
}

// ── useInView — polls bounding rect each frame (scroll events unreliable in iframes) ──
export function useInView(opts = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const inViewRef = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const threshold = opts.threshold ?? 0.1
    const margin = parseInt(opts.rootMargin ?? '-40px', 10) || 0
    let done = false
    const check = () => {
      if (done) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const vis = Math.min(rect.bottom, vh - margin) - Math.max(rect.top, margin)
      const need = Math.min(rect.height * threshold, 80)
      if (vis >= need && !inViewRef.current) {
        inViewRef.current = true
        setInView(true)
        if (opts.once !== false) { done = true; __tickers.delete(check) }
      } else if (vis < need && inViewRef.current && opts.once === false) {
        inViewRef.current = false
        setInView(false)
      }
    }
    __tickers.add(check)
    __startTicker()
    check()
    return () => { __tickers.delete(check) }
  }, [])
  return [ref, inView]
}

// ── useScrollProgress 0..1 ────────────────────────────────────────────────
export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = null
    const check = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setP(max > 0 ? window.scrollY / max : 0)
      raf = null
    }
    const tick = () => { if (!raf) raf = requestAnimationFrame(check) }
    __tickers.add(tick)
    __startTicker()
    check()
    return () => { __tickers.delete(tick); if (raf) cancelAnimationFrame(raf) }
  }, [])
  return p
}

// ── useKarachiTime ────────────────────────────────────────────────────────
export function useKarachiTime() {
  const [t, setT] = useState('')
  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', hour12: false,
        timeZone: 'Asia/Karachi',
      })
      setT(now + ' PKT')
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])
  return t
}

// ── useCountUp ────────────────────────────────────────────────────────────
export function useCountUp(target, duration = 1800, run = true) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setN(Math.round((1 - Math.pow(1 - t, 3)) * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, run])
  return n
}

// ── useTilt — 3D mouse tilt, returns ref ─────────────────────────────────
export function useTilt(intensity = 12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rect = null, rafId = null, tx = 0, ty = 0, cx = 0, cy = 0
    const apply = () => {
      cx += (tx - cx) * 0.15
      cy += (ty - cy) * 0.15
      el.style.transform = `perspective(900px) rotateX(${cy}deg) rotateY(${cx}deg)`
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
        rafId = requestAnimationFrame(apply)
      } else { rafId = null }
    }
    const onEnter = () => { rect = el.getBoundingClientRect() }
    const onMove  = (e) => {
      if (!rect) rect = el.getBoundingClientRect()
      tx =  ((e.clientX - rect.left) / rect.width  - 0.5) * intensity
      ty = -((e.clientY - rect.top)  / rect.height - 0.5) * intensity
      if (!rafId) rafId = requestAnimationFrame(apply)
    }
    const onLeave = () => { tx = 0; ty = 0; if (!rafId) rafId = requestAnimationFrame(apply) }
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mousemove',  onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mousemove',  onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [intensity])
  return ref
}

// ── SplitLetters — renders each character as a .letter span ──────────────
export function SplitLetters({ text, className = '' }) {
  return text.split('').map((ch, i) => (
    <span key={i} className={`letter ${className}`} style={{ '--i': i }}>
      {ch === ' ' ? ' ' : ch}
    </span>
  ))
}

// ── Reveal — fade-up on scroll ────────────────────────────────────────────
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, inView] = useInView()
  const cls = [
    'reveal',
    inView ? 'in' : '',
    delay > 0 ? `reveal-delay-${delay}` : '',
    className,
  ].filter(Boolean).join(' ')
  return <Tag ref={ref} className={cls}>{children}</Tag>
}
