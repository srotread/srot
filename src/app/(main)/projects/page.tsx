import Card from "@/components/Card"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

async function getPageData() {
  const projectspage = await reader.singletons.projectspage.read({
    resolveLinkedFiles: true,
  })
  const projects = await reader.collections.projects.all()
  const config = await reader.singletons.config.read()

  if (!projectspage) {
    throw new KeystaticContentNotFoundError("Projects Page singleton")
  }
  if (!projects) {
    throw new KeystaticContentNotFoundError("Projects collection")
  }
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }

  const { headline, subheadline, metaTitle, metaDescription } = projectspage
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
      projects,
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
      url: `${url}/projects`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${url}/projects`,
    },
  }
}

const Projects = async (): Promise<JSX.Element> => {
  const { headline, subheadline, projects } = (await getPageData()).page

  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        {headline}
      </h1>

      <p className="my-9 text-lg 2xl:my-16 2xl:text-xl 3xl:text-2xl">
        {subheadline}
      </p>

      <div className="grid gap-x-16 gap-y-14 lg:grid-cols-1 xl:grid-cols-2 2xl:gap-x-32 2xl:gap-y-20">
        {projects.map(({ slug, entry }, i) => {
          const { title, description, image, imageAlt } = entry
          return (
            <Card
              key={slug}
              type="Project"
              img={image}
              alt={imageAlt}
              title={title}
              description={description}
              btnType={i === 0 ? "Primary" : "Secondary"}
              btnTxt="Find out more"
              slug={`/projects/${slug}`}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Projects
