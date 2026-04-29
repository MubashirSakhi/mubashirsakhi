import { motion } from 'framer-motion'

const podcasts = [
  {
    name: 'My First Million',
    description: 'Business ideas, trends, and the thinking behind them.',
    url: 'https://www.mfmpod.com/',
    thumbnail: 'https://cdn-images-3.listennotes.com/podcasts/my-first-million-hubspot-media-2dG7l0D5e4m-Vmz8LP7xJOS.1400x1400.jpg',
  },
  {
    name: 'Stuff You Should Know',
    description: 'How pretty much everything works.',
    url: 'https://stuffyoushouldknow.com',
    thumbnail: 'https://cdn-images-3.listennotes.com/podcasts/stuff-you-should-know-iheartpodcasts-TrCT7NWXVEX-sPEOUXAnkrc.1400x1400.jpg',
  },
  {
    name: "What's Your Problem?",
    description: 'Founders and engineers on hard problems and the future they\'re building.',
    url: 'https://www.pushkin.fm/podcasts/whats-your-problem',
    thumbnail: 'https://cdn-images-3.listennotes.com/podcasts/whats-your-problem-iheartpodcasts-and-IFEYod0KpCQ-fRvx64PVjEa.300x300.jpg',
  },
  {
    name: 'End of the World',
    description: 'Existential threats to humanity. What it takes to get through the next 200 years.',
    url: 'https://podcasts.apple.com/us/podcast/the-end-of-the-world-with-josh-clark/id1437682381',
    thumbnail: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/8b/f5/96/8bf59673-bff4-8e9d-bd42-61e62f83e0a4/mza_4168667975851892862.jpg/600x600bb.jpg',
  },
  {
    name: 'Thought Behind Things',
    description: 'Asia\'s brightest minds on art, culture, and technology.',
    url: 'https://www.youtube.com/@TBTGO',
    thumbnail: 'https://cdn-images-3.listennotes.com/podcasts/thought-behind-things-syed-muzamil-hasan-NFvoZ3wIuEG-wipJmj2RoLh.1400x1400.jpg',
  },
]

export default function Listening() {
  return (
    <section className="px-8 md:px-12 py-20" style={{ borderTop: '1px solid #E2E8F0' }}>
      <div className="max-w-[1100px] mx-auto">

        <motion.div
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <span className="section-label">What I tune into</span>
            <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: '8px', maxWidth: '400px' }}>
              Not motivation. Signal. I care about how things work — and how to use that.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {podcasts.map((pod, i) => (
            <motion.a
              key={pod.name}
              href={pod.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
            >
              <div
                className="relative aspect-square overflow-hidden mb-3"
                style={{ backgroundColor: '#F0F9E4', border: '1px solid #E2E8F0' }}
              >
                <img
                  src={pod.thumbnail}
                  alt={pod.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span
                className="text-[0.8rem] font-semibold mb-1 transition-colors duration-200 group-hover:text-[#84CC16]"
                style={{ color: '#0F172A', lineHeight: 1.3 }}
              >
                {pod.name}
              </span>
              <span className="text-[0.75rem] leading-snug" style={{ color: '#64748B' }}>
                {pod.description}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
