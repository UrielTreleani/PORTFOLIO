import React from "react";
import "./HomeScreen.css";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import SectionProjects from "../../Components/SectionProjects/SectionProjects";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Contacto from "../../Components/Contacto/Contacto";

function HomeScreen() {
    return (
        <div className="home-screen__container">
            <div>
                <Header/>
            </div>
            <div className="home-screen__section-home">
                <Home/>
            </div>
            <div className="home-screen__section-projects">
                <SectionProjects/>
            </div>
            <div className="home-screen__section-about-me">
                <AboutMe/>
            </div>
            <div className="home-screen__section-contact">
                <Contacto/>
            </div>
        </div>
    );
}

export default HomeScreen;
