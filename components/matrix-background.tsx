"use client"

import { useEffect, useRef } from "react"

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Characters for the matrix effect (numbers, uppercase letters, and common symbols)
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?`~"
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops: number[] = []

    // Initialize drops for each column, starting at the first row
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      // Semi-transparent black rectangle to create the trail effect
      // Lower opacity means longer trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Draw the main falling characters (faded green)
        ctx.fillStyle = "#00FF00" // Standard green
        ctx.font = `${fontSize}px monospace`
        ctx.fillText(text, x, y)

        // Draw the "head" character (brighter green) slightly above the current character
        // This creates the leading bright effect
        if (drops[i] * fontSize < canvas.height) {
          const headText = characters.charAt(Math.floor(Math.random() * characters.length))
          ctx.fillStyle = "#A0FFA0" // Brighter green for the head
          ctx.fillText(headText, x, y - fontSize)
        }

        // Reset the drop to the top if it goes off screen
        // Add randomness to when it resets to create more natural, staggered streams
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Increment the drop position
        drops[i]++
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  // The canvas is absolutely positioned and has a low z-index and opacity
  // to serve as a background layer.
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />
}

export default MatrixBackground
