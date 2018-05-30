import React from 'react';
import Slider from 'react-slick';
import ImageWork from './../../svg/werkzeuge_beige.svg';
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
            { language: 'PHP', image: ImageWork, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' },
            { language: 'JS', image: ImageWork, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' },
            { language: 'Python', image: ImageWork, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' }
        ];
        return(
            <Slider {...settings}>
                {content.map((work, index) =>
                    <div key={index}>
                        <Row >
                            <Col xs={12} md={6}>
                                <img className="WorksSlider__img" src={work.image} alt={work.title} />
                            </Col>
                            <Col xs={12} md={6}>
                                <h1>{work.language}</h1>
                                <p>{work.paragraph}</p>
                            </Col>
                        </Row>
                    </div>
                )}
            </Slider>
        );
    }
}