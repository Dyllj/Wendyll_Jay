const About = () => {
  return (
    <section id="about" className="mb-16">
      {/* Hero Section */}
      <article className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8 md:p-12 mb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <figure className="shrink-0">
            <img 
              src="https://via.placeholder.com/300x300" 
              alt="Wendyll Jay Tautoan" 
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </figure>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              HELLO I AM WENDYLL JAY TAUTOAN
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              A developer with a passion for creating innovative and efficient solutions through code. 
              Get to know me more!
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </article>

      {/* About Me Section */}
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