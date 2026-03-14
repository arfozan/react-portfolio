import { motion } from "framer-motion"

import {
  FaReact,
  FaPython,
  FaLinux,
  FaGitAlt,
  FaNetworkWired
} from "react-icons/fa"

import {
  SiJavascript,
  SiDjango,
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
      { name: "Substance Painter", icon: "🎨" },
      { name: "Autodesk Maya", icon: "🧊" },
      { name: "TreeIt", icon: "🌳" }
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython />, color: "text-blue-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "C++", icon: "⚙️" },
      { name: "C#", icon: "🔷" }
    ]
  },
  {
    title: "Systems & DevOps",
    skills: [
      { name: "Linux", icon: <FaLinux />, color: "text-yellow-300" },
      { name: "Windows Server", icon: "🖥️" },
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
      { name: "Networking Basics", icon: <FaNetworkWired />, color: "text-gray-300" },
      { name: "System Administration", icon: "🛠️" }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">

      {/* Animated background glow */}

      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">

            <h3 className="text-2xl font-semibold mb-8 text-center">
              {section.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {section.skills.map((skill, index) => (

                <motion.div
                  key={index}

                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}

                  animate={{ y: [0, -6, 0] }}

                  transition={{
                    opacity: { duration: 0.4, delay: index * 0.05 },
                    y: {
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}

                  viewport={{ once: true }}

                  className="flex flex-col items-center justify-center
                  h-28
                  p-5
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  hover:border-blue-500
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
                  hover:scale-105
                  transition duration-300"
                >

                  <div className={`text-3xl mb-2 ${skill.color || ""}`}>
                    {skill.icon}
                  </div>

                  <p className="text-sm text-center">
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