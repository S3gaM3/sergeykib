'use client'

const testimonials = [
  {
    text: 'Сергей выполнил проект в срок, качественно и с учётом всех пожеланий. Рекомендую.',
    author: 'Заказчик',
    role: 'Веб-проект'
  },
  {
    text: 'Профессиональный подход, понятная коммуникация. Результат превзошёл ожидания.',
    author: 'Клиент',
    role: 'Разработка под ключ'
  },
  {
    text: 'Быстро откликается, вникает в задачу. Удобно работать удалённо.',
    author: 'Партнёр',
    role: 'Совместный проект'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section fade-in-up" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="section-title" style={{
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: '700'
      }}>
        Отзывы
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`testimonial-card fade-in-up anim-delay-${Math.min(i + 1, 3)}`}
            style={{
              background: 'var(--bg-main)',
              border: '1px solid var(--divider)',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            <p style={{
              color: 'var(--text-main)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              «{t.text}»
            </p>
            <div>
              <strong style={{ color: 'var(--accent-purple)', fontSize: '0.95em' }}>{t.author}</strong>
              <span style={{ color: '#64748b', fontSize: '0.9em', marginLeft: '0.5rem' }}>— {t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
