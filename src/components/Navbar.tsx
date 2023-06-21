"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import * as config from "@/lib/config"
import Button from "./Button"

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const handleHamburger = ({}) => {
    setIsHamburgerOpen((prevState) => !prevState)
  }

  const currentRoute = usePathname()

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between bg-light px-col-outer">
        <Link href="/">
          <div className="relative aspect-logo h-16 3xl:h-20">
            <Image
              src="/logotype.png"
              alt="Srot Foundation Logo Type"
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
          {config.pages.map((page, i) => (
            <Link
              key={i}
              href={page.path}
              className={`link-underline link-underline-black ${
                currentRoute === page.path && "link-active"
              }`}
            >
              {page.name}
            </Link>
          ))}
          <Link href="/support">
            <Button text="Support Us" type="Primary" theme="Light" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button onClick={handleHamburger} className="z-10 2xl:hidden">
          <div
            className={`tham ${
              isHamburgerOpen && "tham-active"
            } display tham-e-spin tham-w-8`}
          >
            <div className="tham-box">
              <div
                className={`tham-inner ${
                  isHamburgerOpen ? "bg-light" : "bg-dark"
                }`}
              ></div>
            </div>
          </div>
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={`${
            isHamburgerOpen
              ? "pointer-events-auto top-0 opacity-100"
              : "pointer-events-none -top-full opacity-0"
          } fixed left-0 right-0 z-0 flex h-screen w-full flex-col items-center gap-5 bg-dark pt-32 text-xl text-light transition-all duration-300 md:pt-40 md:text-2xl lg:gap-9 2xl:hidden`}
        >
          {config.pages.map((page, i) => (
            <Link
              key={i}
              href={page.path}
              onClick={() => setIsHamburgerOpen(false)}
              className={`link-underline link-underline-black ${
                currentRoute === page.path && "link-active"
              }`}
            >
              {page.name}
            </Link>
          ))}
          <Link href="/support" onClick={() => setIsHamburgerOpen(false)}>
            <Button text="Support Us" type="Primary" theme="Dark" />
          </Link>
        </div>
      </nav>
    </>
  )
}
