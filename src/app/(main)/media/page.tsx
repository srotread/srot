import type { FC } from "react"
import ImageWithBorder from "@/components/ImageWithBorder"

const Media: FC = () => {
  return (
    <main className="bg-dark px-col-outer py-16 text-light lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        Srot Media
      </h1>

      <section>
        <h3 className="mt-12 text-[32px] font-medium md:text-4xl 2xl:mt-24 3xl:text-5xl">
          News & Events
        </h3>

        <p className="mt-6 text-lg leading-8 3xl:text-xl">
          Description for the above headline.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3">
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
            <p className="mt-4 text-base leading-8 3xl:text-lg">
              Optional caption for above media.
            </p>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mt-12 text-[32px] font-medium md:text-4xl 2xl:mt-24 3xl:text-5xl">
          News & Events
        </h3>

        <p className="mt-6 text-lg leading-8 3xl:text-xl">
          Description for the above headline.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3">
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
            <p className="mt-4 text-base leading-8 3xl:text-lg">
              Optional caption for above media.
            </p>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
          <div>
            <div className="apsect-4/3 relative h-80 w-full">
              <ImageWithBorder src="/hero.png" alt="alt" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Media
