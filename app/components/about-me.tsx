'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <motion.section 
      className="mb-20 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Raghunathen
      </motion.h1>
      <motion.h2 
        className="text-3xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Full Stack Developer & UI/UX Enthusiast
      </motion.h2>
      <motion.p 
        className="text-xl mb-8 text-gray-400 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        With over 5 years of experience in crafting robust web applications, I bring a passion for clean code and innovative solutions to every project. My expertise spans the full stack, from responsive front-end designs to scalable back-end architectures. I thrive on challenges and constantly push the boundaries of what's possible in web development.
      </motion.p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-4">Frontend Mastery</h3>
          <p className="text-gray-400">Crafting intuitive and responsive user interfaces using React, Vue, and modern CSS frameworks.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-4">Backend Expertise</h3>
          <p className="text-gray-400">Building robust and scalable server-side solutions with Node.js, Python, and cloud technologies.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-4">UI/UX Innovation</h3>
          <p className="text-gray-400">Creating engaging and user-centered design experiences that blend aesthetics with functionality.</p>
        </div>
      </motion.div>
    </motion.section>
  )
}

