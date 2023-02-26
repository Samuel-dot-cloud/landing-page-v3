/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'play.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/resource',
    })
    return config
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
