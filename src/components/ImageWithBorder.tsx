import type { FC } from "react"
import Image from "next/image"

interface ImgWBorderProps {
  src: string
  alt: string
}

const ImageWithBorder: FC<ImgWBorderProps> = ({ src, alt }) => {
  return (
    <>
      <div className="peer absolute -bottom-1 -left-1 h-full w-full bg-accent" />
      <Image
        src={src}
        alt={alt}
        className="pointer-events-none object-cover transition-transform peer-hover:translate-x-1 peer-hover:-translate-y-1"
        fill
      />
    </>
  )
}

export default ImageWithBorder
