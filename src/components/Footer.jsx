import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="mailto:patrickpang23@gmail.com" aria-label="envelope">
        <i className="fab fa fa-envelope"></i>
      </a>
      &nbsp; |
      <a
        href="https://www.linkedin.com/in/patricktingpang/"
        aria-label="linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      &nbsp;|
      <a
        href="https://github.com/patrickpang23"
        aria-label="github"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <p className="footerText">Designed and Developed by Patrick Pang</p>
      <p>&copy; 2022 Patrick Pang, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
