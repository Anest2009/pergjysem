import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-[#fcfcfc] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3739a8] mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with WebXPress.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO, TechStart",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              content: "WebXPress transformed our online presence. Our website traffic has increased by 200% since working with them."
            },
            {
              name: "Michael Chen",
              role: "Marketing Director, GrowthCo",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              content: "The social media management services have been game-changing for our brand. Highly recommended!"
            },
            {
              name: "Emma Davis",
              role: "Founder, StyleHub",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
              content: "Professional, responsive, and delivers results. Our Google ranking improved significantly within months."
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-[#3739a8]">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}