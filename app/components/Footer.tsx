export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors duration-300">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors duration-300">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
