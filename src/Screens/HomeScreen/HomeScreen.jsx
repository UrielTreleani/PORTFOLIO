import React from 'react'
import Header from '../../Components/Header/Header'
import AboutMeSection from '../../Components/AboutMeSection/AboutMeSection'
import ProjectSection from '../../Components/ProjectSection/ProjectSection'
import EducationSection from '../../Components/EducationSection/EducationSection'
import ContactSection from '../../Components/ContactSection/ContactSection'
import "./HomeScreen.css"

export default function HomeScreen() {
  return (
    <div className='home-screen__container'>
      <div>
        <Header/>
      </div>
      <div className='home-screen__sections-container'>
        <div>
          <AboutMeSection/>
        </div>
        <div>
          <ProjectSection/>
        </div>
        <div className='home-screen__personal-info'>
          <EducationSection/>
          <ContactSection/>
        </div>
      </div>
    </div>
  )
}
