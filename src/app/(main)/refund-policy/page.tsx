import { DocumentRenderer } from "@keystatic/core/renderer"
import reader from "@/lib/keystatic"

export async function generateMetadata() {
  const refund = await reader.singletons.refund.read()
  if (!refund)
    throw new Error("Keystatic Content Not Found - Refund Policy Page")

  const { metaTitle: title, metaDescription: description } = refund

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/refund-policy",
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary",
    },
    alternates: {
      canonical: "/refund-policy",
    },
  }
}

const RefundPolicy = async () => {
  const refund = await reader.singletons.refund.read({
    resolveLinkedFiles: true,
  })
  if (!refund)
    throw new Error("Keystatic Content Not Found - Refund Policy Page")

  const { content } = refund

  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        Refund Policy
      </h1>
      <article className="prose prose-lg lg:prose-xl 3xl:prose-2xl marker:text-dark mt-9">
        <DocumentRenderer document={content} />
      </article>
    </main>
  )
}

export default RefundPolicy