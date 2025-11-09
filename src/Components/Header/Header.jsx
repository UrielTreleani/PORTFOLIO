import React from 'react'
import "./Header.css"

function Header() {
    return (
    <div className='header__container'>
        <div className='header__title'>
            <span className='header__title-name'>
                Uriel Treleani
            </span>
            <span className='header__subtitle'>
                Frontend Developer
            </span>
        </div>
        <div className='header__introduction'>
            Mi nombre es Uriel, me dedico al desarrollo web Frontend.
        </div>
        <div>
            <button className='header__button'>
                Ver proyectos
            </button>
        </div>
    </div>
    )
}

export default Header