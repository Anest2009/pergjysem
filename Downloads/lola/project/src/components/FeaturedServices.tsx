import React from 'react';
import { Flower, Heart, Brain, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Flower,
    title: 'Guided Meditation',
    description: 'Experience deep relaxation and inner peace through our personalized meditation sessions.'
  },
  {
    icon: Heart,
    title: 'Chakra Balancing',
    description: 'Restore harmony to your energy centers with our specialized chakra healing techniques.'
  },
  {
    icon: Brain,
    title: 'Mindfulness Training',
    description: 'Learn practical techniques to stay present and reduce stress in your daily life.'
  },
  {
    icon: Sparkles,
    title: 'Spiritual Counseling',
    description: 'Get guidance and support on your spiritual journey from our experienced counselors.'
  }
];

export function FeaturedServices() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#B5CDA3]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of spiritual and mindfulness services designed to help you
            find balance, peace, and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#B5CDA3]/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#B5CDA3] to-[#A9DFF7] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}