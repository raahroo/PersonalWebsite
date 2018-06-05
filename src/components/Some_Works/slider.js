import React from 'react';
import Slider from 'react-slick';
import Sonnenkollektor from './../../png/sonnenkollektor.png';
import Medizin from './../../png/medizin.png';
import Elefant from './../../png/elefant.png';
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
            { language: 'WordPress - PHP', image: Sonnenkollektor, paragraph: 'Windeo Brasil is a proud Brazilian company that, through the experience of its founders in the international market, has brought from Europe the most modern and complete solutions in self-generation of energy through renewable sources.', link:'https://windeo.com.br/' },
            { language: 'HTML5, JQuery, Grunt', image: Elefant, paragraph: 'The Brazil Elephants Sanctuary has emerged as a project in 2010, and since 2012 has been vigorously working to change the harsh reality of elephants living in captivity. With an area of more than 1,100 hectares in the Chapada dos Guimarães, MT, the Sanctuary has the space and structure necessary for elephants to feel as close as possible to their habitat', link:'https://oresgatedoselefantes.com.br/' },
            { language: 'ReactJs', image: Medizin, paragraph: 'Teamwork, ReactJs components, Scrum methodology. Content portal of the area of medicine and health.', link:'http://www.conexaosegurosunimed.com.br/' }
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
                                <div className="WorksSlider__box WorksSlider__right">
                                    <h1 className="WorksSlider__h1">{work.language}</h1>
                                    <p className="WorksSlider__paragraph">{work.paragraph}</p>
                                    {
                                        work.link &&
                                        <a className="WorksSlider__link" href={work.link} target="_blank">
                                            Check Website
                                        </a>
                                    }
                                </div>
                               
                            </Col>
                        </Row>
                    </div>
                )}
            </Slider>
        );
    }
}