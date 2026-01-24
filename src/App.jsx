import { useState } from 'react';
import './App.css'
import About from './pages/About'
import Works from './pages/Work'
import Contact from './pages/Contact'
import SplitText from './components/SplitText/Split_Text'
import Button from './components/Button/Button'
import ScrollFadeIn from './components/ScrollFadeIn/Scroll_FadeIn'
import myself from './assets/myself.png';
import { HiUser, HiBriefcase, HiMail } from 'react-icons/hi';
import Nav from './components/Navs/Nav'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-800">
      <header className="bg-zinc-200 shadow-lg fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold text-zinc-800">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-2xl sm:text-3xl font-Josefin-Sans text-zinc-800 cursor-pointer hover:text-zinc-600 transition-colors tracking-widest"
              >
                DYLL J
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex gap-3 lg:gap-15">
                <li>
                  <Nav href="#about" icon={HiUser}>About</Nav>
                </li>
                <li>
                  <Nav href="#works" icon={HiBriefcase}>Works</Nav>
                </li>
                <li>
                  <Nav href="#contact" icon={HiMail}>Contact</Nav>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-zinc-800 focus:outline-none mr-5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="md:hidden absolute top-full left-0 right-0 bg-zinc-200 shadow-lg border-t border-zinc-300">
              <ul className="flex flex-col space-y-2 p-4">
                <li>
                  <a 
                    href="#about" 
                    onClick={handleNavClick}
                    className="flex items-center gap-2 px-4 py-3 text-zinc-800 hover:bg-zinc-300 rounded-lg transition-colors font-Strait font-bold"
                  >
                    <HiUser className="text-xl" />
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#works" 
                    onClick={handleNavClick}
                    className="flex items-center gap-2 px-4 py-3 text-zinc-800 hover:bg-zinc-300 rounded-lg transition-colors font-Strait font-bold"
                  >
                    <HiBriefcase className="text-xl" />
                    Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={handleNavClick}
                    className="flex items-center gap-2 px-4 py-3 text-zinc-800 hover:bg-zinc-300 rounded-lg transition-colors font-Strait font-bold"
                  >
                    <HiMail className="text-xl" />
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      
      {/* Hero Section */}
      <article className="bg-linear-to-b from-zinc-200 to-zinc-800 min-h-screen flex items-center pt-20 sm:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-30 md:mb-1">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            <figure className="shrink-0">
              <ScrollFadeIn>
              <img 
                src={myself}
                alt="Wendyll Jay Tautoan" 
                className="w-48 h-60 mb-15 sm:w-64 sm:h-80 md:w-80 md:h-100 rounded-full object-cover shadow-2xl ring-4 ring-zinc-800"
              />
              </ScrollFadeIn>
            </figure>
            
            <div className="flex-1 text-center md:text-left px-4 sm:px-0">
              <SplitText
                text="HELLO I AM WENDYLL JAY TAUTOAN"
                className="text-2xl sm:text-4xl md:text-6xl font-bold font-Strait text-zinc-900 -mb-2"
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
              <p className="text-base sm:text-xl font-Strait font-bold text-zinc-800">
                A developer with a passion for creating innovative and efficient solutions through code. 
              </p>
              <p className="text-base sm:text-xl font-Strait font-bold text-zinc-800 mb-4 sm:mb-6">
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

      <main className="py-12">
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  )
}

export default App