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
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Копируем CNAME файл в out директорию для GitHub Pages
  async afterExport() {
    const fs = require('fs')
    const path = require('path')
    const cnamePath = path.join(__dirname, 'CNAME')
    const outCnamePath = path.join(__dirname, 'out', 'CNAME')
    
    if (fs.existsSync(cnamePath)) {
      fs.copyFileSync(cnamePath, outCnamePath)
      console.log('✅ CNAME файл скопирован в out/')
    }
    
    // Создаем .nojekyll файл для GitHub Pages
    const nojekyllPath = path.join(__dirname, 'out', '.nojekyll')
    fs.writeFileSync(nojekyllPath, '')
    console.log('✅ .nojekyll файл создан')
  },
}

module.exports = nextConfig
