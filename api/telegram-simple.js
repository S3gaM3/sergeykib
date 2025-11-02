// Простая serverless функция для Vercel
// Разверните на Vercel и используйте URL в форме

export default async function handler(req, res) {
  // Разрешаем CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, contact, message } = req.body

    // Валидация
    if (!name || !contact || !message) {
      return res.status(400).json({ error: 'Все поля обязательны' })
    }

    // Токены из переменных окружения Vercel
    const botToken = process.env.TELEGRAM_BOT_TOKEN || '8138334337:AAHux3K_OPgr4jpkyb3Tm5mMOjy2z3cyW_w'
    const chatId = process.env.TELEGRAM_CHAT_ID || '873320985'

    // Экранируем HTML
    const escapeHtml = (str) => {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    // Формируем сообщение
    const telegramMessage = 
      `📩 <b>Новое сообщение с сайта</b>\n\n` +
      `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
      `📞 <b>Контакт:</b> ${escapeHtml(contact)}\n\n` +
      `💬 <b>Сообщение:</b>\n${escapeHtml(message)}`

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

    const telegramData = await telegramResponse.json()

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error('Telegram API error:', telegramData)
      return res.status(500).json({ 
        error: telegramData.description || 'Не удалось отправить сообщение' 
      })
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Сообщение успешно отправлено' 
    })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Внутренняя ошибка сервера' })
  }
}

