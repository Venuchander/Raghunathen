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

export default function SocialSidebar() {
  return (
    <motion.div 
      className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-6 z-10 md:flex hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
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

