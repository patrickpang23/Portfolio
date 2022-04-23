import React from "react";
import avatar from "../images/headshot.jpg";

const AboutMe = () => {
  return (
    <div id="AboutMe">
      <div className="aboutHeading">
        <h1 style={{marginTop:"5rem"}}>About</h1>
      </div>
      <div className="aboutImageText">
        <img className="headshotImage" src={avatar} />
        <div className="aboutText">
          <h1 className="aboutH1Text">Welcome!</h1>
          <p className="aboutPText">
            My name is Patrick Pang. I am passionate about the world of web
            development. It allows me to see things come to life. As a kid I
            knew I wanted a career where I would always be able to learn new
            things and coding has provided me with just that!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
