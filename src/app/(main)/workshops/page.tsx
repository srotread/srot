import Card from "@/components/Card"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

async function getPageData() {
  const workshopspage = await reader.singletons.workshopspage.read({
    resolveLinkedFiles: true,
  })
  const workshops = await reader.collections.workshops.all()

  if (!workshopspage) {
    throw new KeystaticContentNotFoundError("Workshops Page singleton")
  }
  if (!workshops) {
    throw new KeystaticContentNotFoundError("Workshops collection")
  }

  const { headline, subheadline, metaTitle, metaDescription } = workshopspage

  return {
    meta: {
      title: `${metaTitle} | `,
      description: metaDescription,
    },
    page: {
      headline,
      subheadline,
      workshops,
    },
  }
}

export async function generateMetadata() {
  const { title, description } = (await getPageData()).meta

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: "/workshops",
    },
  }
}

const Workshops = async (): Promise<JSX.Element> => {
  const { headline, subheadline, workshops } = (await getPageData()).page

  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        {headline}
      </h1>

      <p className="my-9 text-lg 2xl:my-16 2xl:text-xl 3xl:text-2xl">
        {subheadline}
      </p>

      <div className="flex max-w-5xl flex-col gap-14 2xl:gap-20">
        {workshops.map(({ slug, entry }) => {
          const { title, description, image, imageAlt, active } = entry
          return (
            <Card
              key={slug}
              type="Workshop"
              img={image}
              alt={imageAlt}
              title={title}
              description={description}
              btnType={active ? "Primary" : "Secondary"}
              btnTxt={active ? "Enroll now" : "Learn more"}
              slug={`/workshops/${slug}`}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Workshops
