import { Container } from '../ui/Container'
import { GradientText } from '../ui/GradientText'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your business, goals, and target audience.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Develop a comprehensive plan tailored to your specific needs and objectives.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Create stunning, functional solutions that align with your brand identity.',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'Deploy your solution and continuously improve based on real-world data.',
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-[#3739a8]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our <GradientText>Process</GradientText>
          </h2>
          <p className="text-xl text-white/80">
            A proven methodology that delivers results. We follow a structured approach to ensure your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-5xl font-bold text-white/20 mb-4 block">{step.number}</span>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}