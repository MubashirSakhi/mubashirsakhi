import { motion } from 'framer-motion'

const tracks = [
  {
    num: '01',
    title: 'Live Event Production',
    body: "Streamguys (2020–present) — end-to-end live streaming and real-time social content for Pakistan's flagship events including 021Disrupt and WOW Festival by British Council.",
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

const ease = [0.33, 1, 0.68, 1]

export default function WhatIDo() {
  return (
    <section className="px-8 md:px-12 py-20" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-[1100px] mx-auto">
        {tracks.map((track, i) => (
          <motion.div
            key={track.num}
            className="py-14"
            style={{ borderBottom: '1px solid #1a1a1a' }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
          >
            {/* Tiny number */}
            <span
              style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#f1b503',
                marginBottom: '12px',
              }}
            >
              {track.num}
            </span>

            {/* Giant title */}
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontFamily: 'Times New Roman, serif',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#f0f0f0',
                marginBottom: '20px',
              }}
            >
              {track.title}
            </h2>

            {/* Animated rule */}
            <motion.div
              className="-mx-8 md:-mx-12 origin-left"
              style={{ height: '1px', backgroundColor: '#1a1a1a', marginBottom: '20px' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease }}
            />

            {/* Body + link — indented on desktop */}
            <div className="md:pl-[clamp(2rem,5vw,4rem)]">
              <p
                className="leading-relaxed mb-4"
                style={{ fontSize: '0.875rem', color: '#888888', maxWidth: '560px' }}
              >
                {track.body}
              </p>
              {track.link && (
                <a
                  href={track.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-200"
                  style={{ fontSize: '13px', color: '#f0f0f0' }}
                >
                  {track.link.label} →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
