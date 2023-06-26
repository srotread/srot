"use client"

import Link from "next/link"
import { useState } from "react"

import Button from "./Button"
import NavLink from "./NavLink"

const MobileNavElements = ({
  pages,
}: {
  pages: {
    name: string
    path: string
  }[]
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const handleHamburger = () => {
    setIsHamburgerOpen((prevState) => !prevState)
  }
  return (
    <>
      {/* Hamburger Menu */}
      <button
        aria-label={isHamburgerOpen ? "Close menu" : "Open menu"}
        onClick={handleHamburger}
        className="z-10 2xl:hidden"
      >
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
        {pages.map((page, i) => (
          <NavLink key={i} page={page} />
        ))}
        <Link href="/support" onClick={() => setIsHamburgerOpen(false)}>
          <Button text="Support Us" type="Primary" theme="Dark" />
        </Link>
      </div>
    </>
  )
}

export default MobileNavElements
