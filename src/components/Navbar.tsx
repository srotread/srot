import * as config from "@/lib/config"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"
import reader from "@/lib/keystatic"

import Image from "next/image"
import Link from "next/link"

import Button from "./Button"
import NavLink from "./NavLink"

const { pages } = config

export default async function Navbar() {
  const settings = await reader.singletons.config.read()

  if (!settings) throw new KeystaticContentNotFoundError("Site Settings")

  const { logo } = settings

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between bg-light px-col-outer">
        <Link href="/">
          <div className="relative aspect-logo h-16 3xl:h-20">
            <Image
              src={logo}
              alt="Srot Foundation Logo"
              className="object-cover"
              fill
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links - hidden, flex from 2xl + */}
        <div
          className="hidden items-center gap-8 text-lg 2xl:flex
        3xl:text-xl"
        >
          {pages.map((page, i) => (
            <NavLink key={i} page={page} />
          ))}
          <Link href="/support">
            <Button text="Support Us" type="Primary" theme="Light" />
          </Link>
        </div>
      </nav>
    </>
  )
}
