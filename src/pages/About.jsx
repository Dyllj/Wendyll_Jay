const About = () => {
  return (
    <section id="about" className="mb-16">
      <article className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Description */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a software developer focused on creating intuitive and engaging user experiences. 
              My work spans web development, where I design clean, responsive interfaces, to IoT 
              projects like automated water-level monitors and smart dashboards that connect software 
              with real-world applications.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              I enjoy collaborating on projects that thrive on teamwork and creative problem-solving, 
              delivering practical, maintainable solutions that make a meaningful impact.
            </p>
          </section>

          {/* Key Facts */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                IOT Development
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                UI/UX Design
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Front-end Development
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Full-Stack Developer
              </li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  )
}

export default About;