import Link from "next/link"
import Button from "./Button"
import Facebook from "./Icons/Facebook"
import Instagram from "./Icons/Instagram"

export default function Footer() {
  return (
    <footer className="flex flex-col bg-dark px-col-outer pt-32 pb-24 text-lg text-light ">
      <div className="mb-24 flex flex-col flex-wrap items-center justify-between gap-12 text-center md:flex-row md:items-start md:text-start">
        <div>
          <h6 className="mb-6 text-xl">Regd. Address</h6>
          <address className="w-[25ch] font-light">
            FL-A-802, The Latitude, New Heaven Park-II, SN-18, HN-6, Kondhwa,
            NIBM road, Pune 411048
          </address>
        </div>

        <div>
          <h6 className="mb-6 text-xl">Contact</h6>
          <a
            href="mailto:info@thesrotfoundation.org"
            className="mb-1 inline-block text-accent hover:underline"
          >
            info@thesrotfoundation.org
          </a>
          <p>+91 9823050570 / +91 8208061771</p>
        </div>

        <div>
          <h6 className="mb-6 text-xl">Socials</h6>
          <div className="flex gap-2">
            <Link
              href="https://ig.me/srotread"
              target="_blank"
              className="h-12 w-12 text-accent transition-all hover:text-light"
            >
              <Instagram />
            </Link>
            <Link
              href="https://fb.me/srotread"
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
          <Link href="/workshops" className="hover:text-accent hover:underline">
            Workshops
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
          href="/"
          className="text-accent underline transition-all hover:text-light"
        >
          Privacy Policy
        </Link>
        <span className="hidden md:inline-block">|</span>
        <Link
          href="/"
          className="text-accent underline transition-all hover:text-light"
        >
          Terms of Service
        </Link>
        <span className="hidden md:inline-block">|</span>
        <Link
          href="/"
          className="text-accent underline transition-all hover:text-light"
        >
          Refund Policy
        </Link>
      </div>
    </footer>
  )
}
