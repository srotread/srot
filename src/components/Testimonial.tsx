import Image from "next/image"
import LQuote from "./Icons/LQuote"
import RQuote from "./Icons/RQuote"

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-8 overflow-hidden rounded bg-dark p-4 text-center text-light">
      <div className="relative px-8 2xl:px-12">
        <div className="absolute -top-2 left-0 h-6 w-6 text-accent xl:h-8 xl:w-8">
          <LQuote />
        </div>
        <p className="inline-block text-lg font-light md:text-xl 3xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim
        </p>
        <div className="absolute -bottom-2 right-0 h-6 w-6 text-accent xl:h-8 xl:w-8">
          <RQuote />
        </div>
      </div>

      <div className="flex items-center mx-auto gap-4">
        <Image
          src="/hero.png"
          alt="Alt"
          className="object-cover rounded-full border-2 border-accent h-16 xl:h-20 w-16 xl:w-20"
          width={80}
          height={80}
        />

        <p className="flex flex-col items-start text-base md:text-lg 3xl:text-xl gap-2">
          <span>Name Surname</span>
          <span className="text-accent">Title or Company</span>
        </p>
      </div>
    </div>
  )
}

export default Testimonial
