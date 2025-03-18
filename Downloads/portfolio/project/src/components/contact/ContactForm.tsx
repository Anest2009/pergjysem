import React from 'react';
import { Send } from 'lucide-react';

export const ContactForm = () => (
  <form className="space-y-4">
    <div className="glitch-box p-1 border border-white/10">
      <input
        type="text"
        placeholder="ENTER_IDENTIFIER"
        className="w-full bg-black/50 p-3 text-[#00ffff] font-mono focus:outline-none"
      />
    </div>
    
    <div className="glitch-box p-1 border border-white/10">
      <input
        type="email"
        placeholder="TRANSMISSION_POINT"
        className="w-full bg-black/50 p-3 text-[#ff00ff] font-mono focus:outline-none"
      />
    </div>
    
    <div className="glitch-box p-1 border border-white/10">
      <textarea
        rows={4}
        placeholder="MESSAGE_CONTENT"
        className="w-full bg-black/50 p-3 text-white font-mono focus:outline-none resize-none"
      ></textarea>
    </div>
    
    <button
      type="submit"
      className="w-full p-4 bg-black border border-[#ff00ff] hover:border-[#00ffff] transition-colors group"
    >
      <span className="flex items-center justify-center space-x-2 font-mono">
        <span className="text-[#ff00ff] group-hover:text-[#00ffff]">INITIATE_TRANSMISSION</span>
        <Send className="w-4 h-4 text-[#ff00ff] group-hover:text-[#00ffff]" />
      </span>
    </button>
  </form>
);