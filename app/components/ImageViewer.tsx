'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface ImageViewerProps {
  src: string
  alt: string
  children: React.ReactNode
}

export default function ImageViewer({ src, alt, children }: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchDistance, setTouchDistance] = useState<number | null>(null)
  const [touchCenter, setTouchCenter] = useState<{ x: number; y: number } | null>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const MIN_SCALE = 1
  const MAX_SCALE = 5
  const SCALE_STEP = 0.2

  const openViewer = useCallback(() => {
    setIsOpen(true)
    setScale(1)
    setPosition({ x: 0, y: 0 })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeViewer = useCallback(() => {
    setIsOpen(false)
    setScale(1)
    setPosition({ x: 0, y: 0 })
    document.body.style.overflow = 'unset'
    if (isFullscreen && document.fullscreenElement) {
      document.exitFullscreen()
    }
  }, [isFullscreen])

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isOpen) return
    e.preventDefault()
    
    const delta = e.deltaY > 0 ? -SCALE_STEP : SCALE_STEP
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale + delta))
    
    if (imageRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const mouseX = e.clientX - rect.left - rect.width / 2
      const mouseY = e.clientY - rect.top - rect.height / 2
      
      const scaleChange = newScale / scale
      setPosition({
        x: mouseX - (mouseX - position.x) * scaleChange,
        y: mouseY - (mouseY - position.y) * scaleChange
      })
    }
    
    setScale(newScale)
  }, [isOpen, scale, position])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale > MIN_SCALE) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
    }
  }, [scale, position])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && scale > MIN_SCALE) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }, [isDragging, dragStart, scale])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      setTouchDistance(distance)
      setTouchCenter({
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2
      })
    } else if (e.touches.length === 1 && scale > MIN_SCALE) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      })
    }
  }, [scale, position])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchDistance && touchCenter) {
      e.preventDefault()
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const newDistance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      
      const scaleChange = newDistance / touchDistance
      const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale * scaleChange))
      
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = touchCenter.x - rect.left - rect.width / 2
        const centerY = touchCenter.y - rect.top - rect.height / 2
        
        setPosition({
          x: centerX - (centerX - position.x) * (newScale / scale),
          y: centerY - (centerY - position.y) * (newScale / scale)
        })
      }
      
      setScale(newScale)
      setTouchDistance(newDistance)
    } else if (e.touches.length === 1 && isDragging && scale > MIN_SCALE) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      })
    }
  }, [touchDistance, touchCenter, scale, position, isDragging, dragStart])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    setTouchDistance(null)
    setTouchCenter(null)
  }, [])

  const zoomIn = useCallback(() => {
    setScale(prev => Math.min(MAX_SCALE, prev + SCALE_STEP * 2))
  }, [])

  const zoomOut = useCallback(() => {
    setScale(prev => {
      const newScale = Math.max(MIN_SCALE, prev - SCALE_STEP * 2)
      if (newScale === MIN_SCALE) {
        setPosition({ x: 0, y: 0 })
      }
      return newScale
    })
  }, [])

  const resetZoom = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return
    
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('wheel', handleWheel, { passive: false })
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeViewer()
        } else if (e.key === '+' || e.key === '=') {
          zoomIn()
        } else if (e.key === '-') {
          zoomOut()
        } else if (e.key === '0') {
          resetZoom()
        } else if (e.key === 'f' || e.key === 'F') {
          toggleFullscreen()
        }
      }
      
      window.addEventListener('keydown', handleKeyDown)
      
      return () => {
        window.removeEventListener('wheel', handleWheel)
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, handleWheel, handleMouseMove, handleMouseUp, closeViewer, zoomIn, zoomOut, resetZoom, toggleFullscreen])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <>
      <div onClick={openViewer} style={{ cursor: 'zoom-in' }}>
        {children}
      </div>

      {isOpen && (
        <div
          ref={containerRef}
          className="image-viewer-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeViewer()
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="image-viewer-controls">
            <button
              onClick={zoomOut}
              disabled={scale <= MIN_SCALE}
              aria-label="Уменьшить"
              title="Уменьшить (-)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </button>
            <span className="image-viewer-scale">{Math.round(scale * 100)}%</span>
            <button
              onClick={zoomIn}
              disabled={scale >= MAX_SCALE}
              aria-label="Увеличить"
              title="Увеличить (+)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </button>
            <button
              onClick={resetZoom}
              aria-label="Сбросить масштаб"
              title="Сбросить (0)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
              </svg>
            </button>
            <button
              onClick={toggleFullscreen}
              aria-label="Полноэкранный режим"
              title="Полноэкранный режим (F)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
              </svg>
            </button>
            <button
              onClick={closeViewer}
              aria-label="Закрыть"
              title="Закрыть (Esc)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div
            className="image-viewer-content"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: scale > MIN_SCALE ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
            onMouseDown={handleMouseDown}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className="image-viewer-img"
              draggable={false}
            />
          </div>

          <div className="image-viewer-hint">
            <div>Колесико мыши / Жесты: Масштаб</div>
            <div>Перетаскивание: Перемещение</div>
            <div>+/-: Масштаб | 0: Сброс | F: Полноэкранный | Esc: Закрыть</div>
          </div>
        </div>
      )}
    </>
  )
}

