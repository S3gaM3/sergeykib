import type { Metadata } from 'next'
import Header from './components/Header'
import ProjectsGrid from './components/ProjectsGrid'
import Certificates from './components/Certificates'
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
    "@type": "Person",
    "name": "Сергей Кибальник",
    "jobTitle": "Веб-разработчик",
    "description": "Веб-разработчик с глубоким знанием JavaScript-экосистемы. Специализируюсь на создании адаптивных интерфейсов (React) и серверных решений (Node.js).",
    "url": "https://sergeykib.github.io/",
    "image": "https://sergeykib.github.io/assets/img/portfolio/1.jpg",
    "sameAs": [
      "https://github.com/S3gaM3",
      "https://t.me/kosmosega",
      "https://segak.ru/"
    ],
    "knowsAbout": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML5",
      "CSS3",
      "Python",
      "MySQL",
      "UX/UI Design"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    },
    "email": "kibalnikserg@yandex.ru",
    "telephone": "+7 (985) 268-97-87",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Технологический колледж № 21"
    }
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <div className="container">
        <section className="section">
          <h2 className="section-title">Обо мне</h2>
          <div className="job-card" style={{fontSize: '1.1em'}}>
            <b>Веб-разработчик с глубоким знанием JavaScript-экосистемы.</b> Специализируюсь на создании адаптивных интерфейсов (React) и серверных решений (Node.js). Мои проекты сочетают техническую надежность и визуальную привлекательность. Сертификаты Яндекс.Практикума и 86% в цифровом паспорте компетенций подтверждают экспертизу.
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Навыки</h2>
          <div style={{marginBottom: '1.2em'}}>
            <b>Frontend:</b>{' '}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" style={{width: '1.2em', verticalAlign: 'middle'}} />{' '}
            JavaScript <span style={{color: '#2563eb', fontWeight: '500'}}>(Expert)</span> |{' '}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{width: '1.2em', verticalAlign: 'middle'}} />{' '}
            React <span style={{color: '#2563eb', fontWeight: '500'}}>(Advanced)</span> |{' '}
            HTML5/CSS3 <span style={{color: '#2563eb', fontWeight: '500'}}>(Advanced)</span>
            <div style={{height: '8px', background: '#e2e8f0', borderRadius: '4px', margin: '6px 0 12px 0', width: '100%', maxWidth: '340px'}}>
              <div style={{width: '95%', height: '100%', background: 'linear-gradient(90deg,#2563eb,#6366f1)', borderRadius: '4px'}}></div>
            </div>
            <b>Backend:</b>{' '}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{width: '1.2em', verticalAlign: 'middle'}} />{' '}
            Node.js <span style={{color: '#2563eb', fontWeight: '500'}}>(Intermediate)</span> |{' '}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{width: '1.2em', verticalAlign: 'middle'}} />{' '}
            Python <span style={{color: '#2563eb', fontWeight: '500'}}>(Basic)</span>
            <div style={{height: '8px', background: '#e2e8f0', borderRadius: '4px', margin: '6px 0 12px 0', width: '100%', maxWidth: '340px'}}>
              <div style={{width: '70%', height: '100%', background: 'linear-gradient(90deg,#2563eb,#6366f1)', borderRadius: '4px'}}></div>
            </div>
            <b>Базы данных:</b>{' '}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style={{width: '1.2em', verticalAlign: 'middle'}} />{' '}
            MySQL <span style={{color: '#2563eb', fontWeight: '500'}}>(Intermediate)</span>
            <div style={{height: '8px', background: '#e2e8f0', borderRadius: '4px', margin: '6px 0 12px 0', width: '100%', maxWidth: '340px'}}>
              <div style={{width: '70%', height: '100%', background: 'linear-gradient(90deg,#2563eb,#6366f1)', borderRadius: '4px'}}></div>
            </div>
          </div>
          <ul className="skills">
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>MySQL</li>
          </ul>
          {/* Инструменты */}
          <div style={{marginTop: '2.2em'}}>
            <h3 className="section-title" style={{fontSize: '1.1em', marginBottom: '1.1em'}}>Инструменты</h3>
            <div className="tools-list" style={{display: 'flex', flexWrap: 'wrap', gap: '2.2em', justifyContent: 'center', alignItems: 'flex-end'}}>
              {[
                { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                { name: 'Cursor', icon: '/assets/img/icon_cursor.jpg', local: true },
                { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
                { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
                { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'MySQL Workbench', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
              ].map((tool, index) => (
                <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div title={tool.name} style={{width: '64px', height: '64px', borderRadius: '50%', background: '#2563eb22', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: tool.local ? '10px' : '0',
                        objectFit: tool.local ? 'cover' : 'contain'
                      }}
                    />
                  </div>
                  <span style={{marginTop: '0.5em', fontSize: '0.98em'}}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Мои проекты и работы</h2>
          <ProjectsGrid />
        </section>

        <section className="section">
          <h2 className="section-title">Образование</h2>
          <div className="job-card">
            <b>Технологический колледж № 21</b>, 2025<br/>
            09.02.07 Информационные системы и программирование
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Достижения и сертификаты</h2>
          <Certificates />
        </section>

        <section className="section">
          <h2 className="section-title">Контакты</h2>
          <ul className="contacts-list">
            <li>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M2 4h20v16H2V4zm2 2v12h16V6H4zm8 5.5L4.5 6.5l1-1L12 10.5l6.5-5 1 1L12 11.5z"/>
              </svg>
              kibalnikserg@yandex.ru
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M9.04 16.62l-.39 3.47c.56 0 .8-.24 1.09-.53l2.62-2.5 5.44 3.98c1 .55 1.72.26 1.97-.92l3.58-16.7c.33-1.53-.56-2.13-1.53-1.77L2.2 9.3c-1.48.58-1.46 1.4-.25 1.77l4.6 1.44 10.7-6.74c.5-.33.96-.15.58.21z"/>
              </svg>
              Telegram: <a href="https://t.me/kosmosega" target="_blank" rel="noopener noreferrer">@kosmosega</a>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
              <a href="https://github.com/S3gaM3" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </section>

        <section className="section" id="contacts" style={{textAlign: 'center', marginTop: '2.5em'}}>
          <div style={{fontSize: '1.2em', fontWeight: '600'}}>Открыт к участию в проектной деятельности (удалённо или в офисе)</div>
          <div style={{margin: '0.7em 0 0.2em 0'}}>Рассматриваю предложения по работе в команде, а также интересные проекты для сотрудничества.</div>
          <div style={{fontSize: '1.08em', color: '#475569', margin: '0.7em 0 0.2em 0'}}>
            Хочу развиваться в современных технологиях: TypeScript, AI, Web3.
          </div>
          <div style={{fontSize: '1.1em'}}>
            Telegram: <a href="https://t.me/kosmosega" target="_blank" rel="noopener noreferrer">@kosmosega</a> | Email: <a href="mailto:kibalnikserg@yandex.ru">kibalnikserg@yandex.ru</a>
          </div>
        </section>
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
