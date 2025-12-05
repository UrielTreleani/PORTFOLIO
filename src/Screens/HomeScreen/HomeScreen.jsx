import React from "react";
import "./HomeScreen.css";
import Header from "../../Components/Header/Header";
import SectionAboutMe from "../../Components/SectionAboutMe/SectionAboutMe";
import SectionProjects from "../../Components/SectionProjects/SectionProjects";

function HomeScreen() {
    return (
        <div className="home-screen__container">
            <div>
                <Header/>
            </div>
            <div className="home-screen__section-about-me">
                <SectionAboutMe/>
            </div>
            <div className="section-projects">
                <SectionProjects/>
            </div>
        </div>
    );
}

export default HomeScreen;
