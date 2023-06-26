"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ page }: { page: { name: string; path: string } }) => {
  const currentRoute = usePathname()

  return (
    <Link
      href={page.path}
      className={`link-underline link-underline-black ${
        currentRoute === page.path && "link-active"
      }`}
    >
      {page.name}
    </Link>
  )
}

export default NavLink
