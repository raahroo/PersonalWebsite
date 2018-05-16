import React from 'react';
import Slider from 'react-slick';
import ImageWork from './../../svg/werkzeuge.svg';
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
            { title: 'first work', language: 'PHP', image: ImageWork, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' },
            { title: 'second work', language: 'JS', image: ImageWork, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' },
            { title: 'third work', language: 'Python', image: ImageWork, paragraph: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor' }
        ];
        return(
            <Slider {...settings}>
                {content.map((work, index) =>
                    <div key={index}>
                        <Row >
                            <Col xs={12} md={6}>
                                <div style={{ backgroundImage: `url('${work.image}')` }} />
                                <h1>{work.title}</h1>
                                <img src={work.image} alt={work.title} />
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