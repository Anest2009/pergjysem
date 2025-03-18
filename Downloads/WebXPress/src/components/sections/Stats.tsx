import { Container } from '../ui/Container'

const stats = [
  { number: '120+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '120k+', label: 'Social Reach' },
  { number: '24/7', label: 'Support' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#3739a8] to-[#5171f3]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-lg text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}