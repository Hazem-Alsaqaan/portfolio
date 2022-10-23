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
                                <p>A frontend developer with a passion for creating beatiful, resposive, and user-centric applications .
                                    i strive to build  applications by writting clean code...
                                    finally, I have high attention to detail, Well-organised person, 
                                    I like positive people.
                                    </p>
                            </div>
                            <a href="https://drive.google.com/file/d/1OBtrr0iMiE0sze2BVOb8OPvHTXGhSptw/view?usp=sharing" target="post">
                                <button className="btn-download">Download CV <FontAwesomeIcon icon={faArrowDown}/></button>
                                </a>
                        </div>
                    </div>
        </Fragment>
    )
}

export default Landing;