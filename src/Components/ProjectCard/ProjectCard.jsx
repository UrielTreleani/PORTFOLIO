import React from 'react'
import projects from '../../data/projectsData'
import "./ProjectCard.css"

function ProjectCard() {

    const project_card_jsx = projects.map(
        (project)=>{
            return(
                <div key={project.id} className='project-card'>
                    <div className='project-card__img-container'>
                        <img src={project.img} alt={project.name} />
                    </div>
                    <div className='project-card__content'>
                        <div className='project-card__header'>
                            <h3 className='project-card__title'>
                                {project.name}
                            </h3>
                            <span className='project-card__links'>
                                <a href={project.link_project} target='_blank'>
                                    <i className="bi bi-box-arrow-up-right project-card__icon"></i>
                                </a>
                                <a href={project.link_code} target='_blank'>
                                    <i className="bi bi-github project-card__icon"></i>
                                </a>
                            </span>
                        </div>
                        <div>
                            <p className='project-card__description'>
                                {project.description}
                            </p>
                        </div>
                        <div>
                            <div className='project-card__coding-language-container'>
                                {project.coding_language.map((lang, id) => (
                                    <span key={id} className='project-card__coding-language'>
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    )
  return (
    <div className='project-card__container'>
        {project_card_jsx}
    </div>
  )
}

export default ProjectCard