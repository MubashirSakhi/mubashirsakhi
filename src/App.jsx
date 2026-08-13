import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhatIDo from './components/WhatIDo'
import TrackRecord from './components/TrackRecord'
import GraveyardTeaser from './components/GraveyardTeaser'
import Community from './components/Community'
import Listening from './components/Listening'
import Writing from './components/Writing'
import Goodreads from './components/Goodreads'
import Coffee from './components/Coffee'
import ContactFooter from './components/ContactFooter'

const Graveyard = lazy(() => import('./pages/Graveyard'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const Desk = lazy(() => import('./pages/Desk'))

function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatIDo />
        <TrackRecord />
        <GraveyardTeaser />
        <Community />
        <Listening />
        <Writing />
        <Goodreads />
        <Coffee />
      </main>
      <ContactFooter />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready')
    return () => { document.documentElement.classList.remove('js-ready') }
  }, [])

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graveyard" element={<Graveyard />} />
          <Route path="/desk" element={<Desk />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}
