'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 flex justify-between items-center p-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {pathname !== '/' && (
        <Link href="/" className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      )}
    </motion.nav>
  )
}

