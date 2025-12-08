import "./Home.css";
import React from "react";

function Home() {
    return (
        <div className="section-about-me">
            <div className="section-about-me__container">
                <div className="section-about-me__presentation">
                    <span className="span-font-size">
                        Hola!!
                    </span>
                    <div>
                        <span>
                        Soy 
                        </span>
                        <span className="section-about-me__name">
                            Uriel Treleani
                        </span>
                    </div>
                    <span className="span-font-size">
                        Desarrollador Web Frontend en formación
                    </span>
                </div>
                <div>
                    <div className="section-about-me__avatar">
                        <img src="./avatar-img.png" alt="Uriel Treleani" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
