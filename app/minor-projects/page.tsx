import Navigation from '../components/navigation'
import MinorProjectsGrid from '../components/minor-projects-grid'

export default function MinorProjects() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">
          Minor Projects
        </h1>
        <MinorProjectsGrid />
      </div>
    </main>
  )
}

