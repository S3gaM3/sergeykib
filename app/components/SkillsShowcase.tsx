'use client'

export default function SkillsShowcase() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML5/CSS3', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    },
    {
      title: 'Базы данных',
      skills: [
        { name: 'MySQL', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ]
    }
  ]

  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      padding: '2.5rem',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      marginBottom: '2rem'
    }}>
      <h3 className="section-title" style={{
        fontSize: '1.5rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Технические навыки
      </h3>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <div style={{
              fontSize: '1.1em',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5em'
            }}>
              {category.title}
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5em'}}>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        style={{width: '20px', height: '20px'}}
                      />
                      <span style={{fontWeight: '600', color: '#1e293b'}}>
                        {skill.name}
                      </span>
                    </div>
                    <span style={{
                      color: '#64748b',
                      fontSize: '0.9em',
                      fontWeight: '500'
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: '#e2e8f0',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #2563eb, #6366f1)',
                      borderRadius: '4px',
                      transition: 'width 1s ease-out'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
