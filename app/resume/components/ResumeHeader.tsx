'use client'

export default function ResumeHeader() {
  return (
    <div className="resume-header-card" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '20px',
      padding: '3rem',
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      border: '1px solid #e2e8f0',
      marginBottom: '3rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2.5rem',
        flexWrap: 'wrap'
      }}>
        <div style={{position: 'relative'}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src="/assets/img/portfolio/1.jpg"
            alt="Сергей Кибальник"
            className="resume-avatar"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #2563eb',
              boxShadow: '0 8px 24px rgba(37, 99, 235, 0.2)'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            background: '#10b981',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: '3px solid #fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}></div>
        </div>

        <div style={{flex: 1, minWidth: '280px'}}>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#1e293b',
            marginBottom: '0.5rem',
            lineHeight: '1.2'
          }}>
            Кибальник Сергей Андреевич
          </h1>
          <div style={{
            fontSize: '1.3rem',
            color: '#2563eb',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            Разработчик веб и мультимедийных приложений
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem'
          }}>
            <a
              href="tel:+79852689787"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                color: '#475569',
                textDecoration: 'none',
                fontSize: '1.05em',
                transition: 'color 0.2s'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#eef2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb',
                fontSize: '1.2em'
              }}>
                📞
              </div>
              <span>+7 (985) 268-97-87</span>
            </a>
            <a
              href="mailto:kibalnikserg@yandex.ru"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                color: '#475569',
                textDecoration: 'none',
                fontSize: '1.05em',
                transition: 'color 0.2s'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#eef2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb',
                fontSize: '1.2em'
              }}>
                ✉️
              </div>
              <span>kibalnikserg@yandex.ru</span>
            </a>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              color: '#475569',
              fontSize: '1.05em'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#eef2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb',
                fontSize: '1.2em'
              }}>
                📍
              </div>
              <span>Москва, Россия</span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://t.me/kosmosega"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5em',
                padding: '0.6em 1.2em',
                background: '#2563eb',
                color: '#fff',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '0.95em',
                fontWeight: '600',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.3)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.04 16.62l-.39 3.47c.56 0 .8-.24 1.09-.53l2.62-2.5 5.44 3.98c1 .55 1.72.26 1.97-.92l3.58-16.7c.33-1.53-.56-2.13-1.53-1.77L2.2 9.3c-1.48.58-1.46 1.4-.25 1.77l4.6 1.44 10.7-6.74c.5-.33.96-.15.58.21z"/>
              </svg>
              Telegram
            </a>
            <a
              href="https://github.com/S3gaM3"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5em',
                padding: '0.6em 1.2em',
                background: '#f1f5f9',
                color: '#1e293b',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '0.95em',
                fontWeight: '600',
                transition: 'all 0.2s',
                border: '1px solid #e2e8f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e2e8f0'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f1f5f9'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
