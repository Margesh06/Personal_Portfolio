import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Home2 from "./components/Home/Home2";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="skills">
          <Technologies />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Home2 />
      </div>
    </>
  );
}

export default App;
