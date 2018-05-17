import React, { Component, } from 'react';
import MainGrid from './main-grid';
import Line from './../../svg/linie.svg';
import logo from './../../logo.svg';
class Main extends Component {
  render() {
    console.log(this.props, 'main');
    var { currentLanguage, languages } = this.props.data;
    return (
      <section id="first" className="Main container">
        <header className="container">
          <img src={logo} className="App-logo" alt="logo" />
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
          <p>{languages[currentLanguage].greeting}</p>
        </header>
        <MainGrid />
      </section>
    );
  }
}

export default Main;
