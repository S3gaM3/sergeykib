interface ResumeSectionProps {
  icon: string
  title: string
  content: React.ReactNode
}

export default function ResumeSection({ icon, title, content }: ResumeSectionProps) {
  return (
    <div className="resume-section-card" style={{
      background: '#fff',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      marginBottom: '2rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '2px solid #e2e8f0'
      }}>
        <span style={{fontSize: '2rem'}}>{icon}</span>
        <h2 className="resume-section-title" style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#1e293b',
          margin: 0
        }}>
          {title}
        </h2>
      </div>
      <div style={{color: '#475569', lineHeight: '1.7'}}>
        {content}
      </div>
    </div>
  )
}
