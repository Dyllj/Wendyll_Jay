import './App.css'

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
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600">Your about section content goes here.</p>
        </section>
        
        <section id="works" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Works</h2>
          <p className="text-gray-600">Your works section content goes here.</p>
        </section>
        
        <section id="contact">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600">Your contact section content goes here.</p>
        </section>
      </main>
    </div>
  )
}

export default App