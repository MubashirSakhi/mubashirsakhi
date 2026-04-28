const items = [
  '12,000+ Community Members',
  '$10K Raised',
  '5,000+ Vehicles Wrapped',
  '3 Active Ventures',
  'Based in Karachi, Pakistan',
]

export default function Marquee() {
  return (
    <div
      className="overflow-hidden"
      style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', padding: '14px 0' }}
    >
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              padding: '0 3rem',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#f1b503',
            }}
          >
            {item}{' '}
            <span style={{ color: '#2a2a2a' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
