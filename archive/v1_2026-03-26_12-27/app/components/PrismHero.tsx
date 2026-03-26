'use client'

import { useState, useEffect, useCallback, useRef, memo } from 'react'
import { projects } from '@/app/data/projects'
import type { Project } from '@/app/data/projects'
import Image from 'next/image'

const CAROUSEL_PROJECTS = projects.filter(
  (p) =>
    !p.title.includes('Pindie') &&
    !p.title.includes('Library Management') &&
    !p.title.includes('Warehouse Management')
)
const TOTAL = CAROUSEL_PROJECTS.length

const CarouselCard = memo(function CarouselCard({ project, index, priority }: { project: Project; index: number; priority?: boolean }) {
  return (
    <div className="carousel-item" data-index={index}>
      <div className="card">
        <div className="card-number">0{index + 1}</div>
        <div className="card-image">
          <Image
            src={project.image}
            alt={project.title}
            width={280}
            height={100}
            sizes="(max-width: 768px) 240px, 280px"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading={priority ? undefined : 'lazy'}
            priority={priority}
          />
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.desc}</p>
        <div className="card-tech">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-cta"
        >
          Открыть
        </a>
      </div>
    </div>
  )
})

export default function PrismHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const updateTransforms = useCallback(() => {
    const container = carouselRef.current
    if (!container) return
    const items = container.querySelectorAll<HTMLElement>('.carousel-item')
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
    const isTablet = typeof window !== 'undefined' && window.innerWidth <= 1024
    let spacing1 = 360
    let spacing2 = 500
    let spacing3 = 620
    if (isMobile) {
      spacing1 = 260
      spacing2 = 360
      spacing3 = 450
    } else if (isTablet) {
      spacing1 = 320
      spacing2 = 420
      spacing3 = 520
    }

    items.forEach((item, index) => {
      let offset = index - currentIndex
      if (offset > TOTAL / 2) offset -= TOTAL
      else if (offset < -TOTAL / 2) offset += TOTAL
      const absOffset = Math.abs(offset)
      const sign = offset < 0 ? -1 : 1
      item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'

      if (absOffset === 0) {
        item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)'
        item.style.opacity = '1'
        item.style.zIndex = '10'
      } else if (absOffset === 1) {
        const translateX = sign * spacing1
        const rotation = isMobile ? 25 : 30
        const scale = isMobile ? 0.88 : 0.85
        item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`
        item.style.opacity = '0.8'
        item.style.zIndex = '5'
      } else if (absOffset === 2) {
        const translateX = sign * spacing2
        const rotation = isMobile ? 35 : 40
        const scale = isMobile ? 0.75 : 0.7
        item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`
        item.style.opacity = '0.5'
        item.style.zIndex = '3'
      } else if (absOffset === 3) {
        const translateX = sign * spacing3
        const rotation = isMobile ? 40 : 45
        const scale = isMobile ? 0.65 : 0.6
        item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`
        item.style.opacity = '0.3'
        item.style.zIndex = '2'
      } else {
        item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)'
        item.style.opacity = '0'
        item.style.zIndex = '1'
      }
    })

  }, [currentIndex])

  useEffect(() => {
    const raf = requestAnimationFrame(() => updateTransforms())
    return () => cancelAnimationFrame(raf)
  }, [currentIndex, updateTransforms])

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((i) => (i + 1) % TOTAL), 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(t)
      t = setTimeout(updateTransforms, 250)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(t)
    }
  }, [updateTransforms])

  const next = () => setCurrentIndex((i) => (i + 1) % TOTAL)
  const prev = () => setCurrentIndex((i) => (i - 1 + TOTAL) % TOTAL)

  return (
    <section className="hero" id="home" aria-label="Проекты">
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel" id="carousel">
          {CAROUSEL_PROJECTS.map((project, index) => (
            <CarouselCard key={`${project.liveUrl}-${index}`} project={project} index={index} priority={index === 0} />
          ))}
        </div>
        <div className="carousel-controls">
          <button type="button" className="carousel-btn" onClick={prev} aria-label="Предыдущий проект">‹</button>
          <button type="button" className="carousel-btn" onClick={next} aria-label="Следующий проект">›</button>
        </div>
      </div>
    </section>
  )
}
