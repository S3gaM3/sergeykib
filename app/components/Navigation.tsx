'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Определяем активную секцию
      const sections = ['about', 'skills', 'projects', 'education', 'certificates', 'testimonials', 'faq', 'contacts']
      const scrollPosition = window.scrollY + 150
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'skills', label: 'Навыки' },
    { id: 'projects', label: 'Проекты' },
    { id: 'education', label: 'Образование' },
    { id: 'certificates', label: 'Сертификаты' },
    { id: 'testimonials', label: 'Отзывы' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacts', label: 'Контакты' }
  ]

  return (
    <nav
      className={`fixed-nav ${isScrolled ? 'scrolled' : ''}`}
      aria-label="Основная навигация"
    >
      <div className="nav-container">
        <Link href="/" className="nav-logo" aria-label="На главную">
          Сергей Кибальник
        </Link>
        <ul className="nav-menu" role="menubar">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={activeSection === item.id ? 'active' : ''}
                role="menuitem"
                aria-label={`Перейти к разделу ${item.label}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
        </div>
      </div>
    </nav>
  )
}

