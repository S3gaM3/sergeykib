import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import ResumeHeader from './components/ResumeHeader'
import ResumeSection from './components/ResumeSection'
import '../globals.css'
import './resume.css'

export const metadata: Metadata = {
  title: 'Резюме Сергея Кибальника — Веб-разработчик React, JavaScript, Node.js',
  description: 'Резюме веб-разработчика Сергея Кибальника. Опыт работы с React, JavaScript, Node.js, HTML/CSS. Образование, навыки, контакты для трудоустройства.',
  keywords: 'резюме веб-разработчика, Сергей Кибальник, React, JavaScript, Node.js, веб-программирование, Москва',
  authors: [{ name: 'Сергей Кибальник' }],
  openGraph: {
    type: 'website',
    url: 'https://sergeykib.github.io/resume/',
    title: 'Резюме Сергея Кибальника — Веб-разработчик',
    description: 'Резюме веб-разработчика Сергея Кибальника. Опыт работы с React, JavaScript, Node.js.',
    images: ['https://sergeykib.github.io/assets/img/portfolio/1.jpg'],
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://sergeykib.github.io/resume/',
  },
}

export default function ResumePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Resume",
    "name": "Резюме Сергея Кибальника",
    "description": "Резюме веб-разработчика с опытом работы с React, JavaScript, Node.js",
    "author": {
      "@type": "Person",
      "name": "Сергей Кибальник",
      "jobTitle": "Веб-разработчик",
      "email": "kibalnikserg@yandex.ru",
      "telephone": "+7 (985) 268-97-87",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Москва",
        "addressCountry": "RU"
      }
    },
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML5",
      "CSS3",
      "Python",
      "MySQL",
      "GitHub"
    ],
    "education": {
      "@type": "EducationalOrganization",
      "name": "Технологический колледж № 21",
      "description": "Мегадизайн, 09.02.07 Информационные системы и программирование"
    }
  }

  return (
    <>
      <Script
        id="resume-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="resume-wrapper">
        <div className="resume-navigation" style={{
          background: '#fff',
          padding: '1rem 0',
          borderBottom: '1px solid #e2e8f0',
          marginBottom: '2rem',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <div className="container" style={{maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem'}}>
            <Link 
              href="/" 
              style={{
                color: '#2563eb', 
                textDecoration: 'none', 
                fontSize: '0.95em',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5em',
                transition: 'color 0.2s'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              На главную
            </Link>
          </div>
        </div>

        <div className="container" style={{maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3rem'}}>
          <ResumeHeader />
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            <ResumeSection
              icon="💼"
              title="Желаемая должность"
              content={
                <>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#059669',
                    marginBottom: '0.5rem'
                  }}>
                    от 70 000 ₽ на руки
                  </div>
                  <div style={{color: '#64748b', marginBottom: '0.3rem'}}>
                    Разработчик веб и мультимедийных приложений
                  </div>
                  <div style={{color: '#64748b', fontSize: '0.95em'}}>
                    Полная занятость, полный день, удалённая работа
                  </div>
                </>
              }
            />

            <ResumeSection
              icon="🌐"
              title="Локация"
              content={
                <>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '0.5rem'
                  }}>
                    Москва, Россия
                  </div>
                  <div style={{color: '#64748b', fontSize: '0.95em'}}>
                    Не готов к переезду
                    Готов к удалённой работе
                  </div>
                </>
              }
            />
          </div>

          <ResumeSection
            icon="🎓"
            title="Образование"
            content={
              <div style={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #bae6fd'
              }}>
                <div style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '0.5rem'
                }}>
                  Технологический колледж № 21
                </div>
                <div style={{
                  color: '#475569',
                  marginBottom: '0.5rem',
                  fontSize: '1.05em'
                }}>
                  09.02.07 Информационные системы и программирование
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#64748b',
                  fontSize: '0.95em'
                }}>
                  <span>Мегадизайн</span>
                  <span>•</span>
                  <span>Выпускник: 2025</span>
                </div>
              </div>
            }
          />

          <ResumeSection
            icon="🏆"
            title="Курсы и сертификаты"
            content={
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {[
                  {
                    title: 'Цифровой паспорт компетенций',
                    year: '2025',
                    level: '86% из 100%',
                    highlight: true
                  },
                  {
                    title: 'JavaScript от Яндекса: с нуля до веб-разработчика',
                    year: '2024',
                    level: '144 акад. часа'
                  }
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: cert.highlight ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' : '#fff',
                      border: `1px solid ${cert.highlight ? '#fbbf24' : '#e2e8f0'}`,
                      padding: '1.2rem',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <div style={{
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.3rem',
                        fontSize: '1.05em'
                      }}>
                        {cert.title}
                      </div>
                      <div style={{
                        display: 'flex',
                        gap: '1rem',
                        fontSize: '0.9em',
                        color: '#64748b'
                      }}>
                        <span>{cert.year}</span>
                        {cert.level && <span>• {cert.level}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          />

          <ResumeSection
            icon="💻"
            title="Навыки"
            content={
              <div>
                <div style={{marginBottom: '1.5rem'}}>
                  <div style={{
                    fontSize: '0.95em',
                    fontWeight: '600',
                    color: '#475569',
                    marginBottom: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Основные технологии
                  </div>
                  <div className="resume-skills-list">
                    {['JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'TypeScript', 'Python', 'MySQL'].map((skill, idx) => (
                      <span key={idx} className="resume-skill">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '0.95em',
                    fontWeight: '600',
                    color: '#475569',
                    marginBottom: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Дополнительные навыки
                  </div>
                  <div className="resume-skills-list">
                    {['GitHub', 'Веб-программирование', 'Веб-дизайн', 'UX/UI', 'REST API', 'PWA'].map((skill, idx) => (
                      <span key={idx} className="resume-skill resume-skill-secondary">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          <ResumeSection
            icon="🌍"
            title="Языки"
            content={
              <div className="resume-lang-list">
                <div style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  padding: '1rem 1.5rem',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{fontSize: '1.5rem'}}>🇬🇧</span>
                  <div>
                    <div style={{fontWeight: '600', color: '#1e293b', marginBottom: '0.2rem'}}>
                      Английский
                    </div>
                    <div style={{fontSize: '0.9em', color: '#64748b'}}>
                      Средний уровень (Intermediate)
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <div style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
            color: '#fff',
            padding: '2.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Готов к сотрудничеству
            </div>
            <div style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              opacity: 0.95,
              lineHeight: '1.6'
            }}>
              Открыт к участию в проектной деятельности и интересным предложениям
            </div>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://t.me/kosmosega"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#fff',
                  color: '#2563eb',
                  padding: '0.8em 2em',
                  fontSize: '1em',
                  fontWeight: '600',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                💬 Telegram
              </a>
              <a
                href="mailto:kibalnikserg@yandex.ru"
                className="btn"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  border: '2px solid #fff',
                  padding: '0.8em 2em',
                  fontSize: '1em',
                  fontWeight: '600',
                  borderRadius: '12px'
                }}
              >
                ✉️ Email
              </a>
              <a
                href="https://segak.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  border: '2px solid #fff',
                  padding: '0.8em 2em',
                  fontSize: '1em',
                  fontWeight: '600',
                  borderRadius: '12px'
                }}
              >
                🌐 Портфолио
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}