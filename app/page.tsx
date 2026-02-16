import type { Metadata } from 'next'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ScrollAnimations from './components/ScrollAnimations'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import StatsBar from './components/StatsBar'
import SkillsShowcase from './components/SkillsShowcase'
import ToolsList from './components/ToolsList'
import dynamic from 'next/dynamic'
const ProjectsCarousel = dynamic(() => import('./components/ProjectsCarousel'), { ssr: true, loading: () => null })
const Certificates = dynamic(() => import('./components/Certificates'), { ssr: true, loading: () => null })
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Сергей Кибальник — React, Node.js, JavaScript, HTML5, CSS3',
  description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, HTML5, CSS3, UX/UI. Создаю современные сайты и веб-приложения. Портфолио проектов. Связь: Telegram.',
  keywords: 'веб-разработчик, JavaScript, HTML5, CSS3, React разработчик, Node.js, веб-дизайн, UX/UI, портфолио, Москва, фриланс, Telegram',
  authors: [{ name: 'Сергей Кибальник' }],
  openGraph: {
    type: 'website',
    url: 'https://segak.ru/',
    title: 'Сергей Кибальник — React, Node.js, JavaScript, HTML5, CSS3',
    description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, HTML5, CSS3, UX/UI. Создаю современные сайты и веб-приложения.',
    images: ['https://segak.ru/assets/img/portfolio/1.webp'],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сергей Кибальник — React, Node.js, JavaScript, HTML5, CSS3',
    description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, HTML5, CSS3, UX/UI.',
    images: ['https://segak.ru/assets/img/portfolio/1.webp'],
  },
  alternates: {
    canonical: 'https://segak.ru/',
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://segak.ru/#person",
        "name": "Сергей Кибальник",
        "jobTitle": "Веб-разработчик",
        "description": "Веб-разработчик с глубоким знанием JavaScript-экосистемы. Специализируюсь на создании адаптивных интерфейсов (React) и серверных решений (Node.js).",
        "url": "https://segak.ru/",
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
          "areaServed": [
            {
              "@type": "AdministrativeArea",
              "name": "Москва"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Московская область"
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://segak.ru/#website",
        "url": "https://segak.ru/",
        "name": "Сергей Кибальник — Портфолио",
        "description": "Портфолио веб-разработчика Сергея Кибальника",
        "publisher": {
          "@id": "https://segak.ru/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://segak.ru/?s={search_term_string}",
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
            "item": "https://segak.ru/"
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
      <Navigation />
      <ScrollAnimations />
      <Header />
      <div className="container" style={{paddingTop: '2rem'}}>
        <Hero />
        
        <StatsBar />

        <section id="about" className="section fade-in-up" aria-labelledby="about-heading">
          <h2 id="about-heading" className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Обо мне
          </h2>
          <AboutSection />
        </section>

        <section id="skills" className="section fade-in-up" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Навыки: JavaScript, HTML5, CSS3, React, Node.js
          </h2>
          <SkillsShowcase />
          
          {/* Инструменты */}
          <div style={{marginTop: '2.5rem'}}>
            <h3 className="section-title" style={{fontSize: '1.3rem', marginBottom: '1.5em', textAlign: 'center'}}>
              Инструменты: JavaScript, HTML5, CSS3
            </h3>
            <ToolsList />
          </div>
        </section>

        <section id="projects" className="section fade-in-up" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Мои проекты и работы
          </h2>
          <ProjectsCarousel />
        </section>

        <section id="education" className="section fade-in-up" aria-labelledby="education-heading">
          <h2 id="education-heading" className="section-title" style={{
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

        <section id="certificates" className="section fade-in-up" aria-labelledby="certificates-heading">
          <h2 id="certificates-heading" className="section-title" style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Достижения и сертификаты
          </h2>
          <Certificates />
        </section>

        <Testimonials />

        <FAQ />

        <CTASection />
      </div>

      <Footer />

      <Script id="yandex-metrika-goals" strategy="afterInteractive">
        {`
          if (typeof ym !== 'undefined') {
            
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
            
            // Цель: Скачивание резюме
            const resumeLinks = document.querySelectorAll('a[href*="resume.pdf"]');
            resumeLinks.forEach(function(link) {
              link.addEventListener('click', function() {
                ym(103955852, 'reachGoal', 'resume_download');
              });
            });
          }
        `}
      </Script>
    </>
  )
}
