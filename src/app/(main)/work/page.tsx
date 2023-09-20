import Link from "next/link"
import ImageWithBorder from "@/components/ImageWithBorder"
import Button from "@/components/Button"
import RightArrow from "@/components/Icons/RightArrow"
import Testimonial from "@/components/Testimonial"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

async function getPageData() {
  const workpage = await reader.singletons.workpage.read()
  const testimonials = await reader.collections.testimonials.all()
  const config = await reader.singletons.config.read()

  if (!workpage) {
    throw new KeystaticContentNotFoundError("Work with Us Page singleton")
  }
  if (!testimonials) {
    throw new KeystaticContentNotFoundError("Testimonials Collection")
  }
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }

  const { metaTitle, metaDescription, ...page } = workpage
  const { url } = config

  return {
    meta: {
      title: `${metaTitle} | `,
      description: metaDescription,
      url,
      image: page.image,
    },
    page: {
      ...page,
      testimonials,
    },
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
      url: `${url}/work`,
      images: [{ url: image }],
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${url}/work`,
    },
  }
}

const Work = async (): Promise<JSX.Element> => {
  const {
    headline,
    subheadline,
    image,
    imageAlt,
    involvedHeadline,
    involvements,
    testimonialsHeadline,
    testimonials,
  } = (await getPageData()).page

  return (
    <>
      <main className="flex items-center justify-between gap-8 bg-light px-col-outer py-16 text-dark lg:py-36 lg:pl-col-inner lg:pr-col-inner xl:pr-0">
        <div>
          <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
            {headline}
          </h1>

          <div className="xl:w-[60ch]">
            <div className="relative mt-10 block aspect-[4/3] xl:hidden">
              <ImageWithBorder src={image} alt={imageAlt} sizes="" />
            </div>
            <p className="mt-9 text-xl lg:text-2xl 2xl:mt-16 2xl:text-3xl">
              {subheadline}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-xl lg:text-2xl 2xl:mt-12 3xl:text-3xl"
            >
              <Button
                text="Get in touch"
                theme="Light"
                type="Primary"
                icon={<RightArrow />}
              />
            </Link>
          </div>
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 xl:block">
          <ImageWithBorder src={image} alt={imageAlt} sizes="" />
        </div>
      </main>

      <section className="px-col-outer py-16 lg:px-col-inner lg:py-36">
        <h3 className="text-[32px] font-bold md:text-4xl 3xl:text-5xl">
          {involvedHeadline}
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
          {involvements.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col justify-between gap-12 overflow-hidden rounded bg-dark p-4 text-light"
            >
              <div className="flex flex-col gap-4">
                <div className="h-1.5 h-[2px] w-40 rounded-full bg-accent" />
                <h6 className="text-xl font-bold 2xl:text-2xl">{title}</h6>
                <p className="text-base font-light md:text-lg 3xl:text-xl">
                  {description}
                </p>
              </div>
              <Link
                href={`/contact?become=${title.trim()}`}
                className="text-base md:text-lg 3xl:text-xl"
              >
                <Button
                  text="Get in touch"
                  theme="Dark"
                  type="Secondary"
                  icon={<RightArrow />}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-col-outer py-16 lg:px-col-inner lg:py-36">
        <h3 className="text-[32px] font-bold md:text-4xl 3xl:text-5xl">
          {testimonialsHeadline}
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
          {testimonials.map(({ slug, entry }) => {
            const { quote, image, imageAlt, title } = entry

            return (
              <Testimonial
                key={title}
                quote={quote}
                imgSrc={image}
                imgAlt={imageAlt}
                name={slug}
                title={title}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Work
