# Настройка Telegram-бота для работы с GitHub Actions

## Быстрая настройка (5 минут)

### Шаг 1: Добавление Secrets в GitHub

1. Перейдите в ваш репозиторий на GitHub
2. Откройте **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**
4. Добавьте два секрета:

   **Secret 1:**
   - Name: `TELEGRAM_BOT_TOKEN`
   - Value: `8138334337:AAHux3K_OPgr4jpkyb3Tm5mMOjy2z3cyW_w`
   - Нажмите **Add secret**

   **Secret 2:**
   - Name: `TELEGRAM_CHAT_ID`
   - Value: `873320985`
   - Нажмите **Add secret**

### Шаг 2: Выбор варианта работы формы

У вас есть 3 варианта:

#### Вариант A: Использование Serverless функции (Рекомендуется)

1. Задеплойте serverless функцию на Vercel (см. `TELEGRAM_DEPLOY.md`)
2. Получите URL вашей функции (например: `https://your-project.vercel.app/api/telegram`)
3. Обновите `.env.local` или добавьте в `next.config.js`:
   ```env
   NEXT_PUBLIC_TELEGRAM_API_URL=https://your-project.vercel.app/api/telegram
   ```

#### Вариант B: Прямой вызов Telegram API (Простой, но токен виден в коде)

1. В `app/components/CTASection.tsx` замените:
   ```typescript
   import ContactForm from './ContactForm'
   ```
   на:
   ```typescript
   import ContactForm from './ContactFormSimple'
   ```

2. Токены уже встроены в `ContactFormSimple.tsx`, форма будет работать сразу.

#### Вариант C: Использование переменных окружения в билде

1. GitHub Actions автоматически использует Secrets при сборке
2. Обновите форму для использования `NEXT_PUBLIC_*` переменных
3. Это работает только если токены встроены в статический HTML

### Шаг 3: Тестирование

1. Сделайте commit и push:
   ```bash
   git add .
   git commit -m "Add Telegram bot integration"
   git push origin main
   ```

2. GitHub Actions автоматически соберет и задеплоит проект

3. Проверьте работу формы на задеплоенном сайте

## Текущая конфигурация

- ✅ Токен бота: `8138334337:AAHux3K_OPgr4jpkyb3Tm5mMOjy2z3cyW_w`
- ✅ Chat ID: `873320985`
- ✅ GitHub Actions настроен для использования Secrets

## Что дальше?

После добавления Secrets в GitHub, выберите один из вариантов выше. Рекомендую **Вариант A** (Vercel) для безопасности или **Вариант B** (ContactFormSimple) для простоты.

