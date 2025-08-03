"use client"

import type React from "react"

import type { ReactElement } from "react"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Code,
  Database,
  Server,
  Globe,
  Layers,
  Monitor,
  ExternalLink,
  Mail,
  Linkedin,
  Sun,
  Moon,
  Smartphone,
  GitBranch,
  Brain,
  MapPin,
  Phone,
  FileText,
  Cloud,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMobile } from "@/hooks/use-mobile"
import ParticleBackground from "@/components/particle-background"
import ProjectCard from "@/components/project-card"
import SkillOrb from "@/components/skill-orb"
import TimelineItemComponent from "@/components/timeline-item"
import MatrixBackground from "@/components/matrix-background"

// CPU Loading Component
const CPULoadingScreen = () => {
  const quotes = [
  "Be so good they can’t ignore you.",
  "You didn’t come this far to only come this far.",
  "Prove yourself to yourself, not others.",
  "Discipline is the loudest form of self-respect.",
  "Lions don’t lose sleep over the opinions of sheep.",
  "Obsessed is a word the lazy use for the dedicated.",
  "The pain you feel today builds the strength you need tomorrow.",
  "Do it broke. Do it scared. Do it anyway.",
  "Work until your idols become your rivals.",
  "You are one decision away from a completely different life.",
  "Fall seven times, rise eight.",
  "Speed is a byproduct of clarity.",
  "Comfort is the enemy of greatness.",
  "You either suffer the pain of discipline or the pain of regret.",
  "Let them sleep while you grind.",
  "Dreams don’t work unless you do.",
  "Build silently. Let your success make the noise.",
  "No plan B. Burn the boats.",
  "Victory demands relentless audacity.",
  "No permission needed to dominate.",
  "Fueled by scars, forging ahead.",
  "Failure kneels before persistence.",
  "Comfort kills kings.",
  "Excellence demands unyielding grit.",
  "No apology for greatness.",
  "Limits? Not in my blood.",
  "Fear bows to me.",
  "Rise defiant from every fall.",
  "No mercy for self-doubt.",
  "Devour challenges, spit out excuses.",
  "Giving up doesn’t live here.",
  "Forward is the only gear.",
  "Unbreakable will, unstoppable force.",
  "Hunger is my compass.",
  "No chains can hold ambition.",
  "Never dilute your fire."
]


  const [currentQuote, setCurrentQuote] = useState("")

  useEffect(() => {
    // Select a random quote when the component mounts
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Duration of the fade-out
    >
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Quote in the middle */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-xl md:text-3xl font-medium text-white max-w-3xl mx-auto leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300">
            {currentQuote}
          </span>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function Home(): ReactElement {
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Simulate loading - significantly reduced duration
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000) // Set to 2 seconds

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Enhanced smooth scroll function
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = ref.current.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const projects = [
    {
      title: "Healthcare Management System",
      description:
        "A comprehensive US-based healthcare application built with .NET, Angular, and SQL, featuring microservices architecture and CI/CD pipelines.",
      image: "/images/healthcareTech.webp",
      tags: [".NET Core", "Angular", "SQL Server", "Azure", "CI/CD", "Microservices"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Hinglish Text-to-Speech",
      description:
        "Python-based application that converts Hinglish text (Hindi written in English) to speech, utilizing natural language processing techniques.",
      image: "/images/HinglishTTS.png",
      tags: ["Python", "NLP", "Speech Synthesis", "Machine Learning"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "IoT Smart Home System",
      description:
        "IoT-based smart home automation system using Arduino and cloud connectivity for remote monitoring and control.",
      image: "/images/IoT.png",
      tags: ["IoT", "Arduino", "Cloud", "Sensors", "Mobile App"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  const skills = [
    { name: "AI Prompting", level: 90, icon: <Brain className="h-6 w-6" /> },
    { name: "ASP.NET", level: 90, icon: <Server className="h-6 w-6" /> },
    { name: ".NET Core", level: 85, icon: <Code className="h-6 w-6" /> },
    { name: "Angular", level: 85, icon: <Layers className="h-6 w-6" /> },
    { name: "TypeScript", level: 80, icon: <Code className="h-6 w-6" /> },
    { name: "SQL", level: 85, icon: <Database className="h-6 w-6" /> },
    { name: "IoT", level: 80, icon: <Monitor className="h-6 w-6" /> },
    { name: "Python", level: 75, icon: <Code className="h-6 w-6" /> },
    { name: "MS Office", level: 75, icon: <FileText className="h-6 w-6" /> },
    { name: "DevOps", level: 75, icon: <GitBranch className="h-6 w-6" /> },
    { name: "Azure", level: 70, icon: <Globe className="h-6 w-6" /> },
    { name: "GenAI", level: 70, icon: <Brain className="h-6 w-6" /> },
    { name: "Flutter", level: 65, icon: <Smartphone className="h-6 w-6" /> },
    { name: "AWS", level: 60, icon: <Cloud className="h-6 w-6" /> },
    { name: "React", level: 55, icon: <Layers className="h-6 w-6" /> },
    { name: "Microservices", level: 80, icon: <Layers className="h-6 w-6" /> },
  ]

  const experiences = [
    {
      title: "Associate Software Engineer I",
      company: "Carelon Global Solutions",
      period: "July 2022 - Present",
      description:
        "Playing a key role in developing and enhancing a US-based healthcare application using .NET with OOP principles and SQL as the database. Designing and implementing a dynamic front end with Angular, ensuring an intuitive user experience. Successfully developing, testing, and deploying APIs through CI/CD pipelines for seamless integration, while leveraging .NET microservices to enhance scalability and optimize performance.",
      keywords: [".NET", "Angular", "SQL", "Azure", "Microservices"],
    },
    {
      title: "Digital Marketing Head",
      company: "Rhythmicity, Delhi",
      period: "Nov 2021 - Jan 2022",
      description:
        "Provided weekly updates on digital marketing campaigns to clients, discussing strategic initiatives and SEO methods for improvement. Created social media content with consistent content and tone, enhancing brand visibility and engagement.",
      keywords: ["Marketing", "SEO", "Social Media"],
    },
    {
      title: "Bachelor of Technology",
      company: "Sharda University, Greater Noida",
      period: "Aug 2018 - July 2022",
      description:
        "Specialized in Computer Science with a focus on IoT technologies. Developed a Python-based application for 'Hinglish text to speech' conversion. Achieved a CGPA of 7.6 while balancing academic excellence with practical project work.",
      keywords: ["IoT", "Python", "Machine Learning"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden smooth-scroll">
      <AnimatePresence>{!isLoaded && <CPULoadingScreen />}</AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-purple-900/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="text-xl font-bold"
          >
            <button
              onClick={() => window.location.reload()}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:from-purple-400 hover:via-blue-400 hover:to-green-400 transition-all duration-300"
            >
              KAP
            </button>
          </motion.div>

          {!isMobile && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="hidden md:flex space-x-6"
            >
              <button
                onClick={() => scrollTo(aboutRef)}
                className="text-sm hover:text-purple-400 transition-colors relative group"
              >
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollTo(projectsRef)}
                className="text-sm hover:text-blue-400 transition-colors relative group"
              >
                PROJECTS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollTo(skillsRef)}
                className="text-sm hover:text-cyan-400 transition-colors relative group"
              >
                SKILLS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollTo(experienceRef)}
                className="text-sm hover:text-green-400 transition-colors relative group"
              >
                EXPERIENCE
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollTo(contactRef)}
                className="text-sm hover:text-pink-400 transition-colors relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.nav>
          )}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="flex items-center space-x-4"
          >
            {
              
            }

            <Button
              onClick={() => scrollTo(contactRef)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none"
              size="sm"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <ParticleBackground />

          <div
            className="absolute inset-0 z-10"
            style={{
              background: `radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.9) 100%)`,
            }}
          />

          <div className="container mx-auto px-4 z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="block">KARTIK A.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
                  PATADIA
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  Full Stack Developer
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => scrollTo(projectsRef)}
                    className="relative group overflow-hidden bg-transparent border border-purple-500 text-white hover:text-white hover:border-purple-400 transition-colors"
                  >
                    <span className="relative z-10">View Projects</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>

                  <Button
                    onClick={() => scrollTo(contactRef)}
                    variant="outline"
                    className="text-blue-400 border-blue-500 hover:text-blue-300 hover:border-blue-400 transition-colors"
                  >
                    Contact Me
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  About Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/10">
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm" /> */}
                    <img
                      src="images/Me_CowBoy.jpg"
                      alt="Developer Portrait"
                      className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-30 blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-30 blur-2xl" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="backdrop-blur-sm bg-black/30 p-6 md:p-8 rounded-2xl border border-purple-500/20 shadow-lg shadow-purple-500/5">
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Associate Software Engineer & IoT Specialist
                  </h3>

                  <p className="text-gray-300 mb-6">
                    An independent and self-motivated professional with strong programming, algorithms, and
                    problem-solving skills. I specialize in building robust, scalable applications using .NET and
                    Angular, with a focus on healthcare solutions and IoT technologies.
                  </p>

                  <p className="text-gray-300 mb-6">
                    With a passion for clean code and innovative solutions, I create seamless experiences that bridge
                    the gap between complex backend systems and intuitive user interfaces. My expertise spans from
                    microservices architecture to CI/CD pipelines and cloud deployment.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-900/50 hover:bg-purple-800/50 text-purple-300 border border-purple-500/30">
                      .NET Core
                    </Badge>
                    <Badge className="bg-blue-900/50 hover:bg-blue-800/50 text-blue-300 border border-blue-500/30">
                      Angular
                    </Badge>
                    <Badge className="bg-cyan-900/50 hover:bg-cyan-800/50 text-cyan-300 border border-cyan-500/30">
                      Azure
                    </Badge>
                    <Badge className="bg-green-900/50 hover:bg-green-800/50 text-green-300 border border-green-500/30">
                      IoT
                    </Badge>
                    <Badge className="bg-pink-900/50 hover:bg-pink-800/50 text-pink-300 border border-pink-500/30">
                      CI/CD
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent" />

          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  Featured Projects
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mt-12"
            >
              {/* <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-950/30 hover:text-blue-300 bg-transparent"
              >
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button> */}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-green-900/10 to-transparent" />

          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
                  Technical Skills
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full" />
            </motion.div>

            <Tabs defaultValue="visual" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12 bg-black/30 backdrop-blur-sm border border-cyan-500/20">
                <TabsTrigger
                  value="visual"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-950/50 data-[state=active]:to-green-950/50 data-[state=active]:text-white"
                >
                  Visual
                </TabsTrigger>
                <TabsTrigger
                  value="detailed"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-950/50 data-[state=active]:to-green-950/50 data-[state=active]:text-white"
                >
                  Detailed
                </TabsTrigger>
              </TabsList>

              <TabsContent value="visual" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {skills.map((skill, index) => (
                    <SkillOrb key={index} skill={skill} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="detailed" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
                        <div className="flex items-center mb-4">
                          <div className="mr-3 p-2 rounded-lg bg-gradient-to-br from-cyan-900/50 to-green-900/50 text-white">
                            {skill.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{skill.name}</h3>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Proficiency</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2 bg-gray-800">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-green-500 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            />
                          </Progress>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyan-900/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-green-900/10 to-transparent" />

          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Achievements & Certifications
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-500/5 h-full">
                  <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Certifications
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                      <div>
                        <p className="font-medium text-white">ORACLE Database Foundation</p>
                        <p className="text-gray-400 text-sm">Comprehensive database management and design principles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                      <div>
                        <p className="font-medium text-white">Database Programming with SQL</p>
                        <p className="text-gray-400 text-sm">
                          Advanced SQL programming and database optimization techniques
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-500/5 h-full">
                  <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Awards & Recognition
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
                      <div>
                        <p className="font-medium text-white">1st Rank in Inter-college Coding Competition</p>
                        <p className="text-gray-400 text-sm">
                          Recognized for exceptional problem-solving skills and algorithm optimization
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
                      <div>
                        <p className="font-medium text-white">Additional Expertise</p>
                        <p className="text-gray-400 text-sm">
                          Project Management, Structural Analysis, Decision Making, IoT Development
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
                      <div>
                        <p className="font-medium text-white">Languages</p>
                        <p className="text-gray-400 text-sm">English (Professional), Hindi (Native)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-green-900/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-pink-900/10 to-transparent" />

          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-pink-500">
                  Work Experience
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {experiences.map((experience, index) => (
                <TimelineItemComponent
                  key={index}
                  experience={experience}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-pink-900/10 to-transparent" />

          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Get In Touch
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="backdrop-blur-sm bg-black/30 p-6 md:p-8 rounded-2xl border border-pink-500/20 shadow-lg shadow-pink-500/5 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-lg bg-gradient-to-br from-pink-900/50 to-purple-900/50 text-white">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                        <a
                          href="mailto:kartikpatadia21@gmail.com"
                          className="text-white hover:text-pink-400 transition-colors"
                        >
                          kartikpatadia21@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-lg bg-gradient-to-br from-pink-900/50 to-purple-900/50 text-white">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400 mb-1">LinkedIn</h4>
                        <a
                          href="https://www.linkedin.com/in/kartikpatadia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-pink-400 transition-colors"
                        >
                          linkedin.com/in/kartikpatadia
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-lg bg-gradient-to-br from-pink-900/50 to-purple-900/50 text-white">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                        <span className="text-white">Delhi-NCR, India</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-lg bg-gradient-to-br from-pink-900/50 to-purple-900/50 text-white">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                        <span className="text-white">+91 9560970597</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="backdrop-blur-sm bg-black/30 p-6 md:p-8 rounded-2xl border border-purple-500/20 shadow-lg shadow-purple-500/5">
                  <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    Send a Message
                  </h3>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-400">
                        Your Name
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          className="bg-black/50 border-gray-800 focus:border-purple-500 focus:ring-purple-500/20 placeholder:text-gray-600 text-white"
                        />
                        <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 opacity-0 focus-within:opacity-100">
                          <div className="absolute inset-0 rounded-md border border-purple-500 opacity-50 blur-sm"></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-400">
                        Your Email
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-black/50 border-gray-800 focus:border-purple-500 focus:ring-purple-500/20 placeholder:text-gray-600 text-white"
                        />
                        <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 opacity-0 focus-within:opacity-100">
                          <div className="absolute inset-0 rounded-md border border-purple-500 opacity-50 blur-sm"></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-gray-400">
                        Your Message
                      </label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          placeholder="Enter your message"
                          className="min-h-[120px] bg-black/50 border-gray-800 focus:border-purple-500 focus:ring-purple-500/20 placeholder:text-gray-600 text-white"
                        />
                        <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 opacity-0 focus-within:opacity-100">
                          <div className="absolute inset-0 rounded-md border border-purple-500 opacity-50 blur-sm"></div>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full relative group overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-none"
                    >
                      <span className="relative z-10">Send Message</span>
                      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative py-8 border-t border-purple-900/30 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Kartik A. Patadia. All rights reserved.</p>
          <p className="text-gray-600 text-sm mt-2">Full Stack Developer</p>
        </div>
      </footer>
    </div>
  )
}
