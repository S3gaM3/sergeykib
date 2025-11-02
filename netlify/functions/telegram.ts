// Netlify Serverless Function для отправки сообщений в Telegram

import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  // Разрешаем только POST запросы
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  const { name, contact, message } = JSON.parse(event.body || '{}')

  // Валидация
  if (!name || !contact || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Все поля обязательны' })
    }
  }

  // Получаем токен и chat_id из переменных окружения
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error('TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не настроены')
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Сервер не настроен' })
    }
  }

  // Формируем сообщение для Telegram
  const escapeHtml = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  const telegramMessage = 
    `📩 <b>Новое сообщение с сайта</b>\n\n` +
    `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
    `📞 <b>Контакт:</b> ${escapeHtml(contact)}\n\n` +
    `💬 <b>Сообщение:</b>\n${escapeHtml(message)}`

  try {
    // Отправляем в Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML'
      }),
    })

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error('Telegram API error:', errorData)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Не удалось отправить сообщение' })
      }
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ success: true, message: 'Сообщение отправлено' })
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Внутренняя ошибка сервера' })
    }
  }
}

