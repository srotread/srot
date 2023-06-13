import type { FC } from "react"
import ImageWithBorder from "@/components/ImageWithBorder"

const Story: FC = () => {
  return (
    <>
      <main className="flex items-center justify-between gap-8 bg-dark px-col-outer py-16 text-light lg:py-36 lg:pl-col-inner lg:pr-col-inner xl:pr-0">
        <div>
          <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
            Our Story
          </h1>

          <div className="xl:w-[60ch]">
            <div className="relative mt-10 block aspect-[4/3] xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Story page hero img" />
            </div>
            <p className="mt-9 text-2xl 2xl:mt-16 2xl:text-3xl">
              <span className="font-bold text-accent">Srot</span> means
              <span className="font-bold text-accent"> source</span>.
            </p>
            <p className="mt-5 text-lg xl:mt-9 2xl:text-xl 3xl:text-2xl">
              And in many ways, for us it is a journey back to our source. We
              would love to share this journey with you all.
            </p>
            <p className="mt-5 text-lg xl:mt-9 2xl:text-xl 3xl:text-2xl">
              We often hope for remarkable origin stories. But most stories are
              more commonplace than we might think.
            </p>
          </div>
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 xl:block">
          <ImageWithBorder src="/hero.png" alt="Test" />
        </div>
      </main>

      <section
        role="About Srot"
        className="flex flex-col gap-24 bg-light px-col-outer py-16 text-dark lg:py-36 3xl:px-0"
      >
        <div className="block grid-cols-2 items-center gap-28 xl:grid 3xl:gap-48">
          <div className="text-lg leading-9 sm:w-[50ch] 2xl:ml-auto 3xl:w-[60ch] 3xl:text-xl">
            <h3 className="mb-12 text-2xl font-bold underline decoration-accent underline-offset-8 md:text-3xl 2xl:mb-14 3xl:text-4xl">
              The Beginning
            </h3>

            <div className="relative block aspect-[4/3] xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Test" />
            </div>

            <p className="mt-9 leading-8">
              In July 2020, a group of passionate volunteers came together
              through the Himalayan volunteer tourism (HvT) Facebook page, to
              start helping students in Tirthan Valley, Himachal Pradesh by
              offering academic support. Soon, the work increased and the
              project born out of HvT became independent. Over time in Tirthan,
              the Srot Foundation has:
            </p>

            <ol className="mt-4 list-decimal pl-12">
              <li>
                Conducted several workshops in fields ranging from Arts, Dental
                hygiene, Mathematics, Puzzles to Robotics.
              </li>
              <li>
                Provided art and craft materials to encourage children to let
                loose their creativity.
              </li>
              <li>
                Counselled the older children about education and career
                pathways.
              </li>
              <li>
                Set up small libraries in the homes of the children. After all,
                learning begins at home.
              </li>
              <li>Provided academic support wherever needed.</li>
              <li>
                More importantly, we were able to build joyful relationships
                with the children and their families.
              </li>
            </ol>
          </div>

          <div className="relative mr-2 hidden aspect-[4/3] w-full xl:block">
            <ImageWithBorder src="/hero.png" alt="Test" />
          </div>
        </div>

        <div className="block grid-cols-2 items-center gap-28 xl:grid 3xl:gap-48">
          <div className="relative ml-2 hidden aspect-[4/3] w-full xl:block">
            <ImageWithBorder src="/hero.png" alt="Test" />
          </div>

          <div className="text-lg leading-9 sm:w-[50ch] 2xl:mr-auto 3xl:w-[60ch] 3xl:text-xl">
            <h3 className="mb-12 text-2xl font-bold underline decoration-accent underline-offset-8 md:text-3xl 2xl:mb-14 3xl:text-4xl">
              Why is Srot needed?
            </h3>

            <div className="relative block aspect-[4/3]  xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Test" />
            </div>

            <p className="mt-9 leading-8">
              In July 2020, a group of passionate volunteers came together
              through the Himalayan volunteer tourism (HvT) Facebook page, to
              start helping students in Tirthan Valley, Himachal Pradesh by
              offering academic support. Soon, the work increased and the
              project born out of HvT became independent. Over time in Tirthan,
              the Srot Foundation has:
            </p>

            <ol className="mt-4 list-decimal pl-12">
              <li>
                Conducted several workshops in fields ranging from Arts, Dental
                hygiene, Mathematics, Puzzles to Robotics.
              </li>
              <li>
                Provided art and craft materials to encourage children to let
                loose their creativity.
              </li>
              <li>
                Counselled the older children about education and career
                pathways.
              </li>
              <li>
                Set up small libraries in the homes of the children. After all,
                learning begins at home.
              </li>
              <li>Provided academic support wherever needed.</li>
              <li>
                More importantly, we were able to build joyful relationships
                with the children and their families.
              </li>
            </ol>
          </div>
        </div>

        <div className="block grid-cols-2 items-center gap-28 xl:grid 3xl:gap-48">
          <div className="text-lg leading-9 sm:w-[50ch] 2xl:ml-auto 3xl:w-[60ch] 3xl:text-xl">
            <h3 className="mb-12 text-2xl font-bold underline decoration-accent underline-offset-8 md:text-3xl 2xl:mb-14 3xl:text-4xl">
              What Motivates Us?
            </h3>

            <div className="relative block aspect-[4/3] xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Test" />
            </div>

            <p className="mt-9 leading-8">
              “What motivates these people?”, one might ask. The answer is
              simple and clear to us. No forest can be called healthy unless its
              diversity is truly appreciated and all its life gets what it
              needs. Nurture is important even to nature, and humans are a part
              of nature. Without the right kind of nurturing, we breed exclusion
              rather than inclusion, hatred rather than love, disdain rather
              than compassion, and a painful death rather than a peaceful end.
              There is no nurture without giving. We pray that we always have a
              positive effect on those around us and we do the little that we
              can.
            </p>
            <p className="mt-9 leading-8">
              All our work flows from these objectives. Everyone working on the
              projects has been and continues to work on a voluntary basis,
              without remuneration.
            </p>

            <p className="mt-9 leading-8">
              Over time, along with taking up new projects, Srot has opened up
              its doors for retreats. You may visit the Projects and Workshops
              pages to get a glimpse of our ongoing activities.
            </p>
          </div>

          <div className="relative mr-2 hidden aspect-[4/3] w-full xl:block">
            <ImageWithBorder src="/hero.png" alt="Test" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Story
