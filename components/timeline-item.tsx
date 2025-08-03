"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineItemProps {
  experience: {
    title: string
    company: string
    period: string
    description: string
    keywords: string[]
  }
  index: number
  isLast: boolean
}

const TimelineItem = ({ experience, index, isLast }: TimelineItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Determine if this is an education or work experience
  const isEducation = experience.company.includes("University") || experience.company.includes("School")

  // Get badge color based on technology - same as project cards
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
    } else if (tag_lower.includes("marketing") || tag_lower.includes("seo")) {
      return "bg-green-900/50 hover:bg-green-800/50 text-green-300 border border-green-500/30"
    } else if (tag_lower.includes("social")) {
      return "bg-blue-900/50 hover:bg-blue-800/50 text-blue-300 border border-blue-500/30"
    } else {
      return "bg-gray-900/50 hover:bg-gray-800/50 text-gray-300 border border-gray-500/30"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline line */}
      {!isLast && <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 to-pink-500" />}

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full bg-black border-2 border-green-500 z-10" />

      {/* Timeline content */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Card
          className={`backdrop-blur-sm bg-black/30 border border-green-500/20 shadow-lg shadow-green-500/5 transition-all duration-300 ${
            isHovered ? "border-green-400/40" : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  {experience.title}
                </h3>
                <p className="text-gray-400">{experience.company}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <Badge className="bg-green-900/50 hover:bg-green-800/50 text-green-300 border border-green-500/30">
                  {experience.period}
                </Badge>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{experience.description}</p>

            {experience.keywords && experience.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experience.keywords.map((keyword, i) => (
                  <Badge key={i} className={getBadgeColor(keyword)}>
                    {keyword}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default TimelineItem
