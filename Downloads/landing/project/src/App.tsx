import { useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';
import VideoTutorial from './components/VideoTutorial';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    import('@fontsource/syne');
    import('@fontsource/poppins');
  }, []);

  return (
    <main className="min-h-screen bg-[#0F1014] font-poppins">
      <Hero />
      <HowItWorks />
      <Features />
      <ChatDemo />
      <VideoTutorial />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}