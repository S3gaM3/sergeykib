'use client'

import { useState, useEffect } from 'react'

export default function Certificates() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => setModalImage(''), 200)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeModal()
      }
    }

    if (modalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [modalOpen])

  return (
    <>
      <div className="cert-gallery" style={{display: 'flex', flexWrap: 'wrap', gap: '1.5em'}}>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          <img
            src="/assets/img/portfolio/3.png"
            alt="Сертификат Яндекс JavaScript"
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
            onClick={() => openModal('/assets/img/portfolio/3.png')}
          />
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            JavaScript от Яндекса<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>2024, 144 акад. часа</span>
          </div>
        </div>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          <img
            src="/assets/img/portfolio/4.png"
            alt="Сертификат Sololearn HTML"
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
            onClick={() => openModal('/assets/img/portfolio/4.png')}
          />
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            HTML — Sololearn<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>2022</span>
          </div>
        </div>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          <img
            src="/assets/img/portfolio/5.png"
            alt="Сертификат Sololearn CSS"
            className="cert-thumb"
            style={{width: '100%', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
            onClick={() => openModal('/assets/img/portfolio/5.png')}
          />
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            CSS — Sololearn<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>2023</span>
          </div>
        </div>
        <div style={{maxWidth: '180px', textAlign: 'center'}}>
          <div style={{display: 'flex', gap: '0.5em', justifyContent: 'center'}}>
            <img
              src="/assets/img/portfolio/0.png"
              alt="Цифровой паспорт компетенций стр.1"
              className="cert-thumb"
              style={{width: '48%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
              onClick={() => openModal('/assets/img/portfolio/0.png')}
            />
            <img
              src="/assets/img/portfolio/1.png"
              alt="Цифровой паспорт компетенций стр.2"
              className="cert-thumb"
              style={{width: '48%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer'}}
              onClick={() => openModal('/assets/img/portfolio/1.png')}
            />
          </div>
          <div style={{marginTop: '0.5em', fontSize: '0.98em'}}>
            Цифровой паспорт компетенций<br/>
            <span style={{color: '#64748b', fontSize: '0.92em'}}>86% из 100%</span>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <div
        className={`cert-modal ${modalOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <div className="cert-modal-content">
          {modalImage && (
            <img
              src={modalImage}
              alt="Просмотр сертификата"
              className="cert-modal-img"
              style={{maxWidth: '100%', maxHeight: '90vh', borderRadius: '12px', boxShadow: '0 4px 32px rgba(0,0,0,0.8)', background: '#fff'}}
            />
          )}
          <button
            className="cert-modal-close"
            onClick={closeModal}
            aria-label="Закрыть"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  )
}
