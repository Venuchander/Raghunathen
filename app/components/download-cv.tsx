'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function DownloadCV() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.a
        href="/resume.pdf" // Path to the resume in the public folder
        download
        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Download CV</span>
        <Download className="w-5 h-5" />
      </motion.a>
    </motion.div>
  )
}
