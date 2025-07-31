

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScroolToTop"

function App() {
  

  return (
    
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
      
    
  )
}

export default App
