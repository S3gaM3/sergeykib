'use client'

import { useState, useEffect, useRef } from 'react'

const navItems = [
  { id: 'about', label: 'Обо мне' },
  { id: 'stats', label: 'Метрики' },
  { id: 'skills', label: 'Навыки' },
  { id: 'contact', label: 'Контакты' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  const header = document.getElementById('header')
  if (el && header) {
    const y = el.getBoundingClientRect().top + window.scrollY - header.offsetHeight
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export default function PrismHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        setScrolled(window.scrollY > 100)
        const scrollY = window.scrollY + 150
        let found = ''
        for (const { id } of navItems) {
          const el = document.getElementById(id)
          if (el) {
            const { offsetTop, offsetHeight } = el
            if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
              found = id
              break
            }
          }
        }
        setActiveSection(found)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <nav className="nav-container">
        <a
          href="#about"
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('about')
          }}
          aria-label="На главную"
        >
          <div className="logo-icon">
            <div className="logo-prism">
              <div className="prism-shape" />
            </div>
          </div>
          <span className="logo-text">
            <span className="prism">Сергей</span>
            <span className="flux">Кибальник</span>
          </span>
        </a>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(id)
                  setMenuOpen(false)
                }}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          id="menuToggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="navMenu"
        >
          <span aria-hidden />
          <span aria-hidden />
          <span aria-hidden />
        </button>
      </nav>
    </header>
  )
}
