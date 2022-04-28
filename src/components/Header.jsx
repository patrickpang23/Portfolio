import React, { useEffect } from "react";
import Link from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <a href="/#Home">
        <img
          src="assets/images/portfolioLogo.png"
          alt="logo"
          className="logo"
        />
        </a>

        <nav id="main-nav">
          <ul>
            <li>
              <a className="nav__link" href="/#Home" data-anchor="Home">
                Home
              </a>
            </li>
            <li>
              <a className="nav__link" href="/#AboutMe" data-anchor="AboutMe">
                About
              </a>
            </li>
            <li>
              <a className="nav__link" href="/#Skills" data-anchor="Skills">
                Skills
              </a>
            </li>
            <li>
              <a className="nav__link" href="/#Projects" data-anchor="Projects">
                Project
              </a>
            </li>
            <li>
              <a className="nav__link" href="/#Contact" data-anchor="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
