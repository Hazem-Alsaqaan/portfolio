import React, { Fragment } from "react";
import "./Landing.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const Landing = ()=>{

    return(
        <Fragment>
                    <div id="portfolio" className="home">
                        <div className="home-box container">
                            <div className=" box-landing">
                                <div className="landing-title">
                                    <h4 className="hey">Hello,</h4>
                                    <h5 className="name">I'm Hazem Alsaqaan</h5>
                                </div>
                                <article>                      
                                    <div className="typing">
                                        <span className="static-typing">I'm</span> 
                                        a MERN stack developer
                                        {/* <p className="dynamic-typing">I'm a MERN stack developer</p> */}
                                    </div>
                                </article> 
                            <p>I like to contribute with designing pages to better reflect the design ,edit and building large projects</p>
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
