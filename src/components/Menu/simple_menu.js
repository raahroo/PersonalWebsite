import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deustchButton, englishButton } from '../../actions';
import { Navbar,  Nav, NavItem} from 'react-bootstrap';


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
                    <a href="#brand">● Raissa Hohenester</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#first">
                        First
                    </NavItem>
                    <NavItem eventKey={2} href="#someworks">
                        Some Works
                    </NavItem>
                    <NavItem eventKey={2} href="#findme">
                        Find Me
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <li>
                        <a 
                            onClick={() => deustchButton(0)}
                            className="SimpleMenu__language"
                        >
                            Deutsch
                        </a>
                    </li>
                    <li>
                        <span className="SimpleMenu__language">∫</span>
                    </li>
                    <li>
                        <a 
                            onClick={() => englishButton(1)}
                            className="SimpleMenu__language">
                                English
                        </a>
                    </li>
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