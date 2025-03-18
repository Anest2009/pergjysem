import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const contacts = [
  { 
    icon: Mail, 
    label: 'MAIL.SYS', 
    value: 'anestpetollari44@gmail.com',
    link: 'mailto:anestpetollari44@gmail.com',
    color: '#ff00ff'
  },
  { 
    icon: Github, 
    label: 'GITHUB.EXE', 
    value: 'Anest2009',
    link: 'https://github.com/Anest2009',
    color: '#00ffff'
  },
  { 
    icon: Linkedin, 
    label: 'LINK.DAT', 
    value: 'ANEST_PETOLLARI',
    link: 'https://www.linkedin.com/in/anest-petollari-31158b338/',
    color: '#ff00ff'
  }
];

export const ContactGrid = () => (
  <div className="space-y-4">
    {contacts.map((contact, index) => (
      <a 
        key={index}
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className="glitch-box p-4 border border-white/10 hover:border-[#ff00ff] transition-colors group block"
      >
        <div className="flex items-center space-x-4">
          <contact.icon 
            className="w-6 h-6"
            style={{ color: contact.color }}
          />
          <div>
            <div className="font-mono text-sm text-gray-400">{contact.label}</div>
            <div 
              className="font-mono"
              style={{ color: contact.color }}
            >
              {contact.value}
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>
);