import type { FC } from "react"
import type { ButtonType } from "./Button"
import Image from "next/image"
import Button from "./Button"
import Link from "next/link"

type CardProps = {
  type: "Project" | "Workshop"
  img: string
  alt: string
  title: string
  description: string
  btnType: ButtonType
  btnTxt?: string
  slug: string
}

const Card: FC<CardProps> = ({
  type,
  img,
  alt,
  title,
  description,
  btnType,
  btnTxt,
  slug,
}) => {
  return (
    <>
      <div
        className={`flex flex-col ${
          type === "Workshop" && "xl:flex-row"
        } rounded bg-dark text-light transition-all duration-200 hover:shadow-solid-accent`}
      >
        <div
          className={`relative h-80 3xl:h-96 ${
            type === "Workshop" && "xl:h-96 xl:w-96"
          }  overflow-hidden `}
        >
          <Image
            src={img}
            alt={alt}
            className={`rounded-t ${
              type === "Workshop" && "xl:rounded-l"
            } object-cover`}
            sizes="100vw"
            fill
          />
        </div>
        <div className="flex grow flex-col justify-between gap-4 p-7">
          <div className="flex flex-col gap-4">
            <div className="h-1 w-24 rounded-[1px] bg-accent" />
            <h6 className="text-xl font-bold 2xl:text-2xl">{title}</h6>
            <p className="max-w-xl text-base md:text-lg 3xl:text-xl">
              {description}
            </p>
          </div>

          <Link
            href={slug}
            className="text-base md:text-lg 3xl:text-xl"
          >
            <Button text={btnTxt || "Learn more"} type={btnType} theme="Dark" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card
