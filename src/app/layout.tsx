import { Bitter } from "next/font/google"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./globals.css"

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-bitter",
})

export default function RootLayout({
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
