import React, { Fragment, useState } from "react";
import "./Header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ()=>{
    let [visibility, setVisibility] = useState(false);
    
    let handleNavList = ()=>{
        setVisibility(!visibility);
    }
    let show = visibility === true ? "show" : null;
    return (
        <Fragment>
            <header>
                <article className="container header">
                    <section className="header-logo">
                        <div className="text-logo">
                            <span className="entities">&lt;</span>
                                <span className="hazem">
                                    <span className="iam">Iam</span>
                                    Hazem
                                </span>
                            <span className="entities">&#47;&gt;</span>
                        </div>
                    </section>

                    <section className="header-nav">
                        <nav>
                            <ul className={`pages-nav ${show}`}>
                                <Link to="/portfolio"><li>home</li></Link>
                                <Link to="/Projects"><li>Projects</li></Link>
                                <Link to="/skills"><li>skills</li></Link>
                                <Link to="/contact"><li>contact</li></Link>
                            </ul>
                            <span onClick={handleNavList} className="bar"><FontAwesomeIcon  icon={faBars}/></span>
                        </nav>
                    </section>
                    <a target="blank" title="go to my github" href="https://github.com/Hazem-Alsaqaan"> <h1 className="github">GitHub</h1> </a>
                </article>
            </header>
        </Fragment>
    )
}

export default Header;