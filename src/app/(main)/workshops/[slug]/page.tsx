import { notFound } from "next/navigation"

import SidebarLayout from "@/components/SidebarLayout"

import { KeystaticContentNotFoundError } from "@/lib/exceptions"
import reader from "@/lib/keystatic"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const workshops = await reader.collections.workshops.list()

  return workshops.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const workshop = await reader.collections.workshops.read(slug)

  if (!workshop) notFound()

  const { title, description } = workshop

  return {
    title: `${title} | `,
    description,
  }
}

const Workshop = async ({ params }: Props): Promise<JSX.Element> => {
  const { slug } = params

  const workshop = await reader.collections.workshops.read(slug, {
    resolveLinkedFiles: true,
  })
  const workshops = await reader.collections.workshops.all()
  const projects = await reader.collections.projects.all()

  if (!workshop) notFound()
  if (!workshops)
    throw new KeystaticContentNotFoundError(`Workshops Collection`)
  if (!projects) throw new KeystaticContentNotFoundError(`Projects Collection`)

  const { title, content } = workshop

  const remainingWorkshops = workshops.filter(
    (workshop) => workshop.slug !== slug
  )

  const sidebarWorkshops = remainingWorkshops
    .map((workshop) => ({
      slug: `/workshops/${workshop.slug}`,
      title: workshop.entry.title,
      description: workshop.entry.description,
    }))
    .slice(0, 2)

  const sidebarProjects = projects
    .map((project) => ({
      slug: `/projects/${project.slug}`,
      title: project.entry.title,
      description: project.entry.description,
    }))
    .slice(0, 2)

  const sidebar = [
    {
      title: "Check out other Workshops:",
      entries: sidebarWorkshops,
    },
    { title: "Check out our Projects:", entries: sidebarProjects },
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

export default Workshop
