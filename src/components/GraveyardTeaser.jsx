import { Link } from 'react-router-dom'
import { Reveal } from '../hooks'

/* The counterweight to TrackRecord — deliberately sits right under it.
   No idea count in the copy: the graveyard page is lazy-loaded, so importing
   IDEAS here just to say "four" would drag it into the home bundle. */
export default function GraveyardTeaser() {
  return (
    <section className="gy-teaser">
      <div className="wrap">
        <Reveal>
          <div className="gy-teaser-inner">
            <div>
              <span className="eyebrow">§ 02½ / the other list</span>
              <h2 className="gy-teaser-head">
                And the ones that <em>didn’t.</em>
              </h2>
              <p className="desc gy-teaser-desc">
                Ideas that got built, launched, even sold to real customers — and then
                stopped. What each one was, how far it got, and the honest reason it ended.
              </p>
            </div>
            <Link to="/graveyard" className="gy-teaser-cta">Enter the graveyard →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
