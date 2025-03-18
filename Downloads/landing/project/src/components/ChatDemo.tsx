import { motion } from 'framer-motion';
import { Bot, Hash, Users, Bell, Pin } from 'lucide-react';
import { useState, useEffect } from 'react';

const conversation = [
  {
    user: 'BusinessOwner',
    message: "Hi! I need a Discord bot for my business",
    time: "21:19",
    isBot: false
  },
  {
    user: 'SalesBot',
    message: "Hello! 👋 I'd be happy to help. What type of business do you run?",
    time: "21:19",
    isBot: true
  },
  {
    user: 'BusinessOwner',
    message: "I sell online courses and want to automate sales through Discord",
    time: "21:20",
    isBot: false
  },
  {
    user: 'SalesBot',
    message: "Perfect! Our bot is designed for course creators like you. Here's what we offer:\n\n• Automated course sales\n• Secure payment processing\n• Instant access delivery\n• Student management\n• 24/7 support\n\nOn average, our clients see 45% more sales!",
    time: "21:20",
    isBot: true
  },
  {
    user: 'BusinessOwner',
    message: "That sounds great! How does the payment system work?",
    time: "21:21",
    isBot: false
  },
  {
    user: 'SalesBot',
    message: "We integrate with Stripe and PayPal. Here's the flow:\n\n1. Student inquires about your course\n2. Bot shows course details and pricing\n3. Student makes payment\n4. Bot instantly grants course access\n5. Sends welcome message with materials\n\nWould you like to try our 14-day free trial?",
    time: "21:21",
    isBot: true
  }
];

export default function ChatDemo() {
  const [messages, setMessages] = useState<typeof conversation>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset animation
    const resetAnimation = () => {
      setMessages([]);
      setCurrentIndex(0);
    };

    // Show next message
    const timer = setInterval(() => {
      if (currentIndex < conversation.length) {
        setMessages(prev => [...prev, conversation[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Wait before resetting
        setTimeout(resetAnimation, 2000);
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="bg-[#0F1014]">
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,#FF7E39,transparent_70%)] opacity-[0.1]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="text-[#FF7E39] text-sm font-medium mb-2 block">Live Demo</span>
            <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-6">
              Smart Bot in <span className="text-[#FF7E39]">Action</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Watch how our bot helps course creators sell more
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-[#313338] rounded-xl overflow-hidden border border-[#1E1F22]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Server Header */}
              <div className="bg-[#313338] px-4 py-3 border-b border-[#1E1F22] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <span className="text-white font-medium">course-sales</span>
                </div>
                <div className="flex items-center gap-4">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <Pin className="w-5 h-5 text-gray-400" />
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Chat Area */}
              <div className="h-[500px] flex flex-col bg-[#313338]">
                <div className="flex-1 p-4 overflow-y-auto">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex items-start gap-4 hover:bg-[#2E3035] p-2 rounded mb-4"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        msg.isBot ? 'bg-[#FF7E39]/20' : 'bg-blue-500'
                      }`}>
                        {msg.isBot && <Bot className="w-6 h-6 text-[#FF7E39]" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${msg.isBot ? 'text-[#FF7E39]' : 'text-blue-400'}`}>
                            {msg.user}
                          </span>
                          <span className="text-gray-400 text-xs">Today at {msg.time}</span>
                        </div>
                        <p className="text-gray-100 whitespace-pre-line">{msg.message}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input Area (Disabled) */}
                <div className="p-4 bg-[#313338] border-t border-[#1E1F22]">
                  <div className="bg-[#383A40] rounded-lg p-4">
                    <input 
                      type="text"
                      disabled
                      placeholder="Watch the demo..."
                      className="w-full bg-transparent text-white placeholder-gray-400 outline-none opacity-50 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
