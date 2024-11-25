import ProjectsSlider from '../components/projects-slider'
import Navigation from '../components/navigation'
import BackgroundText from '../components/background-text'
import SocialFooter from '../components/social-footer'

export default function MajorProjects() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <Navigation />
      <BackgroundText text="MAJOR" />
      <ProjectsSlider />
      <SocialFooter />
    </main>
  )
}

