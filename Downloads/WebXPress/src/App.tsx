import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import Stats from './components/sections/Stats'
import Portfolio from './components/sections/Portfolio'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'
import './styles/animations.css'

function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  )
}

export default App