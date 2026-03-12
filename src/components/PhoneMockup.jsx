import { motion } from "framer-motion"

export default function PhoneMockup({ image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative mx-auto w-[260px]"
    >
      {/* glow */}
      <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full"></div>

      {/* phone frame */}
      <div className="relative rounded-[40px] border-[8px] border-black bg-black shadow-2xl">

        {/* screen */}
        <div className="rounded-[32px] overflow-hidden">
          <img
            src={image}
            alt="app screenshot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* camera notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full"></div>

      </div>
    </motion.div>
  )
}