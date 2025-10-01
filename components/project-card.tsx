"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    github: string
    demo: string
  }
  index: number
}

const ProjectCard = ({ project, index }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Get badge color based on technology
  const getBadgeColor = (tag: string) => {
    const tag_lower = tag.toLowerCase()

    if (tag_lower.includes("net") || tag_lower.includes("asp")) {
      return "bg-purple-900/50 hover:bg-purple-800/50 text-purple-300 border border-purple-500/30"
    } else if (tag_lower.includes("angular") || tag_lower.includes("typescript")) {
      return "bg-red-900/50 hover:bg-red-800/50 text-red-300 border border-red-500/30"
    } else if (tag_lower.includes("sql") || tag_lower.includes("database")) {
      return "bg-blue-900/50 hover:bg-blue-800/50 text-blue-300 border border-blue-500/30"
    } else if (tag_lower.includes("python") || tag_lower.includes("nlp") || tag_lower.includes("machine")) {
      return "bg-yellow-900/50 hover:bg-yellow-800/50 text-yellow-300 border border-yellow-500/30"
    } else if (tag_lower.includes("azure") || tag_lower.includes("cloud")) {
      return "bg-cyan-900/50 hover:bg-cyan-800/50 text-cyan-300 border border-cyan-500/30"
    } else if (tag_lower.includes("iot") || tag_lower.includes("arduino") || tag_lower.includes("sensors")) {
      return "bg-green-900/50 hover:bg-green-800/50 text-green-300 border border-green-500/30"
    } else if (tag_lower.includes("mobile") || tag_lower.includes("flutter")) {
      return "bg-pink-900/50 hover:bg-pink-800/50 text-pink-300 border border-pink-500/30"
    } else if (tag_lower.includes("ci/cd") || tag_lower.includes("microservices")) {
      return "bg-orange-900/50 hover:bg-orange-800/50 text-orange-300 border border-orange-500/30"
    } else {
      return "bg-gray-900/50 hover:bg-gray-800/50 text-gray-300 border border-gray-500/30"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden border-0 bg-transparent h-full">
        <div className="relative overflow-hidden aspect-video rounded-t-xl">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm transition-opacity duration-300 ${
              isHovered ? "opacity-70" : "opacity-30"
            }`}
          />
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <CardContent className="relative p-6 backdrop-blur-sm bg-black/30 border border-blue-500/20 rounded-b-xl shadow-lg shadow-blue-500/5">
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <Badge key={i} className={getBadgeColor(tag)}>
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-3">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="bg-transparent border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200 hover:border-purple-400/60 shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_0_12px_rgba(168,85,247,0.18)]"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-none"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
