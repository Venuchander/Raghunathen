'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectLinks() {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link href="/major-projects" className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
        Major Projects
      </Link>
      <Link href="/minor-projects" className="bg-white/10 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors">
        Minor Projects
      </Link>
      <Link href="/papers" className="bg-white/10 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors">
        Papers
      </Link>
    </motion.div>
  )
}

