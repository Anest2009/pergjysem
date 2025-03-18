import React from 'react';

export const GlitchText = ({ text, className = '' }: { text: string; className?: string }) => (
  <div className={`relative ${className}`}>
    <span className="absolute top-0 left-0 -translate-x-[2px] translate-y-[2px] text-[#ff00ff] opacity-70 mix-blend-screen animate-glitch1">
      {text}
    </span>
    <span className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] text-[#00ffff] opacity-70 mix-blend-screen animate-glitch2">
      {text}
    </span>
    <span className="relative">{text}</span>
  </div>
);