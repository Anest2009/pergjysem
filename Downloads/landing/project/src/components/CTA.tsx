import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-[#0F1014]">
        {/* Radial gradient base */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FA4A4E]/10 to-[#FF7E39]/10" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#FA4A4E,#FF7E39,#FA4A4E)] animate-[spin_8s_linear_infinite] blur-[100px]" />
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4NCjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiPg0KPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPg0KPC9maWx0ZXI+DQo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjA1Ii8+DQo8L3N2Zz4=')] opacity-50" />
        
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1014] via-[#0F1014]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1014] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-white/10"
          >
            <Sparkles className="w-5 h-5 text-[#FA4A4E]" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#FA4A4E] to-[#FF7E39] bg-clip-text text-transparent">
              Limited Time Offer
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne text-white mb-6 leading-tight">
            Transform Your Sales Process{" "}
            <span className="bg-gradient-to-r from-[#FA4A4E] to-[#FF7E39] bg-clip-text text-transparent">
              Today
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Join thousands of successful businesses using our AI-powered platform to automate their sales and boost revenue.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#FA4A4E] to-[#FF7E39] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#FA4A4E]/25 hover:shadow-xl hover:shadow-[#FA4A4E]/30 transition-shadow"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white px-8 py-4 rounded-xl font-medium text-lg transition-colors backdrop-blur-lg bg-white/5 border border-white/10"
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}