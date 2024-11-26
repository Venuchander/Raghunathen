import Navigation from './components/navigation'
import SocialFooter from './components/social-footer'
import HomeContent from './components/home-content'

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navigation />
      <HomeContent />
      <SocialFooter />
    </main>
  )
}

