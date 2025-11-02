import type { Metadata } from 'next'
import Script from 'next/script'
import '../globals.css'

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
      <style jsx>{`
        body {
          background: #f7f9fa;
          font-family: 'Liter', Arial, sans-serif;
          margin: 0;
          color: #222;
        }
        .resume-container {
          max-width: 900px;
          margin: 40px auto;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.1);
          padding: 40px 32px;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 32px;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 24px;
        }
        .avatar {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #e5e7eb;
          background: #f0f0f0;
        }
        .main-info {
          flex: 1;
        }
        .name {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .position {
          font-size: 1.2rem;
          color: #4f46e5;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 8px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        }
        .contacts a, .contacts span {
          color: #222;
          text-decoration: none;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .location {
          color: #6b7280;
          font-size: 1rem;
        }
        .section {
          margin-top: 32px;
        }
        .section-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #4f46e5;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }
        .skills-list, .lang-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
        }
        .skill, .lang {
          background: #eef2ff;
          color: #3730a3;
          border-radius: 8px;
          padding: 6px 14px;
          font-size: 1rem;
        }
        .edu-list, .cert-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .edu-item, .cert-item {
          margin-bottom: 10px;
        }
        .salary {
          font-size: 1.1rem;
          color: #059669;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .portfolio-link {
          display: inline-block;
          margin-top: 10px;
          background: #4f46e5;
          color: #fff;
          padding: 8px 18px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.2s;
        }
        .portfolio-link:hover {
          background: #3730a3;
        }
        @media (max-width: 600px) {
          .resume-container {
            padding: 16px 4vw;
          }
          .header {
            flex-direction: column;
            gap: 18px;
            align-items: flex-start;
          }
          .avatar {
            width: 90px;
            height: 90px;
          }
        }
      `}</style>
      <div className="resume-container">
        <div className="header">
          <img
            src="/assets/img/portfolio/1.jpg"
            alt="Аватар"
            className="avatar"
          />
          <div className="main-info">
            <div className="name">Кибальник Сергей Андреевич</div>
            <div className="position">Разработчик веб и мультимедийных приложений</div>
            <div className="contacts">
              <span>📞 +7 (985) 268-97-87</span>
              <a href="mailto:kibalnikserg@yandex.ru">✉️ kibalnikserg@yandex.ru</a>
            </div>
            <div className="location">Москва, Россия</div>
          </div>
        </div>
        <div className="section">
          <div className="section-title">Желаемая должность и зарплата</div>
          <div className="salary">от 70 000 ₽ на руки</div>
          <div>Полная занятость, полный день, удалённая работа</div>
          <div>Желаемая специализация: Разработчик веб и мултимедийных приложений</div>
        </div>
        <div className="section">
          <div className="section-title">Образование</div>
          <ul className="edu-list">
            <li className="edu-item">
              <b>Технологический колледж № 21</b>, 2025<br/>
              Мегадизайн, 09.02.07 Информационные системы и программирование
            </li>
          </ul>
        </div>
        <div className="section">
          <div className="section-title">Курсы и сертификаты</div>
          <ul className="cert-list">
            <li className="cert-item">2025 — Цифровой паспорт компетенций</li>
            <li className="cert-item">2024 — JavaScript от Яндекса: с нуля до веб-разработчика</li>
          </ul>
        </div>
        <div className="section">
          <div className="section-title">Навыки</div>
          <div className="skills-list">
            <span className="skill">JavaScript</span>
            <span className="skill">Node.js</span>
            <span className="skill">HTML</span>
            <span className="skill">PHP</span>
            <span className="skill">React</span>
            <span className="skill">MySQL</span>
            <span className="skill">GitHub</span>
            <span className="skill">Веб-программирование</span>
            <span className="skill">Веб-дизайн</span>
          </div>
        </div>
        <div className="section">
          <div className="section-title">Языки</div>
          <div className="lang-list">
            <span className="lang">Английский</span>
          </div>
        </div>
        <div className="section">
          <a className="portfolio-link" href="https://segak.ru/" target="_blank" rel="noopener noreferrer">Портфолио и проекты</a>
        </div>
      </div>
    </>
  )
}
