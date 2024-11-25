import Navigation from './components/navigation'
import AboutMe from './components/about-me'
import ProjectLinks from './components/project-links'
import SocialFooter from './components/social-footer'
import BackgroundText from './components/background-text'
import DownloadCV from './components/download-cv'

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <Navigation />
      <BackgroundText text="PORTFOLIO" />
      <div className="container mx-auto px-4 py-20">
        <AboutMe />
        <div className="flex flex-col items-center space-y-6">
          <ProjectLinks />
          <DownloadCV />
        </div>
      </div>
      <SocialFooter />
    </main>
  )
}