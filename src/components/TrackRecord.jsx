import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    name: 'Streamguys',
    period: '2020–present',
    role: 'Co-founder',
    description: 'Full attention engine for live events. Real-time social content at scale. WOW Festival, 021Disrupt, and more across Pakistan.',
    tags: ['Live Events', 'Real-time', 'Social Content'],
    link: 'http://www.streamguys.pk',
  },
  {
    num: '02',
    name: 'Tech Geeks of Pakistan',
    period: '2016–present',
    role: 'Founder',
    description: '12,000+ builders, no noise. Pakistan\'s most active tech community — people who actually ship.',
    tags: ['Community', '12K+ Members'],
    link: 'https://www.facebook.com/groups/tgpak',
  },
  {
    num: '03',
    name: 'Wrapkar',
    period: '2016–2019',
    role: 'Co-founder',
    description: 'Vehicle wrapping startup. $10K raised. 5,000+ vehicles wrapped. Built the ops, marketing, and partnerships from zero.',
    tags: ['Startup', '$10K Raised', '5K+ Vehicles'],
    link: null,
  },
  {
    num: '04',
    name: 'Twodots → 10Pearls',
    period: '2019–2021',
    role: 'Managing Partner',
    description: 'Design and branding studio built from the ground up. Acquired by 10Pearls, one of Pakistan\'s largest tech companies.',
    tags: ['Design Studio', 'Acquired'],
    link: null,
  },
  {
    num: '05',
    name: 'The Nest I/O',
    period: '2017–2020',
    role: 'Entrepreneur in Residence',
    description: 'Supported and advised early-stage tech startups across Pakistan. Resident at the country\'s flagship tech accelerator.',
    tags: ['Advisory', 'Startups'],
    link: null,
  },
  {
    num: '06',
    name: 'NED University',
    period: '2015',
    role: 'B.E. Engineering',
    description: 'Bachelor of Engineering, GPA 3.445. Foundation in systems thinking and structured problem solving.',
    tags: ['Engineering', 'GPA 3.445'],
    link: null,
  },
]

export default function TrackRecord() {
  return (
    <section style={{ borderTop: '1px solid #E2E8F0' }}>

      {/* Section header */}
      <div className="px-8 md:px-12 pt-20 pb-10">
        <div className="max-w-[1100px] mx-auto flex items-end justify-between flex-wrap gap-4">
          <span className="section-label" style={{ marginBottom: 0 }}>Work &amp; Track Record</span>
          <p style={{ fontSize: '0.8rem', color: '#64748B', maxWidth: '340px', textAlign: 'right', lineHeight: 1.6 }}>
            A history of building things — startups, communities, and operations — across Pakistan.
          </p>
        </div>
      </div>

      {/* Card grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderTop: '1px solid #E2E8F0', borderLeft: '1px solid #E2E8F0' }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.num}
            className="relative p-8 md:p-10"
            style={{
              borderBottom: '1px solid #E2E8F0',
              borderRight: '1px solid #E2E8F0',
              backgroundColor: '#FFFEF9',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: 'easeOut' }}
            whileHover={{ backgroundColor: '#F0F9E4' }}
          >
            {/* Ghost number */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '12px',
                right: '16px',
                fontSize: '4.5rem',
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 700,
                color: '#EDF7DC',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {project.num}
            </div>

            {/* Period */}
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#84CC16',
              display: 'block',
              marginBottom: '8px',
            }}>
              {project.period}
            </span>

            {/* Name */}
            <h3 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#0F172A',
              marginBottom: '4px',
            }}>
              {project.name}
            </h3>

            {/* Role */}
            <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '16px' }}>
              {project.role}
            </p>

            {/* Rule */}
            <div style={{ height: '1px', backgroundColor: '#E2E8F0', marginBottom: '16px' }} />

            {/* Description */}
            <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7, marginBottom: '20px' }}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap mb-5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#64748B',
                    border: '1px solid #CBD5E1',
                    padding: '4px 10px',
                    marginRight: '-1px',
                    marginBottom: '-1px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ fontSize: '13px', color: '#65A30D' }}
                onMouseEnter={e => e.currentTarget.style.color = '#0F172A'}
                onMouseLeave={e => e.currentTarget.style.color = '#65A30D'}
              >
                Visit →
              </a>
            )}
          </motion.div>
        ))}
      </div>

    </section>
  )
}
