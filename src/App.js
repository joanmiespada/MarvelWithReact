import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListHeroes from './components/marvelapi.js';


class App extends Component {
  render() {
    return (     
        <div className="App">
          <p className="App-intro">
            Look for Hereos in Marvel API with React/Redux
          </p>
          <ListHeroes/>
        </div>
    );
  }
}

export default App;
