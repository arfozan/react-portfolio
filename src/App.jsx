import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import About from "./components/About"
import Experience from "./components/Experience"
import FantasyLeague from "./pages/FantasyLeague"
import HospitalApp from "./pages/HospitalApp"
import EchoDrift from "./pages/EchoDrift"

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/fantasy-league" element={<FantasyLeague />} />
        <Route path="/projects/hospital-app" element={<HospitalApp />} />
        <Route path="/projects/echo-drift" element={<EchoDrift />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App