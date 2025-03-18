import { Code, Globe, Instagram, MapPin, Sparkles, TrendingUp } from 'lucide-react'
import { Container } from '../ui/Container'
import { GradientText } from '../ui/GradientText'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Instagram,
    title: 'Social Media Management',
    description: 'Strategic content creation and community engagement across all platforms.',
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: Globe,
    title: 'SEO Optimization',
    description: 'Boost your search rankings and drive organic traffic to your website.',
    color: 'from-green-600 to-teal-600',
  },
  {
    icon: MapPin,
    title: 'Google Maps Integration',
    description: 'Optimize your local presence and appear in relevant searches.',
    color: 'from-red-600 to-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to measure and improve your digital performance.',
    color: 'from-yellow-600 to-amber-600',
  },
  {
    icon: Sparkles,
    title: 'Brand Strategy',
    description: 'Develop a compelling brand identity that resonates with your audience.',
    color: 'from-violet-600 to-purple-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our <GradientText>Premium</GradientText> Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions tailored to your business needs. We help you stand out in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3739a8] to-[#5171f3] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}