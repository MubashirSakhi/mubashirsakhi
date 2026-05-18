import { useScrollProgress } from '../hooks'

export default function ScrollProgress() {
  const p = useScrollProgress()
  return <div className="scroll-progress" style={{ width: `${p * 100}%` }} />
}
