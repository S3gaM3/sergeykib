import type { Metadata } from 'next'
import Link from 'next/link'
import TemplatesGrid from './components/TemplatesGrid'
import StackShowcase from './components/StackShowcase'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Шаблоны сайтов под ключ — React, Node.js, UX/UI | Сергей Кибальник',
  description: 'Готовые шаблоны сайтов на React и Node.js. Интернет-магазины, landing pages, корпоративные сайты, портфолио. Разработка под ключ с современным стеком технологий.',
  keywords: 'шаблоны сайтов, разработка сайтов React, Node.js разработка, landing page, интернет-магазин, корпоративный сайт, портфолио, веб-разработка',
  authors: [{ name: 'Сергей Кибальник' }],
  openGraph: {
    type: 'website',
    url: 'https://sergeykib.github.io/templates/',
    title: 'Шаблоны сайтов под ключ — React, Node.js',
    description: 'Готовые шаблоны сайтов на современном стеке: React, Node.js, TypeScript. Разработка под ключ.',
    images: ['https://sergeykib.github.io/assets/img/portfolio/1.jpg'],
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://sergeykib.github.io/templates/',
  },
}

export default function TemplatesPage() {
  return (
    <>
      <div className="templates-header" style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
        color: '#fff',
        padding: '4rem 1.5rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>
            Шаблоны сайтов под ключ
          </h1>
          <p style={{fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.95}}>
            Готовые решения на современном стеке: React, Node.js, TypeScript. 
            Полная разработка под ключ с гарантией качества и поддержкой.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link 
              href="/#contacts" 
              className="btn" 
              style={{
                background: '#fff', 
                color: '#2563eb', 
                border: 'none',
                padding: '0.8em 2em',
                fontSize: '1.1em',
                fontWeight: '600'
              }}
            >
              Заказать разработку
            </Link>
            <Link 
              href="/" 
              className="btn" 
              style={{
                background: 'transparent', 
                color: '#fff', 
                border: '2px solid #fff',
                padding: '0.8em 2em',
                fontSize: '1.1em'
              }}
            >
              ← На главную
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <StackShowcase />
        
        <section style={{marginTop: '4rem'}}>
          <h2 className="section-title" style={{textAlign: 'center', fontSize: '2rem', marginBottom: '3rem'}}>
            Доступные шаблоны
          </h2>
          <TemplatesGrid />
        </section>

        <section style={{
          marginTop: '4rem',
          background: '#f8fafc',
          padding: '3rem',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#1e293b'}}>
            Нужен индивидуальный проект?
          </h3>
          <p style={{fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
            Каждый шаблон может быть адаптирован под ваши задачи или создан с нуля по вашим требованиям
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link 
              href="/#contacts" 
              className="btn" 
              style={{
                background: '#2563eb', 
                color: '#fff', 
                padding: '0.8em 2em',
                fontSize: '1.1em',
                fontWeight: '600'
              }}
            >
              Обсудить проект
            </Link>
            <a 
              href="https://t.me/kosmosega" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn" 
              style={{
                background: '#3b82f6', 
                color: '#fff', 
                padding: '0.8em 2em',
                fontSize: '1.1em',
                fontWeight: '600'
              }}
            >
              Telegram: @kosmosega
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
