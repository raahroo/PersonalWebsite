import React, { Component, } from 'react';
import MenuContainer from './components/Menu/'
import Main from './components/Main/'
import Info from './components/Info/'
import SomeWorks from './components/Some_Works/'
import FindeMe from './components/Finde_Me/'
import ScrollableAnchor from 'react-scrollable-anchor'
import './scss/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id={'first'}>
          <Main />
        </ScrollableAnchor>
        <ScrollableAnchor id={'info'}>
          <Info />
        </ScrollableAnchor>
        <ScrollableAnchor id={'someworks'}>
          <SomeWorks />
        </ScrollableAnchor>
        <ScrollableAnchor id={'findeme'}>
          <FindeMe />
        </ScrollableAnchor>
        <MenuContainer />
      </div>
    );
  }
}

export default App;
