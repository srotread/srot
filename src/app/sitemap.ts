import { MetadataRoute } from "next"
import * as config from "@/lib/config"
import reader from "@/lib/keystatic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { pages } = config
  const pageUrls = pages.map((page) => ({
    url: `${config.url}${page.path}`,
    lastModified: new Date(),
  }))
  const projectsUrls = (await reader.collections.projects.list()).map(
    (path) => ({
      url: `${config.url}/projects/${path}`,
      lastModified: new Date(),
    })
  )
  const workshopsUrls = (await reader.collections.workshops.list()).map(
    (path) => ({
      url: `${config.url}/workshops/${path}`,
      lastModified: new Date(),
    })
  )
  const centresUrls = (await reader.collections.centres.list()).map((path) => ({
    url: `${config.url}/centres/${path}`,
    lastModified: new Date(),
  }))

  return [
    ...pageUrls,
    ...projectsUrls,
    ...workshopsUrls,
    ...centresUrls,
    { url: `${config.url}/support` },
  ]
}
