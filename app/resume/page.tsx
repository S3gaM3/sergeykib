import type { Metadata } from 'next'
import Script from 'next/script'
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
      <div className="resume-container">
        <div className="resume-header">
          <img
            src="/assets/img/portfolio/1.jpg"
            alt="Аватар"
            className="resume-avatar"
          />
          <div className="resume-main-info">
            <div className="resume-name">Кибальник Сергей Андреевич</div>
            <div className="resume-position">Разработчик веб и мультимедийных приложений</div>
            <div className="resume-contacts">
              <span>📞 +7 (985) 268-97-87</span>
              <a href="mailto:kibalnikserg@yandex.ru">✉️ kibalnikserg@yandex.ru</a>
            </div>
            <div className="resume-location">Москва, Россия</div>
          </div>
        </div>
        <div className="resume-section">
          <div className="resume-section-title">Желаемая должность и зарплата</div>
          <div className="resume-salary">от 70 000 ₽ на руки</div>
          <div>Полная занятость, полный день, удалённая работа</div>
          <div>Желаемая специализация: Разработчик веб и мултимедийных приложений</div>
        </div>
        <div className="resume-section">
          <div className="resume-section-title">Образование</div>
          <ul className="resume-edu-list">
            <li className="resume-edu-item">
              <b>Технологический колледж № 21</b>, 2025<br/>
              Мегадизайн, 09.02.07 Информационные системы и программирование
            </li>
          </ul>
        </div>
        <div className="resume-section">
          <div className="resume-section-title">Курсы и сертификаты</div>
          <ul className="resume-cert-list">
            <li className="resume-cert-item">2025 — Цифровой паспорт компетенций</li>
            <li className="resume-cert-item">2024 — JavaScript от Яндекса: с нуля до веб-разработчика</li>
          </ul>
        </div>
        <div className="resume-section">
          <div className="resume-section-title">Навыки</div>
          <div className="resume-skills-list">
            <span className="resume-skill">JavaScript</span>
            <span className="resume-skill">Node.js</span>
            <span className="resume-skill">HTML</span>
            <span className="resume-skill">PHP</span>
            <span className="resume-skill">React</span>
            <span className="resume-skill">MySQL</span>
            <span className="resume-skill">GitHub</span>
            <span className="resume-skill">Веб-программирование</span>
            <span className="resume-skill">Веб-дизайн</span>
          </div>
        </div>
        <div className="resume-section">
          <div className="resume-section-title">Языки</div>
          <div className="resume-lang-list">
            <span className="resume-lang">Английский</span>
          </div>
        </div>
        <div className="resume-section">
          <a className="resume-portfolio-link" href="https://segak.ru/" target="_blank" rel="noopener noreferrer">Портфолио и проекты</a>
        </div>
      </div>
    </>
  )
}