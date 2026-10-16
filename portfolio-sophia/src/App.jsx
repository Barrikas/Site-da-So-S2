import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { PortfolioGallery } from './components/PortfolioGallery'
import { CommissionsStore } from './components/CommissionsStore'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioGallery />
        <CommissionsStore />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}

export default App
