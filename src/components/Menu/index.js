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
        <div
            className={"MenuContainer" + (this.state.visible ? '__opened' : '')}
            onClick={this.handleClick}>
            <div className="fade" />
            <Menu ref="left" alignment="left" visible={this.state.visible}>
                <button className="MenuContainer__button__close">
                    Close sidebar
                </button>
                <MenuItem hash="first-page" label="First"/>
                <MenuItem hash="second-page" label="Info"/>
                <MenuItem hash="third-page" label="Some Works"/>
                <MenuItem hash="third-page" label="Finde me"/>
                <MenuItem hash="third-page" label="Language"/>
            </Menu>

            </div>
        );
    }
}

export default MenuContainer;