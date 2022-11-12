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
                                **I am a MERN stack developer** with an eye for design, I specialize
                                in building systems and applications focused websites using HTML, CSS,
                                Javascript, React, node, express, mongodb ,knowledgeable of front-end 
                                and back-end development requirements, I can handle any part of process 
                                with easy,  I like to contribute with designing pages to better reflect 
                                the design ,edit and building large projects

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