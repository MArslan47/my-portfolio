import React from 'react'

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-grid">
          <div className="media-placeholder">
            <div className="media-inner">Image / Video placeholder</div>
          </div>
          <div className="modal-content">
            <h3>{project.title}</h3>
            <p className="modal-tech"><strong>Tech:</strong> {project.tech}</p>
            <p>{project.details}</p>
            {project.link && project.link !== '#' && (
              <p><a className="btn primary" href={project.link} target="_blank" rel="noreferrer">Open App / Live</a></p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
