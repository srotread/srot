import type { FC } from "react"
import Image from "next/image"

const Team: FC = () => {
  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        Our Team
      </h1>

      <section>
        <h3 className="mt-12 text-[32px] font-bold md:text-4xl 2xl:mt-24 3xl:text-5xl">
          Founders
        </h3>

        <p className="mt-6 text-lg leading-8 3xl:text-xl">
          For them their work is a logical extension of their own lives.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3">
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mt-12 text-[32px] font-bold md:text-4xl 2xl:mt-24 3xl:text-5xl">
          Co-ordinators:
        </h3>

        {/* <p className="mt-6 text-lg leading-8 3xl:text-xl">
          For them their work is a logical extension of their own lives.
        </p> */}

        <div className="mt-6 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3">
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mt-12 text-[32px] font-bold md:text-4xl 2xl:mt-24 3xl:text-5xl">
          Associate partners:
        </h3>

        {/* <p className="mt-6 text-lg leading-8 3xl:text-xl">
          For them their work is a logical extension of their own lives.
        </p> */}

        <div className="mt-6 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 2xl:grid-cols-3">
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-dark p-4 text-light">
            <div className="relative mb-4 aspect-[4/3] w-full rounded">
              <Image
                src="/hero.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-1 w-24 rounded-[1px] bg-accent" />
              <h6 className="text-xl font-bold 2xl:text-2xl">
                Founder&rsquo;s Name
              </h6>
              <p className="text-lg 3xl:text-xl">Founder&rsquo;s title.</p>
              <hr />
              <p className="text-base font-light md:text-lg 3xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam non nulla, modi suscipit, dolorem beatae ex optio
                consectetur explicabo magnam quisquam. Ipsa voluptatum, cum quo
                earum molestiae, repudiandae minus sed, dicta ex temporibus
                provident placeat!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Team
