import React, { Component, } from 'react';
import Line from './../../svg/linie.svg';
import WorkSlider from './slider';

class SomeWorks extends Component {
  render() {
    return (
      <div id="someworks" className="SomeWorks container">
        <div className="Section">
          <img src={Line} alt="Linie" />
          <h1>Some Works</h1>
          <img src={Line} alt="Linie" />
          <WorkSlider />
        </div>
      </div>
    );
  }
}

export default SomeWorks;
