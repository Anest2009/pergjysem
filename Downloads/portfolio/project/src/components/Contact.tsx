import React from 'react';
import { GlitchText } from './GlitchText';
import { ContactForm } from './contact/ContactForm';
import { ContactGrid } from './contact/ContactGrid';

export default function Contact() {
  return (
    <div className="bg-[#0a0a0a] text-white py-20 relative">
      <div className="noise-bg"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <GlitchText 
            text="ESTABLISH CONNECTION"
            className="text-4xl font-bold mb-8 text-center"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <ContactGrid />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}