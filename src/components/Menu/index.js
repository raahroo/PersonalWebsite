import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
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
            <MediaQuery query="(max-width: 1224px)">
                <Menu ref="left" alignment="left" visible={this.state.visible} mobile>
                    <button className="MenuContainer__button__close">
                        Close sidebar
                        <img src={Close} alt="close" />
                    </button>
                    <MenuItem hash="first" label="First" mobile />
                    <MenuItem hash="info" label="Info" mobile/>
                    <MenuItem hash="someworks" label="Some Works" mobile/>
                    <MenuItem hash="findme" label="Find me" mobile/>
                    <MenuItem label="Language" mobile/>
                    <span>Deustch</span>
                    <span>English</span>
                </Menu>
            </MediaQuery>
            <MediaQuery query="(min-width: 1225px)">
                <Menu>
                    <span className="code">{"<RaissaHohenester />"}</span>
                    <MenuItem hash="first" label="First"/>
                    <MenuItem hash="someworks" label="Some Works"/>
                    <MenuItem hash="findme" label="Find me"/>
                </Menu>
            </MediaQuery>
            </div>
        );
    }
}

export default MenuContainer;