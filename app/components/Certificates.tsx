'use client'

import { useState, useEffect, useCallback } from 'react'

export default function Certificates() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const closeModal = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    setModalOpen(false)
    setTimeout(() => {
      setModalImage('')
    }, 300)
  }, [])

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc)
    setModalOpen(true)
  }

  useEffect(() => {
    if (!modalOpen) {
      document.body.style.overflow = 'unset'
      return
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [modalOpen, closeModal])

  return (
    <>
      <div className="cert-gallery certificates" style={{display: 'flex', flexWrap: 'wrap', gap: '1.5em'}}>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/portfolio/3.webp"
            alt="Сертификат Яндекс JavaScript"
            loading="lazy"
            decoding="async"
            width={180}
            height={120}
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
            onClick={() => openModal('/assets/img/portfolio/3.webp')}
          />
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            JavaScript от Яндекса<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>2024, 144 акад. часа</span>
          </div>
        </div>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/portfolio/4.webp"
            alt="Сертификат Sololearn HTML"
            loading="lazy"
            decoding="async"
            width={180}
            height={120}
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
            onClick={() => openModal('/assets/img/portfolio/4.webp')}
          />
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            HTML — Sololearn<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>2022</span>
          </div>
        </div>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/portfolio/5.webp"
            alt="Сертификат Sololearn CSS"
            loading="lazy"
            decoding="async"
            width={180}
            height={120}
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
            onClick={() => openModal('/assets/img/portfolio/5.webp')}
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
              src="/assets/img/portfolio/0.webp"
              alt="Цифровой паспорт компетенций стр.1"
              loading="lazy"
              decoding="async"
              width={86}
              height={86}
              className="cert-thumb"
              style={{width: '48%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
              onClick={() => openModal('/assets/img/portfolio/0.webp')}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/portfolio/1.webp"
              alt="Цифровой паспорт компетенций стр.2"
              loading="lazy"
              decoding="async"
              width={86}
              height={86}
              className="cert-thumb"
              style={{width: '48%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
              onClick={() => openModal('/assets/img/portfolio/1.webp')}
            />
          </div>
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            Цифровой паспорт компетенций<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>86% из 100%</span>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {modalOpen && (
        <div
          className="cert-modal open"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal()
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            {modalImage && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modalImage}
                  alt="Просмотр сертификата"
                  className="cert-modal-img"
                />
                <button
                  className="cert-modal-close"
                  onClick={(e) => closeModal(e)}
                  aria-label="Закрыть"
                  type="button"
                >
                  &times;
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
