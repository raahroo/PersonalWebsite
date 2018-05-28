import React, { Component, } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Js from './../../svg/jslogo.svg';


class MainGrid extends Component {
  render() {
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
                                    <p className="MainGrid__first--paragraph">of Web uses JavaScript</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="Section__box">
                        <div className="Section__box__intern">
                            <Row>
                                <Col xs={12}>
                                    <p className="MainGrid__second--first">Amount of available JS Frameworks</p>
                                </Col>
                                <Col xs={12}>
                                    <h1 className="MainGrid__second--h1">56</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="Section__box__bottom">
                                    <p className="MainGrid__second--paragraph">Top 3 advantages of using JavaScript:</p>
                                    <p className="MainGrid__second--paragraph">- Fast for the end user</p>
                                    <p className="MainGrid__second--paragraph">- No compilation needed</p>
                                    <p className="MainGrid__second--paragraph">- Easy to debug and test</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="Section__box">
                        <div className="Section__box__intern">
                            <Row>
                                <Col xs={12}>
                                    <div className="Section__box__middle">
                                        <svg id="graphic"/>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="Section__box__negativebottom">
                                <Col xs={6}>
                                    <h1 className="MainGrid__third--h1">1995</h1>
                                </Col>
                                <Col xs={6}>
                                    <p className="MainGrid__third--paragraph">JavaScript has been launched.</p>
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
