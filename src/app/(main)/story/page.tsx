import reader from "@/lib/keystatic"
import { DocumentRenderer } from "@keystatic/core/renderer"

import { KeystaticContentNotFoundError } from "@/lib/exceptions"

import ImageWithBorder from "@/components/ImageWithBorder"

async function getPageData() {
  const storypage = await reader.singletons.storypage.read({
    resolveLinkedFiles: true,
  })
  const config = await reader.singletons.config.read()

  if (!storypage) {
    throw new KeystaticContentNotFoundError("Story Page singleton")
  }
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }

  const { metaTitle, metaDescription } = storypage

  const { headline, description, image, imageAlt, contentSections } = storypage

  return {
    meta: {
      title: `${metaTitle} | ${config.siteTitle}`,
      description: metaDescription,
    },
    page: {
      headline,
      description,
      image,
      imageAlt,
      contentSections,
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
      canonical: "/story",
    },
  }
}

const Story = async (): Promise<JSX.Element> => {
  const { headline, description, image, imageAlt, contentSections } = (
    await getPageData()
  ).page

  return (
    <>
      <main className="flex items-center justify-between gap-8 bg-dark px-col-outer py-16 text-light lg:py-36 lg:pl-col-inner lg:pr-col-inner xl:pr-0">
        <div>
          <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
            {headline}
          </h1>

          <div className="xl:w-[60ch]">
            <div className="relative mt-10 block aspect-[4/3] xl:hidden">
              <ImageWithBorder src={image} alt={imageAlt} />
            </div>
            <p className="mt-9 text-2xl 2xl:mt-16 2xl:text-3xl">
              <span className="font-bold text-accent">Srot</span> means
              <span className="font-bold text-accent"> source</span>.
            </p>
            {description.map((paragraph, i) => (
              <p
                key={i}
                className="mt-5 text-lg xl:mt-9 2xl:text-xl 3xl:text-2xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 xl:block">
          <ImageWithBorder src={image} alt={imageAlt} />
        </div>
      </main>

      <section
        role="About Srot"
        className="flex flex-col gap-24 bg-light py-16 text-dark lg:py-36 px-col-inner xl:px-0 4xl:px-col-inner"
      >
        {contentSections.map(({ title, content, image, imageAlt }, i) => {
          const isOdd = i % 2 === 0

          const SectionContent = ({ classes }: { classes: string }) => (
            <div
              className={`text-lg leading-9 sm:w-[50ch] 3xl:text-xl ${classes}`}
            >
              <h3 className="mb-12 text-2xl font-bold underline decoration-accent underline-offset-8 md:text-3xl 2xl:mb-14 3xl:text-4xl">
                {title}
              </h3>

              <div className="relative block aspect-[4/3]  xl:hidden">
                <ImageWithBorder src={image} alt={imageAlt} />
              </div>

              <div className="prose prose-lg 3xl:prose-xl marker:text-dark">
                <DocumentRenderer document={content} />
              </div>
            </div>
          )
          const SectionImage = ({ classes }: { classes: string }) => (
            <div
              className={`relative hidden aspect-[4/3] w-full xl:block ${classes}`}
            >
              <ImageWithBorder src={image} alt={imageAlt} />
            </div>
          )

          return (
            <div
              key={title}
              className="block grid-cols-2 items-center gap-28 xl:grid 3xl:gap-48"
            >
              {isOdd ? (
                <>
                  <SectionContent classes="xl:ml-auto" />
                  <SectionImage classes="mr-2" />
                </>
              ) : (
                <>
                  <SectionImage classes="ml-2" />
                  <SectionContent classes="xl:mr-auto" />
                </>
              )}
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Story
