import { Container } from '../ui/Container'
import { GradientText } from '../ui/GradientText'

const projects = [
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    image: 'src/images/portfolio.jpg',
    link: 'https://anestpetollari.vercel.app/',
  },
 
  {
    title: 'Easy Web',
    category: 'Web Development',
    image: 'src/images/easyweb.jpg',
    link: 'https://easywebb.vercel.app/',
  },
  {
    title: 'Web Calculator',
    category: 'Web App',
    image: 'src/images/webcalc.jpg',
    link: 'https://webcalculatortest.vercel.app/',
  },
  {
    title: 'RecordCentury',
    category: 'Social Media Managment',
    image: 'src/images/record (2).jpg',
    link: 'https://www.instagram.com/recordcentury/',
  },
  {
    title: 'StacioniHyjnore',
    category: 'Social Media Managment & Branding',
    image: 'src/images/stacioni.jpg',
    link: 'https://www.instagram.com/stacioni_hyjnore/',
  },
  {
    title: 'BeautyclinicSalon',
    category: 'Social Media Managment',
    image: 'src/images/beauty.jpg',
    link: 'https://www.instagram.com/beauty_clinic_salon/',
  },


  
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-xl text-gray-600">
            Take a look at some of our recent work and success stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={index}
              onClick={() => console.log(`Navigating to: ${project.link}`)}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover object-center transform group-hover:scale-110 transition-transform duration-500" // {{ edit 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-sm text-white/80 mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}