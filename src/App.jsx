import './App.css'
import About from './pages/About'
import Works from './pages/Work'
import Contact from './pages/Contact'
import SplitText from './components/SplitText/Split_Text'
import Button from './components/AnimationHover/Animation_Hover'
import ScrollFadeIn from './components/ScrollFadeIn/Scroll_FadeIn'

function App() {
  return (
    <div className="min-h-screen bg-zinc-800">
      <header className="bg-zinc-200 shadow-lg fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-zinc-800">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-2xl font-bold text-zinc-800 cursor-pointer hover:text-zinc-600 transition-colors tracking-widest"
              >
                DYLL J
              </a>
            </div>
            <nav aria-label="Main navigation">
              <ul className="flex gap-15">
                <li>
                  <a 
                    href="#about" 
                    className="text-zinc-800 p-2 rounded-xl m-auto hover:bg-zinc-800 hover:text-zinc-100 transition-colors font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#works" 
                    className="text-zinc-800 p-2 rounded-xl m-auto hover:bg-zinc-800 hover:text-zinc-100 transition-colors font-medium"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-zinc-800 p-2 rounded-xl m-auto hover:bg-zinc-800 hover:text-zinc-100 transition-colors font-medium"
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
      <article className="bg-linear-to-b from-zinc-200 to-zinc-800 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <figure className="shrink-0">
              <img 
                src="https://via.placeholder.com/300x300" 
                alt="Wendyll Jay Tautoan" 
                className="w-64 h-64 rounded-full object-cover shadow-2xl ring-4 ring-zinc-800"
              />
            </figure>
            
            <div className="flex-1 text-center md:text-left">
              <SplitText
                text="HELLO I AM WENDYLL JAY TAUTOAN"
                className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4"
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
              <ScrollFadeIn>
              <p className="text-xl font-bold text-zinc-800">
                A developer with a passion for creating innovative and efficient solutions through code. 
              </p>
              <p className="text-xl font-bold text-zinc-800 mb-6">
                Get to know me more!
              </p>
              <a href="#about">
                <Button />
              </a>
              </ScrollFadeIn>
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