import React, { useEffect } from "react";
import $ from "jquery";

const Header = () => {
  // useEffect(() => {
  //   const nav = document.querySelector("#main-nav");
  //   if (!nav) return;

  //   function linkHighlight() {
  //     const home = document.getElementById("Home");
  //     const about = document.getElementById("AboutMe");
  //     const projects = document.getElementById("Projects");
  //     const contact = document.getElementById("Contact");
  //     const pos = window.pageYOffset;
  //     const pos2 = pos; // adjust when to fix the nav to the top.

  //     const scrollBottom = pos + window.innerHeight;

  //     if (home && pos2 > home.offsetTop) {
  //       highlightLink("Home");
  //     }

  //     if (about && pos2 > about.offsetTop) {
  //       highlightLink("AboutMe");
  //     }

  //     if (projects && pos2 > projects.offsetTop) {
  //       highlightLink("Projects");
  //     }

  //     if (contact && pos2 > contact.offsetTop) {
  //       highlightLink("Contact");
  //     }
  //   }

  //   function highlightLink(anchor) {
  //     const navs = document.querySelectorAll(".nav__link.active");
  //     const focusLink = document.querySelector(`[data-anchor=${anchor}]`);

  //     if (!focusLink) return;

  //     Array.prototype.slice
  //       .call(navs)
  //       .forEach((el) => el.classList.remove("active"));
  //     focusLink.classList.add("active");
  //   }

  //   const toggleHoverLock = () => {
  //     if (!document.body.classList.contains("disable-hover")) {
  //       document.body.classList.add("disable-hover");
  //     }

  //     const lockTimer = window.setTimeout(() => {
  //       document.body.classList.remove("disable-hover");
  //     }, 400);

  //     this.setState({ lockTimer });
  //   };

  //   $(".nav__link").click(function () {
  //     const anchor = this.dataset.anchor;
  //     $("html,body").animate(
  //       {
  //         scrollTop: $(`#${anchor}`).offset().top,
  //       },
  //       "fast",
  //       "swing"
  //     );
  //   });

  //   window.addEventListener("scroll", linkHighlight, true);
  // }, []);

  return (
    <div>
      <header>
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
