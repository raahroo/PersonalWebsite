import React, { Component, } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import Js from './../../svg/jslogo.svg';
import Doppellinie from './../../svg/doppellinie.svg';
import BeigeLinie from './../../svg/beigelinie.svg';
import Ink from './../../png/ink.png';
import KleinInk from './../../png/small_ink.png';
import InkBeige from './../../png/ink_beige.png';

class MainGrid extends Component {
  render() {
    var { languages } = this.props;
    var { currentLanguage } = this.props;
    console.log(languages, 'props');
    return (
        <Grid id="info" className="MainGrid container">
            <Row className="show-grid">
                <Col xs={12} md={3}>
                    <div className="Section__box">
                        <div className="Section__box__intern">
                            <Row>
                                <Col xs={6} md={12}>
                                    <div>
                                        <img className="Section__box__js" src={Js} alt="JavaScript" />  
                                        <MediaQuery query="(min-width: 1225px)">
                                            <img src={Doppellinie} alt="Linie" />
                                        </MediaQuery>
                                    </div>
                                </Col>
                                <Col xs={6} md={12}>
                                    <div className="Section__box__middle">
                                        <div className="Section__box__middle--intern">
                                            <h1 className="MainGrid__first--h1">91,5%</h1>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="Section__box__negativebottom">
                                <Col xs={12}>
                                    <p className="MainGrid__first--paragraph">{languages[currentLanguage].javascript}</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="Section__box">
                        <div className="Section__box__intern Section__negativeTop">
                            <Row>
                                <Col xs={12}>
                                    <MediaQuery query="(min-width: 1225px)">
                                        <img src={BeigeLinie} alt="BeigeLinie" />  
                                    </MediaQuery>
                                    <p className="MainGrid__second--first">{languages[currentLanguage].amount}</p>
                                    <MediaQuery query="(min-width: 1225px)">
                                        <img src={BeigeLinie} alt="BeigeLinie" />  
                                   </MediaQuery>
                                    <img className="MainGrid__ink" src={Ink} alt="ink" />  
                                   
                                </Col>
                                <Col xs={12}>
                                    <h1 className="MainGrid__second--h1">56</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="Section__box__bottom">
                                    <p className="MainGrid__second--paragraph">{languages[currentLanguage].advantages}</p>
                                    <p className="MainGrid__second--paragraph">{languages[currentLanguage].ad1}</p>
                                    <p className="MainGrid__second--paragraph">{languages[currentLanguage].ad2}</p>
                                    <p className="MainGrid__second--paragraph">{languages[currentLanguage].ad3}</p>
                                    <img className="MainGrid__ink--small" src={KleinInk} alt="ink" />  
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="Section__box">
                        <div className="Section__box__intern last">
                            <Row>
                                <Col xs={12}>
                                    <div className="Section__box__middle">
                                        <p className="MainGrid__third--intro">{languages[currentLanguage].graphic}</p>
                                        <svg id="graphic"/>
                                        <img className="MainGrid__third--ink" src={InkBeige} alt="InkBeige" />
                                        
                                    </div>
                                </Col>
                            </Row>
                            <Row className="Section__box__negativebottom">
                                <Col xs={6}>
                                    <h1 className="MainGrid__third--h1">2018</h1>
                                </Col>
                                <Col xs={6}>
                                    <img src={BeigeLinie} alt="BeigeLinie" />  
                                    <p className="MainGrid__third--paragraph">{languages[currentLanguage].graphic}</p>
                                    <img src={BeigeLinie} alt="BeigeLinie" />  
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default MainGrid;
