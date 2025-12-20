import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import "./SectionProjects.css"

function SectionProjects() {
  return (
    <div className='section-projects__container'>
        <h2 className='section-projects__title'>
            PROYECTOS
        </h2>
        <div className='section-projects__project-cards'>
            <ProjectCard/>
        </div>
    </div>
  )
}

export default SectionProjects