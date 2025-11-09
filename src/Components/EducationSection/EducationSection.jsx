import React from 'react'
import "./EducationSection.css"

function EducationSection() {
  return (
    <div>
        <h2 className='education-section__title'>
            Formación
        </h2>
        <div className='education-section__education'>
          <span>
              Diplomatura en Programación Web (Frontend)
          </span>
          <span>
            Tecnicatura Universitaria en Tecnologías Web (En curso)
          </span>
        </div>
    </div>
  )
}

export default EducationSection