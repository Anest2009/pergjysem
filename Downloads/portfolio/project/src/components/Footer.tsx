import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    link: 'https://github.com/Anest2009'
  },
  {
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/anest-petollari-31158b338/'
  },
  {
    icon: Twitter,
    link: '#'
  }
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-purple-400 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 All rights reserved.</p>
            <p className="text-sm text-gray-500">Designed & Developed BY ME</p>
          </div>
        </div>
      </div>
    </footer>
  );
}