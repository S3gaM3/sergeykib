'use client'

import { useEffect, useRef, useState, memo } from 'react'

const stats = [
  { target: 9, label: 'Проектов в портфолио', description: 'Реальные кейсы: лендинги, корпоративные системы, веб-приложения на React и Node.js. Всё можно посмотреть и оценить.', icon: '🚀' },
  { target: 86, label: 'Паспорт компетенций, %', description: 'Цифровой паспорт компетенций — объективная оценка навыков. Плюс сертификат «JavaScript» от Яндекса.', icon: '💎' },
  { target: 144, label: 'Академических часов обучения', description: 'Сертификат «JavaScript» (Яндекс): практика, код-ревью, реальные проекты. Не теория — применимые навыки.', icon: '⚡' },
  { target: 1, label: 'Профильное образование', description: 'Колледж по направлению «Информационные системы и программирование», выпуск 2025. База плюс постоянная практика.', icon: '🏆' },
]

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
  return inView
}

const AnimatedNumber = memo(function AnimatedNumber({ target, inView }: { target: number; inView: boolean }) {
  const [value, setValue] = useState(0)
  const animated = useRef(false)
  useEffect(() => {
    if (!inView || animated.current) return
    animated.current = true
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    const id = setInterval(() => {
      current += step
      if (current >= target) {
        setValue(target)
        clearInterval(id)
      } else {
        setValue(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(id)
  }, [inView, target])
  return <>{value}</>
})

export default function PrismStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  return (
    <section className="stats-section" id="stats" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Почему ко мне обращаются</h2>
        <p className="section-subtitle">Факты и цифры — без воды, всё можно проверить</p>
      </div>
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-number" data-target={s.target}>
              <AnimatedNumber target={s.target} inView={inView} />
            </div>
            <div className="stat-label">{s.label}</div>
            <p className="stat-description">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
