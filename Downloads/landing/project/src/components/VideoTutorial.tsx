import { motion } from 'framer-motion';
import { Play, Settings, Bot, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Bot,
    title: 'Add Bot to Server',
    description: 'Click "Add to Discord" and select your server'
  },
  {
    icon: Settings,
    title: 'Quick Setup',
    description: 'Set your preferences in 2 minutes or less'
  },
  {
    icon: Rocket,
    title: 'Go Live',
    description: 'Bot starts engaging with customers instantly'
  }
];

export default function VideoTutorial() {
  return (
    <section className="py-24 bg-[#090909] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,#FF7E39,transparent_70%)] opacity-[0.1]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-[#FF7E39] text-sm font-medium mb-2 block">Quick Start</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-6">
            Setup in <span className="text-[#FF7E39]">Minutes</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Watch our quick tutorial to get your sales bot up and running in under 5 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-[#0F1014]">
              {/* Replace src with your actual video thumbnail */}
              <img 
                src="/video-thumbnail.jpg" 
                alt="Tutorial Video"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-[#FF7E39] flex items-center justify-center group hover:bg-[#FF7E39]/90 transition-colors">
                  <Play className="w-8 h-8 text-white fill-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="bg-[#FF7E39]/10 p-4 rounded-xl">
                  <step.icon className="w-6 h-6 text-[#FF7E39]" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#FF7E39] font-bold">0{index + 1}</span>
                    <h3 className="text-white font-bold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#FF7E39] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#FF7E39]/90 transition-colors"
            >
              Watch Full Tutorial
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}