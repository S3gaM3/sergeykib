'use client'

import { useEffect, useRef } from 'react'

export default function PrismAbout() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    const count = 15
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.left = Math.random() * 100 + '%'
      p.style.top = Math.random() * 100 + '%'
      p.style.animationDelay = Math.random() * 20 + 's'
      p.style.animationDuration = 18 + Math.random() * 8 + 's'
      container.appendChild(p)
    }
    return () => {
      while (container.firstChild) container.removeChild(container.firstChild)
    }
  }, [])

  return (
    <section className="philosophy-section" id="about">
      <div className="philosophy-container">
        <div className="prism-line" />
        <h2 className="philosophy-headline">
          Ваша идея — уже завтра работающий продукт
        </h2>
        <p className="philosophy-subheading">
          Создаю веб-приложения, которые приносят результат: быстрые, понятные пользователям и готовые к росту.
          От лендинга до сложного сервиса — без лишних слов и с соблюдением сроков.
        </p>
        <div className="philosophy-pillars">
          <div className="pillar">
            <div className="pillar-icon">💎</div>
            <h3 className="pillar-title">Результат, а не просто код</h3>
            <p className="pillar-description">
              React, TypeScript, Node.js — современный стек, который даёт вашим пользователям скорость и удобство.
              Адаптивная вёрстка и продуманный UX повышают конверсию и удерживают внимание.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">🔬</div>
            <h3 className="pillar-title">Сдаю в срок — без сюрпризов</h3>
            <p className="pillar-description">
              Прозрачные дедлайны и регулярная связь. Чистая архитектура, тесты и доступность — ваш проект
              стабильно работает и легко масштабируется.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">∞</div>
            <h3 className="pillar-title">Расту вместе с вашими задачами</h3>
            <p className="pillar-description">
              Сертификаты Яндекс.Практикума и постоянная практика на реальных проектах. Подстроюсь под ваш стек
              и помогу воплотить задумку без лишних компромиссов.
            </p>
          </div>
        </div>
        <div className="philosophy-particles" id="particles" ref={particlesRef} />
      </div>
    </section>
  )
}
