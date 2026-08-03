import { useState } from 'react'
import { Reveal } from '../hooks'

const OL = (isbn) => `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`

const BOOKS = [
  {
    title: 'The Hard Thing About Hard Things',
    author: 'Ben Horowitz',
    shelf: 'Read',
    color: 'var(--c-blue)',
    cover: OL('9780062273208'),
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    shelf: 'Read',
    color: 'var(--c-lime)',
    cover: OL('9780804139021'),
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    shelf: 'Currently Reading',
    color: 'var(--c-magenta)',
    cover: OL('9780374533557'),
  },
  {
    title: 'Shoe Dog',
    author: 'Phil Knight',
    shelf: 'Read',
    color: 'var(--c-orange)',
    cover: OL('9781501135927'),
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    shelf: 'Read',
    color: 'var(--c-blue)',
    cover: OL('9780062316097'),
  },
  {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    shelf: 'Read',
    color: 'var(--c-lime)',
    cover: OL('9780307887894'),
  },
]

function BookCover({ b }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  return (
    <div className="book-cover" style={{ '--book-color': b.color }}>
      <div className="book-spine" />
      {!errored ? (
        <>
          {!loaded && <div className="book-fallback">{b.title[0]}</div>}
          <img
            src={b.cover}
            alt={b.title}
            loading="lazy"
            className={`book-img ${loaded ? 'loaded' : ''}`}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
          />
        </>
      ) : (
        <div className="book-fallback">{b.title[0]}</div>
      )}
    </div>
  )
}

const GR_URL = 'https://www.goodreads.com/mubashirsakhi'

export default function Goodreads() {
  return (
    <section className="goodreads">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">§ 06 / Reading</span>
              <h2>
                What's on<br />
                <span className="swap">the shelf.</span>
              </h2>
            </div>
            <p className="desc">
              Books I keep returning to — on building, thinking, and getting things done.
              No self-help. No hustle porn.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="book-shelf-row">
            {BOOKS.map((b) => (
              <a
                key={b.title}
                className="book-card"
                href={GR_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--book-color': b.color }}
              >
                <BookCover b={b} />
                <div className="book-meta">
                  <h3 className="book-title">{b.title}</h3>
                  <p className="book-author">{b.author}</p>
                  <span className={`book-shelf ${b.shelf === 'Currently Reading' ? 'reading' : ''}`}>
                    {b.shelf === 'Currently Reading' ? '● ' : ''}{b.shelf}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={7}>
          <div className="book-footer">
            <a
              href={GR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="book-gr-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.828h2.562c.182 2.278 2.16 3.348 4.484 3.348 3.312 0 4.938-1.95 4.938-5.02v-1.57h-.068c-.86 1.569-2.526 2.528-4.528 2.528-4.098 0-6.798-3.368-6.798-7.82 0-4.49 2.643-7.935 6.87-7.935 2.01 0 3.54.959 4.42 2.507h.06V.6h2.43v15.765c0 4.782-2.953 7.63-7.922 7.63zm.353-8.575c2.986 0 4.554-2.485 4.554-5.51 0-3.08-1.52-5.668-4.572-5.668-2.966 0-4.42 2.507-4.42 5.65 0 3.13 1.535 5.528 4.438 5.528z"/>
              </svg>
              View full shelf on Goodreads ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
