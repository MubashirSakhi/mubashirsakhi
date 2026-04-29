const topItems = [
  '12,000+ Community Members',
  '$10K Raised',
  '5,000+ Vehicles Wrapped',
  '3 Active Ventures',
  'WOW Festival',
  '021Disrupt',
  'No fluff. Just things shipped.',
]

const bottomItems = [
  'Live Events',
  'Renewable Energy',
  'JavaScript / Node.js',
  'No-Code Tooling',
  'Streamguys',
  'Enova',
  'Tech Geeks of Pakistan',
]

export default function Marquee() {
  return (
    <div
      className="overflow-hidden"
      style={{ borderTop: '2px solid #CBD5E1', borderBottom: '2px solid #CBD5E1' }}
    >
      {/* Top track — left to right */}
      <div
        className="flex whitespace-nowrap marquee-track"
        style={{ padding: '11px 0', borderBottom: '1px solid #E2E8F0' }}
      >
        {[...topItems, ...topItems].map((item, i) => (
          <span
            key={i}
            style={{
              padding: '0 2.8rem',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#84CC16',
            }}
          >
            {item}
            <span style={{ color: '#CBD5E1', marginLeft: '2.8rem' }}>·</span>
          </span>
        ))}
      </div>

      {/* Bottom track — right to left */}
      <div
        className="flex whitespace-nowrap marquee-track-reverse"
        style={{ padding: '11px 0' }}
      >
        {[...bottomItems, ...bottomItems].map((item, i) => (
          <span
            key={i}
            style={{
              padding: '0 2.8rem',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#94A3B8',
            }}
          >
            {item}
            <span style={{ color: '#E2E8F0', marginLeft: '2.8rem' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
