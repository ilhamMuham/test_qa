const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
// next.config.js
const plugins = [
  withImages,
  nextConfig
]
module.exports = withPlugins([...plugins], {
  webpack: (config) => {
    const conf = config
    return conf
  },
  images: {
    disableStaticImages: true
  }
})
