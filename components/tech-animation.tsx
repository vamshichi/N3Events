"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function TechAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Circuit node class
    class CircuitNode {
      x: number
      y: number
      radius: number
      connections: CircuitNode[]
      pulseTime: number
      active: boolean
      color: string

      constructor(x: number, y: number, radius: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.connections = []
        this.pulseTime = Math.random() * 2000
        this.active = Math.random() > 0.5
        this.color = Math.random() > 0.7 ? "#22b8cf" : "#4dabf7"
      }

      draw() {
        if (!ctx) return

        // Draw node
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw glow
        ctx.shadowColor = this.color
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw connections
        for (const node of this.connections) {
          this.drawConnection(node)
        }
      }

      drawConnection(node: CircuitNode) {
        if (!ctx) return

        // Draw line
        ctx.strokeStyle = this.active ? this.color : "rgba(77, 171, 247, 0.2)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(node.x, node.y)
        ctx.stroke()

        // Draw data pulse
        const currentTime = Date.now()
        const cycleTime = 3000
        const pulsePosition = ((currentTime + this.pulseTime) % cycleTime) / cycleTime

        if (this.active && pulsePosition < 1) {
          const pulseX = this.x + (node.x - this.x) * pulsePosition
          const pulseY = this.y + (node.y - this.y) * pulsePosition

          ctx.fillStyle = "#ffffff"
          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2)
          ctx.fill()

          ctx.shadowColor = "#ffffff"
          ctx.shadowBlur = 5
          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      update() {
        if (Math.random() < 0.005) {
          this.active = !this.active
        }
      }
    }

    // Create circuit board
    const nodes: CircuitNode[] = []
    const nodeCount = 20

    // Create nodes in a grid-like pattern
    const gridSize = Math.ceil(Math.sqrt(nodeCount))
    const cellWidth = canvas.width / gridSize
    const cellHeight = canvas.height / gridSize

    for (let i = 0; i < nodeCount; i++) {
      const row = Math.floor(i / gridSize)
      const col = i % gridSize

      const x = col * cellWidth + cellWidth / 2 + (Math.random() - 0.5) * cellWidth * 0.5
      const y = row * cellHeight + cellHeight / 2 + (Math.random() - 0.5) * cellHeight * 0.5
      const radius = Math.random() * 3 + 2

      nodes.push(new CircuitNode(x, y, radius))
    }

    // Connect nodes
    for (let i = 0; i < nodes.length; i++) {
      // Connect to right neighbor
      if ((i + 1) % gridSize !== 0 && i + 1 < nodes.length) {
        nodes[i].connections.push(nodes[i + 1])
      }

      // Connect to bottom neighbor
      if (i + gridSize < nodes.length) {
        nodes[i].connections.push(nodes[i + gridSize])
      }

      // Add some random connections for more complexity
      if (Math.random() < 0.3 && i + gridSize + 1 < nodes.length && (i + 1) % gridSize !== 0) {
        nodes[i].connections.push(nodes[i + gridSize + 1])
      }

      if (Math.random() < 0.3 && i + gridSize - 1 < nodes.length && i % gridSize !== 0) {
        nodes[i].connections.push(nodes[i + gridSize - 1])
      }
    }

    // Create holographic interface elements
    const interfaceElements = [
      {
        type: "circle",
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: canvas.width * 0.25,
        rotation: 0,
        rotationSpeed: 0.0005,
      },
      {
        type: "circle",
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: canvas.width * 0.2,
        rotation: 0,
        rotationSpeed: -0.0007,
      },
      {
        type: "hexagon",
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: canvas.width * 0.15,
        rotation: 0,
        rotationSpeed: 0.0003,
      },
    ]

    // Draw interface element
    function drawInterfaceElement(element: any) {
      if (!ctx) return

      ctx.strokeStyle = "rgba(77, 171, 247, 0.3)"
      ctx.lineWidth = 1

      ctx.save()
      ctx.translate(element.x, element.y)
      ctx.rotate(element.rotation)

      if (element.type === "circle") {
        ctx.beginPath()
        ctx.arc(0, 0, element.radius, 0, Math.PI * 2)
        ctx.stroke()

        // Add tick marks
        const tickCount = 36
        for (let i = 0; i < tickCount; i++) {
          const angle = (i / tickCount) * Math.PI * 2
          const innerRadius = element.radius - 5
          const outerRadius = element.radius + 5

          ctx.beginPath()
          ctx.moveTo(innerRadius * Math.cos(angle), innerRadius * Math.sin(angle))
          ctx.lineTo(outerRadius * Math.cos(angle), outerRadius * Math.sin(angle))
          ctx.stroke()
        }
      } else if (element.type === "hexagon") {
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2
          const x = element.radius * Math.cos(angle)
          const y = element.radius * Math.sin(angle)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.stroke()
      }

      ctx.restore()

      // Update rotation
      element.rotation += element.rotationSpeed
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw interface elements
      for (const element of interfaceElements) {
        drawInterfaceElement(element)
      }

      // Draw and update nodes
    //   for (const node of nodes) {
    //     node.update()
    //     node.draw()
    //   }

      // Draw central data core
    //   const centerX = canvas.width / 2
    //   const centerY = canvas.height / 2
    //   const coreRadius = 15

    //   const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius)
    //   gradient.addColorStop(0, "rgba(34, 184, 207, 1)")
    //   gradient.addColorStop(1, "rgba(34, 184, 207, 0)")

    //   ctx.fillStyle = gradient
    //   ctx.beginPath()
    //   ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2)
    //   ctx.fill()

      // Pulsing effect
    //   const pulseSize = coreRadius + Math.sin(Date.now() * 0.003) * 5
    //   ctx.strokeStyle = "rgba(34, 184, 207, 0.5)"
    //   ctx.lineWidth = 2
    //   ctx.beginPath()
    //   ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2)
    //   ctx.stroke()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative h-full w-full rounded-lg bg-gradient-to-br from-[#4dabf7]/10 to-transparent p-1"
    >
      <canvas ref={canvasRef} className="h-full w-full rounded-lg" />
    </motion.div>
  )
}

