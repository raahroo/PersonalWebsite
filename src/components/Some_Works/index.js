import React, { Component, } from 'react';
import Line from './../../svg/linie.svg';
import SomeWorksImg from './../../svg/someworks.svg';
import WorkSlider from './slider';

class SomeWorks extends Component {
  render() {
    return (
      <div id="someworks" className="SomeWorks container">
        <div className="Section">
          <img src={Line} alt="Linie" />
          <h1 className="Main__bigTitle">
            Some Works
          </h1>
          <img src={Line} alt="Linie" />
          <div className="container">
            <WorkSlider />
          </div>
        </div>
      </div>
    );
  }
}

export default SomeWorks;
