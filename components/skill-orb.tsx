"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface SkillProps {
  skill: {
    name: string
    level: number
    icon: React.ReactNode
  }
  index: number
}

const SkillOrb = ({ skill, index }: SkillProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Calculate colors based on skill category
  const getGradient = (skillName: string) => {
    const programmingSkills = [".NET Core", "ASP.NET", "Angular", "TypeScript", "Python", "SQL"]
    const cloudSkills = ["Azure", "DevOps", "Microservices"]
    const mobileSkills = ["Flutter", "IoT"]
    const aiSkills = ["GenAI"]

    if (programmingSkills.includes(skillName)) {
      return { from: "#06b6d4", to: "#10b981" } // cyan to green
    } else if (cloudSkills.includes(skillName)) {
      return { from: "#8b5cf6", to: "#3b82f6" } // violet to blue
    } else if (mobileSkills.includes(skillName)) {
      return { from: "#ec4899", to: "#8b5cf6" } // pink to violet
    } else if (aiSkills.includes(skillName)) {
      return { from: "#f59e0b", to: "#ec4899" } // amber to pink
    } else {
      return { from: "#06b6d4", to: "#10b981" } // default
    }
  }

  const gradient = getGradient(skill.name)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative mb-4"
      >
        <div className="relative">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(8, 145, 178, 0.2)" strokeWidth="2" />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke={`url(#gradient-${skill.name.replace(/\s+/g, "-").replace(/\./g, "-").toLowerCase()})`}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${(skill.level / 100) * 339.292} 339.292`}
              transform="rotate(-90 60 60)"
            />
            <defs>
              <linearGradient
                id={`gradient-${skill.name.replace(/\s+/g, "-").replace(/\./g, "-").toLowerCase()}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={gradient.from} />
                <stop offset="100%" stopColor={gradient.to} />
              </linearGradient>
            </defs>
          </svg>

          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-900/50 to-green-900/50 backdrop-blur-sm border border-cyan-500/30">
              <div className="text-white">{skill.icon}</div>
            </div>
          </div>

          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-2 -right-2 bg-cyan-500 text-black text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center"
            >
              {skill.level}%
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.p
        className="text-center font-medium"
        animate={{ color: isHovered ? "#22d3ee" : "#ffffff" }}
        transition={{ duration: 0.3 }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  )
}

export default SkillOrb
