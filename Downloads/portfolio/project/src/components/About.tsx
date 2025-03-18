import React from 'react';
import { GlitchText } from './GlitchText';
import { GlitchCanvas } from './about/GlitchCanvas';
import { SkillGrid } from './contact/SkillGrid';
import { BioText } from './about/BioText';

export default function About() {
  return (
    <div className="bg-[#0a0a0a] text-white py-20 relative overflow-hidden">
      <div className="noise-bg"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <GlitchText 
              text="DIGITAL ENTITY"
              className="text-4xl font-bold mb-8"
            />
            <BioText />
            <SkillGrid />
          </div>
          
          <div className="relative h-[600px]">
            <GlitchCanvas />
          </div>
        </div>
      </div>
    </div>
  );
}