'use client'

import { useState, useEffect } from 'react'

export default function PrismLoader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`} id="loader" aria-hidden={hidden}>
      <div className="loader-content">
        <div className="loader-prism">
          <div className="prism-face" />
          <div className="prism-face" />
          <div className="prism-face" />
        </div>
        <div style={{ color: 'var(--accent-purple)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '3px' }}>
          Готовлюсь к работе...
        </div>
      </div>
    </div>
  )
}
