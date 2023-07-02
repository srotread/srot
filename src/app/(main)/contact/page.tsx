import ImageWithBorder from "@/components/ImageWithBorder"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"
import ContactForm from "@/components/ContactForm"

async function getPageData() {
  const contactpage = await reader.singletons.contactpage.read()
  const config = await reader.singletons.config.read()

  if (!contactpage) {
    throw new KeystaticContentNotFoundError("Work with Us Page singleton")
  }
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings singleton")
  }

  const { metaTitle, metaDescription, ...page } = contactpage

  return {
    meta: {
      title: `${metaTitle} | `,
      description: metaDescription,
    },
    page: { ...page, email: config.email },
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
      canonical: "/contact",
    },
  }
}

const Contact = async (): Promise<JSX.Element> => {
  const { headline, image, imageAlt, confirmation, email } = (
    await getPageData()
  ).page

  return (
    <>
      <main className="flex items-start justify-between gap-8 bg-light px-col-outer py-16 text-dark lg:py-36 lg:pl-col-inner lg:pr-col-inner xl:pr-0">
        <div>
          <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
            {headline}
          </h1>

          <div className="xl:w-[60ch]">
            <div className="relative mt-10 block aspect-[4/3] 2xl:hidden">
              <ImageWithBorder src={image} alt={imageAlt} sizes="" />
            </div>

            <ContactForm message={confirmation} email={email} />
          </div>
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 2xl:block">
          <ImageWithBorder src={image} alt={imageAlt} sizes="" />
        </div>
      </main>
    </>
  )
}

export default Contact
