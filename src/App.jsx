import { useEffect, useState } from "react";
import Loading from './Components/LoadingScreen'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from "./Components/About";
import Skill from "./Components/Skill"
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact";
import './App.css'

function App() {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 3000);
    }, []);
  

  return (
    // loading ? <Loading /> : 
    <>
    <Navbar />
    <Hero />
    <Skill />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App
