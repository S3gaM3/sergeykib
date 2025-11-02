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
    // Игнорируем папки с Angular проектами и serverless функциями
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/portfolio/**', '**/web/**', '**/node_modules/**', '**/netlify/**', '**/api/**'],
    }
    
    // Исключаем serverless функции из сборки
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    
    // Игнорируем файлы для Netlify/Vercel при сборке
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
      }
    }
    
    return config
  },
  
  // Исключаем файлы из проверки TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Исключаем определенные файлы из сборки
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

module.exports = nextConfig
