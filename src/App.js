import React, { Fragment } from 'react';
import './App.css';
import Home from './Components/home/Home';
import Projects from './Components/projects/Projects';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
// import NotFound from './Components/not found/NotFound';
import Header from "./Components/header/Header"

function App() {
  return (
    <Fragment>
        <div className="App">
                <Header />
                <Home />
                <Projects />
                <About />
                <Contact />
        </div>
    </Fragment>
  );
}

export default App;
