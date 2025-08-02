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
  }
  index: number
  isLast: boolean
}

const TimelineItem = ({ experience, index, isLast }: TimelineItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Determine if this is an education or work experience
const isEducation = experience.company.includes("University") || experience.company.includes("School")

// Assign different gradient colors based on type
const gradientFrom = isEducation ? "green-500" : "green-500"
const gradientTo = isEducation ? "blue-500" : "purple-500"
const borderColor = isEducation ? "blue-500/20" : "red-500/20"
const hoverBorderColor = isEducation ? "blue-400/40" : "pink-400/40"
const textGradientFrom = isEducation ? "blue-400" : "red-400"
const textGradientTo = isEducation ? "cyan-400" : "fuchsia-400"

  // Get keywords to highlight
  const getKeywords = () => {
    const description = experience.description.toLowerCase()
    const keywords = []

    if (description.includes(".net")) keywords.push(".NET")
    if (description.includes("angular")) keywords.push("Angular")
    if (description.includes("sql")) keywords.push("SQL")
    if (description.includes("api")) keywords.push("API")
    if (description.includes("ci/cd")) keywords.push("CI/CD")
    if (description.includes("microservices")) keywords.push("Microservices")
    if (description.includes("python")) keywords.push("Python")
    if (description.includes("iot")) keywords.push("IoT")
    if (description.includes("digital marketing")) keywords.push("Digital Marketing")
    if (description.includes("seo")) keywords.push("SEO")

    return keywords
  }

  const keywords = getKeywords()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-${gradientFrom} to-${gradientTo}`} />
      )}

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full bg-black border-2 border-${gradientFrom} z-10`}
      />

      {/* Timeline content */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Card
          className={`backdrop-blur-sm bg-black/30 border border-${borderColor} shadow-lg shadow-${gradientFrom}/5 transition-all duration-300 ${
            isHovered ? `border-${hoverBorderColor}` : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3
                  className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-${textGradientFrom} to-${textGradientTo}`}
                >
                  {experience.title}
                </h3>
                <p className="text-gray-400">{experience.company}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm bg-${gradientFrom}/30 text-${gradientFrom}-400 border border-${gradientFrom}/30`}
                >
                  {experience.period}
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-3">{experience.description}</p>

            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {keywords.map((keyword, i) => (
                  <Badge
                    key={i}
                    className={`bg-${gradientFrom}/20 text-${gradientFrom}-300 border border-${gradientFrom}/30`}
                  >
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
