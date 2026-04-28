import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import TrackRecord from './components/TrackRecord'
import Community from './components/Community'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <TrackRecord />
        <Community />
      </main>
      <ContactFooter />
    </>
  )
}
