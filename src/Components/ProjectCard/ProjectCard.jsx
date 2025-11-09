import React from 'react'
import projects from '../../data/projectsData'
import "./ProjectCard.css"

function ProjectCard() {

  return (
    <div className='project-card__container'>
        {projects.map((project) => (
            <div key={project.id}>
              <div className='project-card__image-container'>
                <img src={project.img} alt={project.name}  className='project-image'/>
              </div>
                <div className='project-card__links-container'>
                <span className='project-card__project-name'>
                    {project.name}
                </span>
                  <a href={project.link_project} target='_blank' rel="noopener noreferrer" className='project-card__link'>Ver Demo</a>
                  <a href={project.link_code} target='_blank' rel="noopener noreferrer" className='project-card__link'>Ver Código</a>
                </div>
            </div>
        ))
        }
    </div>
  )
}

export default ProjectCard