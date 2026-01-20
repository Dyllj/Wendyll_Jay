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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  )
}

export default App