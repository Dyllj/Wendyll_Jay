import './App.css'
import About from './pages/About'
import Works from './pages/Work'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Portfolio
            </div>
            
            <nav aria-label="Main navigation">
              <ul className="flex gap-8">
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a 
                    href="#works" 
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <article className="bg-linear-to-r from-blue-50 to-indigo-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-30">
            <figure className="shrink-0">
              <img 
                src="https://via.placeholder.com/300x300" 
                alt="Wendyll Jay Tautoan" 
                className="w-80 h-80 rounded-full object-cover shadow-lg"
              />
            </figure>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                HELLO I AM WENDYLL JAY TAUTOAN
              </h1>
              <p className="text-lg text-gray-700 mb-1">
                A developer with a passion for creating innovative and efficient solutions through code. 
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Get to know me more!
              </p>
              <a 
                href="#about" 
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </article>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  )
}

export default App