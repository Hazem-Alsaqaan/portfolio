import React, { Fragment } from "react";
import "./Contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodepen} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import PagesTitle from "../pages-title/PagesTitle";

const Contact = ()=>{
    return(
        <Fragment>
                <section id="contact" className="contacts">
                    <div className="container our-contact">
                        <PagesTitle title = "contact" paragraph = "lets say hi!"/>
                        <h4>hazem.alsaqaan@gmail.com</h4>
                        <section className="box-contact">
                            <div className="our-social">
                                <a className="social-background one" href="https://codepen.io/hazem-alsaqaan" target="post" title="go to codepen"><span><FontAwesomeIcon icon={faCodepen} /></span></a>
                                <a className="social-background two" href="https://twitter.com/HazemAlsaqaan" target="post" title="go to twitter" ><span><FontAwesomeIcon icon={faTwitter} /></span></a>
                                <a className="social-background three" href="https://github.com/Hazem-Alsaqaan" target="post" title="go to github" ><span><FontAwesomeIcon icon={faGithub} /></span></a>
                                <a className="social-background four" href="https://www.linkedin.com/in/hazem-alsaqaan-53b498174/" target="post" title="go to linkedin" ><span><FontAwesomeIcon icon={faLinkedin} /></span></a>
                            </div>
                        </section>
                        <p className="foot-contact">
                            Feel free to get in touch with me.
                            I am always open to discussing
                            new projects, creative ideas or
                            opportunities to be part of your visions
                        </p>
                    </div>
                </section>
        </Fragment>
    )
}
export default Contact;