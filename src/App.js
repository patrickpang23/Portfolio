import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </>
  );
};

export default App;
