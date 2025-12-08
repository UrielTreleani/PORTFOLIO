import React from 'react'
import "./AboutMe.css"

function AboutMe() {
  return (
    <div className='about-me__container'>
        <h2 className='about-me__title'>
            SOBRE MÍ
        </h2>
        <div className='about-me__description'>
            <p>
                Tengo 23 años y soy desarrollador web frontend en formación. Realicé una diplomatura en Desarrollo Web Frontend, donde adquirí una base sólida en HTML, CSS, JavaScript y React. Me interesa seguir profundizando en buenas prácticas, diseño de interfaces y metodologías modernas de trabajo.
            </p>
            <p>
                Me considero una persona responsable, curiosa y orientada al aprendizaje continuo. Disfruto investigar nuevas propiedades, herramientas y formas más eficientes de resolver problemas. También valoro el feedback y los entornos donde puedo mejorar profesionalmente a través de la práctica y la colaboración.
            </p>
            <p>
                Actualmente busco mi primera oportunidad laboral en el área, con el objetivo de seguir creciendo como desarrollador y aportar con dedicación, actitud profesional y ganas de aprender.
            </p>
        </div>
    </div>
  )
}

export default AboutMe