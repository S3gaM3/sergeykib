/**
 * Генерирует .ico из .svg с прозрачным фоном
 * logo1: logo2.svg -> logo1.ico
 * logo2: logo1.svg -> logo2.ico
 * Запуск: node scripts/generate-favicon.mjs [logo1|logo2]
 */
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const imgDir = path.join(root, 'public/assets/img')
const assetsDir = path.join(root, 'public/assets')

const presets = {
  logo1: { svg: path.join(imgDir, 'logo2.svg'), ico: path.join(imgDir, 'logo1.ico'), sizes: [16, 32, 48] },
  logo2: { svg: path.join(imgDir, 'logo1.svg'), ico: path.join(imgDir, 'logo2.ico'), sizes: [16, 32, 48] },
  favicon: { svg: path.join(assetsDir, 'favicon.svg'), ico: path.join(assetsDir, 'favicon.ico'), sizes: [16, 32, 48, 120] }
}

async function generate(svgPath, icoPath, sizes = [16, 32, 48]) {
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(svgPath)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  )
  const icoBuffer = await pngToIco(pngBuffers)
  fs.writeFileSync(icoPath, icoBuffer)
  console.log('Создан:', icoPath)
}

async function main() {
  const preset = process.argv[2] || 'logo1'
  const config = presets[preset]
  if (!config) {
    console.error('Использование: node generate-favicon.mjs [logo1|logo2|favicon]')
    process.exit(1)
  }
  await generate(config.svg, config.ico, config.sizes)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
