'use client'

import { useState, useEffect, useRef } from 'react'
import { projects } from '@/app/data/projects'
import type { Project } from '@/app/data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card project-card-carousel" style={{ scrollSnapAlign: 'start' }}>
      <div className="project-image">
        <div
          style={{
            background: project.image.startsWith('linear-gradient') ? project.image : `url(${encodeURI(project.image)})`,
            backgroundSize: project.image.startsWith('linear-gradient') ? undefined : 'cover',
            backgroundPosition: project.image.startsWith('linear-gradient') ? undefined : 'center',
            width: '100%',
            height: '100%'
          }}
          role="img"
          aria-label={project.title}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.desc}</p>
        {project.technologies && (
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        <div className="project-links">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-link"
            title="Live Demo"
            aria-label="Открыть демо проекта"
          >
            🌐
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link repo-link"
            title="GitHub Repository"
            aria-label="Репозиторий на GitHub"
          >
            &lt;/&gt;
          </a>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isScrollingRef = useRef(false)

  const CARD_GAP = 24 // 1.5rem
  const duplicatedProjects = [...projects, ...projects, ...projects]
  const totalSlides = projects.length

  const getCardStep = () => {
    if (!carouselRef.current) return 300
    const firstCard = carouselRef.current.querySelector('.project-card-carousel') as HTMLElement
    return firstCard ? firstCard.offsetWidth + CARD_GAP : carouselRef.current.offsetWidth / 3 + CARD_GAP
  }

  useEffect(() => {
    if (!isPaused && !isScrollingRef.current && carouselRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1
          
          if (next >= totalSlides) {
            setTimeout(() => {
              if (carouselRef.current) {
                const step = getCardStep()
                carouselRef.current.style.scrollBehavior = 'auto'
                carouselRef.current.scrollLeft = totalSlides * step
                carouselRef.current.style.scrollBehavior = 'smooth'
                setCurrentIndex(0)
              }
            }, 50)
            return totalSlides
          }
          
          return next
        })
      }, 4000) // Автопрокрутка каждые 4 секунды
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, totalSlides])

  useEffect(() => {
    if (carouselRef.current && !isScrollingRef.current) {
      isScrollingRef.current = true
      const step = getCardStep()
      const scrollPosition = currentIndex * step
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })

      setTimeout(() => {
        isScrollingRef.current = false
      }, 500)
    }
  }, [currentIndex])

  const goToSlide = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentIndex((prev) => {
      if (prev === 0) {
        if (carouselRef.current) {
          const step = getCardStep()
          carouselRef.current.style.scrollBehavior = 'auto'
          carouselRef.current.scrollLeft = (totalSlides * 2 - 1) * step
          carouselRef.current.style.scrollBehavior = 'smooth'
        }
        return totalSlides * 2 - 1
      }
      return prev - 1
    })
  }

  const goToNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentIndex((prev) => {
      const next = prev + 1
      if (next >= totalSlides * 2) {
        if (carouselRef.current) {
          const step = getCardStep()
          carouselRef.current.style.scrollBehavior = 'auto'
          carouselRef.current.scrollLeft = totalSlides * step
          carouselRef.current.style.scrollBehavior = 'smooth'
        }
        return totalSlides
      }
      return next
    })
  }

  // Обработка scroll для определения текущего слайда
  const handleScroll = () => {
    if (carouselRef.current && !isScrollingRef.current) {
      const step = getCardStep()
      const scrollLeft = carouselRef.current.scrollLeft
      const index = Math.round(scrollLeft / step)
      
      const normalizedIndex = index % totalSlides
      if (normalizedIndex !== currentIndex % totalSlides) {
        setCurrentIndex(normalizedIndex)
      }
    }
  }

  const displayIndex = currentIndex % totalSlides

  return (
    <div style={{
      position: 'relative',
      marginTop: '2rem',
      padding: '0 3rem'
    }}>
      {/* Карусель */}
      <div
        ref={carouselRef}
        className="projects-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsPaused(false), 3000)
        }}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          gap: '1.5rem',
          padding: '1.5rem 0',
          margin: '0',
          scrollbarWidth: 'none'
        }}
      >
        
        {duplicatedProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>

      {/* Навигационные стрелки */}
      <button
        onClick={goToPrevious}
        className="carousel-button carousel-button-prev"
        aria-label="Предыдущий проект"
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#fff',
          border: '2px solid #E5E7EB',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.2s',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#7C3AED'
          e.currentTarget.style.borderColor = '#7C3AED'
          e.currentTarget.style.color = '#fff'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#fff'
          e.currentTarget.style.borderColor = '#e2e8f0'
          e.currentTarget.style.color = '#404040'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="carousel-button carousel-button-next"
        aria-label="Следующий проект"
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#fff',
          border: '2px solid #E5E7EB',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.2s',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#7C3AED'
          e.currentTarget.style.borderColor = '#7C3AED'
          e.currentTarget.style.color = '#fff'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#fff'
          e.currentTarget.style.borderColor = '#e2e8f0'
          e.currentTarget.style.color = '#404040'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {/* Индикаторы (точки) */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.6rem',
        marginTop: '2rem',
        flexWrap: 'wrap'
      }}>
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Перейти к проекту ${index + 1}`}
            style={{
              width: displayIndex === index ? '36px' : '14px',
              height: '14px',
              borderRadius: '5px',
              background: displayIndex === index ? '#7C3AED' : '#D1D5DB',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0
            }}
          />
        ))}
      </div>
    </div>
  )
}