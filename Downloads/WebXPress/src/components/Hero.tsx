import { ArrowRight, Code, Globe, Instagram } from 'lucide-react'

export default function Hero() {
  return (
    <div id="home" className="pt-20 bg-gradient-to-b from-[#fcfcfc] to-[#f5f5ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#3739a8] mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From web development to social media management, we help businesses thrive in the digital world. Get noticed, grow your audience, and boost your revenue.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-[#5171f3] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#3f4bc1] transition-colors">
                Get Started <ArrowRight size={20} />
              </a>
              <a href="#services" className="border-2 border-[#3739a8] text-[#3739a8] px-6 py-3 rounded-lg font-medium hover:bg-[#3739a8] hover:text-white transition-colors">
                Our Services
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <Code className="text-[#5171f3] w-12 h-12 mb-4" />
                <h3 className="font-semibold text-lg">Web Development</h3>
                <p className="text-gray-600">Custom websites that convert</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform mt-8">
                <Instagram className="text-[#5171f3] w-12 h-12 mb-4" />
                <h3 className="font-semibold text-lg">Social Media</h3>
                <p className="text-gray-600">Engage your audience</p>
              </div>
            </div>
            <div className="space-y-4 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <Globe className="text-[#5171f3] w-12 h-12 mb-4" />
                <h3 className="font-semibold text-lg">SEO Optimization</h3>
                <p className="text-gray-600">Rank higher on Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}