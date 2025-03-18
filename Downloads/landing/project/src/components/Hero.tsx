import { motion } from 'framer-motion';
import { Bot, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0A0A0B]">
      {/* Luxury background composition */}
      <div className="absolute inset-0">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
        
        {/* Brand accent layer */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,#FF7E39_0%,transparent_70%)] opacity-[0.15] mix-blend-overlay" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[40%] bg-[radial-gradient(ellipse_at_center,#FF7E39_0%,transparent_70%)] opacity-[0.08] mix-blend-overlay" />
        </div>

        {/* Refined mesh pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGN0UzOSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] animate-subtle-drift" />
        </div>

        {/* Elegant light effects */}
        <div className="absolute inset-0">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-super-slow-spin">
            <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF7E39] to-transparent opacity-[0.15] rotate-[35deg] transform -translate-x-1/2 -translate-y-1/2 blur-[2px]" />
            <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF7E39] to-transparent opacity-[0.15] -rotate-[35deg] transform -translate-x-1/2 -translate-y-1/2 blur-[2px]" />
          </div>
        </div>

        {/* Premium orb effects */}
        <div className="absolute inset-0">
          <div className="absolute top-[5%] right-[45%] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#FF7E39] to-transparent opacity-[0.07] blur-[120px] animate-luxury-float" />
          <div className="absolute bottom-[5%] left-[45%] w-[900px] h-[900px] rounded-full bg-gradient-to-tl from-[#FF7E39] to-transparent opacity-[0.07] blur-[120px] animate-luxury-float-reverse" />
        </div>

        {/* Ultra-fine grain texture */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay">
          <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIxLjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4=')] animate-subtle-grain" />
        </div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-syne mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-white">Boost Your</span>
                <br />
                <span className="text-[#FF7E39]">Discord Sales</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Our services are continuously refined to offer cutting-edge solutions that are simple to implement.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <button className="bg-[#FF7E39] hover:bg-[#FF7E39]/90 px-8 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Get Started Free <Sparkles className="w-5 h-5" />
                  </span>
                </button>
                
                <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/10 transition-all duration-300 flex items-center gap-2">
                  Watch Demo <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Right Content - 3D Bot Visualization */}
            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-[100px] opacity-30" />
                <div className="relative z-10 w-full h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 flex items-center justify-center">
                  <Bot className="w-24 h-24 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="col-span-2 md:col-span-4 flex justify-center">
              <div className="w-24 h-[1px] bg-gradient-to-r from-[#FA4A4E] to-[#FF7E39] mb-12" />
            </div>
            {[
              { value: '150k+', label: 'Businesses served' },
              { value: '100+', label: 'Countries reached' },
              { value: '50%', label: 'Average increase' },
              { value: '1M+', label: 'Campaigns launched' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-[#FF7E39] mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}