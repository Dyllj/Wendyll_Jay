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
      <section id="about" className="w-full bg-zinc-800 py-8 sm:py-16 -mt-12 sm:-mt-22">
        {/* About Me Section */}
        <div className="-mt-8 sm:-mt-16 relative z-10 w-full bg-linear-to-b from-zinc-900 to-zinc-800 py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-10 mb-8 sm:mb-16">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4 sm:mb-6">
                  <img 
                    src={W}
                    alt="Wendyll Jay Tautoan" 
                    className="w-20 h-20 sm:w-32 sm:h-32 rounded-full hover:scale-105 hover:shadow-md hover:shadow-amber-600 transition-all ease-in-out"
                  />
                  <SplitText
                    text="About Me"
                    className="text-3xl mt-8 sm:text-4xl md:text-5xl font-extrabold text-amber-600"
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
                <p className="font-Strait font-bold text-zinc-300 leading-relaxed text-sm sm:text-lg sm:ml-36">
                  I'm a software developer focused on creating intuitive and engaging user experiences. 
                  My work spans web development, where I design clean, responsive interfaces, to IoT 
                  projects like automated water-level monitors and smart dashboards that connect software 
                  with real-world applications.
                </p>
                <p className="font-Strait font-bold text-zinc-300 leading-relaxed text-sm sm:text-lg mt-3 sm:mt-4 sm:ml-36">
                  I enjoy collaborating on projects that thrive on teamwork and creative problem-solving, 
                  delivering practical, maintainable solutions that make a meaningful impact.
                </p>
              </div>
              
              <aside className="mt-6 lg:mt-25 lg:ml-15 p-4 sm:p-5 rounded-lg w-full lg:max-w-sm h-fit border-2 border-zinc-700 bg-zinc-800 shadow-lg shadow-amber-600/20">
                <h3 className="text-xl sm:text-2xl font-Strait font-semibold mb-3 sm:mb-4 text-amber-600">Key Facts</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="font-Strait font-bold flex items-center justify-center border-2 border-zinc-300 text-gray-700 bg-zinc-200 w-full sm:w-45 p-2 rounded-xl hover:bg-zinc-800 hover:border-amber-600 hover:text-zinc-200 transition-all ease-in-out cursor-pointer text-xs sm:text-base">
                    IOT Development
                  </li>
                  <li className="font-Strait font-bold flex items-center justify-center border-2 border-zinc-300 text-gray-700 bg-zinc-200 w-full sm:w-40 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 hover:border-amber-600 transition-all ease-in-out cursor-pointer text-xs sm:text-base">
                    UI/UX Design
                  </li>
                  <li className="font-Strait font-bold flex items-center justify-center border-2 border-zinc-300 text-gray-700 bg-zinc-200 w-full sm:w-55 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 hover:border-amber-600 transition-all ease-in-out cursor-pointer text-xs sm:text-base">
                    Front-end Development
                  </li>
                  <li className="font-Strait font-bold flex items-center justify-center border-2 border-zinc-300 text-gray-700 bg-zinc-200 w-full sm:w-55 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 hover:border-amber-600 transition-all ease-in-out cursor-pointer text-xs sm:text-base">
                    Full-Stack Developer
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <div className="max-w-7xl mt-5 mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="w-full">
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-Strait font-bold text-zinc-200">Skills & Technologies</h1>
              </div>

              <div className="flex flex-wrap justify-center gap-15 sm:gap-12 lg:gap-24 pb-8 sm:pb-15">
                {skillsData.map((skillCard, index) => (
                  <SkillCard
                    key={index}
                    title={skillCard.title}
                    skills={skillCard.skills}
                    icon={skillCard.icon}
                  />
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </ScrollFadeIn>
  )
}

export default About;