'use client'

export default function ToolsList() {
  const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Cursor', icon: '/assets/img/icon_cursor.jpg', local: true },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ]

  return (
    <div className="tools-list" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '2rem',
      justifyContent: 'center'
    }}>
      {tools.map((tool, index) => (
        <div 
          key={index} 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            borderRadius: '12px',
            transition: 'transform 0.2s, background 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.background = '#f8fafc'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <div title={tool.name} style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#2563eb22',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.5rem'
          }}>
            <img
              src={tool.icon}
              alt={tool.name}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: tool.local ? '10px' : '0',
                objectFit: tool.local ? 'cover' : 'contain'
              }}
            />
          </div>
          <span style={{fontSize: '0.95em', fontWeight: '500', color: '#475569'}}>{tool.name}</span>
        </div>
      ))}
    </div>
  )
}
