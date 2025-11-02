# Исправление ошибки "Method not allowed"

Если вы получаете ошибку `{"error":"Method not allowed"}`, проверьте следующее:

## Проверка 1: Правильный URL endpoint

Убедитесь, что используется правильный путь:
- ✅ `https://sergeykib-telegram-api.vercel.app/api/telegram-simple`
- ❌ `https://sergeykib-telegram-api.vercel.app/` (корень не работает)

## Проверка 2: Структура файлов в репозитории

На Vercel файл должен быть в правильном месте:
```
ваш-репозиторий/
  └── api/
      └── telegram-simple.js
```

## Проверка 3: Формат функции

Функция должна экспортироваться как default:
```javascript
export default async function handler(req, res) {
  // ...
}
```

## Проверка 4: Переменные окружения

В Vercel должны быть настроены:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

После добавления переменных выполните **Redeploy** проекта.

## Проверка 5: Тестирование endpoint

Проверьте endpoint через curl:
```bash
curl -X POST https://sergeykib-telegram-api.vercel.app/api/telegram-simple \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","contact":"test@test.com","message":"Test message"}'
```

Если получаете ошибку, проверьте логи в Vercel Dashboard → Functions → Logs.

## Быстрое решение

1. Откройте Vercel Dashboard
2. Перейдите в проект `sergeykib-telegram-api`
3. Проверьте **Functions** → там должна быть функция `/api/telegram-simple`
4. Проверьте **Environment Variables** → должны быть токены
5. Если все правильно, выполните **Redeploy**

