import React, { Component } from 'react';
import SectionTitle from '../Section/title';
import Line from './../../svg/linie.svg';
import Twitter from './../../svg/twitter.svg';
import Octocat from './../../png/octocat.png';
import Profile from './../../png/cranium-hominis.png';
import LinkedIn from './../../svg/linkedin.svg';
import FindMeImg from './../../svg/findme.svg';
import { Row, Col } from 'react-bootstrap';

class FindMe extends Component {
  render() {
    var { languages } = this.props;
    var { currentLanguage } = this.props;
    return (
      <div className="FindMe container">
          <img src={Line} alt="Linie" />
          <SectionTitle label={languages[currentLanguage].find} lessBorder/>
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
    );
  }
}

export default FindMe;
