import React from "react";

const Project = (props) => {
  return (
    <div className="projectCard">
      <div className="imageContainer">
        <img src={props.image} alt="" />
      </div>
      <div className="card-detail-1">
        <p className="propsName">{props.name}</p>
        <a className="viewStyle" href={props.url} target='_blank' rel="noreferrer">View Here</a>
      </div>
    </div>
  );
};

export default Project;
