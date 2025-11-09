import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import "./ProjectSection.css"

function ProjectSection() {

  return (
    <div className='project-section__container'>
        <h2 className='project-section__title'>
            Proyectos
        </h2>
        <div>
          <ProjectCard/>
        </div>
    </div>
  )
}

export default ProjectSection