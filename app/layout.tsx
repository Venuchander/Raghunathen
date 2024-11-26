import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation'
import SocialFooter from './components/social-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raghunathen - Portfolio',
  description: 'Full Stack Developer & UI/UX Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <SocialFooter />
      </body>
    </html>
  )
}

