import type { Metadata } from 'next'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SkillsShowcase from './components/SkillsShowcase'
import ToolsList from './components/ToolsList'
import ProjectsCarousel from './components/ProjectsCarousel'
import Certificates from './components/Certificates'
import CTASection from './components/CTASection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Сергей Кибальник — Веб-разработчик React, Node.js | Портфолио разработчика',
  description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI. Создаю современные сайты и веб-приложения. Портфолио проектов и резюме.',
  keywords: 'веб-разработчик, React разработчик, JavaScript разработчик, Node.js, веб-дизайн, UX/UI, портфолио, Москва, фриланс',
  authors: [{ name: 'Сергей Кибальник' }],
  openGraph: {
    type: 'website',
    url: 'https://sergeykib.github.io/',
    title: 'Сергей Кибальник — Веб-разработчик React, Node.js',
    description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI. Создаю современные сайты и веб-приложения.',
    images: ['https://sergeykib.github.io/assets/img/portfolio/1.jpg'],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сергей Кибальник — Веб-разработчик React, Node.js',
    description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI.',
    images: ['https://sergeykib.github.io/assets/img/portfolio/1.jpg'],
  },
  alternates: {
    canonical: 'https://sergeykib.github.io/',
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sergeykib.github.io/#person",
        "name": "Сергей Кибальник",
        "jobTitle": "Веб-разработчик",
        "description": "Веб-разработчик с глубоким знанием JavaScript-экосистемы. Специализируюсь на создании адаптивных интерфейсов (React) и серверных решений (Node.js).",
        "url": "https://sergeykib.github.io/",
        "image": {
          "@type": "ImageObject",
          "url": "https://sergeykib.github.io/assets/img/portfolio/1.jpg",
          "width": 1200,
          "height": 630
        },
        "sameAs": [
          "https://github.com/S3gaM3",
          "https://t.me/kosmosega",
          "https://segak.ru/"
        ],
        "knowsAbout": [
          "JavaScript",
          "TypeScript",
          "React",
          "Node.js",
          "HTML5",
          "CSS3",
          "Python",
          "MySQL",
          "UX/UI Design",
          "Web Development",
          "Frontend Development",
          "Backend Development"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Москва",
          "addressRegion": "Москва",
          "addressCountry": "RU"
        },
        "email": "kibalnikserg@yandex.ru",
        "telephone": "+7 (985) 268-97-87",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Технологический колледж № 21",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          }
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Фриланс",
          "jobTitle": "Веб-разработчик"
        },
        "offers": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Веб-разработка",
            "description": "Разработка веб-сайтов и приложений на React, Node.js, TypeScript"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Россия"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sergeykib.github.io/#website",
        "url": "https://sergeykib.github.io/",
        "name": "Сергей Кибальник — Портфолио",
        "description": "Портфолио веб-разработчика Сергея Кибальника",
        "publisher": {
          "@id": "https://sergeykib.github.io/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sergeykib.github.io/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://sergeykib.github.io/"
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <div className="container" style={{paddingTop: '2rem'}}>
        <Hero />
        
        <section className="section">
          <h2 className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Обо мне
          </h2>
          <AboutSection />
        </section>

        <section className="section">
          <h2 className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Навыки
          </h2>
          <SkillsShowcase />
          
          {/* Инструменты */}
          <div style={{marginTop: '2.5rem'}}>
            <h3 className="section-title" style={{fontSize: '1.3rem', marginBottom: '1.5em', textAlign: 'center'}}>
              Инструменты разработки
            </h3>
            <ToolsList />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Мои проекты и работы
          </h2>
          <ProjectsCarousel />
        </section>

        <section className="section">
          <h2 className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Образование
          </h2>
          <div className="job-card" style={{
            padding: '2rem',
            fontSize: '1.1em',
            lineHeight: '1.8'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '0.5rem'
            }}>
              <span style={{fontSize: '2rem'}}>🎓</span>
              <div>
                <b style={{fontSize: '1.2em', display: 'block', marginBottom: '0.3rem'}}>
                  Технологический колледж № 21
                </b>
                <div style={{color: '#64748b'}}>
                  09.02.07 Информационные системы и программирование
                </div>
                <div style={{color: '#94a3b8', fontSize: '0.95em', marginTop: '0.3rem'}}>
                  Выпускник: 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Достижения и сертификаты
          </h2>
          <Certificates />
        </section>

        <CTASection />
      </div>

      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Сергей Кибальник. Все права защищены.
      </footer>

      <Script id="yandex-metrika-goals" strategy="afterInteractive">
        {`
          if (typeof ym !== 'undefined') {
            // Цель: Переход на резюме
            const resumeLinks = document.querySelectorAll('a[href*="resume"]');
            resumeLinks.forEach(function(link) {
              link.addEventListener('click', function() {
                ym(103955852, 'reachGoal', 'resume_view');
              });
            });
            
            // Цель: Клик по email
            const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
            emailLinks.forEach(function(link) {
              link.addEventListener('click', function() {
                ym(103955852, 'reachGoal', 'contact_email');
              });
            });
            
            // Цель: Клик по Telegram
            const telegramLinks = document.querySelectorAll('a[href*="t.me"]');
            telegramLinks.forEach(function(link) {
              link.addEventListener('click', function() {
                ym(103955852, 'reachGoal', 'contact_telegram');
              });
            });
            
            // Цель: Просмотр сертификатов
            const certTriggers = document.querySelectorAll('.cert-thumb');
            certTriggers.forEach(function(trigger) {
              trigger.addEventListener('click', function() {
                ym(103955852, 'reachGoal', 'certificate_view');
              });
            });
            
            // Цель: Переход на портфолио
            const portfolioLinks = document.querySelectorAll('a[href*="segak.ru"]');
            portfolioLinks.forEach(function(link) {
              link.addEventListener('click', function() {
                ym(103955852, 'reachGoal', 'portfolio_view');
              });
            });
            
            // Цель: Переход на GitHub
            const githubLinks = document.querySelectorAll('a[href*="github.com"]');
            githubLinks.forEach(function(link) {
              link.addEventListener('click', function() {
                ym(103955852, 'reachGoal', 'project_github');
              });
            });
          }
        `}
      </Script>
    </>
  )
}
