'use client'

export default function StackShowcase() {
  const stackItems = [
    {
      name: 'React',
      level: 'Advanced',
      color: '#61dafb',
      description: 'Современные компоненты и хуки',
      features: ['Hooks API', 'Context API', 'React Router', 'State Management']
    },
    {
      name: 'JavaScript',
      level: 'Expert',
      color: '#f7df1e',
      description: 'ES6+, асинхронность, оптимизация',
      features: ['ES6+', 'Async/Await', 'Promises', 'Performance']
    },
    {
      name: 'Node.js',
      level: 'Intermediate',
      color: '#339933',
      description: 'Серверная разработка и API',
      features: ['Express', 'REST API', 'WebSocket', 'Middleware']
    },
    {
      name: 'HTML5/CSS3',
      level: 'Advanced',
      color: '#e34c26',
      description: 'Семантическая разметка и стили',
      features: ['Semantic HTML', 'CSS Grid', 'Flexbox', 'Animations']
    },
    {
      name: 'UX/UI',
      level: 'Expert',
      color: '#6366f1',
      description: 'Проектирование интерфейсов',
      features: ['Wireframing', 'Prototyping', 'Design Systems', 'Accessibility']
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      color: '#3178c6',
      description: 'Типизация для надежности',
      features: ['Type Safety', 'Interfaces', 'Generics', 'Tooling']
    }
  ]

  return (
    <section className="stack-showcase" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '3rem',
      borderRadius: '16px',
      marginBottom: '3rem'
    }}>
      <h2 className="section-title" style={{textAlign: 'center', fontSize: '2rem', marginBottom: '2rem'}}>
        Технологический стек
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {stackItems.map((item, index) => (
          <div 
            key={index}
            className="stack-card"
            style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              borderTop: `4px solid ${item.color}`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
              <h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#1e293b', margin: 0}}>
                {item.name}
              </h3>
              <span style={{
                background: item.color,
                color: '#fff',
                padding: '0.2em 0.6em',
                borderRadius: '12px',
                fontSize: '0.85em',
                fontWeight: '600'
              }}>
                {item.level}
              </span>
            </div>
            <p style={{color: '#64748b', marginBottom: '1rem', fontSize: '0.95em'}}>
              {item.description}
            </p>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
              {item.features.map((feature, idx) => (
                <span 
                  key={idx}
                  style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    padding: '0.3em 0.6em',
                    borderRadius: '6px',
                    fontSize: '0.85em'
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
