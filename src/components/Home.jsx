import React from "react";
// import { Link } from "react-router-dom";
import avatar from "../images/profileImage.jpeg";
const hero = { backgroundImage: `url(assets/images/laptop.jpeg)` };

const Home = () => {
  return (
    <div id="Home" className="hero-image" style={hero}>
      <div className="profileContent">
        <img className="profileImage" src={avatar} alt="avatar"/>
      </div>
      
      <div className="resumeView">
      <div className="cta-button">
        <a href="/#Projects">View My Projects</a>
      </div>
      <div className="cta-button">
      <a href="https://drive.google.com/file/d/1kNvAJygIY5XENRrbLn1s04mtp_MS6mTT/view?usp=sharing" target='_blank' rel="noreferrer">View Resume</a>
      </div>
      </div>
      
      
    </div>
  );
};

export default Home;
