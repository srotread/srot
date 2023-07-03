import ImageWithBorder from "@/components/ImageWithBorder"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

async function getPageData() {
  const mediapage = await reader.singletons.mediapage.read({
    resolveLinkedFiles: true,
  })
  const config = await reader.singletons.config.read()

  if (!mediapage) {
    throw new KeystaticContentNotFoundError("Media Page singleton")
  }
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }

  const { metaTitle, metaDescription, ...page } = mediapage
  const { url } = config

  return {
    meta: {
      title: `${metaTitle} | `,
      description: metaDescription,
      url,
    },
    page,
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
      url: `${url}/media`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${url}/media`,
    },
  }
}

const Media = async (): Promise<JSX.Element> => {
  const { headline, gallerySections } = (await getPageData()).page

  return (
    <main className="bg-dark px-col-outer py-16 text-light lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        {headline}
      </h1>

      {gallerySections.map(({ title, description, images }) => (
        <section key={title}>
          <h3 className="mt-12 text-[32px] font-medium md:text-4xl 2xl:mt-24 3xl:text-5xl">
            {title}
          </h3>

          {description && (
            <p className="mt-4 text-lg leading-8 3xl:text-xl">{description}</p>
          )}

          <div className="mt-9 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3 4xl:max-w-screen-2xl">
            {images.map(({ image, imageAlt, caption }, i) => (
              <div key={i} className="">
                <div className="relative w-full h-80">
                  <ImageWithBorder
                    src={image}
                    alt={imageAlt}
                    sizes="100vw, (min-width: 640px) 40vw, (min-width: 1024px) 30vw, (min-width: 1536px) 40vw"
                  />
                </div>
                <p className="mt-4 text-base leading-8 3xl:text-lg">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Media
