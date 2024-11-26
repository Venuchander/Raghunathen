'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const majorProjects = [
  {
    id: 'stock-info',
    title: 'Stock Information',
    description: 'Real-time stock market data visualization platform',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'Node.js', 'D3.js']
  },
  {
    id: 'acoustic-music',
    title: 'Acoustic Music',
    description: 'Spotify-powered music streaming application',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Vue.js', 'Express', 'Spotify API']
  },
  {
    id: 'eco-ville',
    title: 'Eco Ville',
    description: 'Environmental impact tracking platform',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'Python', 'TensorFlow']
  }
]

export default function MajorProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {majorProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href={`/major-projects/${project.id}`}>
            <div className="glass-card rounded-xl overflow-hidden project-card-hover">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 px-2 py-1 rounded-full text-xs sm:text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

