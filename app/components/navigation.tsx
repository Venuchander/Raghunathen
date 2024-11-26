'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">
            <span className="sm:hidden">R</span>
            <span className="hidden sm:inline">Raghunathen</span>
          </Link>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden lg:flex space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/major-projects">Major Projects</NavLink>
            <NavLink href="/minor-projects">Minor Projects</NavLink>
            <NavLink href="/papers">Papers</NavLink>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden"
          >
            <div className="px-4 py-2 bg-black">
              <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
              <NavLink href="/major-projects" onClick={toggleMenu}>Major Projects</NavLink>
              <NavLink href="/minor-projects" onClick={toggleMenu}>Minor Projects</NavLink>
              <NavLink href="/papers" onClick={toggleMenu}>Papers</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="block py-2 text-white hover:text-purple-300 transition-colors" onClick={onClick}>
      {children}
    </Link>
  )
}

