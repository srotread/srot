import Link from "next/link"

import Button from "./Button"
import Facebook from "./Icons/Facebook"
import Instagram from "./Icons/Instagram"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

export default async function Footer() {
  const settings = await reader.singletons.config.read()

  if (!settings) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }

  const { address, email, numbers, instagram, facebook } = settings

  return (
    <footer className="flex flex-col bg-dark px-col-outer pt-32 space-y-24 pb-24 text-lg text-light ">
      <div className="flex flex-col flex-wrap items-center justify-between gap-12 text-center md:flex-row md:items-start md:text-start">
        <div>
          <h6 className="mb-6 text-xl">Regd. Address</h6>
          <address className="w-[25ch] font-light">{address}</address>
        </div>

        <div>
          <h6 className="mb-6 text-xl">Contact</h6>
          <a
            href="mailto:info@thesrotfoundation.org"
            className="mb-1 inline-block text-accent hover:underline"
          >
            {email}
          </a>
          <p>{numbers}</p>
        </div>

        <div>
          <h6 className="mb-6 text-xl">Socials</h6>
          <div className="flex gap-2">
            <Link
              aria-label="Srot Instagram page"
              href={instagram}
              target="_blank"
              className="h-12 w-12 text-accent transition-all hover:text-light"
            >
              <Instagram />
            </Link>
            <Link
              aria-label="Srot Facebook page"
              href={facebook}
              target="_blank"
              className="h-12 w-12 text-accent transition-all hover:text-light"
            >
              <Facebook />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/" className="hover:text-accent hover:underline">
            Home
          </Link>
          <Link href="/story" className="hover:text-accent hover:underline">
            Our Story
          </Link>
          <Link href="/projects" className="hover:text-accent hover:underline">
            Projects
          </Link>
          <Link href="/centres" className="hover:text-accent hover:underline">
            Centres
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/media" className="hover:text-accent hover:underline">
            Media
          </Link>
          <Link href="/team" className="hover:text-accent hover:underline">
            Team
          </Link>
          <Link href="/work" className="hover:text-accent hover:underline">
            Work with Us
          </Link>
          <Link href="/contact" className="hover:text-accent hover:underline">
            Contact Us
          </Link>
          <Link href="/support">
            <Button text="Support Us" type="Primary" theme="Dark" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 text-base md:flex-row md:gap-4 md:text-lg">
        <Link
          href="/privacy-policy"
          className="text-accent underline transition-all hover:text-light"
        >
          Privacy Policy
        </Link>
        <span className="hidden md:inline-block">|</span>
        <Link
          href="/terms-of-service"
          className="text-accent underline transition-all hover:text-light"
        >
          Terms of Service
        </Link>
        <span className="hidden md:inline-block">|</span>
        <Link
          href="/refund-policy"
          className="text-accent underline transition-all hover:text-light"
        >
          Refund Policy
        </Link>
      </div>

      <p className="text-base md:flex-row md:gap-4 md:text-lg block text-center">
        Built with ❤️ by{" "}
        <Link href="/" className="pl-2 text-accent">
          Neesh Samsi
        </Link>
      </p>
    </footer>
  )
}
