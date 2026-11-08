import './App.css'
import { SiteHeader } from './components/layout/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter'
import { MessengerButton } from './components/layout/MessengerButton'
import { HeroSection } from './components/sections/HeroSection'
import { StorySection } from './components/sections/StorySection'
import { MenuSection } from './components/sections/MenuSection'
import { VisitSection } from './components/sections/VisitSection'
import { BrandTicker } from './components/sections/BrandTicker'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BrandTicker />
        <StorySection />
        <MenuSection />
        <VisitSection />
      </main>
      <SiteFooter />
      <MessengerButton />
    </>
  )
}

export default App
