'use client'

import { projects } from '@/app/data/projects'
import type { Project } from '@/app/data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <div
          style={{
            background: project.image.startsWith('linear-gradient') ? project.image : `url(${encodeURI(project.image)})`,
            backgroundSize: project.image.startsWith('linear-gradient') ? undefined : 'cover',
            backgroundPosition: project.image.startsWith('linear-gradient') ? undefined : 'center',
            width: '100%',
            height: '100%'
          }}
          role="img"
          aria-label={project.title}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.desc}</p>
        {project.technologies && (
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        <div className="project-links">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-link"
            title="Live Demo"
          >
            🌐
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link repo-link"
            title="GitHub Repository"
          >
            &lt;/&gt;
          </a>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}
