import { DocumentRenderer } from "@keystatic/core/renderer"
import reader from "@/lib/keystatic"

export async function generateMetadata() {
  const terms = await reader.singletons.terms.read()
  if (!terms)
    throw new Error("Keystatic Content Not Found - Terms of Service Page")

  const { metaTitle: title, metaDescription: description } = terms

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/terms-of-service",
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary",
    },
    alternates: {
      canonical: "/terms-of-service",
    },
  }
}

const TermsOfService = async () => {
  const terms = await reader.singletons.terms.read({
    resolveLinkedFiles: true,
  })
  if (!terms)
    throw new Error("Keystatic Content Not Found - Terms of Service Page")

  const { content } = terms

  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="mb-14 text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        Terms of Service
      </h1>
      <article className="prose prose-lg mt-9 lg:prose-xl 3xl:prose-2xl marker:text-dark">
        <DocumentRenderer document={content} />
      </article>
    </main>
  )
}

export default TermsOfService
