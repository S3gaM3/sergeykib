/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Игнорируем папки с Angular проектами
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/portfolio/**', '**/web/**', '**/node_modules/**'],
    }
    return config
  },
}

module.exports = nextConfig
