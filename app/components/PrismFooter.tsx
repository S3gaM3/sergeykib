'use client'

export default function PrismFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">
              <div className="logo-prism">
                <div className="prism-shape" />
              </div>
            </div>
            <span className="logo-text">
              <span className="prism">Сергей</span>
              <span className="flux">Кибальник</span>
            </span>
          </div>
          <p className="footer-description">
            Веб-приложения и сайты под ключ: от идеи до запуска. Работаю в срок, на связи — Москва и удалённо.
          </p>
          <div className="footer-social">
            <a href="https://t.me/kosmosega" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">TG</a>
            <a href="https://github.com/S3gaM3" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">GH</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Навигация</h4>
          <div className="footer-links">
            <a href="#about">Обо мне</a>
            <a href="#skills">Навыки</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <div className="footer-links">
            <a href="mailto:kibalnikserg@yandex.ru">Email</a>
            <a href="https://t.me/kosmosega" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">© {year} Сергей Кибальник. Все права защищены.</div>
      </div>
    </footer>
  )
}
