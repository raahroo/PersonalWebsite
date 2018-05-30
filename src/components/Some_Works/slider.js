import React from 'react';
import Slider from 'react-slick';
import ImageWork from './../../png/job.png';
import Sonnenkollektor from './../../png/sonnenkollektor.png';
import {Col, Row} from 'react-bootstrap';

export default class WorksSlider extends React.Component{
    render(){
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidestoScroll: 1
        };
        var content = [
            { language: 'WordPress - PHP', image: Sonnenkollektor, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' },
            { language: 'JS', image: ImageWork, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' },
            { language: 'Python', image: ImageWork, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' }
        ];
        return(
            <Slider {...settings}>
                {content.map((work, index) =>
                    <div key={index}>
                        <Row >
                            <Col xs={12} md={6}>
                                <div className="WorksSlider__box">
                                    <img className="WorksSlider__img" src={work.image} alt={work.title} />
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <h1 className="WorksSlider__h1">{work.language}</h1>
                                <div className="WorksSlider__box">
                                    <p className="WorksSlider__paragraph">{work.paragraph}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
            </Slider>
        );
    }
}