import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import { Contact } from 'lucide-react'
import Contacts from './Components/contacts'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const dark = useRef(null)
  useEffect(() => {
    dark.current.classList.toggle("dark-animated-grid", darkMode);
  }, [darkMode])
  return (
    <div className='mainn'>
      <div className='animated-grid' ref={dark}>
        <Navbar darkMode={darkMode}
          setDarkMode={setDarkMode} />
        <Home darkMode={darkMode}
          setDarkMode={setDarkMode} />
        <About darkMode={darkMode}
          setDarkMode={setDarkMode} />
        <Skills darkMode={darkMode}
          setDarkMode={setDarkMode} />
        <Experience darkMode={darkMode}
          setDarkMode={setDarkMode} />
        <Projects darkMode={darkMode}
          setDarkMode={setDarkMode} />
        <Contacts darkMode={darkMode}
          setDarkMode={setDarkMode} />
        <Footer darkMode={darkMode}
          setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

export default App
