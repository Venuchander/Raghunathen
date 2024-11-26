'use client'

import { motion } from 'framer-motion'

export default function ContactButton() {
  return (
    <motion.button
      className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Me
    </motion.button>
  )
}

