import { useInView, useTilt, Reveal } from '../hooks'

const PROJECTS = [
  {
    num: '01', name: 'Streamguys', period: '2020 — Now', role: 'Co-founder',
    desc: 'Full attention engine for live events. Real-time social content at scale. WOW Festival, 021Disrupt, and more across Pakistan.',
    tags: ['Live Events', 'Real-time'], link: 'http://www.streamguys.pk',
    span: 7, variant: 'feature',
  },
  {
    num: '02', name: 'Enova', period: '2024 — Now', role: 'Founder',
    desc: 'Wholesale renewable energy — sourcing, supplier relationships, distribution funnels. The unsexy supply-side layer.',
    tags: ['Energy', 'Wholesale'], link: null,
    span: 5, variant: 'feature-3',
  },
  {
    num: '03', name: 'Tech Geeks of Pakistan', period: '2016 — Now', role: 'Founder',
    desc: "12,000+ builders, no noise. Pakistan's most active tech community — people who actually ship.",
    tags: ['Community', '12K+'], link: 'https://www.facebook.com/groups/tgpak',
    span: 5, variant: '',
  },
  {
    num: '04', name: 'Twodots → 10Pearls', period: '2019 — 2021', role: 'Managing Partner',
    desc: 'Design & branding studio built from zero. Acquired by 10Pearls, one of Pakistan\'s largest tech companies.',
    tags: ['Studio', 'Acquired'], link: null,
    span: 4, variant: '',
  },
  {
    num: '05', name: 'Wrapkar', period: '2016 — 2019', role: 'Co-founder',
    desc: 'Vehicle wrapping startup. $10K raised. 5,000+ vehicles wrapped. Built the ops, marketing, and partnerships from zero.',
    tags: ['$10K', '5K+ Vehicles'], link: null,
    span: 3, variant: '',
  },
  {
    num: '06', name: 'The Nest I/O', period: '2017 — 2020', role: 'EIR',
    desc: "Entrepreneur in Residence at Pakistan's flagship tech accelerator. Advised early-stage tech startups across the country.",
    tags: ['Advisory'], link: null,
    span: 6, variant: '',
  },
  {
    num: '07', name: 'NED University', period: '2015', role: 'B.E. Engineering · GPA 3.445',
    desc: 'Bachelor of Engineering. Foundation in systems thinking and structured problem solving.',
    tags: ['Engineering'], link: null,
    span: 6, variant: '',
  },
]

function TCard({ p, i }) {
  const tiltRef = useTilt(8)
  const [inViewRef, inView] = useInView()

  const setRefs = (el) => {
    inViewRef.current = el
    tiltRef.current = el
  }

  return (
    <div
      ref={setRefs}
      className={`tcard span-${p.span} ${p.variant} reveal ${inView ? 'in' : ''}`}
      style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
    >
      <div style={{ transformStyle: 'preserve-3d', position: 'relative', zIndex: 1 }}>
        <span className="tcard-period" style={{ transform: 'translateZ(30px)', display: 'inline-block' }}>{p.period}</span>
        <h3 className="tcard-name" style={{ transform: 'translateZ(40px)' }}>{p.name}</h3>
        <p className="tcard-role" style={{ transform: 'translateZ(30px)' }}>{p.role}</p>
        <p className="tcard-desc" style={{ transform: 'translateZ(25px)' }}>{p.desc}</p>
      </div>
      <div style={{ transformStyle: 'preserve-3d', position: 'relative', zIndex: 2 }}>
        <div className="tcard-tags" style={{ transform: 'translateZ(20px)' }}>
          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        {p.link
          ? <a className="tcard-link" href={p.link} target="_blank" rel="noopener noreferrer" style={{ transform: 'translateZ(28px)', display: 'inline-flex' }}>Visit ↗</a>
          : <span className="tcard-link" style={{ color: 'var(--ink-faint)', transform: 'translateZ(20px)', display: 'inline-flex', borderBottom: 'none' }}>Archived</span>}
      </div>
      <span className="tcard-ghost" aria-hidden="true">{p.num}</span>
    </div>
  )
}

export default function TrackRecord() {
  return (
    <section className="track-record">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">§ 02 / Track Record</span>
              <h2>
                A decade of<br />
                <span className="swap">shipping things.</span>
              </h2>
            </div>
            <p className="desc">
              Communities, startups, studios, and operations — across Pakistan.
              Some of it sold. Some of it scaled. All of it ran.
            </p>
          </div>
        </Reveal>
        <div className="card-grid">
          {PROJECTS.map((p, i) => <TCard key={p.num} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
