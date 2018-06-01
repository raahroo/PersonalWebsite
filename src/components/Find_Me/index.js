import React, { Component } from 'react';
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
        <div className="Section container">
          <img src={Line} alt="Linie" />
          <div className="container Section__title--background">
            <h1 className="Section__title">
              Find Me
            </h1>
          </div>
          <img src={Line} alt="Linie" />
          <Row>
            <Col xs={12} md={8}>
              <div className="Section__box">
                <div className="Section__box__intern">
                  <div className="FindMe__octo">
                    <a href="https://github.com/raahroo/" target="_blank">
                      <img className="img-responsive" src={Octocat} alt={"Octocat"} />
                    </a>
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
              <a href="https://twitter.com/raahroo" target="_blank">
                <img className="FindMe__social" src={Twitter} alt={"Twitter"} />
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a href="https://www.linkedin.com/in/raissa-hohenester-40846167/" target="_blank">
                <img className="FindMe__social" src={LinkedIn} alt={"LinkedIn"} />
              </a>
            </Col>
            <Col xs={12} md={4}>
              <div className="Section__box negative">
                <h4 className="Findme__mail">raissa.developer@gmail.com</h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FindeMe;
