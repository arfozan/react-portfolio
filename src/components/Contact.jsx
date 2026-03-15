import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] flex items-center py-24 scroll-mt-32"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-12">
          Feel free to reach out for collaborations, projects,
          or just to connect.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/arfozan"
            target="_blank"
            className="p-6 bg-white/5 border border-white/10 rounded-xl
            hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            transition"
          >
            <FaGithub className="text-3xl mx-auto mb-3" />
            <p className="font-semibold">GitHub</p>
            <p className="text-gray-400 text-sm">github.com/arfozan</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/arfozan"
            target="_blank"
            className="p-6 bg-white/5 border border-white/10 rounded-xl
            hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            transition"
          >
            <FaLinkedin className="text-3xl mx-auto mb-3 text-blue-400" />
            <p className="font-semibold">LinkedIn</p>
            <p className="text-gray-400 text-sm">linkedin.com/in/arfozan</p>
          </a>

          {/* Email */}
          <a
            href="mailto:arahmanfozan@gmail.com"
            className="p-6 bg-white/5 border border-white/10 rounded-xl
            hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            transition"
          >
            <FaEnvelope className="text-3xl mx-auto mb-3 text-red-400" />
            <p className="font-semibold">Email</p>
            <p className="text-gray-400 text-sm">arahmanfozan@gmail.com</p>
          </a>

        </div>

      </div>
    </section>
  )
}