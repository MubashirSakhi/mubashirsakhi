import { Reveal } from '../hooks'

const ARTICLES = [
  {
    title: 'Finding startup ideas on Reddit before they go mainstream',
    desc: 'My exact process for mining subreddits for pain points and validating with AI.',
  },
  {
    title: 'How we livestreamed 3 stages simultaneously at WOW Festival',
    desc: 'The Streamguys workflow: gear, roles, real-time publishing, and what breaks under pressure.',
  },
  {
    title: 'The no-code stack I use to run a wholesale energy business',
    desc: 'Sourcing, logistics, and customer tracking — without a single line of backend code.',
  },
  {
    title: '12,000 community members later — what actually worked',
    desc: 'Building Tech Geeks of Pakistan from a Facebook group to a real builder community.',
  },
  {
    title: 'Vehicle wrapping as a startup: what I\'d do differently',
    desc: 'Raised $10K, wrapped 5,000+ vehicles, learned a lot about ops the hard way.',
  },
]

export default function Writing() {
  return (
    <section className="writing">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">§ 05 / Writing</span>
              <h2>
                Thinking out<br />
                <span className="swap">loud.</span>
              </h2>
            </div>
            <p className="desc">
              On Medium and elsewhere — the patterns I notice across events, energy, and tech.
              No thought-leadership. Just notes.
            </p>
          </div>
        </Reveal>
        <div className="article-list">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i + 1, 6)}>
              <a className="article" href="https://medium.com/@mubashirsakhi" target="_blank" rel="noopener noreferrer">
                <span className="article-num">0{i + 1}</span>
                <div className="article-content">
                  <h3 className="article-title">{a.title}</h3>
                  <p className="article-desc">{a.desc}</p>
                </div>
                <span className="article-arrow">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
