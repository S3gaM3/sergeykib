export default function AboutSection() {
  return (
    <section className="section about-section">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        <div className="job-card" style={{
          fontSize: '1.1em',
          lineHeight: '1.8',
          padding: '2rem'
        }}>
          <div style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            👨‍💻
          </div>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#404040',
            marginBottom: '1rem'
          }}>
            Опыт и экспертиза
          </h3>
          <p style={{color: '#6B7280', marginBottom: '0'}}>
            <b>Веб-разработчик с глубоким знанием JavaScript-экосистемы.</b> 
            Специализируюсь на создании адаптивных интерфейсов (React) и серверных решений (Node.js). 
            Мои проекты сочетают техническую надежность и визуальную привлекательность.
          </p>
        </div>

        <div className="job-card" style={{
          fontSize: '1.1em',
          lineHeight: '1.8',
          padding: '2rem',
          background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
          borderLeftColor: '#7C3AED'
        }}>
          <div style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            🎓
          </div>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#404040',
            marginBottom: '1rem'
          }}>
            Образование и сертификаты
          </h3>
          <p style={{color: '#6B7280', marginBottom: '0'}}>
            Сертификаты Яндекс.Практикума и <b>86% в цифровом паспорте компетенций</b> 
            подтверждают мою экспертизу. Постоянно обучаюсь и развиваюсь в современных технологиях.
          </p>
        </div>

        <div className="job-card" style={{
          fontSize: '1.1em',
          lineHeight: '1.8',
          padding: '2rem'
        }}>
          <div style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            🚀
          </div>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#404040',
            marginBottom: '1rem'
          }}>
            Подход к работе
          </h3>
          <p style={{color: '#6B7280', marginBottom: '0'}}>
            Фокусируюсь на создании пользовательских интерфейсов, которые не только красивы, 
            но и функциональны. Каждый проект разрабатываю с учетом лучших практик UX/UI.
          </p>
        </div>
      </div>
    </section>
  )
}
