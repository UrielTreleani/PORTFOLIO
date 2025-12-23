import { useContext, useEffect } from "react"
import "./MobileMenu.css"
import { UseScrollSpyContext } from "../../Contexts/UseScrollSpyContext/UseScrollSpyContext"
import { MenuMobileContext } from "../../Contexts/MobileMenuContext/MobileMenuContext"

function MobileMenu() {

    const { isOpen, toggleMenu } = useContext(MenuMobileContext)
    const { sections } = useContext(UseScrollSpyContext)

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <div className={isOpen ? "mobile-menu__container menu-open" : "mobile-menu__container"}>
            <div className="mobile-menu__header">
                <img src="/images/navbar-icon.png" alt="portfolio-icon" className="mobile-menu__icon" />
                <button onClick={toggleMenu} className="mobile-menu__button">
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
            <div className="mobile-menu__nav">
                {sections.map((section) => {
                    const name = section.replace("#", "")
                    return (
                        <a href={section} onClick={toggleMenu} key={section}>
                            {name.replace(/-/g, " ")}
                        </a>
                    )
                })}
                <div className="mobile-menu__links-container">
                    <a href="https://www.linkedin.com/in/urieltreleani" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin mobile-menu__link"></i>
                    </a>
                    <a href="https://github.com/UrielTreleani?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github mobile-menu__link"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
