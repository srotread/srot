import { type Viewport } from "next"

import { Bitter } from "next/font/google"
import Script from "next/script"
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FFF",
}

export async function generateMetadata() {
  const config = await reader.singletons.config.read()
  const homepage = await reader.singletons.homepage.read()

  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }
  if (!homepage) {
    throw new KeystaticContentNotFoundError("Home Page Meta Data")
  }

  const { metaTitle, metaDescription, backgroundImage } = homepage
  const { url, twitter, siteTitle } = config

  const title = `${metaTitle} | ${siteTitle}`
  const description = metaDescription

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s ${siteTitle}`,
    },
    description,
    openGraph: {
      title,
      description,
      images: [{ url: backgroundImage }],
      url,
      siteName: siteTitle,
      type: "website",
    },
    twitter: {
      title,
      description,
      creator: twitter,
      card: "summary",
    },
    alternates: {
      canonical: url,
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
        <meta name="author" content="The Srot Foundation" />
      </head>
      <Script
        strategy="lazyOnload"
        src="https://umami.neeshsamsi.com/script.js"
        data-website-id="1379d21e-dbb1-479b-87ba-f397fe488ea9"
      />
      <body className={`${bitter.variable} font-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
