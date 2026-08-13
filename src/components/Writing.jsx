import { Reveal } from '../hooks'

/* Real posts, newest first. Titles and links must match Medium exactly —
   see medium.com/@mubashirsakhi. */
const ARTICLES = [
  {
    title: 'Products ideas to solve problems for masses in Pakistan',
    desc: 'Where cheap AI opens up product opportunities for problems specific to Pakistan.',
    url: 'https://mubashirsakhi.medium.com/products-ideas-to-solve-problems-for-masses-in-pakistan-5929f2578187',
  },
  {
    title: 'Broskees — The Million Dollar NFT collection from Pakistan',
    desc: 'How a 1,691-token collection out of Pakistan cleared a million dollars, and the community tactics behind it.',
    url: 'https://medium.com/coinmonks/broskees-the-million-dollar-nft-collection-from-pakistan-79cbdee7cc47',
  },
  {
    title: 'Links that help me learn the basics of Blockchain',
    desc: 'The resources I actually used getting from zero to understanding Bitcoin and Ethereum.',
    url: 'https://medium.com/coinmonks/links-that-help-me-learn-the-basics-of-blockchain-b6d8ff2de45f',
  },
  {
    title: 'I know a little about NoCode',
    desc: 'Tools for shipping a site, an app, or an automation without writing code.',
    url: 'https://mubashirsakhi.medium.com/i-know-a-little-about-nocode-ddb7af77bceb',
  },
  {
    title: 'Design Resources I know',
    desc: 'Graphics, illustration, logos, prototyping — the tools I lean on without being a designer.',
    url: 'https://mubashirsakhi.medium.com/design-resources-i-know-74c3a4380df7',
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
              On Medium — no-code, blockchain, design tooling, and product ideas for Pakistan.
              No thought-leadership. Just notes from whatever I was figuring out at the time.
            </p>
          </div>
        </Reveal>
        <div className="article-list">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i + 1, 6)}>
              <a className="article" href={a.url} target="_blank" rel="noopener noreferrer">
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
