'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeContent() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 text-center max-w-4xl">
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent leading-normal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Raghunathen
      </motion.h1>
      
      <motion.h2
        className="text-xl sm:text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Full Stack Developer & UI/UX Enthusiast
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg mb-12 text-gray-400 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        With over 5 years of experience in crafting robust web applications, I bring a 
        passion for clean code and innovative solutions to every project. My expertise 
        spans the full stack, from responsive front-end designs to scalable back-end 
        architectures.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SkillCard title="Frontend Mastery" description="Crafting intuitive and responsive user interfaces using React, Vue, and modern CSS frameworks." />
        <SkillCard title="Backend Expertise" description="Building robust and scalable server-side solutions with Node.js, Python, and cloud technologies." />
        <SkillCard title="UI/UX Innovation" description="Creating engaging and user-centered design experiences that blend aesthetics with functionality." />
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ProjectLink href="/major-projects" text="Major Projects" />
        <ProjectLink href="/minor-projects" text="Minor Projects" />
        <ProjectLink href="/papers" text="Papers" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="/resume.pdf"
          download
          className="glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-colors inline-block text-sm sm:text-base"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  )
}

function SkillCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{description}</p>
    </div>
  )
}

function ProjectLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
    >
      {text}
    </Link>
  )
}

