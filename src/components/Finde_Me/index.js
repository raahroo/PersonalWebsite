import React, { Component, } from 'react';
import Line from './../../svg/linie.svg';
class FindeMe extends Component {
  render() {
    return (
      <div id="findeme" className="FindeMe container">
        <div className="Section">
          <img src={Line} alt="Linie" />
          <h1 className="FindeMe__bigTitle">Find me</h1>
          <img src={Line} alt="Linie" />
        </div>
      </div>
    );
  }
}

export default FindeMe;
