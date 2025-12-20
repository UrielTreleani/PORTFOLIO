import "./Navbar.css";
import useScrollSpy from "../useScrollSpy/useScrollSpy";


export default function Navbar() {

    const sections = ["#Inicio", "#Proyectos", "#Sobre-mí", "#Contacto"]
    const activeSection = useScrollSpy(sections, { rootMargin: "-50% 0px -50% 0px" })

    return (
        <div className="navbar">
            <div className="navbar__conteiner">
                <div className="navbar__content">
                    <div>
                        <img src="/images/navbar-icon.png" alt="portfolio-icon" className="navbar__portfolio-icon" />
                    </div>
                    <div className="navbar__nav">
                        {sections.map((sec) => {
                            const name = sec.replace("#", "");
                            return (
                                <a
                                    key={sec}
                                    href={sec}
                                    className={activeSection === name ? "active" : ""}
                                >
                                    {name.replace(/-/g, " ")}
                                </a>
                            );
                        })} 
                    </div>
                    <div className="navbar__contact">
                        <a href="https://www.linkedin.com/in/urieltreleani" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/UrielTreleani?tab=repositories" target="_blank">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
