import { Reveal } from '../hooks'

export default function ContactFooter() {
  return (
    <footer className="contact">
      <div className="orb orb-a" style={{ top: 'auto', bottom: '20%', right: '-4%', width: 180, height: 180 }} />
      <div className="orb orb-b" style={{ top: '10%', left: '-4%', width: 110, height: 110 }} />

      <div className="wrap">
        <Reveal>
          <span className="eyebrow">§ 06 / Get in touch</span>
        </Reveal>

        <h2 className="cta-big" style={{ marginTop: 28 }}>
          <Reveal as="span" className="l1"><span>LET'S BUILD</span></Reveal>
          <Reveal as="span" className="l2" delay={1}>
            <span style={{ fontFamily: 'var(--f-italic)', fontStyle: 'italic', color: 'var(--accent-3)', fontWeight: 400 }}>something </span>
            <span>REAL.</span>
          </Reveal>
        </h2>

        <Reveal delay={2}>
          <div className="contact-foot">
            <div>
              <h3>
                If you're <span className="em">running an event</span>,{' '}
                <span className="em">building in energy</span>, or{' '}
                <span className="em">stuck on tech decisions</span> — send a line.
              </h3>
              <a className="contact-mail" href="mailto:mubashirsakhi@gmail.com">
                mubashirsakhi@gmail.com
                <span style={{ fontSize: '0.7em' }}>↗</span>
              </a>
            </div>
            <div className="contact-meta">
              <div>© {new Date().getFullYear()} · Built in Karachi · Always shipping</div>
              <div className="contact-meta-row">
                <a href="https://linkedin.com/in/mubashirsakhi" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href="http://github.com/mubashirsakhi" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href="https://medium.com/@mubashirsakhi" target="_blank" rel="noopener noreferrer">Medium ↗</a>
                <a href="https://www.facebook.com/groups/tgpak" target="_blank" rel="noopener noreferrer">TGP ↗</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
