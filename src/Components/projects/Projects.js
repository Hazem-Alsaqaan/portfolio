import React, { Fragment, useContext } from "react";
import "./Projects.css";
import { projectsContext } from "../context/DataContext";
import PagesTitle from "../pages-title/PagesTitle";

const Portfolio = () => {
  const { projects } = useContext(projectsContext);

  return (
    <Fragment>
      <section id="projects" className="projects">
        <PagesTitle
          title="portfolio"
          paragraph="collection of websites and applications like e-commerce , movies, bookstrore  and games"
        />
        <div className="portfolio container">
          {projects.map((oneItem) => {
            return (
              <div key={oneItem.id} className="box-project">
                <h1>{oneItem.projectTitle}</h1>
                <div className="box-bt">
                  <div className="box-img">
                    <img src={oneItem.Poster} alt="" />
                  </div>
                  <a target="blank" href={oneItem.codeUrl}>
                    <button>watch code</button>
                  </a>
                  <a target="blank" href={oneItem.webSitUrl}>
                    <button>visit project</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};
export default Portfolio;
