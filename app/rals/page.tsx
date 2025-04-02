"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, Clock, MapPin, Users, ChevronDown, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import TechAnimation from "@/components/tech-animation"
import CountdownTimer from "@/components/countdown-timer"
import TypewriterEffect from "@/components/typewriter-effect"

export default function RoboticsEvent() {
  const [isRegistered, setIsRegistered] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsRegistered(true)

    // Scroll to confirmation
    setTimeout(() => {
      document.getElementById("registration-confirmation")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }, 100)
  }

  // Event date - September 15, 2025
  const eventDate = new Date(2025, 8, 24, 9, 0, 0);


  // Initialize robocontainer particles
  useEffect(() => {
    const container = document.getElementById("robocontainer-particles")
    if (!container) return

    // Clear any existing content
    container.innerHTML = ""

    // Create circuit-like nodes
    const nodeCount = 30
    const nodes: Array<{
      element: HTMLDivElement
      x: number
      y: number
      size: number
    }> = []

    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement("div")
      const size = Math.random() * 6 + 2
      const x = Math.random() * 100
      const y = Math.random() * 100

      node.className = "absolute rounded-full bg-[#4dabf7]/30"
      node.style.width = `${size}px`
      node.style.height = `${size}px`
      node.style.left = `${x}%`
      node.style.top = `${y}%`
      node.style.boxShadow = "0 0 10px rgba(77, 171, 247, 0.5)"

      container.appendChild(node)
      nodes.push({ element: node, x, y, size })
    }

    // Create connecting lines
    const canvas = document.createElement("canvas")
    canvas.className = "absolute inset-0 w-full h-full"
    container.appendChild(canvas)

    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const ctx = canvas.getContext("2d")

    // Animation loop
    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i]
          const nodeB = nodes[j]

          const dx = ((nodeB.x - nodeA.x) / 100) * canvas.width
          const dy = ((nodeB.y - nodeA.y) / 100) * canvas.height
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = 1 - distance / 150
            ctx.strokeStyle = `rgba(77, 171, 247, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo((nodeA.x / 100) * canvas.width, (nodeA.y / 100) * canvas.height)
            ctx.lineTo((nodeB.x / 100) * canvas.width, (nodeB.y / 100) * canvas.height)
            ctx.stroke()

            // Animate data flow along the lines
            const pulsePosition = (Date.now() % 3000) / 3000
            const pulseX = nodeA.x + (nodeB.x - nodeA.x) * pulsePosition
            const pulseY = nodeA.y + (nodeB.y - nodeA.y) * pulsePosition

            ctx.fillStyle = "rgba(34, 184, 207, 0.8)"
            ctx.beginPath()
            ctx.arc((pulseX / 100) * canvas.width, (pulseY / 100) * canvas.height, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Continue animation loop
      requestAnimationFrame(animate)
    }

    // Start animation
    const animationId = requestAnimationFrame(animate)

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] justify-center items-center">
      {/* Hero Section */}
      <section ref={heroRef} className=" min-h-screen  bg-[#0a0a1f] text-white">
        <motion.div
          style={{ opacity, scale, y }}
          className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-[#4dabf7]/20 bg-[#4dabf7]/10 px-3 py-1 text-sm text-[#4dabf7]"
          >
            <span>September 2025 • Season 1</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="sr-only">Robotics and Automation Live Simulation</span>
            <TypewriterEffect text="Robotics and Automation" />
            <br />
            <span className="bg-gradient-to-r from-[#4dabf7] to-[#22b8cf] bg-clip-text text-transparent">
              <TypewriterEffect text="Live Simulation" delay={1.5} />
            </span>
          </motion.h1>
          <h2 className="py-5">24-25 September 2025</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-[800px] text-lg text-[#a5d8ff]/80 md:text-xl"
          >
            Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation in the
            manufacturing industry. Experience live simulations and engage with industry experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-[#4dabf7] text-white hover:bg-[#4dabf7]/90"
              onClick={() => {
                document.getElementById("register")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-[#4dabf7]/20 bg-[#4dabf7]/10 text-[#4dabf7] hover:bg-[#4dabf7]/20"
              onClick={() => {
                document.getElementById("agenda")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              View Agenda <ChevronDown className="ml-2 h-4 w-4" />
            </Button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <CountdownTimer targetDate={eventDate} />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a1f] opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

          {/* Animated grid background with robocontainer particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(75,192,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(75,192,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div id="robocontainer-particles" className="absolute inset-0"></div>
          </div>

          {/* Glowing orbs */}
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#4dabf7]/10 blur-3xl"></div>
          <div className="absolute right-1/4 top-2/3 h-96 w-96 rounded-full bg-[#22b8cf]/10 blur-3xl"></div>
        </div>

        {/* <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="flex cursor-pointer flex-col items-center"
          >
            <span className="mb-2 text-sm text-[#a5d8ff]/60">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 text-[#a5d8ff]/60" />
          </motion.div>
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">About The Event</h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#4dabf7] to-[#22b8cf]"></div>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6"
            >
              <p className="text-lg text-[#a5d8ff]/80">
                The Robotics and Automation Live Simulation event is designed for professionals, enthusiasts, and
                students interested in the latest advancements in robotics technology.
              </p>
              <p className="text-lg text-[#a5d8ff]/80">
                This event will feature a series of live simulations that demonstrate how robotics and automation are
                revolutionizing the manufacturing landscape. Attendees will gain insights into the practical
                applications of these technologies and their potential to enhance productivity, efficiency, and safety
                in manufacturing environments.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#4dabf7]" />
                    <h3 className="font-bold text-white">Date & Time</h3>
                  </div>
                  <p className="text-[#a5d8ff]/80">September 2025, 9:00 AM UAE Time</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#4dabf7]" />
                    <h3 className="font-bold text-white">Location</h3>
                  </div>
                  <p className="text-[#a5d8ff]/80">Virtual Event (Online)</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#4dabf7]" />
                    <h3 className="font-bold text-white">Duration</h3>
                  </div>
                  <p className="text-[#a5d8ff]/80">Full Day Event (8 hours)</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#4dabf7]" />
                    <h3 className="font-bold text-white">Audience</h3>
                  </div>
                  <p className="text-[#a5d8ff]/80">Industry Professionals & Enthusiasts</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
             <div className="relative h-[700px] w-full max-w-[500px]">
            <video 
             src="/video/WhatsApp Video 2025-04-02 at 2.35.52 PM.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline 
            className="h-full w-full rounded-lg"
             />
            </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">What to Expect</h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#4dabf7] to-[#22b8cf]"></div>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Live Simulations",
                description:
                  "Experience real-time demonstrations of robotic systems and automation processes used in manufacturing.",
                icon: "🤖",
              },
              {
                title: "Expert Insights",
                description: "Hear from industry leaders and experts who will share their knowledge and experiences.",
                icon: "🧠",
              },
              {
                title: "Interactive Q&A",
                description:
                  "Engage with presenters during live Q&A sessions to gain deeper insights into the technologies.",
                icon: "💬",
              },
              {
                title: "Networking",
                description: "Connect with fellow attendees, industry professionals, and experts in the field.",
                icon: "🔗",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-[#4dabf7]/10 bg-white/5 transition-all hover:border-[#4dabf7]/30 hover:bg-white/10">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 text-4xl">{item.icon}</div>
                    <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-[#a5d8ff]/80">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Event Agenda</h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#4dabf7] to-[#22b8cf]"></div>
            <p className="mt-6 max-w-[800px] text-lg text-[#a5d8ff]/80">
              A full day of innovation, learning, and networking
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="morning" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-2 bg-white/5">
                <TabsTrigger
                  value="morning"
                  className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white"
                >
                  Morning Sessions
                </TabsTrigger>
                <TabsTrigger
                  value="afternoon"
                  className="data-[state=active]:bg-[#4dabf7] data-[state=active]:text-white"
                >
                  Afternoon Sessions
                </TabsTrigger>
              </TabsList>
              <TabsContent value="morning">
                <div className="space-y-6">
                  {[
                    {
                      time: "09:00 - 09:30",
                      title: "Welcome and Introduction",
                      description: "Opening remarks and overview of the day's agenda",
                    },
                    {
                      time: "09:30 - 10:30",
                      title: "Keynote: The Future of Manufacturing Automation",
                      description: "An insightful presentation on emerging trends and technologies in robotics",
                    },
                    {
                      time: "10:30 - 11:00",
                      title: "Networking Break",
                      description: "Connect with fellow attendees and speakers over refreshments",
                    },
                    {
                      time: "11:00 - 12:00",
                      title: "Live Simulation: Industrial Robotics in Action",
                      description:
                        "Watch real-time demonstrations of advanced robotic systems in manufacturing environments",
                    },
                    {
                      time: "12:00 - 13:00",
                      title: "Panel Discussion: Challenges in Automation Implementation",
                      description:
                        "Industry experts discuss common obstacles and solutions in adopting automation technologies",
                    },
                  ].map((session, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative rounded-lg border border-[#4dabf7]/10 bg-white/5 p-6 pl-16"
                    >
                      <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#4dabf7]/20 text-[#4dabf7]">
                        {index + 1}
                      </div>
                      <div className="mb-1 text-sm font-medium text-[#4dabf7]">{session.time}</div>
                      <h3 className="mb-2 text-xl font-bold text-white">{session.title}</h3>
                      <p className="text-[#a5d8ff]/80">{session.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="afternoon">
                <div className="space-y-6">
                  {[
                    {
                      time: "13:00 - 14:00",
                      title: "Lunch Break",
                      description: "Virtual networking lunch with themed breakout rooms",
                    },
                    {
                      time: "14:00 - 15:00",
                      title: "Workshop: AI in Robotics",
                      description: "Interactive session on integrating artificial intelligence with robotic systems",
                    },
                    {
                      time: "15:00 - 16:00",
                      title: "Live Simulation: Collaborative Robots",
                      description: "Demonstration of human-robot collaboration in manufacturing settings",
                    },
                    {
                      time: "16:00 - 16:30",
                      title: "Networking Break",
                      description: "Connect with fellow attendees and speakers",
                    },
                    {
                      time: "16:30 - 17:30",
                      title: "Closing Keynote: The Road Ahead",
                      description: "Vision for the future of robotics and automation in manufacturing",
                    },
                  ].map((session, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative rounded-lg border border-[#4dabf7]/10 bg-white/5 p-6 pl-16"
                    >
                      <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#4dabf7]/20 text-[#4dabf7]">
                        {index + 1}
                      </div>
                      <div className="mb-1 text-sm font-medium text-[#4dabf7]">{session.time}</div>
                      <h3 className="mb-2 text-xl font-bold text-white">{session.title}</h3>
                      <p className="text-[#a5d8ff]/80">{session.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Featured Speakers
            </h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#4dabf7] to-[#22b8cf]"></div>
            <p className="mt-6 max-w-[800px] text-lg text-[#a5d8ff]/80">
              Learn from industry leaders and experts in robotics and automation
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Robotics Officer, TechFuture Inc.",
                bio: "Leading expert in industrial robotics with over 15 years of experience in automation solutions.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Prof. Michael Rodriguez",
                role: "Head of AI Research, Global Robotics Institute",
                bio: "Pioneer in the integration of artificial intelligence with robotic systems for manufacturing.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Eng. Aisha Al-Mansoori",
                role: "Automation Director, Future Manufacturing",
                bio: "Specializes in implementing automation solutions for complex manufacturing environments.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Dr. James Wilson",
                role: "CTO, RoboSolutions International",
                bio: "Expert in collaborative robots and human-machine interaction in industrial settings.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Dr. Fatima Al-Zahra",
                role: "Professor of Robotics Engineering, Tech University",
                bio: "Researcher and educator focused on next-generation robotics technologies.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Robert Chang",
                role: "Manufacturing Innovation Lead, AutoTech Corp",
                bio: "Specializes in transforming traditional manufacturing through automation and robotics.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-[#4dabf7]/10 bg-white/5 transition-all hover:border-[#4dabf7]/30 hover:bg-white/10">
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f]/90 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-1 text-xl font-bold text-white">{speaker.name}</h3>
                      <p className="mb-3 text-sm text-[#4dabf7]">{speaker.role}</p>
                      <p className="text-[#a5d8ff]/80">{speaker.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Register Now</h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#4dabf7] to-[#22b8cf]"></div>
            <p className="mt-6 max-w-[800px] text-lg text-[#a5d8ff]/80">
              Secure your spot for this groundbreaking event
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <Card className="overflow-hidden border-[#4dabf7]/10 bg-white/5">
              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  {isRegistered ? (
                    <motion.div
                      id="registration-confirmation"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="mb-6 rounded-full bg-[#4dabf7]/20 p-4">
                        <CheckCircle2 className="h-16 w-16 text-[#4dabf7]" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-white">Registration Successful!</h3>
                      <p className="mb-6 max-w-[500px] text-[#a5d8ff]/80">
                        Thank you for registering for the Robotics and Automation Live Simulation event. We've sent a
                        confirmation email with all the details. We look forward to seeing you in September 2025!
                      </p>
                      <Button
                        className="bg-[#4dabf7] text-white hover:bg-[#4dabf7]/90"
                        onClick={() => setIsRegistered(false)}
                      >
                        Register Another Attendee
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onSubmit={handleRegister}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name" className="text-white">
                            First Name
                          </Label>
                          <Input
                            id="first-name"
                            placeholder="Enter your first name"
                            required
                            className="border-[#4dabf7]/20 bg-white/5 text-white placeholder:text-[#a5d8ff]/50 focus:border-[#4dabf7]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name" className="text-white">
                            Last Name
                          </Label>
                          <Input
                            id="last-name"
                            placeholder="Enter your last name"
                            required
                            className="border-[#4dabf7]/20 bg-white/5 text-white placeholder:text-[#a5d8ff]/50 focus:border-[#4dabf7]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          required
                          className="border-[#4dabf7]/20 bg-white/5 text-white placeholder:text-[#a5d8ff]/50 focus:border-[#4dabf7]"
                        />
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-white">
                            Company/Organization
                          </Label>
                          <Input
                            id="company"
                            placeholder="Enter your company name"
                            className="border-[#4dabf7]/20 bg-white/5 text-white placeholder:text-[#a5d8ff]/50 focus:border-[#4dabf7]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="job-title" className="text-white">
                            Job Title
                          </Label>
                          <Input
                            id="job-title"
                            placeholder="Enter your job title"
                            className="border-[#4dabf7]/20 bg-white/5 text-white placeholder:text-[#a5d8ff]/50 focus:border-[#4dabf7]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interests" className="text-white">
                          Areas of Interest
                        </Label>
                        <Textarea
                          id="interests"
                          placeholder="What aspects of robotics and automation are you most interested in?"
                          className="min-h-[100px] border-[#4dabf7]/20 bg-white/5 text-white placeholder:text-[#a5d8ff]/50 focus:border-[#4dabf7]"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="terms"
                          className="h-4 w-4 rounded border-[#4dabf7]/20 bg-white/5 text-[#4dabf7] focus:ring-[#4dabf7]"
                          required
                        />
                        <label htmlFor="terms" className="text-sm text-[#a5d8ff]/80">
                          I agree to the{" "}
                          <Link href="#" className="text-[#4dabf7] underline">
                            terms and conditions
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-[#4dabf7] underline">
                            privacy policy
                          </Link>
                        </label>
                      </div>

                      <Button type="submit" className="w-full bg-[#4dabf7] text-white hover:bg-[#4dabf7]/90">
                        Complete Registration
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#4dabf7] to-[#22b8cf]"></div>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "Is this a virtual or in-person event?",
                answer:
                  "This is a fully virtual event that you can attend from anywhere in the world. All you need is an internet connection and a device to join.",
              },
              {
                question: "Will the sessions be recorded?",
                answer:
                  "Yes, all sessions will be recorded and made available to registered attendees for 30 days after the event.",
              },
              {
                question: "What technology do I need to participate?",
                answer:
                  "You'll need a computer or tablet with a stable internet connection. We recommend using Chrome or Firefox browsers for the best experience.",
              },
              {
                question: "Is there a cost to attend?",
                answer:
                  "Registration for this inaugural event is complimentary. Future seasons may include premium content with paid registration options.",
              },
              {
                question: "How can I interact during the live simulations?",
                answer:
                  "The platform will include Q&A features, polls, and chat functionality to interact with presenters and other attendees during the sessions.",
              },
              {
                question: "Will there be networking opportunities?",
                answer:
                  "Yes, we've built in dedicated networking breaks with virtual rooms organized by topic to facilitate meaningful connections.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-[#4dabf7]/10 bg-white/5 transition-all hover:border-[#4dabf7]/30">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">{faq.question}</h3>
                    <p className="text-[#a5d8ff]/80">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-[#4dabf7]/20 to-[#22b8cf]/10 p-8 text-center shadow-lg md:p-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Ready to Experience the Future of Manufacturing?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-[#a5d8ff]/80">
              Join us for this groundbreaking event and be part of the robotics and automation revolution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-[#4dabf7] text-white hover:bg-[#4dabf7]/90"
                onClick={() => {
                  document.getElementById("register")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#4dabf7]/20 bg-[#4dabf7]/10 text-[#4dabf7] hover:bg-[#4dabf7]/20"
                asChild
              >
                <Link href="/">Back to Main Site</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0a1f] py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Robotics Event</h3>
              <p className="text-[#a5d8ff]/60">
                Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
              <ul className="space-y-2 text-[#a5d8ff]/60">
                <li>
                  <Link href="/" className="hover:text-[#4dabf7]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-[#4dabf7]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#agenda" className="hover:text-[#4dabf7]">
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link href="#register" className="hover:text-[#4dabf7]">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>
              <ul className="space-y-2 text-[#a5d8ff]/60">
                <li>Email: info@roboticsevent.com</li>
                <li>Phone: +971 4 123 4567</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#a5d8ff]/60 hover:text-[#4dabf7]">
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
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-[#a5d8ff]/60 hover:text-[#4dabf7]">
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
                <Link href="#" className="text-[#a5d8ff]/60 hover:text-[#4dabf7]">
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
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-[#a5d8ff]/60 hover:text-[#4dabf7]">
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
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-[#a5d8ff]/60">
            <p>© {new Date().getFullYear()} Robotics and Automation Event. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

