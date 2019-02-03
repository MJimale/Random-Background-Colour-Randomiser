import React, { Component } from 'react';
import rainbow from './Components/rainbow.png'
import Random from "./Components/Random.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <img
          src={rainbow}
          alt="Rainbow"
        />
        <h1>React Random Colour Generator</h1>
        <Random />
        <p id="instruction">Click the "Refresh" Button to see some magic happen!</p>
      </div>
    );
  }
}

export default App;
