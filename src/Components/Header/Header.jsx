import "./Header.css";

import React from "react";

export default function Header() {
    return (
        <div className="section-header">
            <div className="header__container">
                <div>
                    <img src="./header-icon.png" alt="portfolio-icon" className="header__portfolio-icon" />
                </div>
                <div className="header__nav">
                    <span>
                        <a href="#home" className="header__nav-links">Inicio</a>
                    </span>
                    <span>
                        <a href="#project" className="header__nav-links">Proyectos</a>
                    </span>
                    <span>
                        <a href="#about-me" className="header__nav-links">Sobre mí</a>
                    </span>
                    <span>
                        <a href="#contact" className="header__nav-links">Contacto</a>
                    </span>
                </div>
                <div className="header__contact">
                    <span>
                        <i className="bi bi-linkedin"></i>
                    </span>
                    <span>
                        <i className="bi bi-github"></i>
                    </span>
                    <span>
                        <i className="bi bi-envelope"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}
