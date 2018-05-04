import React, { Component, } from 'react';
import MenuContainer from './components/Menu/'
import Main from './components/Main/'
import logo from './logo.svg';
import Line from './svg/linie.svg';
import './scss/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuContainer />
        <Main />
      </div>
    );
  }
}

export default App;
