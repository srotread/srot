import type { NextPage } from "next"
import ImageWithBorder from "@/components/ImageWithBorder"
import Button from "@/components/Button"
import RightArrow from "@/components/Icons/RightArrow"

const Centres: NextPage = () => {
  return (
    <>
      <header className="bg-dark px-col-outer py-16 text-light lg:px-col-inner lg:py-36">
        <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
          Our Centres
        </h1>

        <p className="mt-9 w-[50ch] text-lg 2xl:mt-16 2xl:text-xl 3xl:text-2xl">
          The Centre is a quiet and comfortable space. Children come over each
          day, or as planned, to study and play. From time to time volunteers
          also join in the work. The overall atmosphere is affectionate, free
          and enriching.
        </p>
      </header>

      <main
        role="About Srot"
        className="flex flex-col gap-24 bg-light px-col-outer py-16 text-dark lg:py-36 3xl:px-0"
      >
        <div className="block grid-cols-2 items-center gap-28 xl:grid 3xl:gap-48">
          <div className="text-lg leading-9 sm:w-[50ch] 2xl:ml-auto 3xl:text-xl">
            <h3 className="mb-12 text-2xl font-bold underline decoration-accent underline-offset-8 md:text-3xl 2xl:mb-14 3xl:text-4xl">
              The Srot Centre, Tirthan
            </h3>

            <div className="relative block aspect-[4/3] xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Test" />
            </div>

            <p className="mt-9 leading-8">
              The Tirthan centre was started in September 2020. It is currently
              located in Sairopa village, right next to the GHNP office complex.
              Parth has been working here on ground. Volunteers have joined from
              time to time to help in the work.
            </p>

            <div className="mt-9">
              <Button
                text="Learn more"
                theme="Light"
                type="Primary"
                icon={<RightArrow />}
              />
            </div>
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
              The Resource Centre, Champawat
            </h3>

            <div className="relative block aspect-[4/3]  xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Test" />
            </div>

            <p className="mt-9 leading-8">
              Work has been going on in Champawat since 2021 when Madan, the
              project co-ordinator, decided to give up a promising career in
              Delhi and return to his native village to help the children there.
              This is when another member of our team came in touch with him and
              Madan became a part of the Srot family. He has been doing all this
              work from his own small home, such is the large-hearted Madan and
              we support his work.
            </p>

            <div className="mt-9">
              <Button
                text="Learn more"
                theme="Light"
                type="Primary"
                icon={<RightArrow />}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Centres
