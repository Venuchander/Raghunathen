'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Smile } from 'lucide-react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <motion.div
      className="fixed bottom-24 right-8 w-96 max-w-[calc(100vw-2rem)]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 shadow-xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">
            Have a question? Drop in your message <Zap className="w-5 h-5 text-yellow-400" />
          </h2>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            It won&apos;t take more than 10 seconds. Shoot your shot <Smile className="w-4 h-4" />
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@xyz.com"
              className="w-full px-4 py-2 bg-gray-700/50 rounded-md border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="I'd love a compliment from you."
              rows={4}
              className="w-full px-4 py-2 bg-gray-700/50 rounded-md border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

