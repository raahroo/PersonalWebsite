import React, { Component, } from 'react';
import Line from './../../svg/linie.svg';
class FindeMe extends Component {
  render() {
    return (
      <div id="findeme" className="FindeMe container">
        <div className="Section">
          <img src={Line} alt="Linie" />
          <h4 className="FindeMe__presentation">Collection of Works and Revelant Information</h4>
          <p className="FindeMe__von">from one</p>
          <h1 className="FindeMe__bigTitle">Find me</h1>
          <img src={Line} alt="Linie" />
            <p className="FindeMe__signature">Layout and code developed by Raissa Hohenester</p>
          <img src={Line} alt="Linie" />
          <p className="FindeMe__biographie">I am a front-end developer living in Bavaria and have been working in the labor market since 2009.
            I met HTML in 2003, amused myself with pixel art, completed a technical computer course in 2008,
            graduated in Web Design and Graphic in 2011.
            Parallel to this, I never left the area of Web Development.
          </p>
        </div>
      </div>
    );
  }
}

export default FindeMe;
