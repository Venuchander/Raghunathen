'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeContent() {
  return (
    <div className="container mx-auto px-4 py-20 text-center max-w-4xl">
      <motion.h1
        className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Raghunathen
      </motion.h1>
      
      <motion.h2
        className="text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Full Stack Developer & UI/UX Enthusiast
      </motion.h2>

      <motion.p
        className="text-lg mb-12 text-gray-400 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        With over 5 years of experience in crafting robust web applications, I bring a 
        passion for clean code and innovative solutions to every project. My expertise 
        spans the full stack, from responsive front-end designs to scalable back-end 
        architectures. I thrive on challenges and constantly push the boundaries of 
        what's possible in web development.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Frontend Mastery</h3>
          <p className="text-gray-400">
            Crafting intuitive and responsive user interfaces using React, Vue, and 
            modern CSS frameworks.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Backend Mastery</h3>
          <p className="text-gray-400">
            Building robust and scalable server-side solutions with Node.js, Python, 
            and cloud technologies.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">UI/UX Innovation</h3>
          <p className="text-gray-400">
            Creating engaging and user-centered design experiences that blend 
            aesthetics with functionality.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href="/major-projects"
          className="glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
        >
          Major Projects
        </Link>
        <Link
          href="/minor-projects"
          className="glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
        >
          Minor Projects
        </Link>
        <Link
          href="/papers"
          className="glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
        >
          Papers
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="/resume.pdf"
          download
          className="glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-colors inline-block"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  )
}

