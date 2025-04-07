"use client"

import type React from "react"
import { Mail } from "lucide-react";
// import { useState, useRef } from "react"
import Link from "next/link"
import { motion} from "framer-motion"
import {
  
  Users,
 
  BotIcon as Robot,
  Lightbulb,
  MessageSquare,
} from "lucide-react"
// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import CountdownTimer from "@/components/countdown-timer"
// import TypewriterEffect from "@/components/typewriter-effect"
// import RobotScene from "@/components/robot-scene"
import SponsorScroll from "@/components/sponsor-scroll"
// import HeroSection from "@/components/Hero"
import WhoShouldDemonstrate from "@/components/demonstration"
import RegistrationForm from "@/components/eventreg"
import WhyParticipate from "@/components/WhyParticipate";
// import Footer from "@/components/footer"

export default function RoboticsEvent() {
  // const [isRegistered, setIsRegistered] = useState(false)
  // const heroRef = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start start", "end start"],
  // })

  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  // const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  // const handleRegister = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsRegistered(true)

  //   // Scroll to confirmation
  //   setTimeout(() => {
  //     document.getElementById("registration-confirmation")?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     })
  //   }, 100)
  // }

  // Event date - September 24-25, 2025
  // const eventDate = new Date(2025, 8, 24, 9, 0, 0)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#0c1445] to-[#1a365d] ">
      {/* Hero Section */}
      {/* <HeroSection /> */}
              <div className="relative  w-full overflow-hidden shadow-[0_0_30px_rgba(165,216,255,1)]">
                <video
                  src="/video/WhatsApp Video 2025-04-02 at 2.35.52 PM.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full  rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1445]/50 to-transparent"></div>
              </div>
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#0c1445] to-[#1a365d] flex flex-col justify-center items-center">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">About The Event</h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#ff6200] to-[#ff8c00]"></div>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6"
            >
              <p className="text-lg text-[#e2e8f0] leading-relaxed">
                Join us for an exclusive Robotics and Industrial Automation Live Simulation event, designed for industry
                professionals and technology enthusiasts eager to explore cutting-edge advancements in robotics.
              </p>
              <p className="text-lg text-[#e2e8f0] leading-relaxed">
                This immersive experience will showcase live, dynamic simulations demonstrating how robotics and
                automation are transforming the manufacturing landscape. Witness firsthand how these technologies drive
                unparalleled productivity, efficiency, and safety, redefining the future of smart manufacturing.
              </p>
              <p className="text-lg text-[#e2e8f0] leading-relaxed">
                Be part of the movement shaping tomorrow's industry. Don't miss this opportunity to engage with
                real-world applications, expert insights, and groundbreaking innovations in robotics and automation.
              </p>

              {/* <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg bg-white/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#ff6200]" />
                    <h3 className="font-bold text-white">Date & Time</h3>
                  </div>
                  <p className="text-[#e2e8f0]">24-25 September 2025</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg bg-white/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#ff6200]" />
                    <h3 className="font-bold text-white">Location</h3>
                  </div>
                  <p className="text-[#e2e8f0]">Virtual Event (Online)</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg bg-white/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#ff6200]" />
                    <h3 className="font-bold text-white">Duration</h3>
                  </div>
                  <p className="text-[#e2e8f0]">Full Day Event (8 hours)</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg bg-white/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#ff6200]" />
                    <h3 className="font-bold text-white">Audience</h3>
                  </div>
                  <p className="text-[#e2e8f0]">Industry Professionals & Enthusiasts</p>
                </motion.div>
              </div>*/}
            </motion.div> 

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-[500px] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(165,216,255,1)]">
  <img
    src="/images/WhatsApp Image 2025-04-03 at 11.40.53_63a58886.jpg" // Replace with your image path
    alt="Event Image"
    className="h-full w-full rounded-xl object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1445]/50 to-transparent"></div>
</div>

            </motion.div>
          </div>
        </div>
      </section>
      <WhyParticipate />
    <WhoShouldDemonstrate />
      {/* What to Expect Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a365d] to-[#2a4365] flex flex-col justify-center items-center">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">What to Expect</h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#ff6200] to-[#ff8c00]"></div>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Live Simulations",
                description:
                  "Experience real-time demonstrations of robotic systems and automation processes used in manufacturing.",
                icon: "Robot",
              },
              {
                title: "Expert Insights",
                description: "Hear from industry leaders and experts who will share their knowledge and experiences.",
                icon: "Lightbulb",
              },
              {
                title: "Interactive Q&A",
                description:
                  "Engage with presenters during live Q&A sessions to gain deeper insights into the technologies.",
                icon: "MessageSquare",
              },
              {
                title: "Networking",
                description: "Connect with fellow attendees, industry professionals, and experts in the field.",
                icon: "Users",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                }}
                className="shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <Card className="overflow-hidden border-[#ff6200]/20 bg-white/10 backdrop-blur-sm transition-all hover:border-[#ff6200]/50 h-full">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <motion.div
                      className="mb-6 text-[#ff6200] w-12 h-12 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      {item.icon === "Robot" && <Robot className="w-12 h-12 text-blue-600" />}
                      {item.icon === "Lightbulb" && <Lightbulb className="w-12 h-12 text-blue-600" />}
                      {item.icon === "MessageSquare" && <MessageSquare className="w-12 h-12 text-blue-600" />}
                      {item.icon === "Users" && <Users className="w-12 h-12 text-blue-600" />}
                    </motion.div>
                    <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-[#e2e8f0]">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a365d] to-[#2a4365] flex flex-col justify-center items-center">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Our Past Series Sponsors
            </h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#ff6200] to-[#ff8c00]"></div>
            <p className="mt-6 max-w-[800px] text-lg text-[#e2e8f0]">
              Proudly supported by industry leaders in technology and innovation
            </p>
          </motion.div>

          <div className="mx-auto max-w-6xl">
            <SponsorScroll />
          </div>
        </div>
      </section>

      {/* Registration Section */}
     <RegistrationForm />
      {/* Footer */}
      {/* <Footer /> */}
      <footer className="border-t border-white/10 bg-[#1a365d] py-12 flex flex-col justify-center items-center">
      <div className="container px-4">
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Robotics Event</h3>
            <p className="text-[#e2e8f0]">
              Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-[#e2e8f0]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rals" className="hover:text-white transition-colors">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>
            <div className="flex items-center space-x-2 text-[#e2e8f0]">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>communication@n3events.live</span>
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-bold text-white">Follow Us</h3>
              <Link href="https://www.linkedin.com/events/roboticsandautomationlivedemo7313107067664277504/" className="text-[#e2e8f0] hover:text-white transition-colors inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div> 
         {/* <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-[#e2e8f0]">
           <p>Robotics and Automation Event. All rights reserved.</p>
         </div> */}
      </div>
    </footer>
    </div>
  )
}