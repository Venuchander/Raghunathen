import { Github, Linkedin, Twitter } from 'lucide-react'

export default function SocialFooter() {
  return (
    <footer className="bg-black/50 backdrop-blur-md py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors" title="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors" title="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors" title="Twitter">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

