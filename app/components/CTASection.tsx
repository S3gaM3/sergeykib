'use client'

// Используем простую версию формы для работы на GitHub Pages
import ContactForm from './ContactFormSimple'
// Для локальной разработки с API routes используйте:
// import ContactForm from './ContactForm'

export default function CTASection() {
  return (
    <section 
      id="contacts" 
      style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
        color: '#fff',
        padding: '4rem 2rem',
        borderRadius: '24px',
        textAlign: 'center',
        marginTop: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }}></div>
      
      <div style={{position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#fff'
        }}>
          Готовы начать проект?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: 0.95,
          lineHeight: '1.6'
        }}>
          Открыт к участию в проектной деятельности (удалённо или в офисе). 
          Рассматриваю предложения по работе в команде, а также интересные проекты для сотрудничества.
        </p>
        
        <div style={{
          fontSize: '1.1rem',
          marginBottom: '2.5rem',
          opacity: 0.9
        }}>
          Хочу развиваться в современных технологиях: <b>TypeScript, AI, Web3</b>
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <a
            href="https://t.me/kosmosega"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: '#fff',
              color: '#2563eb',
              padding: '1em 2em',
              fontSize: '1.1em',
              fontWeight: '600',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            💬 Telegram: @kosmosega
          </a>
          <a
            href="mailto:kibalnikserg@yandex.ru"
            className="btn"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              border: '2px solid #fff',
              padding: '1em 2em',
              fontSize: '1.1em',
              fontWeight: '600',
              borderRadius: '12px'
            }}
          >
            ✉️ Email
          </a>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          fontSize: '0.95em',
          opacity: 0.9,
          marginBottom: '2rem'
        }}>
          <div>
            <strong>Email:</strong>{' '}
            <a href="mailto:kibalnikserg@yandex.ru" style={{color: '#fff', textDecoration: 'underline'}}>
              kibalnikserg@yandex.ru
            </a>
          </div>
          <div>
            <strong>Телефон:</strong> +7 (985) 268-97-87
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
