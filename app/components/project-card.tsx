'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string | null
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <motion.div 
      className="w-[400px] bg-white rounded-3xl p-8 flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-black">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
      </div>
      {image && (
        <div className="relative h-[200px] w-full mb-6 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="mt-auto">
        <button className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
          <span>Visit</span>
          <Github className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  )
}

