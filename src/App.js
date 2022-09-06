import React, { Fragment } from 'react';
import './App.css';
import Home from './Components/home/Home';
import Projects from './Components/projects/Projects';
import About from './Components/about/About';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './Components/contact/Contact';
import NotFound from './Components/not found/NotFound';

function App() {
  return (
    <Fragment>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path = "/portfolio" element = {<Home />} />
              <Route path = "/Projects" element = {<Projects />} />
              <Route path = "/skills" element = {<About />} />
              <Route path = "/contact" element = {<Contact />} />
              <Route path = "*" element = {<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
    </Fragment>
  );
}

export default App;
