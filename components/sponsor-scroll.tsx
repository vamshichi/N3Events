"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function SponsorScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Sample sponsor logos
  const sponsors = [
    { name: "TechCorp", logo: "/placeholder.svg?height=100&width=200" },
    { name: "RoboInnovate", logo: "/placeholder.svg?height=100&width=200" },
    { name: "AutomationX", logo: "/placeholder.svg?height=100&width=200" },
    { name: "FutureTech", logo: "/placeholder.svg?height=100&width=200" },
    { name: "AI Systems", logo: "/placeholder.svg?height=100&width=200" },
    { name: "MechWorks", logo: "/placeholder.svg?height=100&width=200" },
    { name: "SmartFactory", logo: "/placeholder.svg?height=100&width=200" },
    { name: "RoboSolutions", logo: "/placeholder.svg?height=100&width=200" },
  ]

  // Duplicate sponsors for seamless scrolling
  const allSponsors = [...sponsors, ...sponsors]

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#1a365d] to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#1a365d] to-transparent"></div>

      <motion.div
        ref={scrollRef}
        className="flex gap-8 py-4"
        animate={{ x: [0, -50 * sponsors.length] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {allSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[200px] h-[100px] bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          >
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              width={150}
              height={75}
              className="max-h-full w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

