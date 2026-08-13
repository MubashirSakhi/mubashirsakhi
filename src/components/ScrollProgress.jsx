import { useScrollProgress } from '../hooks'

export default function ScrollProgress() {
  const p = useScrollProgress()
  return <div className="scroll-progress" style={{ clipPath: `inset(0 ${100 - p * 100}% 0 0)` }} />
}
