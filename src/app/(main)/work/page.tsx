import type { FC } from "react"
import ImageWithBorder from "@/components/ImageWithBorder"
import Button from "@/components/Button"
import RightArrow from "@/components/Icons/RightArrow"
import Image from "next/image"
import LQuote from "@/components/Icons/LQuote"
import RQuote from "@/components/Icons/RQuote"
import Link from "next/link"

const Work: FC = () => {
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
            <p className="mt-9 text-xl lg:text-2xl 2xl:mt-16 2xl:text-3xl">
              If you find our work interesting and wish to work with us, here
              are a few ways you can get involved:
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-xl lg:text-2xl 2xl:mt-12 3xl:text-3xl"
            >
              <Button
                text="Get in touch"
                theme="Light"
                type="Primary"
                icon={<RightArrow />}
              />
            </Link>
          </div>
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 xl:block">
          <ImageWithBorder src="/hero.png" alt="Test" />
        </div>
      </main>

      <section className="px-col-outer py-16 lg:px-col-inner lg:py-36">
        <h3 className="text-[32px] font-bold md:text-4xl 3xl:text-5xl">
          How to get involved
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3">
          <div className="flex flex-col justify-between gap-12 overflow-hidden rounded bg-dark p-4 text-light">
            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Become an Associate Partner:
              </h6>
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Associate partners work with us on specific projects, conducting
                workshops based on their expertise, when they have time. They
                regularly offer their time to our projects. We do take time to
                decide upon an associate partner and usually between 6-8 months
                of a regular association is necessary to become an associate.
              </p>
            </div>
            <Link
              href="/contact?become=AssociatePartner"
              className="text-base md:text-lg 3xl:text-xl"
            >
              <Button
                text="Get in touch"
                theme="Dark"
                type="Secondary"
                icon={<RightArrow />}
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-12 overflow-hidden rounded bg-dark p-4 text-light">
            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Become a Volunteer:
              </h6>
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                If you are interested in the work we do, would like to work with
                us for a short period of time and offer your expertise, you
                could join us as a volunteer. A volunteer may offer a programme
                (such as a workshop) on his/her own.
              </p>
            </div>
            <Link
              href="/contact?become=Volunteer"
              className="text-base md:text-lg 3xl:text-xl"
            >
              <Button
                text="Get in touch"
                theme="Dark"
                type="Secondary"
                icon={<RightArrow />}
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-12 overflow-hidden rounded bg-dark p-4 text-light">
            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Become an Intern:
              </h6>
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                If you are a student and would like to join us to explore the
                work we do and gain some experience at the same time, you could
                intern with us. All interns who wish to work on-site will have
                to pay for their own stay and food. All interns will be given a
                certificate of internship upon completion of the internship.
              </p>
            </div>
            <Link
              href="/contact?become=Intern"
              className="text-base md:text-lg 3xl:text-xl"
            >
              <Button
                text="Get in touch"
                theme="Dark"
                type="Secondary"
                icon={<RightArrow />}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-col-outer py-16 lg:px-col-inner lg:py-36">
        <h3 className="text-[32px] font-bold md:text-4xl 3xl:text-5xl">
          What people say about Us
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
          <div className="flex flex-col gap-8 overflow-hidden rounded bg-dark p-4 text-center text-light">
            <div className="relative px-8 2xl:px-12">
              <div className="absolute -top-2 left-0 h-6 w-6 text-accent xl:h-8 xl:w-8">
                <LQuote />
              </div>
              <p className="inline-block text-lg font-light md:text-xl 3xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim
              </p>
              <div className="absolute -bottom-2 right-0 h-6 w-6 text-accent xl:h-8 xl:w-8">
                <RQuote />
              </div>
            </div>

            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-accent xl:h-28 xl:w-28">
              <Image src="/hero.png" alt="Alt" className="object-cover" fill />
            </div>

            <p className="inline-block text-center text-base md:text-lg 3xl:text-xl">
              Name Surname |{" "}
              <span className="text-accent">Title or Company</span>
            </p>
          </div>
          <div className="flex flex-col gap-8 overflow-hidden rounded bg-dark p-4 text-center text-light">
            <div className="relative px-8 2xl:px-12">
              <div className="absolute -top-2 left-0 h-6 w-6 text-accent xl:h-8 xl:w-8">
                <LQuote />
              </div>
              <p className="inline-block text-lg font-light md:text-xl 3xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim
              </p>
              <div className="absolute -bottom-2 right-0 h-6 w-6 text-accent xl:h-8 xl:w-8">
                <RQuote />
              </div>
            </div>

            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-accent xl:h-28 xl:w-28">
              <Image src="/hero.png" alt="Alt" className="object-cover" fill />
            </div>

            <p className="inline-block text-center text-base md:text-lg 3xl:text-xl">
              Name Surname |{" "}
              <span className="text-accent">Title or Company</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
