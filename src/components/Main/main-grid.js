import React, { Component, } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Line from './../../svg/linie.svg';
import Js from './../../svg/jslogo.svg';
import logo from './../../logo.svg';
import Structure from './../../svg/lexical.svg';

class MainGrid extends Component {
  render() {
    return (
        <Grid className="MainGrid container">
            <Row className="show-grid">
                <Col xs={12} md={3}>
                    <div className="MainGrid__box">
                        <div className="MainGrid__box__intern">
                            <Row>
                                <Col xs={6} md={12}>
                                    <img src={Js} alt="JavaScript" />
                                </Col>
                                <Col xs={6} md={12}>
                                    <h1>91,5%</h1>
                                </Col>
                            </Row>
                            <Row className="MainGrid__box__negative">
                                <Col xs={12}>
                                    <p>of Web uses JavaScript</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="MainGrid__box">
                        <div className="MainGrid__box__intern">
                            <Row className="MainGrid__box__negative">
                                <Col xs={12}>
                                    <p>Amount of available JS Frameworks</p>
                                </Col>
                                <Col xs={12}>
                                    <h1>56</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <p>Top 3 advantages of using JavaScript:</p>
                                    <p>- Fast for the end user</p>
                                    <p>- No compilation needed</p>
                                    <p>- Easy to debug and test</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="MainGrid__box">
                        <div className="MainGrid__box__intern">
                            <Row>
                                <Col xs={12}>
                                    <p>Lexical Structure of JavaScript.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <img src={Structure} alt="Structure" />
                                </Col>
                            </Row>
                            <Row className="MainGrid__box__negative">
                                <Col xs={6}>
                                    <h1>1995</h1>
                                </Col>
                                <Col xs={6}>
                                    <p>JavaScript has been launched.</p>
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
