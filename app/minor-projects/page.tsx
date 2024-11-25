'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/navigation'
import BackgroundText from '../components/background-text'
import SocialFooter from '../components/social-footer'
import ProjectGrid from '../components/project-grid'


export default function MinorProjects() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <Navigation />
      <BackgroundText text="MINOR" />
      <motion.div 
        className="container mx-auto px-4 pt-24 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Minor Projects
        </motion.h1>
        <ProjectGrid />
      </motion.div>
      <SocialFooter />
    </main>
  )
}

