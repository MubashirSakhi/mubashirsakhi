import { useEffect } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhatIDo from './components/WhatIDo'
import TrackRecord from './components/TrackRecord'
import Community from './components/Community'
import Listening from './components/Listening'
import Writing from './components/Writing'
import Goodreads from './components/Goodreads'
import ContactFooter from './components/ContactFooter'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready')
    return () => { document.documentElement.classList.remove('js-ready') }
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatIDo />
        <TrackRecord />
        <Community />
        <Listening />
        <Writing />
        <Goodreads />
      </main>
      <ContactFooter />
    </>
  )
}
