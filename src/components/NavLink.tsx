"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"a"> {
  page: { readonly text: string; readonly path: string }
}

const NavLink = ({ page, ...props }: Props) => {
  const currentRoute = usePathname()

  return (
    <Link
      href={page.path}
      className={`link-underline link-underline-black ${
        currentRoute === page.path && "link-active"
      }`}
      {...props}
    >
      {page.text}
    </Link>
  )
}

export default NavLink
