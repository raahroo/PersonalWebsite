import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MenuItem from './MenuItem';
import Menu from './Menu';
import Close from './../../svg/schließen.svg';
import Line from './../../svg/linie.svg';

class MenuContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: false,
            currentLanguage: this.props.currentLanguage
        }

        this.handleClick = this.handleClick.bind(this);
        console.log(this.props);
        console.log(this.state, 'state');
    }

    handleClick(){
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    setLanguage(language){
        console.log( 'a linguagem é' + language);
        if(language === 0){
          this.setState({currentLanguage: 0})
        } else {
          this.setState({currentLanguage: 1})
        }
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
                    {/*<MenuItem label="Language" mobile/>    
                    <div className="MenuContainer__language">    
                        <a
                            onClick={() => this.setLanguage(0)}>
                            Deustch
                        </a>
                        <a onClick={() => this.setLanguage(1)}
                            >English
                        </a>
                    </div>*/}
                </Menu>
            </MediaQuery>
            <MediaQuery query="(min-width: 1225px)">
                <Menu>
                    <span className="code">{"● Raissa Hohenester"}</span>
                    <MenuItem hash="first" label="First"/>
                    <MenuItem hash="someworks" label="Some Works"/>
                    <MenuItem hash="findme" label="Find me"/>
                    <img className="MenuContainer__line" src={Line} alt="Linie" />
                </Menu>
            </MediaQuery>
            </div>
        );
    }
}

export default MenuContainer;