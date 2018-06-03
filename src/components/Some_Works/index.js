import React, { Component, } from 'react';
import Line from './../../svg/linie.svg';
import SomeWorksImg from './../../svg/someworks.svg';
import WorkSlider from './slider';
import Animation from '../Main/animation';

class SomeWorks extends Component {
  render() {
    var { languages } = this.props;
    var { currentLanguage } = this.props;
    return (
      <div id="someworks" className="SomeWorks container">
        <Animation right/> 
          <img src={Line} alt="Linie" />
          <div className="container">
            <div className="container Section__title--background">
              <h1 className="Section__title">
                {languages[currentLanguage].works}
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="Section__box margin-20">
              <div className="Section__box__intern Section__negativeRight">
                <WorkSlider />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default SomeWorks;
