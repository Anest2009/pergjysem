import React from 'react';
import { Leaf, Heart, Sparkles, Wind, Mountain, ArrowRight } from 'lucide-react';
import newBannerImage from '/src/banner.jpg'; // Import the new image

const services = [
  {
    title: 'General Consultation',
    description: 'Guidance + Meditation',
    icon: <Leaf className="w-8 h-8 mb-4 text-[#607244]" />, // Green icon
    link: 'https://calendly.com/yourbookinglink1'
  },
  {
    title: '2 Human Design Sessions',
    description: 'Discover Your Authentic Self',
    icon: <Heart className="w-8 h-8 mb-4 text-[#607244]" />, // Green icon
    link: 'https://calendly.com/yourbookinglink2'
  },
  {
    title: 'Free Consultation',
    description: 'Every 28th Day of the Month',
    icon: <Sparkles className="w-8 h-8 mb-4 text-[#607244]" />, // Green icon
    link: 'https://calendly.com/yourbookinglink3'
  },
  {
    title: '5 Consultations',
    description: '+ Timeline Therapy + Tapping',
    icon: <Wind className="w-8 h-8 mb-4 text-[#607244]" />, // Green icon
    link: 'https://calendly.com/yourbookinglink4'
  },
  {
    title: 'Eagles Nest Retreat',
    description: 'Transform Your Life',
    icon: <Mountain className="w-8 h-8 mb-4 text-[#607244]" />, // Green icon
    link: 'https://calendly.com/yourbookinglink5'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Banner Section - Responsive */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden"> {/* Responsive height */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${newBannerImage})`, // Use the new image
          }}
        />
      </div>

      {/* Services Section - Vertical Cards */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="flex flex-col space-y-8"> {/* Stack cards vertically */}
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md mx-auto" // Center cards and limit width
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-[#607244]"> {/* Green text */}
                  {service.title}
                </h3>
                <p className="text-[#607244] mb-4"> {/* Green text */}
                  {service.description}
                </p>
                <div className="inline-flex items-center text-[#607244] group-hover:text-[#607244]/80"> {/* Green text with hover effect */}
                  Book Now <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-emerald-800 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-900 opacity-80"></div>
        <div className="relative container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic font-light text-emerald-100">
            "The highest form of art is transforming yourself into the person you were divinely designed to be."
          </blockquote>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Wind Of Change. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;