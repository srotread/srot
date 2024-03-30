/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/stats",
        destination:
          "https://umami.neeshsamsi.com/websites/7be41c8e-6895-4385-acf2-95086f17a1e0",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
