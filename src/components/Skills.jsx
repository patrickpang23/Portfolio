import React from "react";

const Skills = () => {
  return (
    <section id="Skills">
      <div className="aboutHeading">
        <h1 style={{ marginTop: "5rem" }}>Skills</h1>
      </div>
      <div className="skillsContainer">
        <div className="skillsChild">
          <h3>Frontend Development</h3>
          <div ClassName="skillsContent">
            <article className="skillDetails">
              <div>
                <img src="assets/images/html.svg" alt="HTML"></img>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="skillDetails">
              <div>
                <img src="assets/images/css.svg" alt="CSS"></img>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="skillDetails">
              <div>
                <img src="assets/images/javascript.svg" alt="javascript"></img>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skillDetails">
              <div>
                <img src="assets/images/bootstrap.svg" alt="BootStrap"></img>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="skillDetails">
              <div>
                <img src="assets/images/react.svg" alt="React"></img>
                <h4>ReactJS</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skillsChild">
          <h3>Backend Development</h3>
          <div ClassName="skillsContent">
            <article className="skillDetails">
              <div>
                <img src="assets/images/node.svg" alt="Node"></img>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className="skillDetails">
              <div>
                <img src="assets/images/mysql.svg" alt="MySQL"></img>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
