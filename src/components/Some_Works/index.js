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
          <div className="container Section__title--background">
            <h1 className="Section__title">
              Some Works
            </h1>
          </div>
          <div className="container">
            <div className="Section__box">
              <div className="Section__box__intern Section__negativeLeft">
                <WorkSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SomeWorks;
