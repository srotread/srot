import SidebarLayout from "@/components/SidebarLayout"

import { KeystaticContentNotFoundError } from "@/lib/exceptions"
import reader from "@/lib/keystatic"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const project = await reader.collections.projects.read(slug)

  if (!project) throw new KeystaticContentNotFoundError(`Project - ${slug}`)

  const { title, description } = project

  return {
    title: `${title} | `,
    description,
  }
}

const Project = async ({ params }: Props): Promise<JSX.Element> => {
  const { slug } = params

  const project = await reader.collections.projects.read(slug, {
    resolveLinkedFiles: true,
  })
  const projects = await reader.collections.projects.all()
  const workshops = await reader.collections.workshops.all()

  if (!project) {
    throw new KeystaticContentNotFoundError(`Project - ${slug}`)
  }
  if (!projects) {
    throw new KeystaticContentNotFoundError(`Projects Collection`)
  }
  if (!workshops) {
    throw new KeystaticContentNotFoundError(`Workshops Collection`)
  }

  const { title, content } = project

  const remainingProjects = projects.filter((project) => project.slug !== slug)

  const sidebarProjects = remainingProjects
    .map((project) => ({
      slug: `/projects/${project.slug}`,
      title: project.entry.title,
      description: project.entry.description,
    }))
    .slice(0, 2)

  const sidebarWorkshops = workshops
    .map((workshop) => ({
      slug: `/workshops/${workshop.slug}`,
      title: workshop.entry.title,
      description: workshop.entry.description,
    }))
    .slice(0, 2)

  const sidebar = [
    {
      title: "Check out other Projects:",
      entries: sidebarProjects,
    },
    { title: "Check out our Workshops:", entries: sidebarWorkshops },
  ]

  return (
    <SidebarLayout
      title={title}
      document={content}
      bgClr="bg-dark"
      txtClr="text-light"
      sidebar={sidebar}
    />
  )
}

export default Project
