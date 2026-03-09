import { motion } from "framer-motion"

const experience = [
  {
    year: "2017 - Present",
    title: "Unreal Engine Developer",
    description:
      "8+ years developing games and interactive environments using Unreal Engine (UE4/UE5), working with Blueprint systems, level design, and real-time rendering.",
  },
  {
    year: "2021 - Present",
    title: "Django Backend Developer",
    description:
      "Building scalable backend systems, REST APIs, authentication systems, and database architecture using Django and PostgreSQL.",
  },
  {
    year: "2023 - Present",
    title: "React Frontend Developer",
    description:
      "Developing responsive and dynamic user interfaces using React, modern JavaScript, and component-based architecture.",
  },
  {
    year: "2021 - Present",
    title: "Database Development",
    description:
      "Designing and managing relational databases using PostgreSQL for scalable applications and efficient data management.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="relative border-l border-gray-700">

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-6"
            >

              {/* Dot */}
              <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 border border-white"></span>

              <p className="text-sm text-blue-400">
                {item.year}
              </p>

              <h3 className="text-xl font-semibold mt-1">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}