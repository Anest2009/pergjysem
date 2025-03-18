import { Container } from '../ui/Container'

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Container className="relative z-10">
        <div className="bg-gradient-to-r from-[#3739a8] to-[#5171f3] rounded-3xl p-12 md:p-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's create something extraordinary together. Book a free consultation and discover how we can help your business grow.
            </p>
            <a
              href="https://calendly.com/anestpetollari44/30min"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-[#3739a8] bg-white rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </Container>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-r from-[#3739a8]/10 to-[#5171f3]/10 blur-3xl -z-10"></div>
    </section>
  )
}