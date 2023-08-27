import { DocumentRenderer } from "@keystatic/core/renderer"
import Link from "next/link"
import ImageWithBorder from "./ImageWithBorder"

type Props = {
  title: string
  image: string
  imageAlt: string
  document: any
  bgClr: "bg-light" | "bg-dark"
  sidebar: {
    title: string
    entries: { slug: string; title: string; description: string }[]
  }[]
}

export default function SidebarLayout({
  title,
  image,
  imageAlt,
  document,
  sidebar,
  bgClr,
}: Props) {
  const mainTxtBgClrs =
    bgClr === "bg-dark" ? "bg-dark text-light" : "bg-light text-dark"
  const sidebarTxtBgClrs =
    bgClr === "bg-dark" ? "bg-light text-dark" : "bg-dark text-light"
  const proseTxtBgClrs =
    bgClr === "bg-dark"
      ? "bg-dark prose-invert text-light marker:text-light"
      : "bg-light text-dark marker:text-dark"

  return (
    <div
      className={`grid grid-cols-1 gap-12 px-col-outer py-16 lg:grid-cols-[6fr,4fr] lg:gap-8 lg:py-36 xl:gap-24 xl:px-col-inner 3xl:grid-cols-[7fr,3fr] ${mainTxtBgClrs}`}
    >
      <main>
        <div className="relative mb-9 aspect-[4/3] w-full">
          <ImageWithBorder src={image} alt={imageAlt} sizes="" />
        </div>

        <h1 className="mb-9 text-3xl font-semibold md:text-4xl 2xl:text-5xl 3xl:text-6xl">
          {title}
        </h1>

        <div
          className={`prose prose-base md:prose-lg 2xl:prose-xl 3xl:prose-2xl ${proseTxtBgClrs}`}
        >
          <DocumentRenderer document={document} />
        </div>
      </main>
      {!!sidebar[0].entries.length && (
        <aside className={`grid h-fit gap-8`}>
          {sidebar.map(({ title, entries }, i) => {
            return (
              <div
                key={i}
                className={`grid gap-4 rounded p-6 ${sidebarTxtBgClrs}`}
              >
                <h4 className="text-lg font-semibold md:text-xl 2xl:text-2xl 3xl:text-3xl">
                  {title}
                </h4>

                {entries.map(({ slug, title, description }) => (
                  <Link
                    key={title}
                    href={slug}
                    className="space-y-2 text-sm md:text-base 2xl:text-lg 3xl:text-xl"
                  >
                    <h5 className="font-semibold underline">{title}</h5>
                    <p>{description}</p>
                  </Link>
                ))}
              </div>
            )
          })}
        </aside>
      )}
    </div>
  )
}
