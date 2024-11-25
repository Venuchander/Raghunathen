'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'Project 1', description: 'A brief description of Project 1', image: '/placeholder.svg?height=400&width=600' },
  { id: 2, title: 'Project 2', description: 'A brief description of Project 2', image: '/placeholder.svg?height=400&width=600' },
  { id: 3, title: 'Project 3', description: 'A brief description of Project 3', image: '/placeholder.svg?height=400&width=600' },
]

export default function MajorProjects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Major Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a href="#" className="mt-4 inline-block text-blue-500 hover:text-blue-600 transition-colors duration-300">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

