'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // Обновляем год при монтировании компонента
    setCurrentYear(new Date().getFullYear())
    
    // Обновляем год каждый раз при изменении (на случай, если страница открыта в новогоднюю ночь)
    const updateYear = () => {
      const newYear = new Date().getFullYear()
      if (newYear !== currentYear) {
        setCurrentYear(newYear)
      }
    }
    
    // Проверяем год каждую минуту
    const interval = setInterval(updateYear, 60000)
    
    return () => clearInterval(interval)
  }, [currentYear])

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-name">Сергей Кибальник</h3>
            <p className="footer-tagline">Веб-разработчик</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Навигация</h4>
              <nav className="footer-nav">
                <a href="#about" className="footer-link">Обо мне</a>
                <a href="#skills" className="footer-link">Навыки</a>
                <a href="#projects" className="footer-link">Проекты</a>
                <a href="#contacts" className="footer-link">Контакты</a>
              </nav>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Контакты</h4>
              <div className="footer-contacts">
                <a 
                  href="https://t.me/kosmosega" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Telegram
                </a>
                <a 
                  href="https://github.com/S3gaM3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
                <a 
                  href="https://segak.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Личный сайт
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; <span id="current-year">{currentYear}</span> Сергей Кибальник. Все права защищены.
          </p>
          <p className="footer-made">
            Сделано с <span className="footer-heart">❤️</span> и React
          </p>
          <a
            href="https://jigsaw.w3.org/css-validator/check/referer"
            className="footer-validator"
          >
            <img
              style={{ border: 0, width: 88, height: 31 }}
              src="https://jigsaw.w3.org/css-validator/images/vcss"
              alt="Правильный CSS!"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

