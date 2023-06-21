import { MetadataRoute } from "next"
import * as config from "@/lib/config"

export default function sitemap(): MetadataRoute.Sitemap {
  const { pages } = config
  const pageUrls = pages.map((page) => ({
    url: `${config.url}${page.path}`,
    lastModified: new Date(),
  }))

  return [...pageUrls, { url: `${config.url}/support` }]
}
