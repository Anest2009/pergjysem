import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <FeaturedServices />
        </div>
        <About />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
    </div>
  );
}

export default App;