import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {

  const location = useLocation()
  const isProjectPage = location.pathname.startsWith("/projects")

  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  // Scroll spy
  useEffect(() => {

    if (isProjectPage) return

    const sections = ["about", "skills", "projects", "contact"]

    const handleScroll = () => {

      let current = ""

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (section) {
          const sectionTop = section.offsetTop - 120
          const sectionHeight = section.offsetHeight

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = id
          }
        }
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [isProjectPage])


  const linkStyle = (id) =>
    activeSection === id
      ? "text-blue-400"
      : "hover:text-blue-400"


  return (

    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
    >

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-400"
        >
          AR Fozan
        </Link>


        {/* DESKTOP NAV */}

        {!isProjectPage ? (

          <div className="hidden md:flex space-x-6">

            <a href="#about" className={linkStyle("about")}>About</a>
            <a href="#skills" className={linkStyle("skills")}>Skills</a>
            <a href="#projects" className={linkStyle("projects")}>Projects</a>
            <a href="#contact" className={linkStyle("contact")}>Contact</a>

          </div>

        ) : (

          <div className="hidden md:flex space-x-6">

            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>

          </div>

        )}


        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="md:hidden flex flex-col items-center gap-6 pb-6">

          {!isProjectPage ? (

            <>
              <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
              <a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a>
              <a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a>
              <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
            </>

          ) : (

            <>
              <Link to="/" onClick={()=>setMenuOpen(false)}>
                Home
              </Link>
            </>

          )}

        </div>

      )}

    </motion.nav>
  )
}