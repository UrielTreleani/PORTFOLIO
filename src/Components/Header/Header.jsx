import "./Header.css";
import useScrollSpy from "../useScrollSpy/useScrollSpy";


export default function Header() {

    const sections = ["#Inicio", "#Proyectos", "#Sobre-mí", "#Contacto"]
    const activeSection = useScrollSpy(sections, { rootMargin: "-50% 0px -50% 0px" })

    return (
        <div className="section-header">
            <div className="header__container">
                <div>
                    <img src="./header-icon.png" alt="portfolio-icon" className="header__portfolio-icon" />
                </div>
                <div className="header__nav">
                    {sections.map((sec) => {
                        const name = sec.replace("#", "");
                        return (
                            <a
                                key={sec}
                                href={sec}
                                className={activeSection === name ? "active" : ""}
                            >
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </a>
                        );
                    })}
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
