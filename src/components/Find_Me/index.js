import React, { Component, } from 'react';
import Line from './../../svg/linie.svg';
import Twitter from './../../svg/twitter.svg';
import Octocat from './../../png/octocat.png';
import Profile from './../../png/profile.png';
import LinkedIn from './../../svg/linkedin.svg';
import FindMeImg from './../../svg/findme.svg';
import { Row, Col } from 'react-bootstrap';

class FindeMe extends Component {
  render() {
    return (
      <div id="findme" className="FindMe container">
        <div className="Section">
          <img src={Line} alt="Linie" />
          <h1 className="Main__bigTitle">
            Find Me
          </h1>
          <img src={Line} alt="Linie" />
          <Row>
            <Col xs={12} md={8}>
              <div className="Section__box">
                <div className="Section__box__intern">
                  <div className="FindMe__octo">
                    <img className="img-responsive" src={Octocat} alt={"Octocat"} />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="Section__box">
                <div className="Section__box__intern">
                  <div className="FindMe__profile">
                    <img className="img-responsive" src={Profile} alt={"Profile"} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img className="FindMe__social" src={Twitter} alt={"Twitter"} />
            </Col>
            <Col xs={6} md={4}>
              <img className="FindMe__social" src={LinkedIn} alt={"LinkedIn"} />
            </Col>
            <Col xs={12} md={4}>
              <div className="Section__box">
                <p>raissa.developer@gmail.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FindeMe;
