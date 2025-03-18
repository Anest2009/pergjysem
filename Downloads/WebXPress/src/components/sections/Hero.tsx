import { ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { GradientText } from '../ui/GradientText'

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-[7.5rem] pb-[6rem] lg:pt-[12rem]">
      <Container className="relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h1 className="text-5xl font-bold lg:text-7xl">
              Transform Your <GradientText>Digital Presence</GradientText> With Innovation
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
              We don't just build websites - we create digital experiences that drive growth. 
              From stunning web apps to strategic social media management, we're your partner in digital success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://calendly.com/anestpetollari44/30min"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#3739a8] rounded-xl hover:bg-[#5171f3] transition-all duration-200 transform hover:scale-105"
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-[#3739a8] bg-white border-2 border-[#3739a8] rounded-xl hover:bg-[#3739a8] hover:text-white transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-[#5171f3] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1607895232440-6ba075948c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJsdWUlMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww"
                alt="Modern workspace"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 bg-[#fcfcfc] bg-opacity-70 backdrop-blur-3xl -z-10"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-[#5171f3] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-[#3739a8] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>
  )
}