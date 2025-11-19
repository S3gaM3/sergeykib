'use client'

export default function Certificates() {
  return (
    <div className="cert-gallery certificates" style={{display: 'flex', flexWrap: 'wrap', gap: '2em', justifyContent: 'center'}}>
      <div style={{maxWidth: '320px', textAlign: 'center'}}>
        <a
          href="/assets/img/portfolio/3.webp"
          target="_blank"
          rel="noopener noreferrer"
          style={{display: 'block', cursor: 'pointer'}}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/portfolio/3.webp"
            alt="Сертификат Яндекс JavaScript"
            loading="lazy"
            decoding="async"
            width={320}
            height={240}
            className="cert-thumb"
            style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'transform 0.2s'}}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </a>
        <div style={{marginTop: '1em', fontSize: '1em'}}>
          JavaScript от Яндекса<br/>
          <span style={{color: '#64748b', fontSize: '0.9em'}}>2024, 144 акад. часа</span>
        </div>
      </div>
      <div style={{maxWidth: '320px', textAlign: 'center'}}>
        <div style={{display: 'flex', gap: '1em', justifyContent: 'center'}}>
          <a
            href="/assets/img/portfolio/0.webp"
            target="_blank"
            rel="noopener noreferrer"
            style={{display: 'block', cursor: 'pointer', width: '48%'}}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/portfolio/0.webp"
              alt="Цифровой паспорт компетенций стр.1"
              loading="lazy"
              decoding="async"
              width={200}
              height={200}
              className="cert-thumb"
              style={{width: '100%', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'transform 0.2s'}}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </a>
          <a
            href="/assets/img/portfolio/1.webp"
            target="_blank"
            rel="noopener noreferrer"
            style={{display: 'block', cursor: 'pointer', width: '48%'}}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/portfolio/1.webp"
              alt="Цифровой паспорт компетенций стр.2"
              loading="lazy"
              decoding="async"
              width={200}
              height={200}
              className="cert-thumb"
              style={{width: '100%', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'transform 0.2s'}}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </a>
        </div>
        <div style={{marginTop: '1em', fontSize: '1em'}}>
          Цифровой паспорт компетенций<br/>
          <span style={{color: '#64748b', fontSize: '0.9em'}}>86% из 100%</span>
        </div>
      </div>
    </div>
  )
}
