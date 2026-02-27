'use client'

import { useState, useRef, useEffect } from 'react'

export default function PrismContact() {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Ошибка отправки')
      setStatus('success')
      setFormData({ name: '', contact: '', message: '' })
      timeoutRef.current = setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Ошибка')
      timeoutRef.current = setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
        timeoutRef.current = null
      }, 5000)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Обсудим ваш проект</h2>
        <p className="section-subtitle">Опишите задачу — отвечу в течение дня, предложу варианты и сроки. Без обязательств.</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <a href="https://yandex.ru/maps/?text=Москва" target="_blank" rel="noopener noreferrer" className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-text">
              <h4>Город</h4>
              <p>Москва, удалённо</p>
            </div>
          </a>
          <a href="mailto:kibalnikserg@yandex.ru" className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-text">
              <h4>Email</h4>
              <p>kibalnikserg@yandex.ru</p>
            </div>
          </a>
          <a href="tel:+79852689787" className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-text">
              <h4>Телефон</h4>
              <p>+7 (985) 268-97-87</p>
            </div>
          </a>
          <a href="https://t.me/kosmosega" target="_blank" rel="noopener noreferrer" className="info-item">
            <div className="info-icon">✈️</div>
            <div className="info-text">
              <h4>Telegram</h4>
              <p>@kosmosega</p>
            </div>
          </a>
        </div>
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact-name">Имя</label>
            <input type="text" id="contact-name" name="name" required value={formData.name} onChange={handleChange} autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="contact-field">Email или телефон</label>
            <input type="text" id="contact-field" name="contact" required value={formData.contact} onChange={handleChange} autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Сообщение</label>
            <textarea id="contact-message" name="message" required value={formData.message} onChange={handleChange} />
          </div>
          {status === 'success' && (
            <p role="status" aria-live="polite" style={{ color: 'var(--accent-green)', marginBottom: 16 }}>Сообщение отправлено.</p>
          )}
          {status === 'error' && (
            <p role="alert" aria-live="assertive" style={{ color: 'var(--accent-red)', marginBottom: 16 }}>{errorMessage}</p>
          )}
          <button type="submit" className="submit-btn" disabled={status === 'loading'} aria-busy={status === 'loading'}>
            {status === 'loading' ? 'Отправка...' : 'Отправить заявку — отвечу в течение дня'}
          </button>
        </form>
      </div>
    </section>
  )
}
