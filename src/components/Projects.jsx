import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { Link } from "react-router-dom"
import Tilt from "react-parallax-tilt"

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.04}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >

              <Link to={`/projects/${project.slug}`}>

                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}

                  className="
                  flex flex-col h-full
                  rounded-xl overflow-hidden
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  hover:border-blue-500
                  hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]
                  transition duration-300
                  group
                  "
                >

                  {/* Image */}

                  <div className="relative overflow-hidden h-48">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                      w-full h-full object-cover
                      transition duration-500
                      group-hover:scale-110
                      "
                    />

                    {/* Gradient overlay */}

                    <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    to-transparent
                    opacity-70
                    " />

                  </div>

                  {/* Content */}

                  <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-6">
                      {project.description}
                    </p>

                    {/* Tech tags */}

                    <div className="flex flex-wrap gap-2 mb-6">

                      {project.tech.map((tech, i) => (

                        <span
                          key={i}
                          className="
                          text-xs
                          px-3 py-1
                          rounded-full
                          bg-blue-500/10
                          border border-blue-500/20
                          text-blue-300
                          "
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    {/* GitHub button */}

                    <div className="mt-auto">

                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="
                        inline-block
                        text-sm
                        px-4 py-2
                        border border-blue-500
                        rounded-lg
                        text-blue-400
                        hover:bg-blue-500/20
                        transition
                        "
                      >
                        GitHub
                      </a>

                    </div>

                  </div>

                </motion.div>

              </Link>

            </Tilt>

          ))}

        </div>

      </div>

    </section>
  )
}