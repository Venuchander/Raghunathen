'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Globe } from 'lucide-react'

const projectsData = {
  'stock-info': {
    title: 'Stock Information',
    overview: 'A comprehensive stock market data visualization platform providing real-time information and advanced analytics.',
    description: 'This platform offers users detailed insights into stock market trends, with features including real-time price tracking, historical data analysis, and predictive analytics.',
    technologies: ['React', 'Node.js', 'D3.js', 'WebSocket', 'MongoDB'],
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800'
    ],
    challenges: [
      'Implementing real-time data synchronization',
      'Optimizing performance for large datasets',
      'Creating intuitive data visualizations'
    ],
    learnings: [
      'Advanced WebSocket implementation',
      'Data visualization best practices',
      'Performance optimization techniques'
    ],
    links: {
      github: 'https://github.com/username/stock-info',
      live: 'https://stock-info.demo'
    }
  },
  'acoustic-music': {
    title: 'Acoustic Music',
    overview: 'A Spotify-powered music streaming application focused on acoustic and live performances.',
    description: 'This application leverages the Spotify API to curate and stream acoustic versions of popular songs, live performances, and undiscovered acoustic talent.',
    technologies: ['Vue.js', 'Express', 'Spotify API', 'MongoDB', 'WebAudio API'],
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800'
    ],
    challenges: [
      'Integrating seamlessly with Spotify\'s OAuth flow',
      'Implementing custom audio visualizations',
      'Optimizing streaming performance'
    ],
    learnings: [
      'OAuth 2.0 implementation strategies',
'Advanced Vue.js state management',
      'Audio processing in the browser'
    ],
    links: {
      github: 'https://github.com/username/acoustic-music',
      live: 'https://acoustic-music.demo'
    }
  },
  'eco-ville': {
    title: 'Eco Ville',
    overview: 'An environmental impact tracking platform that helps communities monitor and reduce their carbon footprint.',
    description: 'Eco Ville uses machine learning algorithms to analyze user-inputted data and satellite imagery to provide personalized recommendations for reducing environmental impact.',
    technologies: ['React', 'Python', 'TensorFlow', 'Google Earth Engine API', 'PostgreSQL'],
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800'
    ],
    challenges: [
      'Processing and analyzing large-scale satellite imagery',
      'Developing accurate machine learning models for environmental impact prediction',
      'Creating an intuitive user interface for complex data visualization'
    ],
    learnings: [
      'Integration of machine learning models with web applications',
      'Large-scale data processing techniques',
      'Geospatial data visualization'
    ],
    links: {
      github: 'https://github.com/username/eco-ville',
      live: 'https://eco-ville.demo'
    }
  }
}

interface ProjectDetailsProps {
  projectId: string
}

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h1>

        <motion.div
          className="glass-card rounded-xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300">{project.overview}</p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-white/10 px-4 py-2 rounded-full text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Challenges</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Key Learnings</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View Code</span>
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

