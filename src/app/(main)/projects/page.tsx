import type { FC } from "react"
import Card from "@/components/Card"

const Projects: FC = () => {
  return (
    <main className="bg-light px-col-outer py-16 text-dark lg:px-col-inner lg:py-36">
      <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
        Our Projects
      </h1>

      <p className="my-9 text-lg 2xl:my-16 2xl:text-xl 3xl:text-2xl">
        Your support helps fund projects like:
      </p>

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
    </main>
  )
}

export default Projects
