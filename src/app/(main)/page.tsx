import type { FC } from "react"
import Link from "next/link"

import Button from "@/components/Button"
import RightArrow from "@/components/Icons/RightArrow"
import ImageWithBorder from "@/components/ImageWithBorder"
import Card from "@/components/Card"

import reader from "@/lib/keystatic"
import { DocumentRenderer } from "@keystatic/core/renderer"

const Home: FC = async () => {
  const homepage = await reader.singletons.homepage.read({
    resolveLinkedFiles: true,
  })

  return (
    <>
      <main className="bg-hero-img bg-cover bg-center bg-no-repeat px-col-outer text-center text-light lg:px-col-inner">
        <h1 className="pt-28 text-4xl font-bold underline decoration-accent md:text-5xl lg:pt-40  2xl:text-6xl 3xl:text-7xl">
          {homepage?.headline}
        </h1>
        <p className="mb-8 mt-10 text-xl md:mb-14 md:mt-16 md:text-2xl 2xl:text-3xl">
          {homepage?.subheadline}
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
            <ImageWithBorder src="/hero.png" alt="Test" />
          </div>

          <div className="prose prose-invert prose-lg text-light marker:text-light mt-9">
            {homepage?.storyDescription && (
              <DocumentRenderer document={homepage?.storyDescription} />
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
          <ImageWithBorder src="/hero.png" alt="Test" />
        </div>
      </section>

      <section
        role="Srot's Projects"
        className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36"
      >
        <div className="mb-16 flex items-start justify-between text-lg md:text-xl 2xl:text-2xl">
          <div>
            <h3 className="mb-6 inline-block text-[32px] font-bold underline decoration-accent underline-offset-8 md:mb-9 md:block md:text-4xl 3xl:text-5xl">
              Our Projects
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
          <Card
            type="Project"
            img="/hero.png"
            alt="Srot READ Project"
            title="Srot READ Project"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias."
            btnType="Primary"
            slug="test-project"
          />
          <Card
            type="Project"
            img="/hero.png"
            alt="Srot READ Project"
            title="Srot READ Project"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnType="Secondary"
            slug="test-project"
          />
          <Card
            type="Project"
            img="/hero.png"
            alt="Srot READ Project"
            title="Srot READ Project"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti incidunt vero facere vitae quod commodi amet?."
            btnType="Secondary"
            slug="test-project"
          />
          <Card
            type="Project"
            img="/hero.png"
            alt="Srot READ Project"
            title="Srot READ Project"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias."
            btnType="Secondary"
            slug="test-project"
          />
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
            Our Workshops
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
          <Card
            type="Workshop"
            img="/hero.png"
            alt="Srot READ Workshop"
            title="Srot READ Workshop"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias."
            btnType="Secondary"
            slug="test-workshop"
          />
          <Card
            type="Workshop"
            img="/hero.png"
            alt="Srot READ Workshop"
            title="Srot READ Workshop"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias."
            btnType="Secondary"
            slug="test-workshop"
          />
          <Card
            type="Workshop"
            img="/hero.png"
            alt="Srot READ Workshop"
            title="Srot READ Workshop"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias. Nihil deleniti incidunt vero facere vitae quod commodi amet? Animi, esse molestias."
            btnType="Secondary"
            slug="test-workshop"
          />
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
