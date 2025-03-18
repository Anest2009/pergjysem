import React from 'react';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const techCategories = [
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind"],
    color: "#ff00ff"
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
    color: "#00ffff"
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java"],
    color: "#ff00ff"
  },
  {
    icon: Terminal,
    title: "Tools",
    skills: ["Git", "VS Code", "Docker", "Figma"],
    color: "#00ffff"
  }
];

export const TechStack = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
    {techCategories.map((category, index) => (
      <div 
        key={index}
        className="glitch-box p-6 border border-white/10 hover:border-[#ff00ff] transition-colors"
      >
        <category.icon 
          className="w-8 h-8 mb-4"
          style={{ color: category.color }}
        />
        <h3 className="text-lg font-bold mb-4" style={{ color: category.color }}>
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span 
              key={i}
              className="text-sm font-mono px-2 py-1 bg-white/5 text-white/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);