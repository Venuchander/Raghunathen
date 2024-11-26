'use client'

import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

const papers = [
  {
    title: 'Optimizing React Performance: A Comprehensive Study',
    description: 'An in-depth analysis of various techniques to improve React application performance',
    publication: 'Journal of Web Engineering',
    year: 2023,
    link: 'https://example.com/react-performance-paper'
  },
  {
    title: 'Machine Learning in Frontend Development: Current Trends and Future Prospects',
    description: 'Exploring the integration of machine learning techniques in modern frontend development',
    publication: 'International Conference on Web Technologies',
    year: 2022,
    link: 'https://example.com/ml-frontend-paper'
  },
  {
    title: 'Serverless Architectures: A New Paradigm in Backend Development',
    description: 'Analyzing the impact and potential of serverless architectures in modern web development',
    publication: 'Cloud Computing Journal',
    year: 2021,
    link: 'https://example.com/serverless-paper'
  }
]

export default function PapersGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {papers.map((paper, index) => (
        <motion.div
          key={paper.title}
          className="glass-card rounded-xl p-6 project-card-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex items-start mb-4">
            <FileText className="w-6 h-6 mr-2 flex-shrink-0 text-purple-300" />
            <h3 className="text-xl font-semibold">{paper.title}</h3>
          </div>
          <p className="text-gray-400 mb-4">{paper.description}</p>
          <p className="text-sm text-gray-500 mb-2">{paper.publication}, {paper.year}</p>
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Read Paper</span>
          </a>
        </motion.div>
      ))}
    </div>
  )
}

