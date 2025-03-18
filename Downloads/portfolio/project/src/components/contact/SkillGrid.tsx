import React from 'react';
import { Code2, Palette, Cpu, Zap } from 'lucide-react';

const skills = [
  { 
    icon: Code2, 
    label: 'CODE.EXE', 
    color: '#ff00ff',
    link: 'https://github.com/Anest2009'
  },
  { 
    icon: Palette, 
    label: 'DESIGN.SYS', 
    color: '#00ffff',
    link: 'https://www.behance.net/anestpetollariUXER'
  },
  { 
    icon: Cpu, 
    label: 'LOGIC.BIN', 
    color: '#ff00ff' 
  },
  { 
    icon: Zap, 
    label: 'CREATE.DAT', 
    color: '#00ffff' 
  }
];

export const SkillGrid = () => (
  <div className="grid grid-cols-2 gap-4 mt-8">
    {skills.map((skill, index) => (
      <a 
        key={index}
        href={skill.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`glitch-box p-4 border border-white/10 hover:border-[#ff00ff] transition-colors group ${skill.link ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <skill.icon 
          className="w-6 h-6 mb-2"
          style={{ color: skill.color }}
        />
        <span className="font-mono text-sm" style={{ color: skill.color }}>
          {skill.label}
        </span>
      </a>
    ))}
  </div>
);