import { motion } from "framer-motion"

export default function Architecture() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold mb-16 text-center">
        System Architecture
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">

        {/* MOBILE APP */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-xl p-6 w-64 text-center backdrop-blur-md"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <div className="text-3xl mb-2">📱</div>

          <h3 className="text-xl font-semibold">
            Mobile App
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            React Native Android App
          </p>

          <p className="text-xs text-blue-400 mt-3">
            React Native
          </p>
        </motion.div>


        {/* CONNECTOR 1 */}
        <>
          {/* MOBILE */}
          <div className="relative h-16 w-[2px] bg-white/10 md:hidden overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-green-400/20 to-purple-500/20 blur-sm" />

            <motion.div
              className="absolute h-6 w-[2px] bg-blue-400 shadow-[0_0_10px_#60a5fa]"
              animate={{ y: [0, 60] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            <motion.div
              className="absolute h-6 w-[2px] bg-green-400 shadow-[0_0_10px_#4ade80]"
              animate={{ y: [60, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

          </div>

          {/* DESKTOP */}
          <div className="relative w-40 h-[2px] bg-white/10 hidden md:block overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-400/20 to-purple-500/20 blur-sm" />

            <motion.div
              className="absolute w-6 h-[2px] bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
              animate={{ x: [0, 160] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            <motion.div
              className="absolute w-6 h-[2px] bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"
              animate={{ x: [160, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

          </div>
        </>


        {/* BACKEND */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-xl p-6 w-64 text-center backdrop-blur-md"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <div className="text-3xl mb-2">⚙</div>

          <h3 className="text-xl font-semibold">
            Backend API
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            REST API handling authentication,
            transfers, game weeks and bonuses
          </p>

          <p className="text-xs text-green-400 mt-3">
            Django REST Framework
          </p>
        </motion.div>


        {/* CONNECTOR 2 */}
        <>
          {/* MOBILE */}
          <div className="relative h-16 w-[2px] bg-white/10 md:hidden overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-green-400/20 to-purple-500/20 blur-sm" />

            <motion.div
              className="absolute h-6 w-[2px] bg-blue-400 shadow-[0_0_10px_#60a5fa]"
              animate={{ y: [0, 60] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            <motion.div
              className="absolute h-6 w-[2px] bg-green-400 shadow-[0_0_10px_#4ade80]"
              animate={{ y: [60, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

          </div>

          {/* DESKTOP */}
          <div className="relative w-40 h-[2px] bg-white/10 hidden md:block overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-400/20 to-purple-500/20 blur-sm" />

            <motion.div
              className="absolute w-6 h-[2px] bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
              animate={{ x: [0, 160] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            <motion.div
              className="absolute w-6 h-[2px] bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"
              animate={{ x: [160, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

          </div>
        </>


        {/* DATABASE */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-xl p-6 w-64 text-center backdrop-blur-md"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <div className="text-3xl mb-2">🗄</div>

          <h3 className="text-xl font-semibold">
            Database
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            Stores players, teams,
            transfers, game weeks and bonuses
          </p>

          <p className="text-xs text-purple-400 mt-3">
            SQLite → PostgreSQL
          </p>
        </motion.div>

      </div>

    </section>
  )
}