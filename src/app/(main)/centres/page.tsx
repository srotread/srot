import Link from "next/link"

import ImageWithBorder from "@/components/ImageWithBorder"
import Button from "@/components/Button"
import RightArrow from "@/components/Icons/RightArrow"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

async function getPageData() {
  const centrespage = await reader.singletons.centrespage.read()
  const centres = await reader.collections.centres.all({
    resolveLinkedFiles: true,
  })
  const config = await reader.singletons.config.read()

  if (!centrespage) {
    throw new KeystaticContentNotFoundError("Story Page singleton")
  }
  if (!centres) {
    throw new KeystaticContentNotFoundError("Centres Collection")
  }
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }

  const { metaTitle, metaDescription, headline, subheadline } = centrespage
  const { url } = config

  return {
    meta: {
      title: `${metaTitle} | `,
      description: metaDescription,
      url,
    },
    page: {
      headline,
      subheadline,
      centres,
    },
  }
}

export async function generateMetadata() {
  const { title, description, url } = (await getPageData()).meta

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${url}/centres`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${url}/centres`,
    },
  }
}

const Centres = async (): Promise<JSX.Element> => {
  const { headline, subheadline, centres } = (await getPageData()).page

  return (
    <>
      <main className="bg-dark px-col-outer py-16 text-light lg:px-col-inner lg:py-36">
        <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
          {headline}
        </h1>

        <p className="mt-9 w-[50ch] text-lg 2xl:mt-16 2xl:text-xl 3xl:text-2xl">
          {subheadline}
        </p>
      </main>

      <section className="flex flex-col gap-24 bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36 xl:px-0 3xl:px-col-inner">
        {centres.map(({ slug, entry }, i) => {
          const { name, description, image, imageAlt } = entry

          const isOdd = i % 2 === 0

          const SectionContent = ({ classes }: { classes: string }) => (
            <div
              className={`text-lg leading-9 sm:w-[50ch] 3xl:text-xl ${classes}`}
            >
              <h3 className="mb-12 text-2xl font-bold underline decoration-accent underline-offset-8 md:text-3xl 2xl:mb-14 3xl:text-4xl">
                {name}
              </h3>

              <div className="relative block aspect-[4/3]  xl:hidden">
                <ImageWithBorder
                  src={image}
                  alt={imageAlt}
                  sizes="80vw, (min-width: 768px) 70vw, (min-width: 1024px) 50vw"
                />
              </div>

              <p className="mt-9 text-lg leading-8 3xl:text-xl">
                {description}
              </p>

              <Link
                href={`/centres/${slug}`}
                className="mt-9 inline-block text-xl 3xl:text-2xl"
              >
                <Button
                  text="Find out more"
                  theme="Light"
                  type="Primary"
                  icon={<RightArrow />}
                />
              </Link>
            </div>
          )
          const SectionImage = ({ classes }: { classes: string }) => (
            <div
              className={`relative hidden aspect-[4/3] w-full xl:block ${classes}`}
            >
              <ImageWithBorder
                src={image}
                alt={imageAlt}
                sizes="80vw, (min-width: 768px) 70vw, (min-width: 1024px) 50vw"
              />
            </div>
          )

          return (
            <div
              key={slug}
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

export default Centres
