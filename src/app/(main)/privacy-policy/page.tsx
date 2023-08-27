import { DocumentRenderer } from "@keystatic/core/renderer"
import reader from "@/lib/keystatic"

export async function generateMetadata() {
  const privacy = await reader.singletons.privacy.read()
  if (!privacy)
    throw new Error("Keystatic Content Not Found - Privacy Policy Page")

  const { metaTitle: title, metaDescription: description } = privacy

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/privacy-policy",
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary",
    },
    alternates: {
      canonical: "/privacy-policy",
    },
  }
}

const PrivacyPolicy = async () => {
  const privacy = await reader.singletons.privacy.read({
    resolveLinkedFiles: true,
  })
  if (!privacy)
    throw new Error("Keystatic Content Not Found - Privacy Policy Page")

  const { content } = privacy

  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="mb-14 text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        Privacy Policy
      </h1>
      <article className="prose prose-lg mt-9 lg:prose-xl 3xl:prose-2xl marker:text-dark">
        <DocumentRenderer document={content} />
      </article>
    </main>
  )
}

export default PrivacyPolicy
