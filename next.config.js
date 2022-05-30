/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'development' ? false : true,
  basePath: '',
  images: {
    domains: ['http2.mlstatic.com'],
  },
}

module.exports = nextConfig
