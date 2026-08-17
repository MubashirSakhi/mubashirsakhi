import { Link } from 'react-router-dom'
import coffeeVideo from '../assets/mubashir-coffee-video.mp4'
import { Reveal, useInView } from '../hooks'

export default function Coffee() {
  const [ref, inView] = useInView()
  return (
    <section className="coffee" ref={ref}>
      {inView && (
        <video className="coffee-video" src={coffeeVideo} autoPlay muted loop playsInline preload="none" />
      )}
      <div className="coffee-grade tone" />
      <div className="coffee-grade vignette" />
      <div className="coffee-grade grain" />
      <div className="coffee-bar top" />
      <div className="coffee-bar bot" />

      <div className="wrap coffee-content">
        <Reveal as="span" className="eyebrow coffee-eyebrow">§ 06½ / an interlude</Reveal>
        <Reveal as="h2" className="coffee-headline" delay={1}>
          Take your<br /><em>time.</em>
        </Reveal>
        {/* No sub, no strapline: the footage and the grade carry it. The CTA is
            deliberately the only other thing in here. */}
        <Reveal delay={2}>
          <Link to="/desk" className="coffee-cta">Pull up a chair →</Link>
        </Reveal>
      </div>

      <div className="coffee-foot">
        <span className="coffee-hint"><span className="coffee-pulse" />on loop</span>
      </div>
    </section>
  )
}
