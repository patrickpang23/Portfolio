import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a
        className="footerIcon"
        href="mailto:patrickpang23@gmail.com"
        aria-label="envelope"
      >
        <FaEnvelope />
      </a>
      &nbsp; |
      <a
        className="footerIcon"
        href="https://www.linkedin.com/in/patricktingpang/"
        aria-label="linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      &nbsp;|
      <a className="footerIcon"
        href="https://github.com/patrickpang23"
        aria-label="github"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <p className="footerText">Designed and Developed by Patrick Pang</p>
      <p>&copy; 2022 Patrick Pang, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
