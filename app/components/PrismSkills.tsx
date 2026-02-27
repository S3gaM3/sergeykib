'use client'

import { useState } from 'react'

const SKILLS = [
  { name: 'React', icon: '⚛️', level: 85, category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: '📘', level: 80, category: 'frontend' },
  { name: 'HTML5/CSS3', icon: '🌐', level: 95, category: 'frontend' },
  { name: 'Node.js', icon: '🟢', level: 75, category: 'backend' },
  { name: 'Python', icon: '🐍', level: 60, category: 'backend' },
  { name: 'MySQL', icon: '🍃', level: 70, category: 'backend' },
  { name: 'Git', icon: '📦', level: 85, category: 'tools' },
  { name: 'Figma', icon: '🎨', level: 65, category: 'tools' },
]

const CATEGORIES = [
  { id: 'all', label: 'Все' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Инструменты' },
]

export default function PrismSkills() {
  const [category, setCategory] = useState('all')
  const filtered = category === 'all' ? SKILLS : SKILLS.filter((s) => s.category === category)

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Чем закрываю ваши задачи</h2>
          <p className="section-subtitle">Стек, на котором строятся быстрые и масштабируемые продукты</p>
        </div>
        <div className="skill-categories" role="group" aria-label="Фильтр по категориям">
          {CATEGORIES.map((c) => (
            <button
              type="button"
              key={c.id}
              className={`category-tab ${category === c.id ? 'active' : ''}`}
              data-category={c.id}
              onClick={() => setCategory(c.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setCategory(c.id)
                }
              }}
              aria-pressed={category === c.id}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="skills-hexagon-grid" id="skillsGrid">
          {filtered.map((skill, index) => (
            <div key={skill.name} className="skill-hexagon" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="hexagon-inner">
                <div className="hexagon-content">
                  <div className="skill-icon-hex">{skill.icon}</div>
                  <div className="skill-name-hex">{skill.name}</div>
                  <div className="skill-level">
                    <div className="skill-level-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                  <div className="skill-percentage-hex">{skill.level}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
