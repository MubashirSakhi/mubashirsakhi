import { motion } from 'framer-motion'

const articles = [
  {
    title: 'Finding startup ideas on Reddit before they go mainstream',
    description: 'My exact process for mining subreddits for pain points and using AI to validate whether they\'re worth building.',
    featured: true,
  },
  {
    title: 'How we livestreamed 3 stages simultaneously at WOW Festival',
    description: 'The Streamguys workflow: gear, roles, real-time publishing, and what breaks under pressure.',
  },
  {
    title: 'The no-code stack I use to run a wholesale energy business',
    description: 'Sourcing, logistics, and customer tracking — all without a single line of backend code.',
  },
  {
    title: '12,000 community members later — what actually worked',
    description: 'Building Tech Geeks of Pakistan from a Facebook group to Pakistan\'s most active builder community.',
  },
  {
    title: 'Vehicle wrapping as a startup: what I\'d do differently',
    description: 'Raised $10K, wrapped 5,000+ vehicles, learned a lot about operations and distribution the hard way.',
  },
]

export default function Medium() {
  return (
    <section className="px-8 md:px-12 py-20" style={{ borderTop: '1px solid #E2E8F0' }}>
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <motion.div
          className="flex items-end justify-between flex-wrap gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <span className="section-label">Writing</span>
            <h2 style={{
              fontFamily: 'Caveat, cursive',
              fontWeight: 700,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              letterSpacing: '-0.01em',
              lineHeight: 1,
              color: '#0F172A',
            }}>
              Thinking out loud.
            </h2>
          </div>

          <a
            href="https://medium.com/@mubashirsakhi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#64748B',
              borderBottom: '1px solid #CBD5E1',
              paddingBottom: '2px',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#84CC16'}
            onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
          >
            All articles →
          </a>
        </motion.div>

        {/* Article cards */}
        <div className="flex flex-col gap-0">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="https://medium.com/@mubashirsakhi"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '24px 28px',
                marginBottom: '12px',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
              whileHover={{ backgroundColor: '#FFFEF9', borderColor: '#CBD5E1' }}
            >
              <h3 style={{
                fontFamily: 'Caveat, cursive',
                fontWeight: 600,
                fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)',
                lineHeight: 1.2,
                color: article.featured ? '#84CC16' : '#0F172A',
                marginBottom: '8px',
                textDecoration: article.featured ? 'underline' : 'none',
                textUnderlineOffset: '3px',
              }}>
                {article.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748B',
                lineHeight: 1.6,
                marginBottom: 0,
              }}>
                {article.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Footer handle */}
        <motion.p
          className="mt-8"
          style={{ fontSize: '12px', color: '#94A3B8', letterSpacing: '0.05em' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          @mubashirsakhi on Medium
        </motion.p>

      </div>
    </section>
  )
}
