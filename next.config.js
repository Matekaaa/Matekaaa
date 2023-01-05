/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'days.pravoslavie.ru',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig