import React from 'react'
import "./ContactSection.css"

function ContactSection() {
  return (
    <div className='contact-section__container'>
      <h2 className='contact-section__title'>
        Contacto
      </h2>
      <div>
        <span className='contact-section__contact-details'>
          <i class="bi bi-envelope"></i>
          Email: urieltreleani2002@gmail.com
        </span>
        <span className='contact-section__contact-details'>
          <a href="https://github.com/UrielTreleani?tab=repositories" target="_blank">
            <i class="bi bi-github"></i>
            Github
          </a>
        </span>
      </div>
    </div>
  )
}

export default ContactSection