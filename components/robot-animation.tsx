"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function RobotAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Robot parts
    const robotHead = {
      x: canvas.width / 2,
      y: canvas.height / 2 - 50,
      radius: 40,
      color: "#4dabf7",
      blinkTimer: 0,
      blinkInterval: Math.random() * 100 + 100,
      isBlinking: false,
      blinkDuration: 10,
      eyeSize: 8,
      mouthAngle: 0.1,
      antennaGlow: 0,
      glowDirection: 1,
      draw() {
        if (!ctx) return

        // Update blink timer
        this.blinkTimer++
        if (this.blinkTimer >= this.blinkInterval && !this.isBlinking) {
          this.isBlinking = true
          this.blinkTimer = 0
        }

        if (this.isBlinking) {
          this.blinkTimer++
          if (this.blinkTimer >= this.blinkDuration) {
            this.isBlinking = false
            this.blinkTimer = 0
            this.blinkInterval = Math.random() * 100 + 100
          }
        }

        // Update antenna glow
        this.antennaGlow += 0.05 * this.glowDirection
        if (this.antennaGlow > 1 || this.antennaGlow < 0.2) {
          this.glowDirection *= -1
        }

        // Update mouth for hover state
        if (isHovering) {
          this.mouthAngle = Math.min(this.mouthAngle + 0.01, 0.5)
        } else {
          this.mouthAngle = Math.max(this.mouthAngle - 0.01, 0.1)
        }

        // Head - metallic gradient
        const gradient = ctx.createRadialGradient(
          this.x - this.radius / 3,
          this.y - this.radius / 3,
          0,
          this.x,
          this.y,
          this.radius * 1.2,
        )
        gradient.addColorStop(0, "#6bc5ff")
        gradient.addColorStop(0.7, "#4dabf7")
        gradient.addColorStop(1, "#3b8ac2")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()

        // Head highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
        ctx.beginPath()
        ctx.arc(this.x - this.radius / 3, this.y - this.radius / 3, this.radius / 2, 0, Math.PI * 2)
        ctx.fill()

        // Eyes
        ctx.fillStyle = "#fff"
        ctx.beginPath()

        // Left eye
        if (this.isBlinking) {
          ctx.fillRect(this.x - 15 - this.eyeSize / 2, this.y - 10, this.eyeSize, 1)
        } else {
          ctx.arc(this.x - 15, this.y - 10, this.eyeSize, 0, Math.PI * 2)
        }

        // Right eye
        if (this.isBlinking) {
          ctx.fillRect(this.x + 15 - this.eyeSize / 2, this.y - 10, this.eyeSize, 1)
        } else {
          ctx.arc(this.x + 15, this.y - 10, this.eyeSize, 0, Math.PI * 2)
        }

        ctx.fill()

        // Pupils - follow mouse on hover
        const pupilOffset = isHovering ? 2 : 0
        ctx.fillStyle = "#0a0a1f"
        ctx.beginPath()
        ctx.arc(this.x - 15 + pupilOffset, this.y - 10 + pupilOffset, 4, 0, Math.PI * 2)
        ctx.arc(this.x + 15 + pupilOffset, this.y - 10 + pupilOffset, 4, 0, Math.PI * 2)
        ctx.fill()

        // Mouth
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.arc(this.x, this.y + 10, 15, this.mouthAngle * Math.PI, (1 - this.mouthAngle) * Math.PI)
        ctx.stroke()

        // Antenna
        ctx.strokeStyle = "#4dabf7"
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(this.x, this.y - this.radius)
        ctx.lineTo(this.x, this.y - this.radius - 20)
        ctx.stroke()

        // Antenna glow
        const glowSize = 5 + 3 * this.antennaGlow
        const glowOpacity = 0.7 * this.antennaGlow

        // Outer glow
        ctx.fillStyle = `rgba(34, 184, 207, ${glowOpacity / 3})`
        ctx.beginPath()
        ctx.arc(this.x, this.y - this.radius - 25, glowSize * 1.5, 0, Math.PI * 2)
        ctx.fill()

        // Inner glow
        ctx.fillStyle = `rgba(34, 184, 207, ${glowOpacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y - this.radius - 25, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Antenna tip
        ctx.fillStyle = "#22b8cf"
        ctx.beginPath()
        ctx.arc(this.x, this.y - this.radius - 25, 5, 0, Math.PI * 2)
        ctx.fill()

        // Face plate details
        ctx.strokeStyle = "#3b8ac2"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius - 5, 0, Math.PI * 2)
        ctx.stroke()

        // Ear pieces
        ctx.fillStyle = "#3b8ac2"
        ctx.beginPath()
        ctx.roundRect(this.x - this.radius - 5, this.y - 10, 10, 20, 5)
        ctx.roundRect(this.x + this.radius - 5, this.y - 10, 10, 20, 5)
        ctx.fill()
      },
    }

    const robotBody = {
      x: canvas.width / 2,
      y: canvas.height / 2 + 40,
      width: 80,
      height: 100,
      color: "#4dabf7",
      lightTimer: 0,
      activeLights: [false, true, false],
      draw() {
        if (!ctx) return

        // Update lights
        this.lightTimer++
        if (this.lightTimer > 30) {
          this.lightTimer = 0
          const randomLight = Math.floor(Math.random() * this.activeLights.length)
          this.activeLights[randomLight] = !this.activeLights[randomLight]
        }

        // Body - metallic gradient
        const gradient = ctx.createLinearGradient(this.x - this.width / 2, this.y, this.x + this.width / 2, this.y)
        gradient.addColorStop(0, "#3b8ac2")
        gradient.addColorStop(0.5, "#4dabf7")
        gradient.addColorStop(1, "#3b8ac2")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.roundRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height, 10)
        ctx.fill()

        // Body outline
        ctx.strokeStyle = "#3b8ac2"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.roundRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height, 10)
        ctx.stroke()

        // Control panel
        const panelGradient = ctx.createLinearGradient(this.x - 30, this.y - 30, this.x + 30, this.y + 10)
        panelGradient.addColorStop(0, "#0a0a1f")
        panelGradient.addColorStop(1, "#1a1a3f")

        ctx.fillStyle = panelGradient
        ctx.beginPath()
        ctx.roundRect(this.x - 30, this.y - 30, 60, 40, 5)
        ctx.fill()

        // Panel border
        ctx.strokeStyle = "#3b8ac2"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.roundRect(this.x - 30, this.y - 30, 60, 40, 5)
        ctx.stroke()

        // Buttons with glow effects
        const buttonColors = ["#22b8cf", "#ff6b6b", "#ffd43b"]
        const buttonPositions = [
          { x: this.x - 15, y: this.y - 15 },
          { x: this.x + 15, y: this.y - 15 },
          { x: this.x, y: this.y + 5 },
        ]

        buttonPositions.forEach((pos, i) => {
          // Button glow
          if (this.activeLights[i]) {
            ctx.fillStyle = `${buttonColors[i]}80` // 50% opacity
            ctx.beginPath()
            ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2)
            ctx.fill()
          }

          // Button
          ctx.fillStyle = buttonColors[i]
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2)
          ctx.fill()

          // Button highlight
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
          ctx.beginPath()
          ctx.arc(pos.x - 1.5, pos.y - 1.5, 2, 0, Math.PI * 2)
          ctx.fill()
        })

        // Additional panel details
        ctx.strokeStyle = "#3b8ac2"
        ctx.lineWidth = 1

        // Small vents
        for (let i = 0; i < 3; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x - 20, this.y + 20 + i * 5)
          ctx.lineTo(this.x + 20, this.y + 20 + i * 5)
          ctx.stroke()
        }

        // Chest emblem
        ctx.fillStyle = "#3b8ac2"
        ctx.beginPath()
        ctx.moveTo(this.x, this.y - this.height / 2 + 15)
        ctx.lineTo(this.x - 10, this.y - this.height / 2 + 30)
        ctx.lineTo(this.x + 10, this.y - this.height / 2 + 30)
        ctx.closePath()
        ctx.fill()
      },
    }

    const robotArms = {
      leftX: canvas.width / 2 - 40,
      rightX: canvas.width / 2 + 40,
      y: canvas.height / 2 + 20,
      length: 70,
      angle: 0,
      speed: 0.02,
      segments: 3,
      segmentLength: 25,
      jointAngles: [0, 0.2, 0.1],
      targetAngles: [0, 0.2, 0.1],
      draw() {
        if (!ctx) return

        // Update joint angles
        if (isHovering) {
          this.targetAngles = [0.3, -0.4, -0.2]
        } else {
          this.targetAngles = [0, 0.2, 0.1]
        }

        for (let i = 0; i < this.segments; i++) {
          this.jointAngles[i] += (this.targetAngles[i] - this.jointAngles[i]) * 0.05
        }

        // Update main angle
        this.angle += this.speed
        if (this.angle > 0.3 || this.angle < -0.3) {
          this.speed *= -1
        }

        // Arm gradient
        const armGradient = ctx.createLinearGradient(this.leftX, this.y, this.leftX, this.y + this.segmentLength)
        armGradient.addColorStop(0, "#4dabf7")
        armGradient.addColorStop(1, "#3b8ac2")

        // Draw segmented arms
        const drawSegmentedArm = (startX: number, startY: number, angles: number[], isLeft: boolean) => {
          let x = startX
          let y = startY

          for (let i = 0; i < this.segments; i++) {
            const angle = isLeft ? this.angle + angles[i] : this.angle - angles[i]

            const endX = x + (isLeft ? -1 : 1) * Math.cos(angle) * this.segmentLength
            const endY = y + Math.sin(angle) * this.segmentLength

            // Joint
            ctx.fillStyle = "#3b8ac2"
            ctx.beginPath()
            ctx.arc(x, y, 6, 0, Math.PI * 2)
            ctx.fill()

            // Arm segment
            ctx.strokeStyle = armGradient
            ctx.lineWidth = 10
            ctx.lineCap = "round"
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(endX, endY)
            ctx.stroke()

            // Segment details
            ctx.strokeStyle = "#3b8ac2"
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(endX, endY)
            ctx.stroke()

            x = endX
            y = endY
          }

          return { x, y }
        }

        // Left arm
        const leftHandPos = drawSegmentedArm(this.leftX, this.y, this.jointAngles, true)

        // Right arm
        const rightHandPos = drawSegmentedArm(this.rightX, this.y, this.jointAngles, false)

        // Hands
        const drawHand = (x: number, y: number, isLeft: boolean) => {
          // Hand base
          const handGradient = ctx.createRadialGradient(x, y, 0, x, y, 12)
          handGradient.addColorStop(0, "#22b8cf")
          handGradient.addColorStop(1, "#1a9aaa")

          ctx.fillStyle = handGradient
          ctx.beginPath()
          ctx.arc(x, y, 10, 0, Math.PI * 2)
          ctx.fill()

          // Hand details
          ctx.strokeStyle = "#1a9aaa"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(x, y, 10, 0, Math.PI * 2)
          ctx.stroke()

          // Fingers
          const fingerCount = 3
          const fingerLength = isHovering ? 12 : 8
          const fingerWidth = 3
          const spreadAngle = isHovering ? 0.8 : 0.4

          for (let i = 0; i < fingerCount; i++) {
            const angle = (isLeft ? Math.PI : 0) + (i - 1) * spreadAngle
            const fingerX = x + Math.cos(angle) * fingerLength
            const fingerY = y + Math.sin(angle) * fingerLength

            ctx.strokeStyle = "#22b8cf"
            ctx.lineWidth = fingerWidth
            ctx.lineCap = "round"
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(fingerX, fingerY)
            ctx.stroke()
          }

          // Thumb
          const thumbAngle = (isLeft ? Math.PI : 0) + (isLeft ? -0.8 : 0.8)
          const thumbX = x + Math.cos(thumbAngle) * fingerLength
          const thumbY = y + Math.sin(thumbAngle) * fingerLength

          ctx.strokeStyle = "#22b8cf"
          ctx.lineWidth = fingerWidth
          ctx.lineCap = "round"
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(thumbX, thumbY)
          ctx.stroke()
        }

        drawHand(leftHandPos.x, leftHandPos.y, true)
        drawHand(rightHandPos.x, rightHandPos.y, false)
      },
    }

    const robotLegs = {
      leftX: canvas.width / 2 - 25,
      rightX: canvas.width / 2 + 25,
      y: canvas.height / 2 + 90,
      length: 70,
      kneeOffset: 30,
      kneeAngle: 0,
      kneeAngleSpeed: 0.01,
      footWidth: 30,
      footHeight: 15,
      draw() {
        if (!ctx) return

        // Update knee angle
        this.kneeAngle += this.kneeAngleSpeed
        if (this.kneeAngle > 0.15 || this.kneeAngle < -0.15) {
          this.kneeAngleSpeed *= -1
        }

        // Leg gradient
        const legGradient = ctx.createLinearGradient(this.leftX, this.y, this.leftX, this.y + this.length)
        legGradient.addColorStop(0, "#4dabf7")
        legGradient.addColorStop(1, "#3b8ac2")

        const drawLeg = (x: number, y: number, kneeAngle: number) => {
          // Upper leg
          ctx.strokeStyle = legGradient
          ctx.lineWidth = 15
          ctx.lineCap = "round"
          ctx.beginPath()
          ctx.moveTo(x, y)

          // Knee position
          const kneeY = y + this.kneeOffset
          ctx.lineTo(x, kneeY)
          ctx.stroke()

          // Knee joint
          ctx.fillStyle = "#3b8ac2"
          ctx.beginPath()
          ctx.arc(x, kneeY, 8, 0, Math.PI * 2)
          ctx.fill()

          // Lower leg with angle
          const footX = x + Math.sin(kneeAngle) * (this.length - this.kneeOffset)
          const footY = kneeY + Math.cos(kneeAngle) * (this.length - this.kneeOffset)

          ctx.strokeStyle = legGradient
          ctx.beginPath()
          ctx.moveTo(x, kneeY)
          ctx.lineTo(footX, footY)
          ctx.stroke()

          // Ankle joint
          ctx.fillStyle = "#3b8ac2"
          ctx.beginPath()
          ctx.arc(footX, footY, 6, 0, Math.PI * 2)
          ctx.fill()

          return { x: footX, y: footY }
        }

        // Draw legs
        const leftFootPos = drawLeg(this.leftX, this.y, -this.kneeAngle)
        const rightFootPos = drawLeg(this.rightX, this.y, this.kneeAngle)

        // Draw feet
        const drawFoot = (x: number, y: number) => {
          // Foot base
          const footGradient = ctx.createLinearGradient(x - this.footWidth / 2, y, x + this.footWidth / 2, y)
          footGradient.addColorStop(0, "#22b8cf")
          footGradient.addColorStop(0.5, "#1a9aaa")
          footGradient.addColorStop(1, "#22b8cf")

          ctx.fillStyle = footGradient
          ctx.beginPath()
          ctx.roundRect(x - this.footWidth / 2, y - 5, this.footWidth, this.footHeight, 5)
          ctx.fill()

          // Foot details
          ctx.strokeStyle = "#1a9aaa"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.roundRect(x - this.footWidth / 2, y - 5, this.footWidth, this.footHeight, 5)
          ctx.stroke()

          // Foot top
          ctx.fillStyle = "#3b8ac2"
          ctx.beginPath()
          ctx.roundRect(x - this.footWidth / 2, y - 5, this.footWidth, 3, 5)
          // Draw a line at the bottom to create the flat bottom effect
          ctx.strokeStyle = "#3b8ac2"
          ctx.beginPath()
          ctx.moveTo(x - this.footWidth / 2, y - 2)
          ctx.lineTo(x + this.footWidth / 2, y - 2)
          ctx.stroke()
        }

        drawFoot(leftFootPos.x, leftFootPos.y)
        drawFoot(rightFootPos.x, rightFootPos.y)
      },
    }

    // Energy field effect
    const energyField = {
      particles: [] as { x: number; y: number; size: number; speed: number; angle: number; opacity: number }[],
      particleCount: 20,
      maxDistance: 100,
      init() {
        for (let i = 0; i < this.particleCount; i++) {
          this.particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * this.maxDistance,
            y: canvas.height / 2 + (Math.random() - 0.5) * this.maxDistance,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 0.5 + 0.2,
            angle: Math.random() * Math.PI * 2,
            opacity: Math.random() * 0.5 + 0.2,
          })
        }
      },
      update() {
        if (!canvas) return

        for (let i = 0; i < this.particles.length; i++) {
          const p = this.particles[i]

          // Move in circular path around robot
          p.angle += p.speed / 50

          const distanceFromCenter = Math.sqrt(
            Math.pow(p.x - canvas.width / 2, 2) + Math.pow(p.y - canvas.height / 2, 2),
          )

          const targetDistance = isHovering ? this.maxDistance * 1.5 : this.maxDistance

          // Adjust distance from center
          const newDistance = distanceFromCenter + (targetDistance - distanceFromCenter) * 0.01

          p.x = canvas.width / 2 + Math.cos(p.angle) * newDistance
          p.y = canvas.height / 2 + Math.sin(p.angle) * newDistance

          // Pulse opacity
          p.opacity = 0.2 + Math.sin(Date.now() / 1000 + i) * 0.3
        }
      },
      draw() {
        if (!ctx) return

        // Draw particles
        for (let i = 0; i < this.particles.length; i++) {
          const p = this.particles[i]

          ctx.fillStyle = `rgba(75, 192, 255, ${p.opacity})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw connecting lines between nearby particles
        ctx.strokeStyle = "rgba(75, 192, 255, 0.2)"
        ctx.lineWidth = 0.5

        for (let i = 0; i < this.particles.length; i++) {
          for (let j = i + 1; j < this.particles.length; j++) {
            const p1 = this.particles[i]
            const p2 = this.particles[j]

            const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

            if (distance < 50) {
              const opacity = (1 - distance / 50) * 0.2

              ctx.strokeStyle = `rgba(75, 192, 255, ${opacity})`
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        }
      },
    }

    // Initialize energy field
    energyField.init()

    // Particles
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      fadeSpeed: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 300)
        this.y = Math.random() * (canvas?.height || 300)
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 1
        this.speedY = (Math.random() - 0.5) * 1
        this.color = `rgba(75, 192, 255, ${Math.random() * 0.5 + 0.2})`
        this.opacity = Math.random() * 0.5 + 0.2
        this.fadeSpeed = Math.random() * 0.01 + 0.005
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        const width = canvas?.width || 300
        const height = canvas?.height || 300

        if (this.x > width) this.x = 0
        else if (this.x < 0) this.x = width

        if (this.y > height) this.y = 0
        else if (this.y < 0) this.y = height

        // Pulse opacity
        this.opacity = 0.2 + Math.sin((Date.now() / 1000) * this.fadeSpeed * 5) * 0.2
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(75, 192, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Ground reflection
    const drawGroundReflection = () => {
      if (!ctx || !canvas) return

      const reflectionY = canvas.height / 2 + 160
      const reflectionHeight = 40

      // Create gradient for reflection
      const gradient = ctx.createLinearGradient(0, reflectionY, 0, reflectionY + reflectionHeight)
      gradient.addColorStop(0, "rgba(75, 192, 255, 0.2)")
      gradient.addColorStop(1, "rgba(75, 192, 255, 0)")

      // Draw elliptical reflection
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.ellipse(canvas.width / 2, reflectionY, 60, 10, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      // Update energy field
      energyField.update()
      energyField.draw()

      // Draw ground reflection
      drawGroundReflection()

      // Update robot positions
      robotHead.x = canvas.width / 2
      robotHead.y = canvas.height / 2 - 50

      robotBody.x = canvas.width / 2
      robotBody.y = canvas.height / 2 + 40

      robotArms.leftX = canvas.width / 2 - 40
      robotArms.rightX = canvas.width / 2 + 40
      robotArms.y = canvas.height / 2 + 20

      robotLegs.leftX = canvas.width / 2 - 25
      robotLegs.rightX = canvas.width / 2 + 25
      robotLegs.y = canvas.height / 2 + 90

      // Draw robot
      robotLegs.draw()
      robotBody.draw()
      robotArms.draw()
      robotHead.draw()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [isHovering])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative h-full w-full rounded-lg bg-gradient-to-br from-[#4dabf7]/10 to-transparent p-1"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <canvas ref={canvasRef} className="h-full w-full rounded-lg" />
    </motion.div>
  )
}

