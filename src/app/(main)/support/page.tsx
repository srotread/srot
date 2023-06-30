import Link from "next/link"
import ImageWithBorder from "@/components/ImageWithBorder"
import Button from "@/components/Button"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

async function getPageData() {
  const supportpage = await reader.singletons.supportpage.read()

  if (!supportpage) {
    throw new KeystaticContentNotFoundError("Support Us Page singleton")
  }

  const { metaTitle, metaDescription, ...page } = supportpage

  return {
    meta: {
      title: `${metaTitle} | `,
      description: metaDescription,
    },
    page,
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
      canonical: "/support",
    },
  }
}

const Support = async (): Promise<JSX.Element> => {
  const { headline, image, imageAlt, statistics, content, cta, donationUrl } = (
    await getPageData()
  ).page

  return (
    <>
      <main className="flex items-center justify-between gap-8 bg-light px-col-outer py-16 text-dark lg:py-36 lg:pl-col-inner lg:pr-col-inner xl:pr-0">
        <div>
          <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
            {headline}
          </h1>

          <div className="xl:w-[70ch]">
            <div className="relative mt-10 block aspect-[4/3] xl:hidden">
              <ImageWithBorder src={image} alt={imageAlt} sizes="" />
            </div>
            <div className="mt-9 grid grid-cols-3 text-base font-extralight sm:text-xl lg:text-2xl 2xl:mt-16 2xl:text-3xl gap-8">
              {statistics.map(({ cta, number, noun }) => (
                <div key={noun} className="flex flex-col">
                  <p>{cta}</p>
                  <p className="text-3xl font-bold sm:mb-2 sm:text-4xl lg:text-5xl 2xl:text-6xl">
                    {number}
                  </p>
                  <p>{noun}</p>
                </div>
              ))}
            </div>
            <p className="mt-9 text-xl lg:text-2xl 2xl:mt-16 2xl:text-3xl">
              {content}
            </p>
            <Link
              href={donationUrl}
              className="mt-8 inline-block text-xl lg:text-2xl 2xl:mt-12 3xl:text-3xl"
            >
              <Button
                text={cta ? cta : "Donate now"}
                theme="Light"
                type="Primary"
              />
            </Link>
          </div>
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 xl:block">
          <ImageWithBorder src={image} alt={imageAlt} sizes="" />
        </div>
      </main>
    </>
  )
}

export default Support
