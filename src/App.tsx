import { useState, useEffect } from "react";
import {
  ShoppingBagIcon,
  HeartIcon,
  StarIcon,
  CheckIcon,
  Building2Icon,
  GlobeIcon,
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const partnerLogos = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="min-h-screen bg-[#121212] overflow-hidden">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#1e1e1e] shadow-[0_4px_12px_rgba(0,0,0,0.5)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-[#ff7b2c]">PËR</span>
                <span className="text-[#00ff37]">GJYSMË</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-white hover:text-[#ff7b2c] transition-colors">How It Works</a>
              <a href="#benefits" className="text-white hover:text-[#ff7b2c] transition-colors">Benefits</a>
              <a href="#get-started" className="bg-[#ff7b2c] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Side - Orange */}
          <div className="hero-left w-full md:w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#ff7b2c]/30">
              <img
                src="./src/images/totebag.png"
                alt="Tote Bag"
                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
            </div>
            <div className="hero-content relative z-10 backdrop-blur-[2px]">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Save Money on Quality Food
              </h2>
              <p className="text-white text-lg mb-6">
                Get up to 50% off at your favorite local restaurants
              </p>
              <div className="flex items-center space-x-4">
                <a href="#download" className="btn-primary">
                  Download App
                </a>
                <div className="flex -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/63.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Teal */}
          <div className="hero-right w-full md:w-1/2">
            <div className="hero-content">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Fight Food Waste Together
              </h2>
              <p className="text-white text-lg mb-6">
                Join our mission to create a sustainable future
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value text-white">50%</div>
                  <div className="stat-label text-white">Average Savings</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value text-white">1000+</div>
                  <div className="stat-label text-white">Partner Restaurants</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value text-white">500K+</div>
                  <div className="stat-label text-white">Users</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value text-white">1M+</div>
                  <div className="stat-label text-white">Meals Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div className="py-16 bg-[#1e1e1e] border-t border-b border-[#333333]" id="partners">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-items-center">
            {[
              { src: "./src/images/foresta.png", alt: "Foresta" },
              { src: "./src/images/partner.png", alt: "Partner 2" },
              { src: "./src/images/catering.png", alt: "Partner 3" }
            ].map((partner, index) => (
              <img
                key={index}
                src={partner.src}
                alt={partner.alt}
                className="h-32 md:h-40 lg:h-48 w-auto object-contain transition-transform duration-300 hover:scale-105 opacity-90 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-[#121212]" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Features Grid */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <ShoppingBagIcon className="w-8 h-8 text-[#ff7b2c]" />,
                    title: "Find Mystery Bags",
                    description: "Browse surprise food bags from your favorite local spots"
                  },
                  {
                    icon: <HeartIcon className="w-8 h-8 text-[#ff7b2c]" />,
                    title: "Save & Surprise",
                    description: "Get amazing deals while saving perfectly good food"
                  },
                  {
                    icon: <StarIcon className="w-8 h-8 text-[#ff7b2c]" />,
                    title: "Collect & Enjoy",
                    description: "Pick up your mystery bag during collection time"
                  },
                  {
                    icon: <ShoppingBagIcon className="w-8 h-8 text-[#ff7b2c]" />,
                    title: "Rate & Share",
                    description: "Rate your experience and share with friends"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-[#242424] shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#333333]"
                  >
                    <div className="bg-[#1e1e1e] w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#ff7b2c]/10 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[300px] h-[600px] shadow-2xl">
                <img
                  src="./src/images/Cover.png"
                  alt="App Preview"
                  className="w-full h-full object-cover rounded-[3rem]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-[#121212]" id="benefits">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Benefits for Everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-6 bg-[#242424] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-[#ff7b2c] rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300"></div>
                <ShoppingBagIcon className="w-16 h-16 text-[#ff7b2c] relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-white">For Consumers</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Save up to 50% on meals</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Discover new local favorites</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Fight food waste</span>
                </li>
              </ul>
            </div>

            <div className="group p-6 bg-[#242424] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-[#00ff37] rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300"></div>
                <Building2Icon className="w-16 h-16 text-[#00ff37] relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-white">For Businesses</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Reduce food waste costs</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Attract new customers</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Sustainable operations</span>
                </li>
              </ul>
            </div>

            <div className="group p-6 bg-[#242424] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-[#ff7b2c] rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300"></div>
                <GlobeIcon className="w-16 h-16 text-[#ff7b2c] relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-white">For Planet</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Reduce CO2 emissions</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Save water resources</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00ff37] mr-2" />
                  <span>Build sustainable communities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-[#1e1e1e] relative overflow-hidden" id="impact">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff7b2c]/5 to-[#00ff37]/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#242424] border border-[#333333] backdrop-blur-sm p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-[#ff7b2c] mb-2">2,500+</div>
              <div className="text-gray-400">Meals Saved</div>
            </div>
            <div className="bg-[#242424] border border-[#333333] backdrop-blur-sm p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-[#00ff37] mb-2">50+</div>
              <div className="text-gray-400">Partner Businesses</div>
            </div>
            <div className="bg-[#242424] border border-[#333333] backdrop-blur-sm p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-[#ff7b2c] mb-2">5,000kg</div>
              <div className="text-gray-400">CO₂ Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Making a Difference Section */}
      <div className="py-20 bg-[#121212]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b2c]/20 to-[#00ff37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80"
                alt="Sustainable Food"
                className="w-full h-[500px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Making a Difference</h2>
                <p className="text-gray-300">
                  Join us in our mission to create a more sustainable future through
                  responsible food consumption and community support.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#242424] border border-[#333333] flex items-center justify-center">
                      <StarIcon className="w-5 h-5 text-[#ff7b2c]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Environmental Impact</h3>
                    <p className="text-gray-300">Every meal saved means less waste in landfills and reduced CO2 emissions</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#242424] border border-[#333333] flex items-center justify-center">
                      <StarIcon className="w-5 h-5 text-[#ff7b2c]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Convenience First</h3>
                    <p className="text-gray-300">Easy-to-use platform that connects consumers with local businesses</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#242424] border border-[#333333] flex items-center justify-center">
                      <HeartIcon className="w-5 h-5 text-[#00ff37]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Community Support</h3>
                    <p className="text-gray-300">Building stronger communities through sustainable practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-[#242424] rounded-xl p-6 border border-[#333333] transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-[#ff7b2c]"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex text-[#ff7b2c]">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white font-semibold">Sarah Mitchell</span>
                  </div>
                  <p className="text-[#a0a0a0] text-sm italic">
                    "PërGjysmë has completely changed how I think about food waste. Not only am I saving money, 
                    but I feel good knowing I'm contributing to a more sustainable future. The app is super easy 
                    to use, and the restaurants are amazing!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who Can Partner With Us Section */}
      <div className="py-20 bg-[#121212]" id="partner-with-us">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Who Can Partner With Us?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#242424] rounded-xl shadow-lg p-8 border-l-4 border-[#ff7b2c]">
              <h3 className="text-2xl font-bold mb-6 text-white">Businesses</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#ff7b2c] mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">Restaurants looking to reduce food waste</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#ff7b2c] mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">Bakeries with end-of-day products</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#ff7b2c] mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">Cafeterias seeking sustainable solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#ff7b2c] mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">Fruit and vegetable stores</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#242424] rounded-xl shadow-lg p-8 border-l-4 border-[#00ff37]">
              <h3 className="text-2xl font-bold mb-6 text-white">NGO Partners</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#00ff37] mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">Asylums providing care and support</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#00ff37] mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">Orphanages helping children in need</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-[#00ff37] mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">Social centers supporting communities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sponsorship Highlight */}
          <div className="bg-gradient-to-r from-[#ff7b2c]/10 to-[#00ff37]/10 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7b2c]/5 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Proudly Sponsored By</h3>
                  <p className="text-xl font-semibold text-[#ff7b2c] mb-2">Qendra Sociale Don Bosco</p>
                  <p className="text-gray-400 max-w-lg">
                    Our mission to reduce food waste and support communities is proudly backed by 
                    Qendra Sociale Don Bosco, a leading social center committed to making a positive 
                    impact in society.
                  </p>
                </div>
                <div className="w-40 h-40 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
                  <img
                    src="/src/images/donbosco.png"
                    alt="Don Bosco Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-[#121212]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg text-gray-300 space-y-6">
            <p>
              Join us in our mission to reduce food waste while making quality meals more accessible.
              Together, we can create a more sustainable future for our community.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-[#ff7b2c]">PËR</span>
                <span className="text-[#00ff37]">GJYSMË</span>
              </h1>
              <p className="text-gray-400 text-sm">Fighting food waste, one meal at a time</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Përgjysmë. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;