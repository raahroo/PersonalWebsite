import React, { Component, } from 'react';
import SectionTitle from '../Section/title';
import Line from './../../svg/linie.svg';
import SomeWorksImg from './../../svg/someworks.svg';
import WorkSlider from './slider';
import Animation from '../Main/animation';

class SomeWorks extends Component {
  render() {
    var { languages } = this.props;
    var { currentLanguage } = this.props;
    return (
      <div className="SomeWorks container">
          <img src={Line} alt="Linie" />
          <SectionTitle label={languages[currentLanguage].works} />
          <div className="Section__box margin-20">
            <div className="Section__box__intern Section__negativeRight">
              <WorkSlider />
            </div>
          </div>
      </div>
    );
  }
}

export default SomeWorks;
