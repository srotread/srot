"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
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
          <Link
            href="/"
            className={`link-underline link-underline-black ${
              currentRoute === "/" && "link-active"
            }`}
          >
            Home
          </Link>
          <Link
            href="/story"
            className={`link-underline link-underline-black ${
              currentRoute === "/story" && "link-active"
            }`}
          >
            Our Story
          </Link>
          <Link
            href="/projects"
            className={`link-underline link-underline-black ${
              currentRoute === "/projects" && "link-active"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/workshops"
            className={`link-underline link-underline-black ${
              currentRoute === "/workshops" && "link-active"
            }`}
          >
            Workshops
          </Link>
          <Link
            href="/centres"
            className={`link-underline link-underline-black ${
              currentRoute === "/centres" && "link-active"
            }`}
          >
            Centres
          </Link>
          <Link
            href="/media"
            className={`link-underline link-underline-black ${
              currentRoute === "/media" && "link-active"
            }`}
          >
            Media
          </Link>
          <Link
            href="/team"
            className={`link-underline link-underline-black ${
              currentRoute === "/team" && "link-active"
            }`}
          >
            Team
          </Link>
          <Link
            href="/work"
            className={`link-underline link-underline-black ${
              currentRoute === "/work" && "link-active"
            }`}
          >
            Work with Us
          </Link>
          <Link
            href="/contact"
            className={`link-underline link-underline-black ${
              currentRoute === "/contact" && "link-active"
            }`}
          >
            Contact Us
          </Link>
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
          <Link
            href="/"
            className={`link-underline link-underline-black ${
              currentRoute === "/" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/story"
            className={`link-underline link-underline-black ${
              currentRoute === "/story" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/projects"
            className={`link-underline link-underline-black ${
              currentRoute === "/projects" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/workshops"
            className={`link-underline link-underline-black ${
              currentRoute === "/workshops" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Workshops
          </Link>
          <Link
            href="/centres"
            className={`link-underline link-underline-black ${
              currentRoute === "/centres" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Centres
          </Link>
          <Link
            href="/media"
            className={`link-underline link-underline-black ${
              currentRoute === "/media" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Media
          </Link>
          <Link
            href="/team"
            className={`link-underline link-underline-black ${
              currentRoute === "/team" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/work"
            className={`link-underline link-underline-black ${
              currentRoute === "/work" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Work with Us
          </Link>
          <Link
            href="/contact"
            className={`link-underline link-underline-black ${
              currentRoute === "/contact" && "link-active"
            }`}
            onClick={() => setIsHamburgerOpen(false)}
          >
            Contact Us
          </Link>
          <Link href="/support" onClick={() => setIsHamburgerOpen(false)}>
            <Button text="Support Us" type="Primary" theme="Dark" />
          </Link>
        </div>
      </nav>
    </>
  )
}
