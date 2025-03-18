import React from 'react';
import { Heart, Users, Star, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#B5CDA3]/10 via-white to-[#A9DFF7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Owner Section for Lola */}
        <div className="mb-24">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-12 h-12 text-[#B5CDA3]" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Meet Lola</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">Founder & Spiritual Guide</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B5CDA3] to-[#A9DFF7] rounded-2xl transform rotate-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800"
                alt="Lola"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in spiritual guidance and meditation, Lola has helped countless individuals find their inner peace and purpose. Her journey began in the serene mountains of Tibet, where she spent years studying ancient meditation techniques and spiritual practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lola's unique approach combines traditional wisdom with modern mindfulness techniques, creating a transformative experience that resonates with people from all walks of life. Her mission is to make spiritual growth accessible and meaningful for everyone.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">1000+</div>
                  <div className="text-sm text-gray-600">Clients Guided</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">100%</div>
                  <div className="text-sm text-gray-600">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Section for Morena */}
        <div className="mb-24">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-12 h-12 text-[#B5CDA3]" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Meet Morena</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">Co-Founder & Wellness Coach</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B5CDA3] to-[#A9DFF7] rounded-2xl transform rotate-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjB3ZWJzaXRlfGVufDB8fDB8fHww"
                alt="Morena"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Morena is a passionate wellness coach with over 10 years of experience in holistic health and personal development. Her journey began with a deep interest in natural healing practices, leading her to study various modalities including yoga, nutrition, and mindfulness.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Morena believes in the power of community and connection, and she strives to create a supportive environment for individuals to explore their wellness journeys. Her approach is tailored to meet the unique needs of each person, ensuring a personalized experience.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">800+</div>
                  <div className="text-sm text-gray-600">Clients Guided</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">100%</div>
                  <div className="text-sm text-gray-600">Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded with a vision to bring peace and mindfulness to everyone's life, 
            Stacioni Hyjnore has grown into a sanctuary for those seeking spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            {
              icon: Heart,
              title: "Our Mission",
              description: "To guide individuals on their journey to inner peace and spiritual awakening through personalized guidance and ancient wisdom."
            },
            {
              icon: Users,
              title: "Our Community",
              description: "A thriving family of mindful individuals supporting each other's growth, sharing experiences, and creating lasting connections."
            },
            {
              icon: Star,
              title: "Our Values",
              description: "Rooted in authenticity, compassion, and unwavering dedication to personal transformation and spiritual enlightenment."
            }
          ].map((item, index) => (
            <div key={index} className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#B5CDA3]/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B5CDA3] to-[#A9DFF7] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#B5CDA3] to-[#A9DFF7] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white/50 rounded-full border border-[#B5CDA3]/20">
            <span className="text-sm text-gray-600">Certified by International Meditation Association</span>
          </div>
        </div>
      </div>
    </section>
  );
}