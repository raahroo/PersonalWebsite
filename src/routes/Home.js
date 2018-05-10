import React, { Component } from 'react';
import MenuContainer from './../components/Menu/'
import Main from './../components/Main/'
import Info from './../components/Info/'
import SomeWorks from './../components/Some_Works/'
import FindeMe from './../components/Finde_Me/'
import './../scss/App.css';

class Home extends Component {
    render() {
      return (
        <div className="App">
            <Main />
            <Info />
            <SomeWorks />
            <FindeMe />
            <MenuContainer />
        </div>
      );
    }
  }
export default Home;
