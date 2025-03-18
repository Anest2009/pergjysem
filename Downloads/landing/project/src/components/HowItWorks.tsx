import { motion } from 'framer-motion';
import { UserPlus, Target, Ticket, MessageCircle, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'User Joins',
    description: 'New member joins your Discord server'
  },
  {
    icon: Target,
    title: 'Bot Qualifies',
    description: 'AI analyzes user behavior and engagement'
  },
  {
    icon: Ticket,
    title: 'Opens Ticket',
    description: 'Creates personalized sales channel'
  },
  {
    icon: MessageCircle,
    title: 'Engages',
    description: 'Natural conversation and need analysis'
  },
  {
    icon: CheckCircle,
    title: 'Closes Sale',
    description: 'Converts prospect into paying customer'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Light Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,#ffffff,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,#ffffff,transparent_70%)]" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#FF7E39] text-sm font-medium mb-2 block">Process</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-6">
            How It <span className="text-[#FF7E39]">Works</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A seamless process that converts visitors into valuable customers
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-[#FF7E39]/50 via-[#FF7E39] to-[#FF7E39]/50 transform -translate-y-1/2 z-0 hidden lg:block opacity-50" />
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative bg-[#090909] backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-[#0F1014] transition-all duration-300"
                >
                  <div className="bg-[#FF7E39]/10 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#FF7E39]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}