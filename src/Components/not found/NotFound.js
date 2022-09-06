import React, { Fragment } from "react";
import Header from "../home/header/Header";
import "./NotFound.css"

const NotFound = ()=>{

    return(
        <Fragment>
            <Header/>
            <div className="not-found">
                <div>
                    <h1><span>Error\ </span>404</h1>
                    <h4>This Page Is Not Found</h4>
                </div>
            </div>
        </Fragment>
    )
}
export default NotFound;