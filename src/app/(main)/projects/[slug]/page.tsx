import { notFound } from "next/navigation"

import SidebarLayout from "@/components/SidebarLayout"

import { KeystaticContentNotFoundError } from "@/lib/exceptions"
import reader from "@/lib/keystatic"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const projects = await reader.collections.projects.list()

  return projects.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params

  const project = await reader.collections.projects.read(slug)
  const config = await reader.singletons.config.read()

  if (!config) throw new KeystaticContentNotFoundError("Site Settings")
  if (!project) notFound()

  const { title, description, image } = project
  const { url } = config

  return {
    title: `${title} | `,
    description,
    openGraph: {
      url: `${url}/projects/${slug}`,
      images: [{ url: image }],
    },
    alternates: {
      canonical: `${url}/projects/${slug}`,
    },
  }
}

const Project = async ({ params }: Props): Promise<JSX.Element> => {
  const { slug } = params

  const project = await reader.collections.projects.read(slug, {
    resolveLinkedFiles: true,
  })
  const projects = await reader.collections.projects.all()

  if (!project) {
    notFound()
  }
  if (!projects) {
    throw new KeystaticContentNotFoundError(`Projects Collection`)
  }

  const { title, image, imageAlt, content } = project

  const remainingProjects = projects.filter((project) => project.slug !== slug)

  const sidebarProjects = remainingProjects
    .map((project) => ({
      slug: `/projects/${project.slug}`,
      title: project.entry.title,
      description: project.entry.description,
    }))
    .slice(0, 2)

  const sidebar = [
    {
      title: "Check out other Projects:",
      entries: sidebarProjects,
    },
  ]

  return (
    <SidebarLayout
      title={title}
      image={image}
      imageAlt={imageAlt}
      document={content}
      bgClr="bg-dark"
      sidebar={sidebar}
    />
  )
}

export default Project
