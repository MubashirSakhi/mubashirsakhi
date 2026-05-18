import { useInView, useCountUp, Reveal } from '../hooks'

const CERTS = [
  { name: 'Growth Driven Design',       source: 'HubSpot'    },
  { name: 'Digital Garage',             source: 'Google'     },
  { name: 'Data Structures & Algorithms', source: 'Coursera' },
  { name: 'Meditation & Mindfulness',   source: 'Masterclass' },
]

export default function Community() {
  const [ref, inView] = useInView({ rootMargin: '-80px' })
  const count = useCountUp(12000, 2000, inView)

  return (
    <section className="community" ref={ref}>
      <div className="wrap">
        <div className="community-grid">
          <div>
            <span className="eyebrow">§ 03 / Community</span>
            <div className={`big-count ${inView ? 'in-view' : ''}`} style={{ marginTop: 22 }}>
              <span>{count.toLocaleString()}</span>
              <span className="plus">+</span>
              <span className="underline" />
            </div>
            <p className="mono" style={{ marginTop: 18, color: 'rgba(26,24,20,0.6)', fontSize: 11 }}>
              members · Tech Geeks of Pakistan
            </p>
            <a
              className="btn-paper"
              href="https://www.facebook.com/groups/tgpak"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 22, display: 'inline-flex' }}
            >
              Visit the group ↗
            </a>
          </div>
          <div className="community-side">
            <p>
              No noise. <em>Just builders.</em> People share work, collaborate, and actually ship things.
            </p>
            <div>
              <span className="mono" style={{ color: 'rgba(26,24,20,0.55)' }}>Also certified in</span>
              <div className="cert-list">
                {CERTS.map((c, i) => (
                  <Reveal key={c.name} delay={i + 1} as="div" className="cert">
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-source">{c.source}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
