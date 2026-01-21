import SplitText from '../components/SplitText/Split_Text'
import ScrollFadeIn from '../components/ScrollFadeIn/Scroll_FadeIn';

const About = () => {


  return (
    <ScrollFadeIn>
      <section id="about" className="mb-16">
        <article className="">
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
          <div className="flex gap-8">
            {/* Description */}
            <section className="w-auto bg-white p-6 rounded-lg shadow-sm flex gap-10">
              <div className="">
                <div className="flex items-center gap-3">
                  <img src="https://via.placeholder.com/300x300" alt="Wendyll Jay Tautoan" className="w-20 h-20 border-2 border-gray-300 rounded-full hover:scale-101 hover:shadow-xl transition-all ease-in-out"/>
                  <h3 className="text-xl font-semibold text-gray-800">Who I Am</h3>
                </div>
                <p className="text-gray-600 leading-relaxed ml-24">
                  I'm a software developer focused on creating intuitive and engaging user experiences. 
                  My work spans web development, where I design clean, responsive interfaces, to IoT 
                  projects like automated water-level monitors and smart dashboards that connect software 
                  with real-world applications.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4 ml-24">
                  I enjoy collaborating on projects that thrive on teamwork and creative problem-solving, 
                  delivering practical, maintainable solutions that make a meaningful impact.
                </p>
              </div>
              
              <aside className='bg-zinc-400 p-5 rounded-lg shadow-md w-full h-auto'>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 bg-zinc-200 w-40 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 transition-all ease-in-out cursor-pointer">
                    IOT Development
                  </li>
                  <li className="flex items-center text-gray-700  bg-zinc-200 w-40 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 transition-all ease-in-out cursor-pointer">
                    UI/UX Design
                  </li>
                  <li className="flex items-center text-gray-700  bg-zinc-200 w-50 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 transition-all ease-in-out cursor-pointer">
                    Front-end Development
                  </li>
                  <li className="flex items-center text-gray-700  bg-zinc-200 w-50 p-2 rounded-xl hover:bg-zinc-800 hover:text-zinc-200 transition-all ease-in-out cursor-pointer">
                    Full-Stack Developer
                  </li>
                </ul>
              </aside>
            </section>

          </div>
        </article>
        

      </section>
    </ScrollFadeIn>
  )
}

export default About;