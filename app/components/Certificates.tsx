'use client'

import { useState, useEffect, useCallback } from 'react'

interface CertificateImage {
  src: string
  alt: string
}

const certificateImages: CertificateImage[] = [
  { src: '/assets/img/portfolio/3.webp', alt: 'Сертификат Яндекс JavaScript' },
  { src: '/assets/img/portfolio/4.webp', alt: 'Сертификат Sololearn HTML' },
  { src: '/assets/img/portfolio/5.webp', alt: 'Сертификат Sololearn CSS' },
  { src: '/assets/img/portfolio/0.webp', alt: 'Цифровой паспорт компетенций стр.1' },
  { src: '/assets/img/portfolio/1.webp', alt: 'Цифровой паспорт компетенций стр.2' },
]

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => {
      setCurrentIndex(null)
    }, 300)
  }, [])

  const goToPrevious = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => 
        prev === null ? null : (prev === 0 ? certificateImages.length - 1 : prev - 1)
      )
    }
  }, [currentIndex])

  const goToNext = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => 
        prev === null ? null : (prev === certificateImages.length - 1 ? 0 : prev + 1)
      )
    }
  }, [currentIndex])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'unset'
      return
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeLightbox, goToPrevious, goToNext])

  return (
    <>
      <div className="cert-gallery certificates" style={{display: 'flex', flexWrap: 'wrap', gap: '1.5em'}}>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={certificateImages[0].src}
            alt={certificateImages[0].alt}
            loading="lazy"
            decoding="async"
            width={180}
            height={120}
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s'}}
            onClick={() => openLightbox(0)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            JavaScript от Яндекса<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>2024, 144 акад. часа</span>
          </div>
        </div>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={certificateImages[1].src}
            alt={certificateImages[1].alt}
            loading="lazy"
            decoding="async"
            width={180}
            height={120}
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s'}}
            onClick={() => openLightbox(1)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            HTML — Sololearn<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>2022</span>
          </div>
        </div>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={certificateImages[2].src}
            alt={certificateImages[2].alt}
            loading="lazy"
            decoding="async"
            width={180}
            height={120}
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s'}}
            onClick={() => openLightbox(2)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            CSS — Sololearn<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>2023</span>
          </div>
        </div>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          <div style={{display: 'flex', gap: '0.5em', justifyContent: 'center'}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certificateImages[3].src}
              alt={certificateImages[3].alt}
              loading="lazy"
              decoding="async"
              width={86}
              height={86}
              className="cert-thumb"
              style={{width: '48%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s'}}
              onClick={() => openLightbox(3)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certificateImages[4].src}
              alt={certificateImages[4].alt}
              loading="lazy"
              decoding="async"
              width={86}
              height={86}
              className="cert-thumb"
              style={{width: '48%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s'}}
              onClick={() => openLightbox(4)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            Цифровой паспорт компетенций<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>86% из 100%</span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && currentIndex !== null && (
        <div
          className="cert-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр сертификата"
        >
          <button
            className="cert-lightbox-close"
            onClick={closeLightbox}
            aria-label="Закрыть"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {certificateImages.length > 1 && (
            <>
              <button
                className="cert-lightbox-nav cert-lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                aria-label="Предыдущее изображение"
                type="button"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                className="cert-lightbox-nav cert-lightbox-next"
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                aria-label="Следующее изображение"
                type="button"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}

          <div className="cert-lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certificateImages[currentIndex].src}
              alt={certificateImages[currentIndex].alt}
              className="cert-lightbox-img"
            />
            {certificateImages.length > 1 && (
              <div className="cert-lightbox-counter">
                {currentIndex + 1} / {certificateImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
