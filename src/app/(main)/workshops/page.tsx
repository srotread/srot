import type { FC } from "react"
import Card from "@/components/Card"

const Workshops: FC = () => {
  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        Our Workshops
      </h1>

      <p className="my-9 text-lg 2xl:my-16 2xl:text-xl 3xl:text-2xl">
        The efforts of our volunteers help facilitate workshops like:
      </p>

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
    </main>
  )
}

export default Workshops
