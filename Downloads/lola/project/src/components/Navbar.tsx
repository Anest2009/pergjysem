import React from 'react';
import { Menu, X, Flower } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
              <Flower className="h-8 w-8 text-[#B5CDA3]" />
              <span className="text-xl font-serif text-gray-800">Stacioni Hyjnore</span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#B5CDA3] transition-colors duration-200">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#B5CDA3] transition-colors duration-200">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#B5CDA3] transition-colors duration-200">Testimonials</button>
            <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-[#B5CDA3] transition-colors duration-200">Book Session</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#B5CDA3] transition-colors duration-200">Contact</button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B5CDA3]">Services</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B5CDA3]">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B5CDA3]">Testimonials</button>
            <button onClick={() => scrollToSection('booking')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B5CDA3]">Book Session</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#B5CDA3]">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}