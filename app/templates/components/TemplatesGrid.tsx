'use client'

import { useState } from 'react'
import Link from 'next/link'
import { templates, categories } from '@/app/data/templates'
import type { Template } from '@/app/data/templates'

function TemplateCard({ template }: { template: Template }) {
  return (
    <article className="template-card" style={{
      background: '#fff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
    }}
    >
      <div style={{position: 'relative', height: '240px', overflow: 'hidden'}}>
        <img
          src={template.image}
          alt={template.title}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: '#2563eb',
          color: '#fff',
          padding: '0.4em 0.8em',
          borderRadius: '20px',
          fontSize: '0.85em',
          fontWeight: '600'
        }}>
          {template.price}
        </div>
      </div>
      
      <div style={{padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column'}}>
        <h3 style={{fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1e293b'}}>
          {template.title}
        </h3>
        <p style={{color: '#64748b', marginBottom: '1rem', lineHeight: '1.6', flex: 1}}>
          {template.description}
        </p>

        <div style={{marginBottom: '1rem'}}>
          <div style={{fontSize: '0.9em', fontWeight: '600', color: '#475569', marginBottom: '0.5rem'}}>
            Основные возможности:
          </div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            {template.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} style={{
                fontSize: '0.9em',
                color: '#64748b',
                marginBottom: '0.4rem',
                paddingLeft: '1.2em',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#2563eb'
                }}>✓</span>
                {feature}
              </li>
            ))}
            {template.features.length > 4 && (
              <li style={{fontSize: '0.85em', color: '#94a3b8', fontStyle: 'italic'}}>
                + еще {template.features.length - 4} возможностей
              </li>
            )}
          </ul>
        </div>

        <div style={{marginBottom: '1rem'}}>
          <div style={{fontSize: '0.9em', fontWeight: '600', color: '#475569', marginBottom: '0.5rem'}}>
            Технологии:
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem'}}>
            {template.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: '#eef2ff',
                  color: '#2563eb',
                  padding: '0.2em 0.6em',
                  borderRadius: '6px',
                  fontSize: '0.8em',
                  fontWeight: '500'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{display: 'flex', gap: '0.8rem', marginTop: 'auto'}}>
          <Link
            href="/#contacts"
            className="btn"
            style={{
              flex: 1,
              background: '#2563eb',
              color: '#fff',
              padding: '0.7em 1.2em',
              textAlign: 'center',
              fontSize: '0.95em',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'block'
            }}
          >
            Заказать
          </Link>
          {template.demoUrl && (
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: '#f1f5f9',
                color: '#2563eb',
                padding: '0.7em 1.2em',
                textAlign: 'center',
                fontSize: '0.95em',
                border: '1px solid #e2e8f0'
              }}
            >
              Демо
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function TemplatesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(t => t.category === selectedCategory)

  return (
    <>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        justifyContent: 'center',
        marginBottom: '3rem'
      }}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            style={{
              padding: '0.7em 1.4em',
              borderRadius: '24px',
              border: 'none',
              background: selectedCategory === category.id ? '#2563eb' : '#f1f5f9',
              color: selectedCategory === category.id ? '#fff' : '#475569',
              fontSize: '0.95em',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category.id) {
                e.currentTarget.style.background = '#e2e8f0'
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category.id) {
                e.currentTarget.style.background = '#f1f5f9'
              }
            }}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#64748b'
        }}>
          <p style={{fontSize: '1.2em'}}>Шаблоны в этой категории временно недоступны</p>
        </div>
      )}
    </>
  )
}
