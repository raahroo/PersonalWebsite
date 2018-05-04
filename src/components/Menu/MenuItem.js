import React, { Component } from 'react';
import iconBlack from './../../svg/werkzeuge.svg';
import iconBeige from './../../svg/werkzeuge_beige.svg';

class MenuItem extends Component{

    constructor(props) {
        super(props);
        this.state={
            navigate: function(hash) {
                window.location.hash = hash;
            },
            hash: "hash",
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
            <div className="MenuItem" 
                onMouseOver={this.mouseOver.bind(this)} 
                onMouseOut={this.mouseOut.bind(this)}
            >
                { this.state.hover ? 
                    <img src={iconBeige} className="MenuItem icon" alt="icon" /> :
                    <img src={iconBlack} className="MenuItem icon" alt="icon" />
                }

                <span>{this.props.label}</span>
            </div>
        );
            
    }
}

export default MenuItem;