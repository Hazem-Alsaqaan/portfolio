import React, { createContext } from "react";
import {projects} from "../data/data"
import {skills} from "../data/data"


let projectsContext = createContext();

const DataContext = ({children})=>{
    return(
        <projectsContext.Provider value={{projects, skills}}>
            {children}
        </projectsContext.Provider>
    )
}
export  {DataContext, projectsContext};