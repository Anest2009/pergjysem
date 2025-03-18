import React from 'react';
import { GlitchText } from './GlitchText';
import { DistortImage } from './DistortImage';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="noise-bg"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="transform -rotate-45 w-[150vw] h-[20px] bg-[#ff00ff] opacity-10"></div>
        <div className="transform rotate-45 w-[150vw] h-[20px] bg-[#00ffff] opacity-10"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 glitch-container overflow-hidden">
            <DistortImage
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2400"
              alt="Abstract Art"
              className="w-full h-[300px] object-cover transform scale-110"
            />
          </div>
          
          <GlitchText 
            text="Anest Petollari"
            className="text-8xl font-bold text-white mb-6 tracking-tighter"
          />
          
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="glitch-box p-4 border border-white/10">
              <span className="text-[#ff00ff]">DEVELOPER</span>
            </div>
            <div className="glitch-box p-4 border border-white/10">
              <span className="text-[#00ffff]">DESIGNER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}