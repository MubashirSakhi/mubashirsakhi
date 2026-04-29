import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhatIDo from './components/WhatIDo'
import TrackRecord from './components/TrackRecord'
import Community from './components/Community'
import Listening from './components/Listening'
import Medium from './components/Medium'
import ContactFooter from './components/ContactFooter'

export default function App() {
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
        <Medium />
      </main>
      <ContactFooter />
    </>
  )
}
