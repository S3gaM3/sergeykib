# Быстрая настройка Vercel для Telegram формы

## Шаг 1: Создание проекта на Vercel (2 минуты)

1. Перейдите на [vercel.com](https://vercel.com) и войдите через GitHub
2. Нажмите **"Add New Project"**
3. Выберите репозиторий `sergeykib`
4. В настройках проекта:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (корень)
   - **Build Command:** `npm run build` (оставьте как есть)
   - **Output Directory:** `out` (важно для статического экспорта)

## Шаг 2: Настройка переменных окружения

В настройках проекта Vercel:
1. Перейдите в **Settings** → **Environment Variables**
2. Добавьте две переменные:

   **Переменная 1:**
   - Key: `TELEGRAM_BOT_TOKEN`
   - Value: `8138334337:AAHux3K_OPgr4jpkyb3Tm5mMOjy2z3cyW_w`
   - Environment: Production, Preview, Development

   **Переменная 2:**
   - Key: `TELEGRAM_CHAT_ID`
   - Value: `873320985`
   - Environment: Production, Preview, Development

3. Нажмите **Save**

## Шаг 3: Настройка деплоя для serverless функции

**Важно:** Vercel нужно настроить так, чтобы он деплоил только API функцию, а не весь Next.js проект.

### Вариант A: Отдельный репозиторий для API (Рекомендуется)

Создайте отдельный минимальный репозиторий только для serverless функции:

1. Создайте новый репозиторий на GitHub (например: `sergeykib-telegram-api`)
2. Скопируйте туда только файл `api/telegram-simple.js`
3. Добавьте файл `package.json`:
   ```json
   {
     "name": "telegram-api",
     "version": "1.0.0",
     "main": "api/telegram-simple.js"
   }
   ```
4. Задеплойте этот репозиторий на Vercel
5. Получите URL (например: `https://sergeykib-telegram-api.vercel.app/api/telegram-simple`)
6. Обновите `ContactFormSimple.tsx` с этим URL

### Вариант B: Использовать текущий репозиторий

1. В Vercel настройте:
   - **Root Directory:** `./`
   - Создайте файл `vercel.json` в корне (уже есть)
2. Vercel автоматически найдет `api/telegram-simple.js` и задеплоит как serverless функцию
3. URL будет: `https://ваш-проект.vercel.app/api/telegram-simple`

## Шаг 4: Обновление формы

После получения URL от Vercel, обновите файл `app/components/ContactFormSimple.tsx`:

Найдите строку:
```typescript
const API_URL = process.env.NEXT_PUBLIC_TELEGRAM_API_URL || 
  'https://sergeykib-telegram.vercel.app/api/telegram-simple'
```

Замените URL на ваш реальный URL от Vercel.

Или добавьте переменную окружения в GitHub Actions:
```yaml
NEXT_PUBLIC_TELEGRAM_API_URL: https://ваш-проект.vercel.app/api/telegram-simple
```

## Шаг 5: Тестирование

1. Откройте ваш сайт на GitHub Pages
2. Найдите форму в разделе контактов
3. Заполните и отправьте тестовое сообщение
4. Проверьте Telegram - сообщение должно прийти

## Альтернатива: Использовать существующий endpoint

Если у вас уже есть Vercel проект, можно просто:
1. Добавить файл `api/telegram-simple.js` в ваш проект
2. Задеплоить проект
3. Endpoint будет доступен по адресу: `https://ваш-проект.vercel.app/api/telegram-simple`

## Проверка работы

После деплоя проверьте endpoint:
```bash
curl -X POST https://ваш-проект.vercel.app/api/telegram-simple \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","contact":"test@test.com","message":"Test message"}'
```

Если всё работает, вы получите ответ:
```json
{"success":true,"message":"Сообщение успешно отправлено"}
```

