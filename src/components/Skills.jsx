import { motion } from "framer-motion"

import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaNetworkWired
} from "react-icons/fa"

import {
  SiDjango,
  SiJavascript,
  SiPostgresql,
  SiUnrealengine,
  SiBlender
} from "react-icons/si"

const skillSections = [
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "Django", icon: <SiDjango />, color: "text-green-400" },
      { name: "Python", icon: <FaPython />, color: "text-blue-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" }
    ]
  },
  {
    title: "Game Development",
    skills: [
      { name: "Unreal Engine 5", icon: <SiUnrealengine />, color: "text-white" },
      { name: "Blender", icon: <SiBlender />, color: "text-orange-400" },
      { name: "Substance Painter", icon: "🎨", color: "" },
      { name: "Autodesk Maya", icon: "🧊", color: "" },
      { name: "TreeIt", icon: "🌳", color: "" }
    ]
  },
  {
    title: "Other",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
      { name: "Linux", icon: <FaLinux />, color: "text-yellow-300" },
      { name: "Networking Basics", icon: <FaNetworkWired />, color: "text-gray-300" },
      { name: "Debugging", icon: "🛠️", color: "" },
      { name: "Performance Profiling", icon: "⚡", color: "" }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Skills
        </h2>

        {skillSections.map((section, i) => (

          <div key={i} className="mb-14">

            <h3 className="text-xl font-semibold mb-6 text-blue-400 text-center">
              {section.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {section.skills.map((skill, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}

                  className="flex flex-col items-center justify-center
                  p-5 bg-white/5 border border-white/10 rounded-xl
                  hover:border-blue-500
                  hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                  transition"
                >

                  <div className={`text-3xl mb-2 ${skill.color}`}>
                    {skill.icon}
                  </div>

                  <p className="text-sm text-gray-300 text-center">
                    {skill.name}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}