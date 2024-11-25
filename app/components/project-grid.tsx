'use client'

import { motion } from 'framer-motion'

const minorProjects = [
  { 
    id: 1, 
    title: 'Task Manager', 
    description: 'A simple task management application',
    techStack: ['React', 'Node.js', 'MongoDB'],
    goals: 'Create an intuitive interface for managing daily tasks',
    achievements: 'Implemented drag-and-drop functionality for task prioritization'
  },
  { 
    id: 2, 
    title: 'Weather Widget', 
    description: 'A widget displaying current weather information',
    techStack: ['Vue.js', 'OpenWeatherMap API'],
    goals: 'Provide real-time weather updates with a clean UI',
    achievements: 'Integrated geolocation for automatic local weather display'
  },
  { 
    id: 3, 
    title: 'Markdown Editor', 
    description: 'A basic markdown editor with preview functionality',
    techStack: ['React', 'Marked.js'],
    goals: 'Build a user-friendly markdown editor for content creators',
    achievements: 'Added support for custom markdown extensions'
  },
  { 
    id: 4, 
    title: 'Pomodoro Timer', 
    description: 'A timer application based on the Pomodoro Technique',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    goals: 'Help users improve productivity with timed work sessions',
    achievements: 'Implemented customizable work/break intervals and desktop notifications'
  },
  { 
    id: 5, 
    title: 'Currency Converter', 
    description: 'A tool for converting between different currencies',
    techStack: ['React', 'Exchange Rates API'],
    goals: 'Provide accurate and up-to-date currency conversion',
    achievements: 'Integrated historical exchange rate charts for data visualization'
  },
  { 
    id: 6, 
    title: 'Recipe Finder', 
    description: 'An application to find recipes based on ingredients',
    techStack: ['Angular', 'Spoonacular API'],
    goals: 'Help users discover new recipes with available ingredients',
    achievements: 'Implemented advanced filtering options for dietary restrictions'
  },
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {minorProjects.map((project, index) => (
        <motion.div
          key={project.id}
          className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="mb-4">
            <h4 className="font-semibold mb-1">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-white/20 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-1">Goals:</h4>
            <p className="text-sm text-gray-300">{project.goals}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Key Achievements:</h4>
            <p className="text-sm text-gray-300">{project.achievements}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

