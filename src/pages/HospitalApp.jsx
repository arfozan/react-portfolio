import { motion } from "framer-motion"

export default function HospitalApp() {
  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Comfort General Hospital Management System
      </motion.h1>

      {/* GitHub Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <a
          href="https://github.com/yourusername/HospitalApp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
        >
          View on GitHub
        </a>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mb-10 leading-relaxed"
      >
        A full-stack hospital management system developed for 
        <span className="text-white"> Comfort General Hospital</span>. 
        The system helps manage hospital operations including 
        patient admission, appointment scheduling, and 
        permission-based staff access.
      </motion.p>

      {/* Key Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
        <ul className="text-gray-400 space-y-2">
          <li>Designed scalable REST API using Django REST Framework</li>
          <li>Implemented Role-Based Access Control (RBAC) for staff</li>
          <li>Developed modular React frontend architecture</li>
          <li>Built secure authentication and permission management</li>
          <li>Modeled real hospital workflow for patient management</li>
        </ul>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="text-gray-400 space-y-2">
          <li>Frontend: React + Tailwind CSS</li>
          <li>Backend: Django + Django REST Framework</li>
          <li>Database: SQLite (dev) → PostgreSQL (prod)</li>
          <li>Authentication: Role-based access control (RBAC)</li>
          <li>Hosting: Private hospital server</li>
        </ul>
      </motion.div>

      {/* Screenshots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold mb-6">System Screenshots</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="/img/placeholder-login.png"
            alt="Login Page"
            className="rounded-lg border border-white/10"
          />
          <img
            src="/img/placeholder-dashboard.png"
            alt="Dashboard"
            className="rounded-lg border border-white/10"
          />
          <img
            src="/img/placeholder-patient.png"
            alt="Patient Profile"
            className="rounded-lg border border-white/10"
          />
          <img
            src="/img/placeholder-admission.png"
            alt="Patient Admission"
            className="rounded-lg border border-white/10"
          />
        </div>
      </motion.div>

      {/* Core Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Role-based authentication system</li>
          <li>Permission-based access for hospital staff</li>
          <li>Patient registration and profile management</li>
          <li>Patient admission and bed allocation</li>
          <li>Appointment scheduling</li>
          <li>Secure REST API architecture</li>
        </ul>
      </motion.div>

      {/* Planned Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Planned Features</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Doctor dashboard</li>
          <li>Bed availability management</li>
          <li>Patient medical records</li>
          <li>Billing and payment system</li>
          <li>Hospital analytics dashboard</li>
        </ul>
      </motion.div>

      {/* UI Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Patient Workflow</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center space-y-3">
          <p className="text-gray-300">Patient Registration</p>
          <p className="text-blue-400 text-xl">↓</p>
          <p className="text-gray-300">Appointment Scheduling</p>
          <p className="text-blue-400 text-xl">↓</p>
          <p className="text-gray-300">Doctor Consultation</p>
          <p className="text-blue-400 text-xl">↓</p>
          <p className="text-gray-300">Admission (if required)</p>
          <p className="text-blue-400 text-xl">↓</p>
          <p className="text-gray-300">Treatment & Billing</p>
        </div>
      </motion.div>

      {/* System Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
          <p className="text-gray-300">React Frontend</p>
          <p className="text-blue-400 text-xl my-2">↓</p>
          <p className="text-gray-300">Django REST API</p>
          <p className="text-blue-400 text-xl my-2">↓</p>
          <p className="text-gray-300">PostgreSQL Database</p>
        </div>
      </motion.div>

      {/* Technical Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
        <p className="text-gray-400 leading-relaxed">
          One of the main challenges was designing a permission-based system 
          where different hospital staff roles such as administrators, 
          receptionists, and doctors have different levels of access to patient 
          information. This was solved using Django’s permission framework 
          combined with role-based logic in the API layer.
        </p>
      </motion.div>

      {/* Project Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-4">Project Status</h2>
        <p className="text-gray-400">
          The project is currently under active development. 
          Core backend systems including authentication, 
          permission management, and patient admission 
          have been implemented. The frontend interface 
          is being redesigned to improve usability 
          and user experience.
        </p>
      </motion.div>

    </div>
  )
}