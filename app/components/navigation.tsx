import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/major-projects" className="text-white hover:text-purple-300 transition-colors">
              Major Projects
            </Link>
          </li>
          <li>
            <Link href="/minor-projects" className="text-white hover:text-purple-300 transition-colors">
              Minor Projects
            </Link>
          </li>
          <li>
            <Link href="/papers" className="text-white hover:text-purple-300 transition-colors">
              Papers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

