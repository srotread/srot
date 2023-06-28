import Image from "next/image"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

async function getPageData() {
  const teampage = await reader.singletons.teampage.read()

  if (!teampage) {
    throw new KeystaticContentNotFoundError("Media Page singleton")
  }

  const { metaTitle, metaDescription, headline, teamSections } = teampage

  return {
    meta: {
      title: `${metaTitle} | `,
      description: metaDescription,
    },
    page: {
      headline,
      teamSections,
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
      canonical: "/team",
    },
  }
}

const Team = async (): Promise<JSX.Element> => {
  const { headline, teamSections } = (await getPageData()).page

  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        {headline}
      </h1>

      {teamSections.map(({ designation, description, members }, i) => (
        <section key={i}>
          <h3 className="mt-12 text-[32px] font-bold md:text-4xl 2xl:mt-24 3xl:text-5xl">
            {designation}
          </h3>

          {description && (
            <p className="mt-6 text-lg leading-8 3xl:text-xl">{description}</p>
          )}

          <div className="mt-6 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3">
            {members.map(({ name, title, description, image, imageAlt }) => (
              <div
                key={name}
                className="overflow-hidden rounded bg-dark p-4 text-light"
              >
                <div className="relative mb-4 aspect-[4/3] w-full rounded">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="h-1 w-24 rounded-[1px] bg-accent" />
                  <h6 className="text-xl font-bold 2xl:text-2xl">{name}</h6>
                  <p className="text-lg 3xl:text-xl">{title}</p>
                  <hr />
                  <p className="text-base font-light md:text-lg 3xl:text-xl">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Team
