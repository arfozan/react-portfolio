import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed max-w-3xl mx-auto mb-6"
        >
          I'm a developer who enjoys building scalable software and
          interactive digital experiences. My main focus is full-stack
          web development using React, Django, and PostgreSQL.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed max-w-3xl mx-auto mb-6"
        >
          I have <span className="text-white font-semibold">4+ years of experience with Django</span>,
          <span className="text-white font-semibold"> 2+ years with React</span>, and
          <span className="text-white font-semibold"> 4+ years working with PostgreSQL</span>
          building modern APIs and responsive web applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed max-w-3xl mx-auto"
        >
          Alongside web development, I have
          <span className="text-white font-semibold"> 8+ years of experience with Unreal Engine (UE4/UE5)</span>,
          creating games, interactive environments, and real-time experiences.
          I also build mobile applications using React Native.
        </motion.p>

      </div>

    </section>
  )
}