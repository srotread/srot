import { notFound } from "next/navigation"

import SidebarLayout from "@/components/SidebarLayout"

import { KeystaticContentNotFoundError } from "@/lib/exceptions"
import reader from "@/lib/keystatic"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const centre = await reader.collections.centres.read(slug)

  if (!centre) throw new KeystaticContentNotFoundError(`Centre - ${slug}`)

  const { name, description } = centre

  return {
    title: `${name} | `,
    description,
  }
}

const Centre = async ({ params }: Props): Promise<JSX.Element> => {
  const { slug } = params

  const centre = await reader.collections.centres.read(slug, {
    resolveLinkedFiles: true,
  })
  const centres = await reader.collections.centres.all()

  if (!centre) notFound()
  if (!centres) throw new KeystaticContentNotFoundError("Centres Collection")

  const { name, content } = centre

  const remainingCentres = centres.filter((centre) => centre.slug !== slug)

  const sidebarCentres = remainingCentres
    .map((centre) => ({
      slug: `/centres/${centre.slug}`,
      title: centre.entry.name,
      description: centre.entry.description,
    }))
    .slice(0, 2)

  const sidebar = [
    {
      title: "Check out other Centres",
      entries: sidebarCentres,
    },
  ]

  return (
    <SidebarLayout
      title={name}
      document={content}
      bgClr="bg-light"
      txtClr="text-dark"
      sidebar={sidebar}
    />
  )
}

export default Centre
