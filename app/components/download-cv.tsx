'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function DownloadCV() {
  return (
    <motion.a
      href="/resume.pdf" // Ensure to add your resume PDF to the public folder
      download
      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Download CV</span>
      <Download className="w-5 h-5" />
    </motion.a>
  )
}

