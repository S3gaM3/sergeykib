import Link from 'next/link'
import './globals.css'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f7f9fa',
      margin: 0
    }}>
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '4em', color: '#7C3AED', marginBottom: '0.2em'}}>404</h1>
        <p style={{fontSize: '1.3em', color: '#6B7280'}}>Страница не найдена</p>
        <Link href="/" style={{color: '#7C3AED', textDecoration: 'underline', fontSize: '1.1em'}}>
          На главную
        </Link>
      </div>
    </div>
  )
}
