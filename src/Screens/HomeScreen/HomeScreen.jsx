import "./HomeScreen.css";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import SectionProjects from "../../Components/SectionProjects/SectionProjects";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Contacto from "../../Components/Contacto/Contacto";
import MobileMenu from "../../Components/MobileMenu/MobileMenu";
import { useContext } from "react";
import { MenuMobileContext } from "../../Contexts/MobileMenuContext/MobileMenuContext";

function HomeScreen() {

    const { isOpen } = useContext(MenuMobileContext)

    return (
        <div>
            <div className="home-screen__container">
                <div className="home-screen__navbar">
                    <Navbar/>
                </div>
                <div className="home-screen__section-home" id="Inicio">
                    <Home/>
                </div>
                <div className="home-screen__section-projects" id="Proyectos">
                    <SectionProjects/>
                </div>
                <div className="home-screen__section-about-me" id="Sobre-mí">
                    <AboutMe/>
                </div>
                <div className="home-screen__section-contact" id="Contacto">
                    <Contacto/>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
