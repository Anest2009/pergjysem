import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Light Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#ffffff,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#ffffff,transparent_70%)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#FF7E39] text-sm font-medium mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-6">
            Loved by <span className="text-[#FF7E39]">Teams</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            See what others are saying about our AI sales assistant
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full flex flex-col justify-between hover:bg-white/10 transition-all duration-300"
                >
                  <Quote className="w-8 h-8 text-[#FF7E39] mb-4" />
                  <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.feedback}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-full">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.username}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.username}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}