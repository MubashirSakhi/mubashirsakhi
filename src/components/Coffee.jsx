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
        <Reveal as="p" className="coffee-sub" delay={2}>
          Sometimes, take your time off — and enjoy your coffee out there too<span className="coffee-dot">.</span>
        </Reveal>
        <Reveal as="h3" className="coffee-line" delay={3}>
          Everyone is in their own journey, <em>enjoy yours</em>.
        </Reveal>
      </div>

      <div className="coffee-foot">
        <span className="coffee-hint"><span className="coffee-pulse" />on loop</span>
      </div>
    </section>
  )
}
