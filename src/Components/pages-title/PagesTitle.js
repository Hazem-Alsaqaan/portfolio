import React, { Fragment } from "react";
import "./PagesTitle.css"

const PagesTitle = ({title, paragraph})=>{

    return(
        <Fragment>
            <article className="title">
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </article>
        </Fragment>
    )
}
export default PagesTitle;