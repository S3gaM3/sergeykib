'use client'

import Link from 'next/link'

export default function Hero() {
  const stats = [
    { number: '10+', label: 'Проектов' },
    { number: '86%', label: 'Компетенций' },
    { number: '<1', label: 'Года опыта' }
  ]

  return (
    <section className="hero-section about-section" style={{
      background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)',
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
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(56, 178, 172, 0.1))',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-30px',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(56, 178, 172, 0.08))',
        borderRadius: '50%',
        filter: 'blur(50px)'
      }}></div>
      
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            color: '#404040',
            marginBottom: '1rem',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Создаю современные сайты и веб-приложения
          </h2>
          <p className="hero-description" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#6B7280',
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
                background: '#7C3AED',
                color: '#fff',
                padding: '1em 2.5em',
                fontSize: '1.1em',
                fontWeight: '600',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)'
              }}
            >
              Начать проект
            </Link>
            <a
              href="/assets/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: '#fff',
                color: '#7C3AED',
                border: '2px solid #7C3AED',
                padding: '1em 2.5em',
                fontSize: '1.1em',
                fontWeight: '600',
                borderRadius: '12px'
              }}
            >
              📄 Скачать резюме
            </a>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(229, 231, 235, 0.8)'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{textAlign: 'center'}}>
                <div className="hero-stat-number" style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#7C3AED',
                  marginBottom: '0.3rem'
                }}>
                  {stat.number}
                </div>
                <div className="hero-stat-label" style={{
                  fontSize: '0.95em',
                  color: '#6B7280',
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
