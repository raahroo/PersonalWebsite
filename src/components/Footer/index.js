import React, { Component } from 'react';
import Line from './../../svg/linie.svg';

class Footer extends Component {
  render() {
    var { languages } = this.props;
    var { currentLanguage } = this.props;
    return (
        <div className="Footer container-fluid" id="Footer">
            <img src={Line} alt="line" />
            <div className="Footer__black row">
              <p className="Footer__paragraph">{languages[currentLanguage].credits}</p>
            </div>
        </div>
    );
  }
}

export default Footer;
