import React, { Component } from 'react';
import Hamburguer from './../../svg/hamburguer.svg';
import logo from './../../logo.svg';
   class Menu extends Component{

    render() {
        return (
            <div className="Menu container">
                <button className="Menu__hamburguer" 
                    onClick={this.props.handleClick}>
                    <img src={Hamburguer} className="MenuItem icon" alt="icon" />
                </button>
                <img src={logo} className="App-logo" alt="logo" />
                <div className={(this.props.visible ? "visible " : "" ) + this.props.alignment}>
                    {this.props.children}
                </div>
            </div>
        );
        
    }

}

export default Menu;