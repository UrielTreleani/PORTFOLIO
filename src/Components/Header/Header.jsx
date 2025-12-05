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
                        Inicio
                    </span>
                    <span>
                        Proyectos
                    </span>
                    <span>
                        Sobre Mi
                    </span>
                    <span>
                        Contacto
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
