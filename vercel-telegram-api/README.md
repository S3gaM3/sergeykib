# Telegram API для формы обратной связи

Простой serverless endpoint для отправки сообщений в Telegram через Vercel.

## Быстрая настройка

1. **Создайте новый репозиторий на GitHub** с именем `sergeykib-telegram-api`
2. **Скопируйте содержимое этой папки** в новый репозиторий
3. **Задеплойте на Vercel:**
   - Перейдите на [vercel.com](https://vercel.com)
   - Войдите через GitHub
   - Нажмите "Add New Project"
   - Выберите репозиторий `sergeykib-telegram-api`
   - Vercel автоматически определит проект

4. **Настройте Environment Variables в Vercel:**
   - `TELEGRAM_BOT_TOKEN` = `8138334337:AAHux3K_OPgr4jpkyb3Tm5mMOjy2z3cyW_w`
   - `TELEGRAM_CHAT_ID` = `873320985`

5. **Получите URL** после деплоя (например: `https://sergeykib-telegram-api.vercel.app/api/telegram-simple`)

6. **Обновите форму** в основном проекте с этим URL

## Использование

После деплоя endpoint будет доступен по адресу:
```
POST https://ваш-проект.vercel.app/api/telegram-simple
Content-Type: application/json

{
  "name": "Имя",
  "contact": "email@example.com",
  "message": "Текст сообщения"
}
```

## Проверка

```bash
curl -X POST https://ваш-проект.vercel.app/api/telegram-simple \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","contact":"test@test.com","message":"Test"}'
```

