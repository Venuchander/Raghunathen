import Navigation from '../components/navigation'
import MajorProjectsGrid from '../components/major-projects-grid'

export default function MajorProjects() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">
          Major Projects
        </h1>
        <MajorProjectsGrid />
      </div>
    </main>
  )
}

