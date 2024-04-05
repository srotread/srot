import ImageWithBorder from "@/components/ImageWithBorder"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

import Button from "@/components/Button"

async function getPageData() {
  const supportpage = await reader.singletons.supportpage.read()
  const config = await reader.singletons.config.read()

  if (!supportpage) {
    throw new KeystaticContentNotFoundError("Support Us Page singleton")
  }
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }

  const { metaTitle, metaDescription, ...page } = supportpage
  const { url } = config

  return {
    meta: {
      title: `${metaTitle} | `,
      description: metaDescription,
      url,
      image: page.image,
    },
    page,
  }
}

export async function generateMetadata() {
  const { title, description, url, image } = (await getPageData()).meta

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${url}/support`,
      images: [{ url: image }],
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${url}/support`,
    },
  }
}

const Support = async (): Promise<JSX.Element> => {
  const { headline, image, imageAlt, statistics, content, donationUrl, cta } = (
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
            <div className="mt-9 grid grid-cols-3 gap-8 text-base font-extralight sm:text-xl lg:text-2xl 2xl:mt-16 2xl:text-3xl">
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
            <a
              href={donationUrl}
              target="_blank"
              className="mt-8 inline-block text-xl lg:text-2xl 2xl:mt-12 3xl:text-3xl"
            >
              <Button
                text={cta ? cta : "Donate now"}
                theme="Light"
                type="Primary"
                data-umami-event="Razorpay Donate Button"
              />
            </a>
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
