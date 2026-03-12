import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import profile from "../assets/me.png"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT SIDE TEXT */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm Azizur Rahman Fozan
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-blue-400 mb-4"
          >
            Full Stack Developer • Game Developer • Mobile App Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 leading-relaxed mb-6 max-w-xl"
          >
            I build modern web applications using <span className="text-white">React</span> 
            and <span className="text-white">Django</span>, develop mobile apps with 
            <span className="text-white"> React Native (Expo)</span>, and create 
            interactive experiences using <span className="text-white">Unreal Engine 5</span>.  
            I enjoy solving complex problems, optimizing performance, and designing scalable systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 mb-6"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/20 transition"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 text-2xl"
          >

            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

          </motion.div>

        </div>


        {/* RIGHT SIDE IMAGE */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex justify-center"
        >

          <img
            src={profile}
            alt="profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)]"
          />

        </motion.div>

      </div>

    </section>
  )
}