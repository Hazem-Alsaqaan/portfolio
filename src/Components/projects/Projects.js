import React, { Fragment, useContext} from "react";
import Header from "../home/header/Header";
import "./Projects.css";
import  {projectsContext}  from "../context/DataContext";

const Portfolio = ()=>{
    const {projects,} = useContext(projectsContext)
    
    return(
        <Fragment>
            <Header/>
                <div className="portfolio container">

                    {
                        projects.map((oneItem)=>{return (
                                <div key={oneItem.id} className="box-project">
                                    <div className="box-img">
                                        <img src={oneItem.Poster} alt=""/>
                                    </div>
                                    <div>
                                        <h1>{oneItem.projectTitle}</h1>
                                    </div>
                                    <div className="box-bt">
                                        <a target="blank" href={oneItem.codeUrl}><button>watch code</button></a>
                                        <a target="blank" href={oneItem.webSitUrl}><button>vist project</button></a>
                                    </div>
                                </div>
                        )})
                    }
                    
                    
                    
                    
                </div>
        </Fragment>
    )
}
export default Portfolio;