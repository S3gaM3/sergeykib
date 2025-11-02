'use client'

import { useState } from 'react'

// Упрощенная версия формы с прямым вызовом Telegram API
// Используется, если нет возможности использовать serverless функции

export default function ContactFormSimple() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // Используем Vercel serverless endpoint
      const API_URL = process.env.NEXT_PUBLIC_TELEGRAM_API_URL || 
        'https://sergeykib-telegram-api.vercel.app/api/telegram-simple'
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при отправке сообщения')
      }

      setStatus('success')
      setFormData({ name: '', contact: '', message: '' })
      
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Произошла ошибка')
      
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: '600px',
      margin: '2rem auto 0',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="name" style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '600',
          fontSize: '1rem'
        }}>
          Имя *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#1e293b',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="contact" style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '600',
          fontSize: '1rem'
        }}>
          Контакт (Email или Telegram) *
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          placeholder="example@mail.com или @username"
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#1e293b',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="message" style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '600',
          fontSize: '1rem'
        }}>
          Ваше предложение или вопрос *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Опишите проект, задайте вопрос или расскажите о сотрудничестве..."
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#1e293b',
            resize: 'vertical',
            fontFamily: 'inherit',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          width: '100%',
          padding: '0.875rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          borderRadius: '8px',
          border: 'none',
          background: status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : '#fff',
          color: status === 'success' || status === 'error' ? '#fff' : '#2563eb',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      >
        {status === 'loading' && 'Отправка...'}
        {status === 'success' && '✓ Отправлено!'}
        {status === 'error' && '✗ Ошибка'}
        {status === 'idle' && 'Отправить сообщение'}
      </button>

      {status === 'error' && errorMessage && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: 'rgba(239, 68, 68, 0.2)',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '0.9rem'
        }}>
          {errorMessage}
        </div>
      )}
    </form>
  )
}

