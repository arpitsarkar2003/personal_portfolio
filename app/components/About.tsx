'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Github, Instagram, Paperclip, Code, Palette, BarChart2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <div className="min-h-screen dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <header className="text-center mb-16">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            About Me
          </motion.h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image 
              src="/hero2.jpg" 
              alt="Arpit Sarkar" 
              width={400} 
              height={400} 
              className="rounded-lg shadow-xl mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Arpit Sarkar</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              As a Full Stack Web Developer, I excel in creating stunning, responsive websites using HTML, CSS (especially Tailwind CSS), and JavaScript/React.js for dynamic interfaces. I also handle backend tasks with MongoDB/Express and excel in API integration. My toolkit includes advanced tools like Firebase, Redux, and Material UI/Icons for high-performance web apps.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Paperclip className="w-4 h-4" />
                <a href="/Resume.pdf" download>Resume</a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/arpitsarkar07/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/arpitsarkar2003" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a href="https://www.instagram.com/arpitsarkar16/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SkillCard 
            icon={<Palette className="w-8 h-8" />}
            title="Designer"
            skills={["HTML", "CSS", "Tailwind CSS", "Bootstrap", "UI/UX Design"]}
          />
          <SkillCard 
            icon={<Code className="w-8 h-8" />}
            title="Engineering"
            skills={["JavaScript", "React.js", "Next.js", "Node.js", "Express", "MongoDB"]}
          />
          <SkillCard 
            icon={<BarChart2 className="w-8 h-8" />}
            title="Project Management"
            skills={["MongoCompass", "GitHub", "Version Control (Git)"]}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
// @ts-ignore
const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
        {/* @ts-ignore */}
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-700 dark:text-gray-300">{skill}</li>
      ))}
    </ul>
  </div>
)

export default About

