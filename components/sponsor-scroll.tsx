"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SponsorScroll() {
  const sponsors = [
    { name: "TechCorp", logo: "/images/sponsors/s1.jpg" },
    { name: "RoboInnovate", logo: "/images/sponsors/s2.jpg" },
    { name: "AutomationX", logo: "/images/sponsors/s3.jpg" },
    { name: "FutureTech", logo: "/images/sponsors/s4.jpg" },
    { name: "AI Systems", logo: "/images/sponsors/s5.jpg" },
    { name: "MechWorks", logo: "/images/sponsors/s6.jpg" },
    { name: "SmartFactory", logo: "/images/sponsors/s7.jpg" },
    { name: "RoboSolutions", logo: "/images/sponsors/s8.jpg" },
  ];

  // Duplicate sponsors for seamless scrolling
  const allSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative w-full overflow-hidden bg-[#1a365d] py-6">
      {/* Left and Right Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#1a365d] to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#1a365d] to-transparent"></div>

      {/* Scrolling Container */}
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 25, // Adjust speed of scrolling
        }}
      >
        {allSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[180px] h-[100px] bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center justify-center shadow-md"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={150}
              height={75}
              className="max-h-full w-auto  opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
