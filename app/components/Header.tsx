'use client'

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="header-main">
          <div className="header-badge">
            <span>Веб-разработчик</span>
          </div>
          <h1 className="header-name">
            Сергей <span className="header-name-accent">Кибальник</span>
          </h1>
          <p className="header-tagline">
            Создаю современные сайты и мультимедийные решения
          </p>
          <p className="header-description">
            Специализируюсь на React, Node.js, UX/UI. Помогаю бизнесу расти в интернете.
          </p>
          
          <div className="header-actions">
            <a 
              href="#contacts" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                const contacts = document.getElementById('contacts')
                if (contacts) {
                  contacts.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Связаться
            </a>
          </div>

          <div className="header-socials">
            <a 
              href="https://t.me/kosmosega" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Telegram"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M9.04 16.62l-.39 3.47c.56 0 .8-.24 1.09-.53l2.62-2.5 5.44 3.98c1 .55 1.72.26 1.97-.92l3.58-16.7c.33-1.53-.56-2.13-1.53-1.77L2.2 9.3c-1.48.58-1.46 1.4-.25 1.77l4.6 1.44 10.7-6.74c.5-.33.96-.15.58.21z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://github.com/S3gaM3" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://segak.ru/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Личный сайт"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
