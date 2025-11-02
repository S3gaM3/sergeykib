# Настройка Telegram-бота для GitHub Pages через Serverless функции

## Вариант 1: Использование Vercel (Рекомендуется)

Vercel бесплатно поддерживает serverless функции и легко интегрируется с GitHub.

### Шаг 1: Подключение репозитория к Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Выберите ваш репозиторий `sergeykib`
5. Vercel автоматически определит Next.js проект

### Шаг 2: Настройка переменных окружения

В настройках проекта Vercel:
1. Перейдите в **Settings** → **Environment Variables**
2. Добавьте:
   - `TELEGRAM_BOT_TOKEN` = `8138334337:AAHux3K_OPgr4jpkyb3Tm5mMOjy2z3cyW_w`
   - `TELEGRAM_CHAT_ID` = `873320985`
3. Сохраните

### Шаг 3: Деплой

Vercel автоматически задеплоит проект после каждого push. После деплоя:
1. Скопируйте URL вашего проекта на Vercel (например: `https://sergeykib.vercel.app`)
2. Обновите форму, указав этот URL

### Шаг 4: Обновление формы для использования Vercel API

В файле `.env.local` (для разработки) или через переменные окружения Vercel:

```env
NEXT_PUBLIC_TELEGRAM_API_URL=https://ваш-проект.vercel.app/api/telegram
```

Или обновите `app/components/ContactForm.tsx` напрямую, заменив:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_TELEGRAM_API_URL || '/api/contact'
```
на:
```typescript
const apiUrl = 'https://ваш-проект.vercel.app/api/telegram'
```

---

## Вариант 2: Использование Netlify

### Шаг 1: Подключение к Netlify

1. Зайдите на [netlify.com](https://netlify.com)
2. Войдите через GitHub
3. Нажмите "Add new site" → "Import an existing project"
4. Выберите репозиторий

### Шаг 2: Настройка Build

- Build command: `npm run build`
- Publish directory: `out`

### Шаг 3: Настройка переменных окружения

1. Перейдите в **Site settings** → **Environment variables**
2. Добавьте:
   - `TELEGRAM_BOT_TOKEN` = `8138334337:AAHux3K_OPgr4jpkyb3Tm5mMOjy2z3cyW_w`
   - `TELEGRAM_CHAT_ID` = `873320985`

### Шаг 4: Обновление формы

Измените URL в форме на Netlify endpoint:
```typescript
const apiUrl = 'https://ваш-проект.netlify.app/.netlify/functions/telegram'
```

---

## Вариант 3: Использование GitHub Actions + Прямой вызов (Упрощенный)

Если не хотите использовать внешние сервисы, можно использовать прямое обращение к Telegram API. **Внимание:** токен будет виден в коде клиента.

### Обновление формы для прямого вызова:

Обновите `app/components/ContactForm.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('loading')
  setErrorMessage('')

  try {
    // Прямой вызов Telegram API через прокси или напрямую
    const BOT_TOKEN = '8138334337:AAHux3K_OPgr4jpkyb3Tm5mMOjy2z3cyW_w'
    const CHAT_ID = '873320985'

    // Формируем сообщение
    const message = `📩 <b>Новое сообщение с сайта</b>\n\n` +
      `👤 <b>Имя:</b> ${formData.name}\n` +
      `📞 <b>Контакт:</b> ${formData.contact}\n\n` +
      `💬 <b>Сообщение:</b>\n${formData.message}`

    // Используем CORS proxy для обхода ограничений
    const proxyUrl = 'https://api.allorigins.win/raw?url='
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
    
    const response = await fetch(proxyUrl + encodeURIComponent(telegramUrl), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    })
    
    // ... остальной код
  }
}
```

**Недостаток:** Токен будет виден в исходном коде. Рекомендуется использовать Вариант 1 или 2.

---

## Рекомендуемое решение: Vercel + GitHub Pages

1. **Деплой основного сайта** на GitHub Pages (через GitHub Actions)
2. **Деплой API** на Vercel (для serverless функций)
3. **Обновить форму** для использования Vercel endpoint

Это даст:
- ✅ Бесплатный хостинг сайта на GitHub Pages
- ✅ Бесплатный API на Vercel (100GB bandwidth)
- ✅ Безопасное хранение токенов
- ✅ Автоматический деплой через GitHub Actions

