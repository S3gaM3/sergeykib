'use client'

import { useState } from 'react'

const faqItems = [
  {
    q: 'Какие технологии используете?',
    a: 'React, Next.js, Node.js, TypeScript, JavaScript, HTML5, CSS3. Базы данных: PostgreSQL, MongoDB. Стили: Tailwind CSS.'
  },
  {
    q: 'Сколько стоит разработка сайта?',
    a: 'Стоимость зависит от сложности: лендинг — от 10 000 ₽, корпоративный сайт — от 40 000 ₽, веб-приложение — от 80 000 ₽. Точная оценка после обсуждения задачи.'
  },
  {
    q: 'Какие сроки разработки?',
    a: 'Лендинг — 3–7 дней, корпоративный сайт — 1–3 недели, веб-приложение — от месяца. Сроки уточняются после анализа требований.'
  },
  {
    q: 'Работаете удалённо?',
    a: 'Да. Работаю удалённо, общение через Telegram. Москва и Московская область — возможны встречи при необходимости.'
  },
  {
    q: 'Предоставляете поддержку после запуска?',
    a: 'Поддержка после запуска — платная. Доработки и правки — по договорённости.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section fade-in-up" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="section-title" style={{
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: '700'
      }}>
        Частые вопросы
      </h2>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        {faqItems.map((item, i) => (
          <div
            key={i}
            style={{
              borderBottom: '1px solid var(--divider)',
              padding: '1rem 0'
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem 0',
                textAlign: 'left',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: 'var(--text-main)'
              }}
            >
              {item.q}
              <span style={{
                flexShrink: 0,
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s'
              }}>
                ▼
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              style={{
                overflow: 'hidden',
                maxHeight: openIndex === i ? '200px' : '0',
                transition: 'max-height 0.3s ease'
              }}
            >
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                paddingTop: '0.5rem',
                margin: 0
              }}>
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
