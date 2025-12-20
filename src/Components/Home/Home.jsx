import "./Home.css";
import React from "react";

function Home() {
    return (
        <div className="section-home">
            <div className="section-home__container">
                <div className="section-home__presentation">
                    <span className="span-font-size">
                        Hola!!
                    </span>
                    <div className="section"> 
                        <span>
                        Soy 
                        </span>
                        <span className="section-home__name">
                            Uriel Treleani
                        </span>
                    </div>
                    <span className="span-font-size">
                        Desarrollador Web Frontend en formación
                    </span>
                </div>
                <div>
                    <div className="section-home__avatar">
                        <img src="/images/avatar-img.png" alt="Uriel Treleani" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
