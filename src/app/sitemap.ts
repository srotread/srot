import { MetadataRoute } from "next"

import { KeystaticContentNotFoundError } from '@/lib/exceptions'
import reader from "@/lib/keystatic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await reader.singletons.config.read()

  if (!settings) throw new KeystaticContentNotFoundError("Site Settings")

  const { url, pages } = settings
  
  const pageUrls = pages.map((page) => ({
    url: `${url}${page.path}`,
    lastModified: new Date(),
  }))
  const projectsUrls = (await reader.collections.projects.list()).map(
    (path) => ({
      url: `${url}/projects/${path}`,
      lastModified: new Date(),
    })
  )
  const centresUrls = (await reader.collections.centres.list()).map((path) => ({
    url: `${url}/centres/${path}`,
    lastModified: new Date(),
  }))

  return [
    ...pageUrls,
    ...projectsUrls,
    ...centresUrls,
    { url: `${url}/support` },
  ]
}
