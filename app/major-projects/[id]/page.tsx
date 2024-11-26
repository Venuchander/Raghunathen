'use client'

import { useParams } from 'next/navigation'
import Navigation from '../../components/navigation'
import ProjectDetails from '../../components/project-details'

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <ProjectDetails projectId={projectId} />
      </div>
    </main>
  )
}

