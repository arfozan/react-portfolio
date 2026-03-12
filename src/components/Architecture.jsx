import { motion } from "framer-motion"

export default function Architecture() {

  const box =
    "p-6 rounded-xl bg-white/5 border border-white/10 text-center w-64"

  return (
    <section className="mt-32">

      <h2 className="text-3xl font-semibold text-center mb-10">
        System Architecture
      </h2>

      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
        The mobile application communicates with a Django REST API which
        handles transfers, contracts, and financial logic. The backend is
        hosted on PythonAnywhere and stores league data in a relational database.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">

        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className={box}
        >
          📱 React Native App
          <div className="text-sm text-gray-400 mt-2">
            Android Client
          </div>
        </motion.div>

        <div className="relative w-40 h-8 flex items-center">

          <motion.div
            className="absolute h-2 w-6 bg-blue-500 rounded-full"
            animate={{ x:[0,140] }}
            transition={{ repeat:Infinity, duration:2, ease:"linear" }}
          />

          <motion.div
            className="absolute h-2 w-6 bg-green-500 rounded-full"
            animate={{ x:[140,0] }}
            transition={{ repeat:Infinity, duration:2, ease:"linear" }}
          />

        </div>

        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.2 }}
          viewport={{ once:true }}
          className={box}
        >
          ⚙️ Django REST API
          <div className="text-sm text-gray-400 mt-2">
            Business Logic
          </div>
        </motion.div>

        <div className="relative w-40 h-8 flex items-center">

          <motion.div
            className="absolute h-2 w-6 bg-blue-500 rounded-full"
            animate={{ x:[0,140] }}
            transition={{ repeat:Infinity, duration:2, delay:0.4, ease:"linear" }}
          />

          <motion.div
            className="absolute h-2 w-6 bg-green-500 rounded-full"
            animate={{ x:[140,0] }}
            transition={{ repeat:Infinity, duration:2, delay:0.4, ease:"linear" }}
          />

        </div>

        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.4 }}
          viewport={{ once:true }}
          className={box}
        >
          🗄 Database
          <div className="text-sm text-gray-400 mt-2">
            SQLite → PostgreSQL
          </div>
        </motion.div>

      </div>

    </section>
  )
}