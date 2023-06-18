import type { FC } from "react"
import Link from "next/link"
import Image from "next/image"

import reader from "@/lib/keystatic"
import { DocumentRenderer } from "@keystatic/core/renderer"
import Button from "@/components/Button"

import RightArrow from "@/components/Icons/RightArrow"
import ImageWithBorder from "@/components/ImageWithBorder"
import Card from "@/components/Card"

const Home: FC = async () => {
  const homepage = await reader.singletons.homepage.read({
    resolveLinkedFiles: true,
  })
  const projects = await reader.collections.projects.all()
  const workshops = await reader.collections.workshops.all()

  if (!homepage) {
    throw new Error("Keystatic: Content not found - Home Page singleton.")
  }
  if (!projects) {
    throw new Error("Keystatic: Content not found - Projects collection.")
  }
  if (!workshops) {
    throw new Error("Keystatic: Content not found - Workshops collection.")
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
            <Button text="Learn More" type="Secondary" theme="Dark" />
          </Link>
        </div>
      </main>

      <section
        role="About Srot"
        className="flex items-center justify-between gap-12 bg-dark px-col-outer text-light lg:pl-col-inner lg:pr-col-inner 2xl:pr-0"
      >
        <div className="w-[60ch] py-16 text-lg leading-9 lg:py-36 3xl:text-2xl">
          <h3 className="mb-6 text-[32px] font-medium md:text-4xl 2xl:mb-14 3xl:text-5xl">
            <span className="font-bold text-accent">&lsquo;Srot&rsquo; </span>
            means &lsquo;Source&rsquo;.
          </h3>

          <div className="relative block aspect-[4/3] 2xl:hidden">
            <ImageWithBorder src={storyImage} alt={storyImageAlt} />
          </div>

          <div className="prose prose-invert prose-lg text-light marker:text-light mt-9">
            {storyDescription && (
              <DocumentRenderer document={storyDescription} />
            )}
          </div>

          <Button
            text="Read out story"
            icon={<RightArrow />}
            type="Secondary"
            theme="Dark"
          />
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 2xl:block">
          <ImageWithBorder src={storyImage} alt={storyImageAlt} />
        </div>
      </section>

      <section
        role="Srot's Projects"
        className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36"
      >
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

      <section
        role="Srot's Workshops"
        className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36"
      >
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
            const { title, description, image, imageAlt, active } = entry

            return (
              <Card
                key={slug}
                type="Workshop"
                img={image}
                alt={imageAlt}
                title={title}
                description={description}
                btnType={active ? "Primary" : "Secondary"}
                btnTxt={active ? "Enroll now" : "Learn more"}
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

      <section
        role="Srot's Funding Goals"
        className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36"
      >
        <div className="mb-16 flex items-start justify-between text-lg md:text-xl 2xl:text-2xl">
          <h3 className="mb-6 inline-block text-[32px] font-bold underline decoration-accent underline-offset-8 md:mb-9 md:block md:text-4xl 3xl:text-5xl">
            Funding Goals
          </h3>

          <Link className="hidden sm:block" href="/support">
            <Button
              text="Find out more"
              icon={<RightArrow />}
              type="Primary"
              theme="Light"
            />
          </Link>
        </div>

        <div className="rounded bg-dark px-14 py-10 text-light 2xl:px-24 2xl:py-16">
          <p className="mx-auto mb-8 w-max text-left text-xl md:text-2xl xl:mx-0 3xl:text-3xl">
            ₹ 50,000 / ₹ 1,50,000
          </p>
          {/* w-[Percentage Value] left-[PV - 10] md:left-[PV - 4]  */}
          <div className="relative mb-20 block h-6 w-full rounded-full bg-light md:h-8">
            <div className="absolute left-0 top-0 h-full w-[70%] rounded-full bg-accent" />
            <span className="tooltip absolute -bottom-9 left-[60%] z-10 inline-block h-full w-min rounded bg-light p-1 align-middle text-sm font-medium text-dark md:-bottom-11 md:left-[66%] md:text-lg 3xl:text-xl">
              80%
            </span>
          </div>

          <Link
            href="/support"
            className="mx-auto w-max text-lg md:text-xl xl:mx-0 3xl:text-2xl"
          >
            <Button text="Support Us" type="Primary" theme="Dark" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
