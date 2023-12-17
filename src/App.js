import React, { Fragment } from "react";
import "./App.css";
import Home from "./Components/home/Home";
import Projects from "./Components/projects/Projects";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
// import NotFound from './Components/not found/NotFound';
import Header from "./Components/header/Header";
import { Routes, Route } from "react-router-dom";
import AdsMobRedirect from "./Components/AdsMobRedirect";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/portfolio"
          element={
            <div className="App">
              <Header />
              <Home />
              <Projects />
              <About />
              <Contact />
            </div>
          }
        />
        <Route path="/portfolio/app-ads.txt" element={<AdsMobRedirect />} />
      </Routes>
    </Fragment>
  );
}

export default App;
