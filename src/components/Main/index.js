import React, { Component, } from 'react';
import Line from './../../svg/linie.svg';

class Main extends Component {
  render() {
    return (
      <div className="Main container">
        <header>
          <img src={Line} alt="Linie" />
          <h4 className="Main__presentation">Collection of Works and Revelant Information</h4>
          <p className="Main__von">from one</p>
          <h1 className="Main__bigTitle">Front-End Developer</h1>
          <img src={Line} alt="Linie" />
            <p className="Main__signature">Layout and code developed by Raissa Hohenester</p>
          <img src={Line} alt="Linie" />
          <p className="Main__biographie">I am a front-end developer living in Bavaria and have been working in the labor market since 2009.
            I met HTML in 2003, amused myself with pixel art, completed a technical computer course in 2008,
            graduated in Web Design and Graphic in 2011.
            Parallel to this, I never left the area of Web Development.
          </p>
        </header>
      </div>
    );
  }
}

export default Main;
