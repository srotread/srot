import type { FC } from "react"
import Link from "next/link"
import ImageWithBorder from "@/components/ImageWithBorder"
import Button from "@/components/Button"

const Support: FC = () => {
  return (
    <>
      <main className="flex items-center justify-between gap-8 bg-light px-col-outer py-16 text-dark lg:py-36 lg:pl-col-inner lg:pr-col-inner xl:pr-0">
        <div>
          <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
            Work with Us
          </h1>

          <div className="xl:w-[60ch]">
            <div className="relative mt-10 block aspect-[4/3] xl:hidden">
              <ImageWithBorder src="/hero.png" alt="Story page hero img" />
            </div>
            <div className="mt-9 grid grid-cols-3 text-base font-extralight sm:text-xl lg:text-2xl 2xl:mt-16 2xl:text-3xl">
              <div className="flex flex-col">
                <p>Join</p>
                <p className="text-3xl font-bold sm:mb-2 sm:text-4xl lg:text-5xl 2xl:text-6xl">
                  30
                </p>
                <p>Supporters</p>
              </div>
              <div className="flex flex-col">
                <p>Help run</p>
                <p className="text-3xl font-bold sm:mb-2 sm:text-4xl lg:text-5xl 2xl:text-6xl">
                  2
                </p>
                <p>Centres</p>
              </div>
              <div className="flex flex-col">
                <p>Nurture</p>
                <p className="text-3xl font-bold sm:mb-2 sm:text-4xl lg:text-5xl 2xl:text-6xl">
                  30
                </p>
                <p>Local Students</p>
              </div>
            </div>
            <p className="mt-9 text-xl lg:text-2xl 2xl:mt-16 2xl:text-3xl">
              Your support is invaluable to us in our work. We deeply appreciate
              it!
            </p>
            <Link
              href="/donate"
              className="mt-8 inline-block text-xl lg:text-2xl 2xl:mt-12 3xl:text-3xl"
            >
              <Button text="Donate now" theme="Light" type="Primary" />
            </Link>
          </div>
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 xl:block">
          <ImageWithBorder src="/hero.png" alt="Test" />
        </div>
      </main>
    </>
  )
}

export default Support
