import type { NextPage } from "next"

import ImageWithBorder from "@/components/ImageWithBorder"
import Button from "@/components/Button"
import RightArrow from "@/components/Icons/RightArrow"

import { DocumentRenderer } from "@keystatic/core/renderer"
import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

async function getPageData() {
  const centrespage = await reader.singletons.centrespage.read()
  const config = await reader.singletons.config.read()
  const centres = await reader.collections.centres.all({
    resolveLinkedFiles: true,
  })

  if (!centrespage) {
    throw new KeystaticContentNotFoundError("Story Page singleton")
  }
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }
  if (!centres) {
    throw new KeystaticContentNotFoundError("Centres Collection")
  }

  const { siteTitle } = config

  const { metaTitle, metaDescription, headline, subheadline } = centrespage

  return {
    meta: {
      title: `${metaTitle} | ${siteTitle}`,
      description: metaDescription,
    },
    page: {
      headline,
      subheadline,
      centres,
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
      canonical: "/centres",
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

      <section className="flex flex-col gap-24 bg-light py-16 text-dark lg:py-36 px-col-inner xl:px-0 3xl:px-col-inner">
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
                <ImageWithBorder src={image} alt={imageAlt} />
              </div>

              <p className="text-lg 3xl:text-xl mt-9 leading-8">
                {description}
              </p>

              <div className="mt-9 text-xl 3xl:text-2xl">
                <Button
                  text="Learn more"
                  theme="Light"
                  type="Primary"
                  icon={<RightArrow />}
                />
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

      {/* <main className="flex flex-col gap-24 bg-light px-col-outer py-16 text-dark lg:py-36 3xl:px-0">
        <div className="block grid-cols-2 items-center gap-28 xl:grid 3xl:gap-48">
          <div className="text-lg leading-9 sm:w-[50ch] 2xl:ml-auto 3xl:text-xl">
            <h3 className="mb-12 text-2xl font-bold underline decoration-accent underline-offset-8 md:text-3xl 2xl:mb-14 3xl:text-4xl">
              The Srot Centre, Tirthan
            </h3>

            <div className="relative block aspect-[4/3] xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Test" />
            </div>

            <p className="mt-9 leading-8">
              The Tirthan centre was started in September 2020. It is currently
              located in Sairopa village, right next to the GHNP office complex.
              Parth has been working here on ground. Volunteers have joined from
              time to time to help in the work.
            </p>

            <div className="mt-9">
              <Button
                text="Learn more"
                theme="Light"
                type="Primary"
                icon={<RightArrow />}
              />
            </div>
          </div>

          <div className="relative mr-2 hidden aspect-[4/3] w-full xl:block">
            <ImageWithBorder src="/hero.png" alt="Test" />
          </div>
        </div>

        <div className="block grid-cols-2 items-center gap-28 xl:grid 3xl:gap-48">
          <div className="relative ml-2 hidden aspect-[4/3] w-full xl:block">
            <ImageWithBorder src="/hero.png" alt="Test" />
          </div>

          <div className="text-lg leading-9 sm:w-[50ch] 2xl:mr-auto 3xl:w-[60ch] 3xl:text-xl">
            <h3 className="mb-12 text-2xl font-bold underline decoration-accent underline-offset-8 md:text-3xl 2xl:mb-14 3xl:text-4xl">
              The Resource Centre, Champawat
            </h3>

            <div className="relative block aspect-[4/3]  xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Test" />
            </div>

            <p className="mt-9 leading-8">
              Work has been going on in Champawat since 2021 when Madan, the
              project co-ordinator, decided to give up a promising career in
              Delhi and return to his native village to help the children there.
              This is when another member of our team came in touch with him and
              Madan became a part of the Srot family. He has been doing all this
              work from his own small home, such is the large-hearted Madan and
              we support his work.
            </p>

            <div className="mt-9">
              <Button
                text="Learn more"
                theme="Light"
                type="Primary"
                icon={<RightArrow />}
              />
            </div>
          </div>
        </div>
      </main> */}
    </>
  )
}

export default Centres
