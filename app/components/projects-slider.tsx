'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import ProjectCard from './project-card'

const projects = [
  {
    id: 1,
    title: 'Stock-information',
    description: 'This is a stock market information web application that will provide infographics on real-time stock market data from well-known stocks in daily, weekly, and monthly views, as well as extra stock information packed with a search for specific stock feature.',
    image: null,
  },
  {
    id: 2,
    title: 'Acoustic Music',
    description: 'This is a Spotify web app that allows you to listen to most of the songs if you have a premium membership; otherwise, you can listen to a 30-second song preview.',
    image: null,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A React-based weather dashboard using OpenWeather API and Chart.js for data visualization.',
    image: '/placeholder.svg?height=600&width=800',
  },
  {
    id: 4,
    title: 'Eco Ville - Geek Social',
    description: 'Climate change has always been a persistent and catastrophic issue, and the problem with addressing it is that there is no effective way to determine whether one\'s contribution to environmental protection is effective and We built a potential solution.',
    image: null,
  },
  {
    id: 5,
    title: 'ComebackAlumni',
    description: 'CSI Sponsored development competition winning Project and Favorite.',
    image: null,
  },
]

export default function ProjectsSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const baseVelocity = 100

  useEffect(() => {
    let lastScrollTime = 0
    const scrollThrottle = 16 // ~60fps

    const handleWheel = (e: WheelEvent) => {
      const currentTime = Date.now()
      
      if (currentTime - lastScrollTime < scrollThrottle) return
      
      if (e.shiftKey || e.deltaX !== 0) {
        e.preventDefault()
        const scrollAmount = e.deltaX !== 0 ? e.deltaX : e.deltaY
        const currentX = x.get()
        const containerWidth = containerRef.current?.scrollWidth || 0
        const viewportWidth = containerRef.current?.clientWidth || 0
        const maxScroll = -(containerWidth - viewportWidth)
        
        const newX = Math.max(Math.min(currentX - scrollAmount, 0), maxScroll)
        
        animate(x, newX, {
          type: "spring",
          stiffness: 400,
          damping: 40,
          mass: 0.5
        })
      }
      
      lastScrollTime = currentTime
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [x])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 flex items-center overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <motion.div 
        className="flex space-x-8 px-[20vw]"
        drag="x"
        dragConstraints={containerRef}
        style={{ x }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </motion.div>
    </div>
  )
}

