import React, { Component, } from 'react';
import MenuHome from './components/Menu'
import logo from './logo.svg';
import './scss/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuHome />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Website</h1>
        </header>
        <p className="App-intro">
          That is the first commit <code>src/App.js</code>.
        </p>
      </div>
    );
  }
}

export default App;
