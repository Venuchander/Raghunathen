'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Youtube, href: '#' },
]

export default function MobileSocialIcons() {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 flex justify-center space-x-6 py-4 bg-black/50 backdrop-blur-sm md:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={index}
            href={link.href}
            className="text-white/50 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        )
      })}
    </motion.div>
  )
}

