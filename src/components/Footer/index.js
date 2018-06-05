import React, { Component } from 'react';
import Line from './../../svg/linie.svg';
import logo from './../../logo.svg';

class Footer extends Component {
  render() {
    var { languages } = this.props;
    var { currentLanguage } = this.props;
    return (
      <div className="Footer container" id="Footer">
          <img src={Line} alt="Linie" />
            <img src={logo} className="App-logo" alt="logo" />
          <img src={Line} alt="Linie" />
      </div>
    );
  }
}

export default Footer;
