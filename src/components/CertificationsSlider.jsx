import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const certs = [
  {
    image: 'https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/606d65ecf25aba112dc5dd45_Growth_Driven_Design.png',
    title: 'GROWTH DRIVEN DESIGN',
    description:
      'Growth Driven Design Certificate takes you through a different approach of developing websites or mobile app. The course takes you through on strategy, launchpad and continuous improvement that you use to speed the rollout and learn right away with a feedback loop.',
  },
  {
    image: 'https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/606d70ee8eafcbe1f77cb938_Digital_Garage_Certificate.png',
    title: 'Digital Garage',
    description:
      'It is a complete solution to learn introduction to digital marketing. Be it Email Marketing Campaigns, SEO, SEM, online presence, analytics and measure performance of the efforts you put in the marketing.',
  },
  {
    image: 'https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/606d6ef0b6dcbc62fe03e554_Data%20Structure%20And%20Algorithm%20Certificate.png',
    title: 'Data Structures and Algorithms',
    description:
      'The certification takes you through multiple problems and test cases you need to pass with your code. Helps you improve your coding skills but also let you think critically to solve a problem using effective solutions.',
  },
  {
    image: 'https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/606d81c543ccdd497121a6fb_meditation_masterclass.jpg',
    title: 'Meditation and Mindfulness',
    description:
      'Apart from the professional skills, you can go through mindfulness class to discover a lot about yourself and create an impact.',
  },
]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function CertificationsSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % certs.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  return (
    <div className="my-10">
      <div className="max-w-[940px] mx-auto px-6">
        <h2
          className="text-center text-[32px] font-bold mb-6"
          style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: 'normal', lineHeight: 1.2 }}
        >
          LEARN DIVERSE
        </h2>
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col md:flex-row items-center gap-8 py-5"
            >
              <div className="md:w-1/2">
                <img
                  src={certs[current].image}
                  alt={certs[current].title}
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-left md:items-start">
                <h4>{certs[current].title}</h4>
                <p>{certs[current].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-3 pb-5">
          {certs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="w-3 h-3 rounded-full transition-colors duration-100 border-0 cursor-pointer"
              style={{ backgroundColor: i === current ? '#23286b' : 'rgba(35,40,107,0.3)' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
