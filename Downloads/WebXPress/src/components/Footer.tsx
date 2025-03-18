import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#3739a8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="WebXPress" className="h-8 mb-4" />
            <p className="text-[#fcfcfc] opacity-80">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-[#fcfcfc] opacity-80">
              <li>Web Development</li>
              <li>Social Media Management</li>
              <li>SEO Optimization</li>
              <li>Google Maps Integration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-[#fcfcfc] opacity-80">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#5171f3] transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#5171f3] transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-[#5171f3] transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-[#5171f3] transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#fcfcfc] border-opacity-20 mt-8 pt-8 text-center text-[#fcfcfc] opacity-80">
          <p>&copy; {new Date().getFullYear()} WebXPress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}