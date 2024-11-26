import Navigation from '../components/navigation'
import SocialFooter from '../components/social-footer'
import PapersGrid from '../components/papers-grid'

export default function Papers() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">
          Research Papers
        </h1>
        <PapersGrid />
      </div>
      <SocialFooter />
    </main>
  )
}

