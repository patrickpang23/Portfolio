import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/profileImage.jpeg";
const hero = { backgroundImage: `url(assets/images/laptop.jpeg)` };

const Home = () => {
  return (
    <div id="Home" className="hero-image" style={hero}>
      <div className="profileContent">
        <img className="profileImage" src={avatar} />
      </div>
      <div className="cta-button">
        <a href="/#Projects">View My Projects</a>
      </div>
    </div>
  );
};

export default Home;
