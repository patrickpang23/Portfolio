import React from "react";
import Project from "./Project";
import projectInfo from "../projectInfo.json";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="heading-one">
        <h1 style={{marginTop:"5rem"}}>Projects</h1>
      </div>
      <div className="projectCardContainer">
          {/* maps json data to Project component */}
          {/* projectInfo is .json file */}
        {projectInfo.map((data) => {
          return (
            <Project
              key={data.id}
              image={data.image}
              name={data.name}
              url={data.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
