import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deustchButton, englishButton } from '../../actions';
import { Navbar,  Nav, NavItem} from 'react-bootstrap';
import iconBeige from './../../svg/werkzeuge_beige.svg';


class SimpleMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentLanguage: this.props.currentLanguage
        }
    }

    render() {

    const { deustchButton, englishButton } = this.props;

      return (
        <Navbar collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#first">● Raissa Hohenester</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#first">
                        <img src={iconBeige} className="SimpleMenu__icon" alt="icon" /> First
                    </NavItem>
                    <NavItem eventKey={2} href="#someworks">
                        <img src={iconBeige} className="SimpleMenu__icon" alt="icon" /> Some Works
                    </NavItem>
                    <NavItem eventKey={3} href="#findme">
                        <img src={iconBeige} className="SimpleMenu__icon" alt="icon" /> Find Me
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem className="SimpleMenu__language" eventKey={4}  onClick={() => deustchButton(0)}>
                        Deutsch
                    </NavItem>
                    <li className="SimpleMenu__language">
                        <span >∫</span>
                    </li>
                    <NavItem className="SimpleMenu__language" eventKey={5}  onClick={() => englishButton(1)}>
                        English
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }

const mapStateToProps = store =>({
    currentLanguage: store.languageState.currentLanguage
});

const mapDispatchToProps = dispatch =>
bindActionCreators({ deustchButton, englishButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (SimpleMenu);