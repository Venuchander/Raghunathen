'use client'

import { motion } from 'framer-motion'
import { Github, Globe } from 'lucide-react'

const minorProjects = [
  {
    title: 'Weather App',
    description: 'A simple weather application using OpenWeatherMap API',
    technologies: ['React', 'OpenWeatherMap API'],
    github: 'https://github.com/username/weather-app',
    live: 'https://weather-app.demo'
  },
  {
    title: 'Todo List',
    description: 'A feature-rich todo list application with local storage',
    technologies: ['Vue.js', 'LocalStorage'],
    github: 'https://github.com/username/todo-list',
    live: 'https://todo-list.demo'
  },
  {
    title: 'Markdown Editor',
    description: 'Real-time markdown editor with preview functionality',
    technologies: ['React', 'Marked.js'],
    github: 'https://github.com/username/markdown-editor',
    live: 'https://markdown-editor.demo'
  },
  {
    title: 'Pomodoro Timer',
    description: 'A customizable Pomodoro timer for productivity',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/username/pomodoro-timer',
    live: 'https://pomodoro-timer.demo'
  }
]

export default function MinorProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {minorProjects.map((project, index) => (
        <motion.div
          key={project.title}
          className="glass-card rounded-xl p-4 sm:p-6 project-card-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-white/10 px-2 py-1 rounded-full text-xs sm:text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors text-sm sm:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors text-sm sm:text-base"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Demo</span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

