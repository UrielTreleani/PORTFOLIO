import React from 'react'
import "./Contacto.css"
import ContactForm from '../ContactForm/ContactForm'

function Contacto() {
  return (
    <div className='section-contact__container'>
      <h2 className='section-contact__title'>
        CONTACTO
      </h2>
      <div className='section-conctact__form-container'>
        <ContactForm/>
      </div>
    </div>  
  )
}

export default Contacto