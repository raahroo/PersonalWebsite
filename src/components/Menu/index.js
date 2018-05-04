import React, { Component } from 'react';
import MenuItem from './MenuItem';
import Menu from './Menu';

class MenuContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("click!")
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    render() {
        return (
        <div className="MenuContainer" onClick={this.handleClick}>
            <Menu ref="left" alignment="left" visible={this.state.visible}>
                <MenuItem hash="first-page">First Page</MenuItem>
                <MenuItem hash="second-page">Second Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
            </Menu>

            </div>
        );
    }
}

export default MenuContainer;