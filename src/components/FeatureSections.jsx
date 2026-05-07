import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

const fadeUpDelayed = {
  ...fadeUp,
  transition: { duration: 0.55, delay: 0.15, ease: 'easeOut' },
}

export default function FeatureSections() {
  return (
    <section className="pt-10 pb-[120px]">
      <div className="max-w-[940px] mx-auto px-6">

        {/* Streamguys */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[60px] py-10 mb-10 md:items-center">
          <motion.div className="flex flex-col items-start" {...fadeUp}>
            <h2 className="feature-heading">Most people don't attend your event. They watch it.</h2>
            <p className="mb-4">
              That's the shift we built Streamguys around. We run the full attention engine —
              capture, edit, publish, distribute in real-time while your event is still happening.
              We've done it for{' '}
              <a href="https://021disrupt.com" target="_blank" rel="noopener noreferrer">021Disrupt</a>
              {' '}and{' '}
              <a href="https://www.facebook.com/214349055365750/videos/508094913915527" target="_blank" rel="noopener noreferrer">
                WOW Festival
              </a>
              {' '}by British Council Pakistan.
              By the time the session ends, your content is already out. That's how you win attention.
            </p>
            <a
              href="http://www.streamguys.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              STREAM GUYS
            </a>
          </motion.div>
          <motion.div {...fadeUpDelayed}>
            <img
              src="https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/602fbbeea220f84e4157a772_Screen%20Shot%202021-02-19%20at%206.23.24%20PM.png"
              alt="Streamguys"
              className="w-full"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 89vw, (max-width: 991px) 334px, 440px"
            />
          </motion.div>
        </div>

        {/* Coding */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[60px] py-10 md:items-center">
          <motion.div className="flex flex-col items-start" {...fadeUp}>
            <h2 className="feature-heading">I use tech to remove bottlenecks</h2>
            <p className="mb-4">
              APIs, automation, internal tools. No-code where it works, custom systems where it matters.
              I help early-stage teams answer three questions: what to build, what to skip, and how to move
              faster this week. Everything I can open source is on{' '}
              <a href="http://github.com/mubashirsakhi" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </motion.div>
          <motion.div {...fadeUpDelayed}>
            <img
              src="https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/60302103f3cb2f5cb97f6c27_Screen%20Shot%202021-02-20%20at%201.33.24%20AM.png"
              alt="Coding"
              className="w-full"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 89vw, (max-width: 991px) 334px, 440px"
            />
          </motion.div>
        </div>

        {/* Code flyout widget */}
        <motion.div
          className="flex items-center border border-[#785faa] px-5 py-[10px] my-6 mx-auto max-w-[60%]"
          {...fadeUp}
        >
          <img
            src="https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/6030e22574e18c4428330f16_Screen%20Shot%202021-02-20%20at%203.18.00%20PM.png"
            width="100"
            alt=""
            loading="lazy"
            className="flex-shrink-0"
          />
          <p className="pl-5 self-center flex-1 mb-0">
            Some of it ships cleanly. Some of it takes three hours to debug a missing semicolon. Both come with the territory.
          </p>
        </motion.div>

        {/* Twodots / Wrapkar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] py-10 md:items-center">
          <motion.div {...fadeUp}>
            <img
              src="https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/602fb674fe5af7b85fe1c40e_Screen%20Shot%202021-02-19%20at%206.00.16%20PM.png"
              alt="Twodots"
              className="w-full"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 89vw, (max-width: 991px) 334px, 440px"
            />
          </motion.div>
          <motion.div {...fadeUpDelayed}>
            <h2 className="feature-heading">
              Managing Partner at{' '}
              <a href="https://10pearls.com" className="text-[#5460fc] no-underline">Twodots</a>
              {'. '}Co-founded{' '}
              <a href="https://wrapkar.com" className="text-[#5460fc] no-underline">Wrapkar.</a>
            </h2>
            <p>
              Wrapkar was a vehicle wrapping startup — raised $10K, put over 5,000 vehicles on the road.
              Twodots was a design studio I ran as Managing Partner, acquired by 10Pearls.
              Two different kinds of building. Both useful.
            </p>
          </motion.div>
        </div>

        {/* Community */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[60px] py-10 md:items-center">
          <motion.div className="flex flex-col items-start" {...fadeUp}>
            <h2 className="feature-heading">12,000+ builders in one place</h2>
            <p className="mb-4">
              <a href="https://www.facebook.com/groups/tgpak" target="_blank" rel="noopener noreferrer">
                Tech Geeks of Pakistan
              </a>
              {' '}— no noise, just builders. People share work, collaborate, and actually ship things.
              From 2017–2020 I also served as Entrepreneur in Residence at{' '}
              <a href="https://thenestio.com/about#eirs" target="_blank" rel="noopener noreferrer">The Nest I/O</a>
              {', '}helping early-stage startups work through technical decisions.
              If you're building in Pakistan, you'll fit in.
            </p>
          </motion.div>
          <motion.div {...fadeUpDelayed}>
            <img
              src="https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/602fb46201eb787cf13c51c0_Screen%20Shot%202021-02-19%20at%205.50.58%20PM.png"
              alt="Community"
              className="w-full"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 89vw, (max-width: 991px) 334px, 440px"
            />
          </motion.div>
        </div>

        {/* Renewable Energy */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[60px] py-10 md:items-center">
          <motion.div className="flex flex-col items-start" {...fadeUp}>
            <h2 className="feature-heading">Energy — Enova</h2>
            <p className="mb-4">
              Pakistan's energy market is unstable. That's exactly why it's interesting.
              With Enova I'm building on the supply side — sourcing from China, building supplier
              relationships, supplying retailers and installers, creating demand through digital funnels.
              It's margin, logistics, and timing. Most people don't see that layer. I operate in it.
            </p>
          </motion.div>
          <motion.div
            {...fadeUpDelayed}
            className="flex items-center justify-center rounded-lg min-h-[200px]"
            style={{ backgroundColor: '#23286b' }}
          >
            <span
              className="text-[3rem] font-bold tracking-[-0.04em]"
              style={{ color: '#f1b503', fontFamily: 'Times New Roman, serif' }}
            >
              RE
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
