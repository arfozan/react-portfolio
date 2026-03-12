import { motion } from "framer-motion"
import PhoneMockup from "../components/PhoneMockup"
import { useEffect } from "react"

export default function FantasyLeague() {
  const features = [

    {
      title: "Player Bidding System",
      desc: "Unlike the traditional Fantasy Premier League Draft where players are selected using a snake draft system, this league introduces a competitive bidding system. Managers bid for players using their allocated budget. If someone bids, the timer resets (for example 24 hours), ensuring fair competition for every signing.",
      img: "/src/assets/fpl/bidding.png"
    },

    {
      title: "Player Wage System",
      desc: "Each player receives a weekly wage based on their base price in Fantasy Premier League. The formula is basePrice³ / 2000 per gameweek for main team players. Academy players have reduced wages (divided by 6000). Managers must manage their finances carefully as wages are deducted automatically every gameweek.",
      // img: "/images/fpl/wage.png"
    },

    {
      title: "Academy Players",
      desc: "Academy players are cheaper alternatives with significantly reduced wages. However they cannot be used in the main squad until promoted to the senior team. This encourages long-term squad planning and youth development strategies.",
      // img: "/images/fpl/academy.png"
    },

    {
      title: "Player Contracts",
      desc: "Managers must sign contracts with players similar to real football clubs. Every time a contract is renewed the player's base price increases by 0.5 which also increases their wage. If the contract expires the player becomes a free agent and leaves the team.",
      // img: "/images/fpl/contract.png"
    },

    {
      title: "Realistic Transfer System",
      desc: "Managers can trade players between teams permanently or via loan deals. Loan duration is tracked using gameweeks and players automatically return to their parent club after the loan ends.",
      // img: "/images/fpl/transfer.png"
    }

  ]


  const workflow = [

    {
      title: "Player Bidding",
      desc: "Managers compete in auctions to sign players using their team budget."
    },

    {
      title: "Contract Signing",
      desc: "Contracts secure players for a set duration while increasing their base value."
    },

    {
      title: "Weekly Wage Payments",
      desc: "Every gameweek player wages are deducted automatically."
    },

    {
      title: "Transfer Market",
      desc: "Managers can trade players between teams."
    },

    {
      title: "Loan System",
      desc: "Players can be temporarily loaned and automatically return later."
    }

  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* HEADER */}

      <motion.div
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6 }}
        className="text-center mb-20"
      >

        <h1 className="text-4xl font-bold mb-6">
          Fantasy Premier League Android App
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A custom fantasy football management application designed to extend
          the traditional Fantasy Premier League experience with advanced
          financial systems, contracts, auctions, and realistic transfer
          mechanics.
        </p>

      </motion.div>


      {/* FEATURES */}

      <div className="space-y-32">

        {features.map((feature, index) => {

          const reverse = index % 2 === 1

          return (

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6 }}
              viewport={{ once:true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >

              {/* IMAGE */}

              <div className={reverse ? "md:order-2" : ""}>
                <PhoneMockup image={feature.img}/>
              </div>


              {/* TEXT */}

              <div className={reverse ? "md:order-1" : ""}>

                <h2 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>

              </div>

            </motion.div>

          )

        })}

      </div>


      {/* WORKFLOW */}

      <section className="mt-32">

        <h2 className="text-3xl font-semibold mb-12 text-center">
          League Workflow
        </h2>

        <div className="grid md:grid-cols-5 gap-8">

          {workflow.map((step,index)=>(
            
            <motion.div
              key={index}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.4, delay:index*0.1 }}
              viewport={{ once:true }}

              className="p-6 rounded-xl
              bg-white/5 border border-white/10
              hover:border-blue-500
              hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
              transition"
            >

              <div className="text-2xl font-bold mb-2 text-blue-400">
                {index + 1}
              </div>

              <h3 className="font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-400">
                {step.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* FUTURE DEVELOPMENT */}

      <section className="mt-32 text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Future Development
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
          Currently the application manages bidding, contracts, transfers,
          loans, and squad finances while managers still set their weekly
          squads inside Fantasy Premier League. The long-term goal is to
          fully migrate squad management, scoring, and league operations
          directly into this application, creating a completely independent
          fantasy football ecosystem.
        </p>

        {/* Buttons */}

        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/arfozan/cutom-fpl-apk/releases/download/v1.0.0/FPL.apk"
            className="px-6 py-3 rounded-lg
            bg-blue-600 hover:bg-blue-500
            transition font-semibold"
          >
            Download APK
          </a>

          <a
            href="https://github.com/arfozan/fpl-front-end"
            className="px-6 py-3 rounded-lg
            border border-white/20
            hover:border-blue-500
            transition"
          >
            GitHub Repository
          </a>

        </div>

      </section>

    </div>
  )
}