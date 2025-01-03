/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/app',
        destination: 'https://your-web-app-url.com', // Replace with your web app URL
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 