import React, { Component } from 'react';

import MenuItem from './MenuItem';
import Menu from './Menu';
import Close from './../../svg/schließen.svg';

class MenuContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    render() {
        return (
        <div
            className={"MenuContainer" + (this.state.visible ? '__opened' : '')}
            onClick={this.handleClick}>
            <Menu ref="left" alignment="left" visible={this.state.visible}>
                <button className="MenuContainer__button__close">
                    Close sidebar
                    <img src={Close} alt="close" />
                </button>
                <MenuItem hash="first" label="First"/>
                <MenuItem hash="info" label="Info"/>
                <MenuItem hash="someworks" label="Some Works"/>
                <MenuItem hash="findeme" label="Finde me"/>
                <MenuItem label="Language"/>
                <span>Deustch</span>
                <span>English</span>
            </Menu>
            </div>
        );
    }
}

export default MenuContainer;