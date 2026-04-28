import { motion } from 'framer-motion'

const tracks = [
  {
    num: '01',
    title: 'Live Event Production',
    body: 'Streamguys (2020–present) — end-to-end live streaming and real-time social content for Pakistan\'s flagship events including 021Disrupt and WOW Festival by British Council.',
    link: { label: 'streamguys.pk', href: 'http://www.streamguys.pk' },
  },
  {
    num: '02',
    title: 'Renewable Energy',
    body: 'Wholesale sourcing and trading of renewable energy capacity to industrial and commercial buyers. Operating at the intersection of technical and commercial expertise.',
    link: null,
  },
  {
    num: '03',
    title: 'Technology',
    body: 'JavaScript and Node.js development — REST APIs, testing automation, cloud deployment. No-code consulting to help startups validate ideas fast. Open source on GitHub.',
    link: { label: 'github.com/mubashirsakhi', href: 'http://github.com/mubashirsakhi' },
  },
]

export default function WhatIDo() {
  return (
    <section className="px-8 py-32" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-[1100px] mx-auto">
        <span className="section-label">What I do</span>

        <div>
          {tracks.map((track, i) => (
            <motion.div
              key={track.num}
              className="group grid md:grid-cols-[80px_1fr] gap-8 py-10"
              style={{ borderBottom: '1px solid #1a1a1a' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ backgroundColor: '#0d0d0d' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            >
              <span
                className="text-[13px] font-medium pt-1 transition-colors duration-200 group-hover:text-[#f1b503]"
                style={{ color: '#444444' }}
              >
                {track.num}
              </span>
              <div>
                <h3
                  className="mb-3 transition-transform duration-200 group-hover:translate-x-1.5"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Times New Roman, serif', color: '#f0f0f0' }}
                >
                  {track.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed mb-4" style={{ color: '#888888', maxWidth: '560px' }}>
                  {track.body}
                </p>
                {track.link && (
                  <a
                    href={track.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium hover:text-gold transition-colors duration-200"
                    style={{ color: '#f0f0f0' }}
                  >
                    {track.link.label} →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
