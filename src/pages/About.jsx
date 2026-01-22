import SplitText from '../components/SplitText/Split_Text'
import ScrollFadeIn from '../components/ScrollFadeIn/Scroll_FadeIn';

const About = () => {
  return (
    <ScrollFadeIn>
      <section id="about" className="max-w-screen  mb-16 h-auto py-10 rounded-lg">
        <article className="bg-amber-600 p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* Description */}
            <section className="w-fullp-6  flex gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://via.placeholder.com/300x300" 
                    alt="Wendyll Jay Tautoan" 
                    className="w-30 h-30 border-2 border-gray-300 rounded-full hover:scale-105 hover:shadow-xl transition-all ease-in-out"
                  />
                  <SplitText
                  text="About Me"
                  className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  tag="h1"
                  />
                </div>
                <p className="text-zinc-300 leading-relaxed ml-34">
                  I'm a software developer focused on creating intuitive and engaging user experiences. 
                  My work spans web development, where I design clean, responsive interfaces, to IoT 
                  projects like automated water-level monitors and smart dashboards that connect software 
                  with real-world applications.
                </p>
                <p className="text-zinc-300 leading-relaxed mt-4 ml-34">
                  I enjoy collaborating on projects that thrive on teamwork and creative problem-solving, 
                  delivering practical, maintainable solutions that make a meaningful impact.
                </p>
              </div>
              
              <aside className="mt-10 p-5 rounded-lg w-full max-w-sm h-fit">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Key Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-center border-2 border-transparent text-gray-700 bg-zinc-200 w-45 p-1 rounded-xl hover:bg-zinc-800 hover:border-zinc-200 hover:text-zinc-200 transition-all ease-in-out cursor-pointer">
                    IOT Development
                  </li>
                  <li className="flex items-center justify-center border-2 border-transparent text-gray-700 bg-zinc-200 w-35 p-1 rounded-xl hover:bg-zinc-800 hover:border-zinc-200 hover:text-zinc-200 transition-all ease-in-out cursor-pointer">
                    UI/UX Design
                  </li>
                  <li className="flex items-center justify-center border-2 border-transparent text-gray-700 bg-zinc-200 w-55 p-1 rounded-xl hover:bg-zinc-800 hover:border-zinc-200 hover:text-zinc-200 transition-all ease-in-out cursor-pointer">
                    Front-end Development
                  </li>
                  <li className="flex items-center justify-center border-2 border-transparent text-gray-700 bg-zinc-200 w-47 p-1 rounded-xl hover:bg-zinc-800 hover:border-zinc-200 hover:text-zinc-200 transition-all ease-in-out cursor-pointer">
                    Full-Stack Developer
                  </li>
                </ul>
              </aside>
            </section>
          </div>
        </article>
        <article>
          <div className="">
              <section className='bg-amber-600 p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
                <SplitText
                  text="About Me"
                  className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4"
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
              </section>
          </div>
        </article>
      </section>
    </ScrollFadeIn>
  )
}

export default About;