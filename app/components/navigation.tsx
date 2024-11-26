'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">
            Raghunathen
          </Link>
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`flex flex-col md:flex-row md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 bg-black/50 md:bg-transparent p-4 md:p-0`}>
            <li>
              <Link href="/" className="block py-2 text-white hover:text-purple-300 transition-colors" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/major-projects" className="block py-2 text-white hover:text-purple-300 transition-colors" onClick={toggleMenu}>
                Major Projects
              </Link>
            </li>
            <li>
              <Link href="/minor-projects" className="block py-2 text-white hover:text-purple-300 transition-colors" onClick={toggleMenu}>
                Minor Projects
              </Link>
            </li>
            <li>
              <Link href="/papers" className="block py-2 text-white hover:text-purple-300 transition-colors" onClick={toggleMenu}>
                Papers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

