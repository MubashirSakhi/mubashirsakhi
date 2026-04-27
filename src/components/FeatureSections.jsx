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
            <h2 className="feature-heading">I co-founded Streamguys for live event production</h2>
            <p className="mb-4">
              I am really keen on quality live streaming production and real-time social media content for creators
              and brands. Streamguys (2020–present) has delivered end-to-end streaming for{' '}
              <a href="https://021disrupt.com" target="_blank" rel="noopener noreferrer">021Disrupt</a>
              {' '}(Pakistan's flagship tech and startup conference) and{' '}
              <a href="https://www.facebook.com/214349055365750/videos/508094913915527" target="_blank" rel="noopener noreferrer">
                WOW FESTIVAL
              </a>
              {' '}by British Council Pakistan.{' '}
              <span>Hit me up if you want to set up live streaming for your company.</span>
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
            <h2 className="feature-heading">
              I do love to code too!
            </h2>
            <p className="mb-4">
              I daily invest some of my time coding around different ideas I have. Javascript is my go to language and
              API development, testing automation and cloud deployment is my playground. I am gradually open sourcing my
              projects. Here is my{' '}
              <a href="http://github.com/mubashirsakhi" target="_blank" rel="noopener noreferrer">github</a>
              {' '}link. I will keep adding more projects soon. Additionally, Wordpress has always come handy for my
              freelance projects.
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
            I enjoy it but sometimes I pull my hairs out in fixing the bugs which are usually stupid mistakes.
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
              Previously, I have worked as a partner at{' '}
              <a href="https://10pearls.com" className="text-[#5460fc] no-underline">Twodots</a>
              {' '}and earlier founded{' '}
              <a href="https://wrapkar.com" className="text-[#5460fc] no-underline">Wrapkar.</a>
            </h2>
            <p>
              We raised $10000 for the startup and gathered more than 5000 vehicles to get it rolling, and recently
              Twodots got acquired by 10pearls.
            </p>
          </motion.div>
        </div>

        {/* Community */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[60px] py-10 md:items-center">
          <motion.div className="flex flex-col items-start" {...fadeUp}>
            <h2 className="feature-heading">I believe in working in collaboration</h2>
            <p className="mb-4">
              I have been lucky to be running a tech community with the name{' '}
              <a href="https://www.facebook.com/groups/tgpak" target="_blank" rel="noopener noreferrer">
                Tech Geeks of Pakistan.
              </a>
              {' '}We are more than 12K members and engagement and collaboration happening there is tremendous and
              helpful for everybody. Plus, I also serve as an ENTREPRENEUR IN RESIDENCE at{' '}
              <a href="https://thenestio.com/about#eirs" target="_blank" rel="noopener noreferrer">The Nest I/O</a>
              , where I help startups with their tech related problems.
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
            <h2 className="feature-heading">Currently, I work in wholesale renewable energy</h2>
            <p className="mb-4">
              Pakistan is in an energy transition and I'm operating on the wholesale side — sourcing and trading
              renewable energy capacity to industrial and commercial buyers. It's a market that rewards people who
              understand both the technical and commercial sides. That's where I operate.
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
