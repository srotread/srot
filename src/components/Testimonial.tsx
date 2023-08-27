import type { FC } from "react"
import Image from "next/image"
import LQuote from "./Icons/LQuote"
import RQuote from "./Icons/RQuote"

type Props = {
  quote: string
  imgSrc: string
  imgAlt: string
  name: string
  title: string
}

const Testimonial: FC<Props> = ({ quote, imgSrc, imgAlt, name, title }) => {
  return (
    <div className="flex flex-col gap-10 overflow-hidden rounded bg-dark px-10 py-8 text-center text-light">
      <div className="relative px-8 2xl:px-12">
        <div className="absolute -top-2 left-0 h-6 w-6 text-accent xl:h-8 xl:w-8">
          <LQuote />
        </div>
        <p className="inline-block text-lg font-light md:text-xl 3xl:text-2xl">
          {quote}
        </p>
        <div className="absolute -bottom-2 right-0 h-6 w-6 text-accent xl:h-8 xl:w-8">
          <RQuote />
        </div>
      </div>

      <div className="mx-auto flex items-center gap-4">
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="h-16 w-16 rounded-full border-2 border-accent object-cover xl:h-20 xl:w-20"
          width={80}
          height={80}
        />

        <p className="flex flex-col items-start gap-1 text-base md:text-lg 3xl:text-xl">
          <span>{name}</span>
          <span className="text-accent">{title}</span>
        </p>
      </div>
    </div>
  )
}

export default Testimonial
