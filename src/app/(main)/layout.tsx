import { Bitter } from "next/font/google"
import "./globals.css"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

import reader from "@/lib/keystatic"
import { KeystaticContentNotFoundError } from "@/lib/exceptions"

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-bitter",
})

export async function generateMetadata() {
  const config = await reader.singletons.config.read()
  const homepage = await reader.singletons.homepage.read()

  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }
  if (!homepage) {
    throw new KeystaticContentNotFoundError("Home Page Meta Data")
  }

  const { url, twitter, siteTitle } = config

  const title = `${homepage.metaTitle} | ${siteTitle}`
  const description = homepage.metaDescription

  return {
    title: {
      default: title,
      template: `%s ${siteTitle}`,
    },
    description,
    openGraph: {
      title,
      description,
      url: "/",
      siteName: siteTitle,
      type: "website",
    },
    twitter: {
      title,
      description,
      creator: twitter,
      card: "summary",
    },
    themeColor: "#FFF",
    alternates: {
      canonical: "/",
    },
  }
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="The Srot Foundation" />
      </head>
      <body className="font-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
