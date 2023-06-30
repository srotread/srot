import { KeystaticContentNotFoundError } from "@/lib/exceptions"
import reader from "@/lib/keystatic"

export async function generateMetadata() {
  const config = await reader.singletons.config.read()
  if (!config) {
    throw new KeystaticContentNotFoundError("Site Settings")
  }

  return {
    metatdataBase: new URL(config.url),
  }
}

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
      <body>{children}</body>
    </html>
  )
}
