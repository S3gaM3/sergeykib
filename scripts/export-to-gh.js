const fs = require('fs');
const path = require('path');

// Путь к папке out и корню репозитория
const outDir = path.join(__dirname, '../out');
const rootDir = path.join(__dirname, '../');

// Файлы, которые нужно оставить в корне (не перезаписывать)
const keepFiles = [
  '.git',
  '.github',
  'node_modules',
  '.gitignore',
  'README.md',
  'README-NEXTJS.md',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'next.config.js',
  'app',
  'public',
  'scripts',
  '.next',
  'out',
];

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function clearRoot(rootDir, keepFiles) {
  const items = fs.readdirSync(rootDir);
  
  items.forEach((item) => {
    const itemPath = path.join(rootDir, item);
    
    if (!keepFiles.includes(item)) {
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        fs.rmSync(itemPath, { recursive: true, force: true });
        console.log(`Удалена папка: ${item}`);
      } else {
        fs.unlinkSync(itemPath);
        console.log(`Удален файл: ${item}`);
      }
    }
  });
}

function deploy() {
  console.log('🚀 Начинаю экспорт в корень репозитория...');
  
  if (!fs.existsSync(outDir)) {
    console.error('❌ Папка out/ не найдена! Запустите сначала: npm run build');
    process.exit(1);
  }

  // Очищаем корень от старых файлов (кроме важных)
  console.log('🧹 Очистка корня репозитория...');
  clearRoot(rootDir, keepFiles);

  // Копируем файлы из out в корень
  console.log('📦 Копирование файлов из out/ в корень...');
  const items = fs.readdirSync(outDir);
  
  items.forEach((item) => {
    const src = path.join(outDir, item);
    const dest = path.join(rootDir, item);
    
    if (fs.statSync(src).isDirectory()) {
      copyRecursive(src, dest);
      console.log(`✅ Скопирована папка: ${item}`);
    } else {
      fs.copyFileSync(src, dest);
      console.log(`✅ Скопирован файл: ${item}`);
    }
  });

  console.log('✅ Экспорт завершен! Теперь можно коммитить и пушить изменения.');
  console.log('');
  console.log('Следующие шаги:');
  console.log('1. git add .');
  console.log('2. git commit -m "Deploy to GitHub Pages"');
  console.log('3. git push origin main');
}

deploy();
