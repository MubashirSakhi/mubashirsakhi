import { motion } from 'framer-motion'

const entries = [
  { period: '2020–present', name: 'Streamguys',              role: 'Co-founder',                          note: 'Live event production & social content' },
  { period: '2019–2021',    name: 'Twodots → 10Pearls',      role: 'Managing Partner',                    note: 'Design studio · Acquired by 10Pearls'  },
  { period: '2017–2020',    name: 'The Nest I/O',             role: 'Entrepreneur in Residence',           note: 'Supported early-stage tech startups'   },
  { period: '2016–2019',    name: 'Wrapkar',                  role: 'Co-founder',                          note: '$10K raised · 5,000+ vehicles'         },
  { period: '2015',         name: 'NED University',           role: 'B.E. Engineering',                    note: 'GPA 3.445'                             },
]

export default function TrackRecord() {
  return (
    <section className="px-8 py-32" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-[1100px] mx-auto">
        <span className="section-label">Track record</span>

        <div>
          {entries.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr_1fr] gap-4 py-6 items-start"
              style={{ borderBottom: '1px solid #1a1a1a' }}
              whileHover={{ backgroundColor: '#0d0d0d', x: 3 }}
            >
              <span className="text-[13px] font-medium tabular-nums" style={{ color: '#444444' }}>
                {e.period}
              </span>
              <div>
                <span className="text-[1rem] font-semibold" style={{ color: '#f0f0f0' }}>
                  {e.name}
                </span>
                <span className="block text-[0.85rem] mt-0.5" style={{ color: '#555555' }}>
                  {e.note}
                </span>
              </div>
              <span className="hidden md:block text-[0.9rem] text-right" style={{ color: '#666666' }}>
                {e.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
