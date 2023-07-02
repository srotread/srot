import { DocumentRenderer } from "@keystatic/core/renderer"
import Link from "next/link"

type Props = {
  title: string
  document: any
  bgClr: "bg-light" | "bg-dark"
  txtClr: "text-light" | "text-dark"
  sidebar: {
    title: string
    entries: { slug: string; title: string; description: string }[]
  }[]
}

export default function SidebarLayout({
  title,
  document,
  sidebar,
  bgClr,
  txtClr,
}: Props) {
  const bgClrInverted = bgClr === "bg-dark" ? "bg-light" : "bg-dark"
  const txtClrInverted = txtClr === "text-dark" ? "text-light" : "text-dark"

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-[6fr,4fr] 3xl:grid-cols-[7fr,3fr] px-col-outer py-16 xl:px-col-inner lg:py-36 gap-12 lg:gap-8 xl:gap-24 ${bgClr} ${txtClr}`}
    >
      <main>
        <h1 className="text-3xl font-semibold md:text-4xl 2xl:text-5xl 3xl:text-6xl mb-9">
          {title}
        </h1>

        <div className="prose prose-invert text-light marker:text-light prose-base md:prose-lg 2xl:prose-xl 3xl:prose-2xl">
          <DocumentRenderer document={document} />
        </div>
      </main>
      <aside className={`grid gap-8`}>
        {sidebar.map(({ title, entries }, i) => {
          return (
            <div
              key={i}
              className={`p-6 grid gap-4 rounded ${bgClrInverted} ${txtClrInverted}`}
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
    </div>
  )
}
