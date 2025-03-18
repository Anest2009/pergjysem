import { features } from '../data/features';
import { Target, MessagesSquare, Ticket, BarChart } from 'lucide-react';

const iconMap = {
  'target': Target,
  'messages-square': MessagesSquare,
  'ticket': Ticket,
  'bar-chart': BarChart
};

export default function Features() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ffffff,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-20%,#ffffff,transparent_70%)]" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-[#FF7E39] text-sm font-medium mb-2 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-6">
            Exclusive Methods
            <br />
            We Use for <span className="text-[#FF7E39]">Success</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF7E39]/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-[#FF7E39]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1681400019731-5d7cc4cafb9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" 
                alt="Advanced Technology" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/50 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}