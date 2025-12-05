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
                    <div>
                        <div>
                            <h2>
                                {project.name}
                            </h2>
                            <span>
                                <a href={project.link_project}>Ver app</a>
                                <a href={project.link_code}>Ver codigo</a>
                            </span>
                        </div>
                        <div>
                            <p className='project-card__description'>
                                {project.description}
                            </p>
                        </div>
                        <div>
                            <span>
                                {project.coding_language}
                            </span>
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