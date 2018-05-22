import React, { Component } from 'react';
import iconBlack from './../../svg/werkzeuge.svg';
import iconBeige from './../../svg/werkzeuge_beige.svg';
import { HashLink as Link } from 'react-router-hash-link';

class MenuItem extends Component{

    constructor(props) {
        super(props);
        this.state={
            hover: false
        }
    }

    mouseOver = () => {
        this.setState({hover: true});
    }
    mouseOut() {
        this.setState({hover: false});
    }


    render(){
        return(
            <Link smooth to={'#' + this.props.hash} 
                className={this.props.mobile ? "MenuItem" : "MenuItem--desktop" } onMouseOver={this.mouseOver.bind(this)} 
                onMouseOut={this.mouseOut.bind(this)}>
                { this.props.mobile ?
                    this.state.hover ?
                        <img src={iconBeige} className="MenuItem icon" alt="icon" /> :
                        <img src={iconBlack} className="MenuItem icon" alt="icon" />
                    : <span></span>
                }
                <span>{this.props.label}</span>
            </Link>
        );
            
    }
}

export default MenuItem;