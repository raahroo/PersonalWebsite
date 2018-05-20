import React, { Component, } from 'react';
import Line from './../../svg/linie.svg';
import Twitter from './../../svg/twitter.svg';
import Octocat from './../../svg/octocat.svg';
import Profile from './../../svg/profile.svg';
import LinkedIn from './../../svg/linkedin.svg';
import FindMeImg from './../../svg/findme.svg';
import { Row, Col } from 'react-bootstrap';

class FindeMe extends Component {
  render() {
    return (
      <div id="findeme" className="FindeMe container">
        <div className="Section">
          <img src={Line} alt="Linie" />
          <h1 className="FindeMe__bigTitle"><img src={FindMeImg} alt="Find me" /></h1>
          <img src={Line} alt="Linie" />
          <Row>
            <Col xs={12} md={8}>
              <div className="Section__box">
                <div className="Section__box__intern">
                  <img src={Octocat} alt={"Octocat"} />
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="Section__box">
                <div className="Section__box__intern">
                  <img src={Profile} alt={"Profile"} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <img src={Twitter} alt={"Twitter"} />
            </Col>
            <Col xs={12} md={6}>
            <img src={LinkedIn} alt={"LinkedIn"} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FindeMe;
