'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    // Плавная прокрутка для якорных ссылок
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (link && link.hash) {
        e.preventDefault()
        const id = link.hash.substring(1)
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
    }

    document.addEventListener('click', handleAnchorClick)
    
    // Прокрутка к якорю при загрузке страницы
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
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
      }, 100)
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [pathname])

  return null
}
