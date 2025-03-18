import React from 'react';
import { GlitchText } from '../GlitchText';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  image: string;
  category: string;
  link?: string;
  tech: string[];
}

export const ProjectCard = ({ title, image, category, link, tech }: ProjectCardProps) => (
  <div className="group relative overflow-hidden aspect-square cursor-pointer">
    <div className="absolute inset-0 bg-[#ff00ff] mix-blend-screen opacity-0 group-hover:opacity-20 transition-opacity"></div>
    <div className="absolute inset-0 bg-[#00ffff] mix-blend-screen opacity-0 group-hover:opacity-20 transition-opacity delay-75"></div>
    
    <img 
      src={image}
      alt={title}
      className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
    />
    
    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 to-transparent">
      <div className="glitch-text-sm text-[#00ffff]">{category}</div>
      <GlitchText 
        text={title}
        className="text-2xl font-bold text-white mb-2"
      />
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="text-xs font-mono px-2 py-1 bg-white/10 text-[#ff00ff]">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">View Project</span>
        </a>
      )}
    </div>
  </div>
);