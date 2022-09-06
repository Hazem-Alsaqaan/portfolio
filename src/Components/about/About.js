import React, { Fragment,  useContext,  useState} from "react";
import Header from "../home/header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointer} from "@fortawesome/free-solid-svg-icons"
import {projectsContext} from "../context/DataContext"
import "./About.css"

const About = ()=>{
    const {skills} = useContext(projectsContext);
    let [toggle, setToggle] = useState(false);
    let handleClick = ()=> setToggle(!toggle);
    let myShow = toggle ? "appear" : "";

    return(
        <Fragment>
            <Header  />
                <div className="container about">
                    <div className="dynamic-skills">
                        <div  className = {`skill-box ${myShow}`}>
                            {
                                skills.map((skill)=> 
                                    <div key={skill.id} className="static">{skill.title}</div>
                                )
                            }
                        </div>
                        <button onClick={(e)=>{e.currentTarget.style.top = "-80%"; handleClick()}}
                            className="btn-show"><FontAwesomeIcon icon={faHandPointer}/>skills</button>
                    </div>
                    <ul className={`another-skills ${myShow}`}>
                        <li>{`{ ECMA 6 & 7 }`}</li>
                        <li>{`{ OOP }`}</li>
                        <li>{`{ APIs }`}</li>
                        <li>{`{ JSON }`}</li>
                        <li>{`{ Fetch }`}</li>
                        <li>{`{ Axios }`}</li>
                        <li>{`{ AJAX }`}</li>
                        <li>{`{ git }`}</li>
                        <li>{`{ github }`}</li>
                        <li>{`{ Redux }`}</li>
                        <li>{`{ Routing }`}</li>
                    </ul>
                    <h6 className={`adobe ${myShow}`}>I have experience with adobe photoshop (2006-2012)</h6>
                </div>
        </Fragment>
    )
}
export default About;