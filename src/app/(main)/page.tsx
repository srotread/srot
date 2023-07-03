import Link from "next/link"
import Image from "next/image"

import reader from "@/lib/keystatic"
import { DocumentRenderer } from "@keystatic/core/renderer"

import Button from "@/components/Button"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

import RightArrow from "@/components/Icons/RightArrow"
import ImageWithBorder from "@/components/ImageWithBorder"
import Card from "@/components/Card"

const Home = async (): Promise<JSX.Element> => {
  const homepage = await reader.singletons.homepage.read({
    resolveLinkedFiles: true,
  })
  const projects = await reader.collections.projects.all()
  const workshops = await reader.collections.workshops.all()

  if (!homepage) {
    throw new KeystaticContentNotFoundError("Home Page singleton")
  }
  if (!projects) {
    throw new KeystaticContentNotFoundError("Projects collection")
  }
  if (!workshops) {
    throw new KeystaticContentNotFoundError("Workshops collection")
  }

  const {
    backgroundImage,
    backgroundImageAlt,
    headline,
    subheadline,
    storyDescription,
    storyImage,
    storyImageAlt,
    projectsHeadline,
    workshopsHeadline,
  } = homepage

  return (
    <>
      <main className="px-col-outer text-center text-light lg:px-col-inner relative">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          priority
          className="object-cover w-screen h-full -z-10"
        />

        <h1 className="pt-28 text-4xl font-bold underline decoration-accent md:text-5xl lg:pt-40  2xl:text-6xl 3xl:text-7xl">
          {headline}
        </h1>
        <p className="mb-8 mt-10 text-xl md:mb-14 md:mt-16 md:text-2xl 2xl:text-3xl">
          {subheadline}
        </p>
        <div className="flex flex-row items-center justify-center gap-4 pb-[60%] text-lg md:text-xl 2xl:pb-[50%] 2xl:text-2xl">
          <Link href="/support">
            <Button
              text="Support Us"
              icon={<RightArrow />}
              type="Primary"
              theme="Dark"
            />
          </Link>
          <Link href="/story">
            <Button text="Read our story" type="Secondary" theme="Dark" />
          </Link>
        </div>
      </main>

      <section className="flex items-center justify-between gap-12 bg-dark px-col-outer text-light lg:pl-col-inner lg:pr-col-inner 2xl:pr-0">
        <div className="w-[60ch] py-16 text-lg leading-9 lg:py-36 3xl:text-2xl">
          <h3 className="mb-6 text-[32px] font-medium md:text-4xl 2xl:mb-14 3xl:text-5xl">
            <span className="font-bold text-accent">&lsquo;Srot&rsquo; </span>
            means &lsquo;Source&rsquo;.
          </h3>

          <div className="relative block aspect-[4/3] 2xl:hidden">
            <ImageWithBorder
              src={storyImage}
              alt={storyImageAlt}
              sizes="100vw, (min-width: 1024px) 60vw"
            />
          </div>

          {storyDescription && (
            <div className="prose prose-invert prose-lg lg:prose-xl 3xl:prose-2xl text-light marker:text-light mt-9">
              <DocumentRenderer document={storyDescription} />
            </div>
          )}

          <Button
            text="Full story"
            icon={<RightArrow />}
            type="Secondary"
            theme="Dark"
          />
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 2xl:block">
          <ImageWithBorder src={storyImage} alt={storyImageAlt} sizes="50vw" />
        </div>
      </section>

      <section className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
        <div className="mb-16 flex items-start justify-between text-lg md:text-xl 2xl:text-2xl">
          <div>
            <h3 className="mb-6 inline-block text-[32px] font-bold underline decoration-accent underline-offset-8 md:mb-9 md:block md:text-4xl 3xl:text-5xl">
              {projectsHeadline}
            </h3>
            <p className="w-[minmax(20ch, max-content)] sm:w-full">
              Your support helps fund projects like:
            </p>
          </div>

          <Link className="hidden sm:block" href="/projects">
            <Button
              text="See all"
              icon={<RightArrow />}
              type="Secondary"
              theme="Light"
            />
          </Link>
        </div>

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
                slug={slug}
              />
            )
          })}
        </div>

        <Link href="/projects" className="mt-12 block text-base sm:hidden">
          <Button
            text="See all"
            icon={<RightArrow />}
            type="Secondary"
            theme="Light"
          />
        </Link>
      </section>

      <section className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
        <div className="mb-16 flex items-start justify-between text-lg md:text-xl 2xl:text-2xl">
          <h3 className="mb-6 inline-block text-[32px] font-bold underline decoration-accent underline-offset-8 md:mb-9 md:block md:text-4xl 3xl:text-5xl">
            {workshopsHeadline}
          </h3>

          <Link className="hidden sm:block" href="/workshops">
            <Button
              text="See all"
              icon={<RightArrow />}
              type="Secondary"
              theme="Light"
            />
          </Link>
        </div>

        <div className="flex max-w-5xl flex-col gap-14 2xl:gap-20">
          {workshops.map(({ slug, entry }, i) => {
            const { title, description, image, imageAlt } = entry

            return (
              <Card
                key={slug}
                type="Workshop"
                img={image}
                alt={imageAlt}
                title={title}
                description={description}
                btnType={i === 0 ? "Primary" : "Secondary"}
                btnTxt="Find out more"
                slug={slug}
              />
            )
          })}
        </div>

        <Link href="/workshops" className="mt-12 block text-base sm:hidden">
          <Button
            text="See all"
            icon={<RightArrow />}
            type="Secondary"
            theme="Light"
          />
        </Link>
      </section>

      <section className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
        <h3 className="mb-6 inline-block text-[32px] font-bold underline decoration-accent underline-offset-8 md:mb-9 md:block md:text-4xl 3xl:text-5xl">
          Funding Goals
        </h3>
      </section>
    </>
  )
}

export default Home
