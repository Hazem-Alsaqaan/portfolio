import React, { Fragment } from "react";
import "./Landing.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const Landing = ()=>{

    return(
        <Fragment>
                    <div className="home">
                        <div className="home-box">
                            <div className="box-landing">
                                <div className="title">
                                    <h4 className="hey">Hello, I'm</h4>
                                    <h1 className="name">Hazem Alsaqaan</h1>
                                </div>
                                <p>
                                I am a solution-driven  MERN stack developer familiar with a wide range 
                                of programming utilities and languages, knowledgeable of front-end and back-end
                                development requirements, handles any part of process with easy, I have proven 
                                experience in developing consumer-focused websites , meeting highest standard 
                                for web design , user experience, best practices and speed, designed and developed
                                web applications across multiple APIs , third party integrations and data bases.
                                I am a collaborative team player with excellent technical abilities.
                                </p>
                            </div>
                            <a href="https://drive.google.com/file/d/1Di34UhvUgVcymtyPjBdGtpFukRJ2KHO3/view?usp=sharing" target="post">
                                <button className="btn-download">Download CV <FontAwesomeIcon icon={faArrowDown}/></button>
                                </a>
                        </div>
                    </div>
        </Fragment>
    )
}

export default Landing;