/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/stats",
        destination:
          "https://umami.neeshsamsi.com/websites/1379d21e-dbb1-479b-87ba-f397fe488ea9",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
