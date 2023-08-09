import { MetadataRoute } from "next"
import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await reader.singletons.config.read()

  if (!settings) throw new KeystaticContentNotFoundError("Site Settings")

  const { url } = settings

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/keystatic", "/stats"],
    },
    sitemap: `${url}/sitemap.xml`,
  }
}
