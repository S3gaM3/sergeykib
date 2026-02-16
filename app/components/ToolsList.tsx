'use client'

export default function ToolsList() {
  const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Cursor', icon: '/assets/img/icon_cursor.jpg', local: true },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg' },
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
          className="tools-list-item"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            borderRadius: '12px',
            transition: 'transform 0.2s, background 0.2s, color 0.2s'
          }}
        >
          <div title={tool.name} style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '8px'
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.icon}
              alt={tool.name}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: tool.local ? '10px' : '0',
                objectFit: tool.local ? 'cover' : 'contain',
                filter: 'none'
              }}
            />
          </div>
          <span className="tools-list-item-name" style={{
            fontSize: '0.95em', 
            fontWeight: '500', 
            color: '#6B7280'
          }}>{tool.name}</span>
        </div>
      ))}
    </div>
  )
}
