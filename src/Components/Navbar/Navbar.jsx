import { useContext } from "react";
import "./Navbar.css";
import { UseScrollSpyContext } from "../../Contexts/UseScrollSpyContext/UseScrollSpyContext";
import { MenuMobileContext } from "../../Contexts/MobileMenuContext/MobileMenuContext";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Navbar() {
    const { isOpen, toggleMenu } = useContext(MenuMobileContext);
    const { activeSection, sections } = useContext(UseScrollSpyContext);

    return (
        <div className="navbar">
            <div className="navbar__conteiner">
                <div className="navbar__content">
                    <div>
                        <img
                            src="/images/navbar-icon.png"
                            alt="portfolio-icon"
                            className="navbar__portfolio-icon"
                        />
                    </div>
                    <div className="navbar__nav">
                        {sections.map((sec) => {
                            const name = sec.replace("#", "");
                            return (
                                <a
                                    key={sec}
                                    href={sec}
                                    className={activeSection === name ? "active" : ""}>
                                    {name.replace(/-/g, " ")}
                                </a>
                            );
                        })}
                    </div>
                    <div className="navbar__contact">
                        <a href="https://www.linkedin.com/in/urieltreleani" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/UrielTreleani?tab=repositories"
                            target="_blank"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
                <div className="navbar__button-container">
                    <button className="navbar__menu-button" onClick={toggleMenu}>
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
