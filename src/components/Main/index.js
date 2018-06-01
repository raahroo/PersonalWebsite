import React, { Component, } from 'react';
import MainGrid from './main-grid';
import Line from './../../svg/linie.svg';
import logo from './../../logo.svg';

class Main extends Component {
  render() {
    var { currentLanguage, languages } = this.props.data;
    return (
      <section className="Main container">
        <header className="container">
          <img src={logo}  id="first" className="App-logo" alt="logo" />
          <img src={Line} alt="Linie" />
          <h4 className="Main__presentation">{languages[currentLanguage].first}</h4>
          <p className="Main__von">{languages[currentLanguage].from}</p>
          <h1 className="Main__bigTitle">{languages[currentLanguage].office}</h1>
          <img src={Line} alt="Linie" />
            <p className="Main__signature">{languages[currentLanguage].credits}</p>
          <img src={Line} alt="Linie" />
          <p className="Main__biographie">{languages[currentLanguage].presentation}
          </p>
        </header>
        <MainGrid />
        <div className="container ink" />
      </section>
    );
  }
}

export default Main;
