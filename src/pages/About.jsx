import SplitText from '../components/SplitText/Split_Text'
import ScrollFadeIn from '../components/ScrollFadeIn/Scroll_FadeIn';
import SkillCard from '../components/SkillCard/SkillCard';
import { FaCode, FaDatabase, FaTools, FaMicrochip, FaBox } from 'react-icons/fa';
import W from '../assets/W.png';

const About = () => {
  const skillsData = [
    {
      title: "Development",
      skills: ["JavaScript","Python", "HTML", "CSS"],
      icon: FaCode
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Flask", "Bootstrap", "Tailwind"],
      icon: FaBox
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase"],
      icon: FaDatabase
    },
    {
      title: "IoT Systems",
      skills: ["NodeMCU", "Sensors", "Relay Modules", "Arduino IOT Cloud"],
      icon: FaMicrochip
    },
    {
      title: "Tools & AI",
      skills: ["Git", "GitHub", "Postman", "UI/UX Ideation", "AI-Assisted Development"],
      icon: FaTools
    }
  ];

  return (
    <ScrollFadeIn>
      <section id="about" className="w-full bg-zinc-800 py-16 -mt-22">
        {/* About Me Section - Full Width */}
        <div className="-mt-16 relative z-10 w-full bg-zinc-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex gap-10 mb-16">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src={W}
                    alt="Wendyll Jay Tautoan" 
                    className="w-32 h-32 rounded-full hover:scale-105 hover:shadow-md hover:shadow-amber-600 transition-all ease-in-out"
                  />
                  <SplitText
                    text="About Me"
                    className="text-4xl md:text-5xl font-bold text-zinc-200"
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                    tag="h2"
                  />
                </div>
                <p className="text-zinc-300 leading-relaxed text-lg ml-36">
                  I'm a software developer focused on creating intuitive and engaging user experiences. 
                  My work spans web development, where I design clean, responsive interfaces, to IoT 
                  projects like automated water-level monitors and smart dashboards that connect software 
                  with real-world applications.
                </p>
                <p className="text-zinc-300 leading-relaxed text-lg mt-4 ml-36">
                  I enjoy collaborating on projects that thrive on teamwork and creative problem-solving, 
                  delivering practical, maintainable solutions that make a meaningful impact.
                </p>
              </div>
              
              <aside className="mt-25 ml-15 p-5 rounded-lg w-full max-w-sm h-fit">
                <h3 className="text-2xl font-semibold mb-4 text-zinc-200">Key Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-center border-2 border-zinc-300 text-gray-700 bg-zinc-200 w-45 p-2 rounded-xl hover:bg-zinc-800 hover:border-amber-600 hover:text-zinc-200  transition-all ease-in-out cursor-pointer">
                    IOT Development
                  </li>
                  <li className="flex items-center justify-center border-2 border-zinc-300 text-gray-700 bg-zinc-200 w-40 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 hover:border-amber-600 transition-all ease-in-out cursor-pointer">
                    UI/UX Design
                  </li>
                  <li className="flex items-center justify-center border-2 border-zinc-300 text-gray-700 bg-zinc-200 w-55 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 hover:border-amber-600 transition-all ease-in-out cursor-pointer">
                    Front-end Development
                  </li>
                  <li className="flex items-center justify-center border-2 border-zinc-300 text-gray-700 bg-zinc-200 w-55 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 hover:border-amber-600  transition-all ease-in-out cursor-pointer">
                    Full-Stack Developer
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="text-center mb-12">
              <SplitText
                text="Skills & Technologies"
                className="text-3xl md:text-4xl font-bold text-zinc-200"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="h2"
              />
            </div>
            
            <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-24">
              {skillsData.map((skillCard, index) => (
                <SkillCard
                  key={index}
                  title={skillCard.title}
                  skills={skillCard.skills}
                  icon={skillCard.icon}
                />
              ))}
            </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}

export default About;