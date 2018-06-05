import React from 'react';
import { Navbar,  Nav, NavItem} from 'react-bootstrap';

class MenuTeste extends React.Component {
    render() {
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
                    <NavItem eventKey={1} href="#">
                        Deutsch
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    '\222B'
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        English
                    </NavItem>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  
export default MenuTeste;