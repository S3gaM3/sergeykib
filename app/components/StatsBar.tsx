'use client'

const stats = [
  { value: '10+', label: 'Реализованных работ' },
  { value: '100%', label: 'В срок' },
  { value: 'React', label: 'Основной стек' }
]

export default function StatsBar() {
  return (
    <section className="section fade-in-up" aria-label="Статистика">
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem 4rem',
        padding: '2rem 1.5rem',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.06) 0%, rgba(56, 178, 172, 0.06) 100%)',
        borderRadius: '20px',
        border: '1px solid rgba(124, 58, 237, 0.15)'
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: 'var(--accent-purple)',
              marginBottom: '0.25rem'
            }}>
              {s.value}
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: '#64748b',
              fontWeight: '500'
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
