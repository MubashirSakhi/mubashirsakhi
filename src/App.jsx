import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSections from './components/FeatureSections'
import CertificationsSlider from './components/CertificationsSlider'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <FeatureSections />
        <CertificationsSlider />
      </main>
      <Footer />
    </>
  )
}
