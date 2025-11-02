'use client'

import Link from 'next/link'

export default function Hero() {
  const stats = [
    { number: '10+', label: 'Проектов' },
    { number: '86%', label: 'Компетенций' },
    { number: '>1', label: 'Года опыта' }
  ]

  return (
    <section className="hero-section" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '4rem 1.5rem',
      borderRadius: '24px',
      marginBottom: '3rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(99, 102, 241, 0.1))',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-30px',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(99, 102, 241, 0.08))',
        borderRadius: '50%',
        filter: 'blur(50px)'
      }}></div>
      
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            color: '#1e293b',
            marginBottom: '1rem',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Создаю современные сайты и веб-приложения
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#475569',
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Веб-разработчик с экспертизой в React, Node.js и UX/UI. 
            Превращаю идеи в высококачественные цифровые решения.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <Link
              href="/#contacts"
              className="btn"
              style={{
                background: '#2563eb',
                color: '#fff',
                padding: '1em 2.5em',
                fontSize: '1.1em',
                fontWeight: '600',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
              }}
            >
              Начать проект
            </Link>
            <Link
              href="/templates/"
              className="btn"
              style={{
                background: '#fff',
                color: '#2563eb',
                border: '2px solid #2563eb',
                padding: '1em 2.5em',
                fontSize: '1.1em',
                fontWeight: '600',
                borderRadius: '12px'
              }}
            >
              Посмотреть шаблоны
            </Link>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(226, 232, 240, 0.8)'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{textAlign: 'center'}}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#2563eb',
                  marginBottom: '0.3rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.95em',
                  color: '#64748b',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
