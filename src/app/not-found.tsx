"use client"

import { Bitter } from "next/font/google"
import "./(main)/globals.css"

import Button from "@/components/Button"
import Link from "next/link"

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-bitter",
})

const title = "404 - Page not found"
const description =
  "404 - This page does not exist. If you think this is a mistake kindly reach out to us."

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary",
  },
  themeColor: "#FFF",
}

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="The Srot Foundation" />
      </head>
      <body className="font-primary">
        <main className="relative bg-light px-col-outer text-center text-dark lg:px-col-inner">
          <h1 className="pt-28 text-4xl font-bold underline decoration-accent md:text-5xl lg:pt-40  2xl:text-6xl 3xl:text-7xl">
            404 - This page could not be found
          </h1>
          <p className="mb-8 mt-10 text-xl md:mb-14 md:mt-16 md:text-2xl 2xl:text-3xl">
            We&rsquo;re so sorry but it looks like this page does not exist. If
            you think this is a mistake, kindly reach out to us through the
            Contact page. For now, consider going
          </p>
          <div className="flex flex-row items-center justify-center gap-8 pb-[60%] text-lg md:text-xl 2xl:pb-[50%] 2xl:text-2xl">
            <Link href="/">
              <Button
                text="Back to the Homepage"
                type="Primary"
                theme="Light"
              />
            </Link>
            <Link href="/contact">
              <Button text="Reach out" type="Secondary" theme="Light" />
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
