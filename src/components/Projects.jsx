import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { Link } from "react-router-dom"

export default function Projects() {
  return (
    <section id="projects" className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -8
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}

              viewport={{ once: true }}

              className="group p-6 rounded-xl bg-white/5 border border-white/10
              hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)]
              transition duration-300 cursor-pointer"
            >

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex justify-between items-center">

                <div className="space-x-4">

                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-blue-400 hover:underline"
                  >
                    Details
                  </Link>

                  <a
                    href={project.github}
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>

                </div>

                <a
                  href={project.demo}
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}