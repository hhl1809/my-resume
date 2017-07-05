import React, { Component } from 'react';
import logo from '../../../images/logo.svg';
import '../css/App.css';
import AppMenu from '../../../modules/menu/js/AppMenu';
import Home from '../../../modules/home/js/Home';
import About from '../../../modules/about/js/About';
import Skills from '../../../modules/skills/js/Skills';
import Experiences from '../../../modules/experiences/js/Experiences';
import Education from '../../../modules/education/js/Education';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Home />
        <AppMenu />
        <About />
        <Skills />
        <Experiences />
        <Education />
      </div>
    );
  }
}

export default App;
