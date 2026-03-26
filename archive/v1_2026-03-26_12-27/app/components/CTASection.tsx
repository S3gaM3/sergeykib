'use client'

import ContactForm from './ContactFormSimple'
import { getMailto, getTelHref } from '@/app/lib/contact'
// Для локальной разработки с API routes используйте:
// import ContactForm from './ContactForm'

const btnStyle: React.CSSProperties = {
  background: '#fff',
  color: '#000',
  border: '2px solid #fff',
  padding: '0.75em 1.25em',
  fontSize: '1em',
  fontWeight: '600',
  borderRadius: '12px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5em',
}

export default function CTASection() {
  return (
    <section 
      id="contacts" 
      style={{
        background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
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
          gap: '0.75rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <a
            href="/assets/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            aria-label="Скачать резюме (PDF)"
            style={btnStyle}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Резюме
          </a>
          <a
            href="https://t.me/kosmosega"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={btnStyle}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Telegram
          </a>
          <a
            href={getMailto()}
            className="btn"
            style={btnStyle}
            aria-label="Написать на email"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </a>
          <a
            href={getTelHref()}
            className="btn"
            style={btnStyle}
            aria-label="Позвонить"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Телефон
          </a>
          <a
            href="https://clc.li/VmHro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={btnStyle}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
            </svg>
            MAX
          </a>
        </div>

        <div style={{
          fontSize: '0.95em',
          opacity: 0.9,
          marginBottom: '2rem'
        }}>
          <strong>Регион:</strong> Москва и Московская область
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
