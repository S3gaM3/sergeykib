/**
 * Конвертирует все jpg/jpeg/png в public/assets/img в webp и удаляет оригиналы.
 * Запуск: node scripts/convert-to-webp.js
 * Требует: npm install sharp --save-dev
 */

const fs = require('fs')
const path = require('path')

const IMG_DIR = path.join(__dirname, '../public/assets/img')
const EXTS = ['.jpg', '.jpeg', '.png']

async function convertToWebp() {
  let sharp
  try {
    sharp = require('sharp')
  } catch (e) {
    console.error('Установите sharp: npm install sharp --save-dev')
    process.exit(1)
  }

  function walk(dir) {
    const files = []
    if (!fs.existsSync(dir)) return files
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name)
      if (fs.statSync(full).isDirectory()) {
        files.push(...walk(full))
      } else {
        files.push(full)
      }
    }
    return files
  }

  const all = walk(IMG_DIR)
  const toConvert = all.filter((f) => EXTS.includes(path.extname(f).toLowerCase()))

  for (const file of toConvert) {
    const ext = path.extname(file)
    const webpPath = file.slice(0, -ext.length) + '.webp'
    try {
      await sharp(file).webp({ quality: 85 }).toFile(webpPath)
      fs.unlinkSync(file)
      console.log(`OK: ${path.relative(IMG_DIR, file)} → ${path.basename(webpPath)}`)
    } catch (err) {
      console.error(`Ошибка ${file}:`, err.message)
    }
  }

  console.log(`Готово. Обработано: ${toConvert.length} файлов.`)
}

convertToWebp()
