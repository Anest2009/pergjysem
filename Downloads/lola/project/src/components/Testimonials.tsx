import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "Stacioni Hyjnore has transformed my approach to meditation and mindfulness. The guidance I've received is invaluable."
  },
  {
    name: "Michael Chen",
    role: "Business Professional",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "The spiritual counseling sessions have helped me find balance in my busy life. I'm more focused and at peace."
  },
  {
    name: "Emma Davis",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "The chakra balancing sessions have opened up new dimensions of creativity in my work. Truly life-changing."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-[#A9DFF7]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from those who have experienced transformation through our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A9DFF7]/20">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B5CDA3] to-[#A9DFF7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#B5CDA3]/20 group-hover:border-transparent transition-colors duration-300"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-[#B5CDA3]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">{testimonial.quote}</p>
              <div className="mt-6 flex justify-end">
                <div className="w-8 h-8 bg-gradient-to-br from-[#B5CDA3]/20 to-[#A9DFF7]/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[#B5CDA3]">"</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}