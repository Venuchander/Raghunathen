'use client'

import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Minor Project 1', description: 'A brief description of Minor Project 1' },
  { id: 2, title: 'Minor Project 2', description: 'A brief description of Minor Project 2' },
  { id: 3, title: 'Minor Project 3', description: 'A brief description of Minor Project 3' },
  { id: 4, title: 'Minor Project 4', description: 'A brief description of Minor Project 4' },
  { id: 5, title: 'Minor Project 5', description: 'A brief description of Minor Project 5' },
  { id: 6, title: 'Minor Project 6', description: 'A brief description of Minor Project 6' },
]

export default function MinorProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Minor Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <a href="#" className="mt-4 inline-block text-sm text-blue-500 hover:text-blue-600 transition-colors duration-300">
                View Details
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

