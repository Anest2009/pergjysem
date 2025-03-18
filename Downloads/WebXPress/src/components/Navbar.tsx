import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#fcfcfc] fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8" src="/logo.png" alt="WebXPress" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-[#3739a8] hover:text-[#5171f3] px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#services" className="text-[#3739a8] hover:text-[#5171f3] px-3 py-2 rounded-md font-medium">Services</a>
              <a href="#about" className="text-[#3739a8] hover:text-[#5171f3] px-3 py-2 rounded-md font-medium">About</a>
              <a href="#testimonials" className="text-[#3739a8] hover:text-[#5171f3] px-3 py-2 rounded-md font-medium">Testimonials</a>
              <a href="#contact" className="bg-[#5171f3] text-white hover:bg-[#3f4bc1] px-4 py-2 rounded-md font-medium">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#3739a8]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="text-[#3739a8] hover:text-[#5171f3] block px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#services" className="text-[#3739a8] hover:text-[#5171f3] block px-3 py-2 rounded-md font-medium">Services</a>
            <a href="#about" className="text-[#3739a8] hover:text-[#5171f3] block px-3 py-2 rounded-md font-medium">About</a>
            <a href="#testimonials" className="text-[#3739a8] hover:text-[#5171f3] block px-3 py-2 rounded-md font-medium">Testimonials</a>
            <a href="#contact" className="bg-[#5171f3] text-white hover:bg-[#3f4bc1] block px-3 py-2 rounded-md font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  )
}