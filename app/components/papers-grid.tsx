'use client'

import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

const papers = [
  { 
    id: 1, 
    title: 'Machine Learning in Healthcare',
    abstract: 'An exploration of how machine learning algorithms can improve patient diagnosis and treatment planning.',
    journal: 'Journal of Medical AI',
    year: '2023',
    link: '#'
  },
  { 
    id: 2, 
    title: 'Sustainable Computing',
    abstract: 'Analysis of energy-efficient algorithms and their impact on environmental sustainability.',
    journal: 'Green Computing Review',
    year: '2022',
    link: '#'
  },
  { 
    id: 3, 
    title: 'Web3 Technologies',
    abstract: 'A comprehensive study of decentralized web technologies and their potential applications.',
    journal: 'Blockchain Research Quarterly',
    year: '2023',
    link: '#'
  },
]

export default function PapersGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {papers.map((paper, index) => (
        <motion.div
          key={paper.id}
          className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex items-start justify-between mb-4">
            <FileText className="w-6 h-6 text-gray-400" />
            <span className="text-sm text-gray-400">{paper.year}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{paper.abstract}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{paper.journal}</span>
            <a 
              href={paper.link}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">PDF</span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

