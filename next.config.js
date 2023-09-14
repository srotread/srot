/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/stats",
        destination:
          "https://umami.neeshsamsi.com/websites/13d7f4ef-b903-4188-b145-a416895e10ab",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
