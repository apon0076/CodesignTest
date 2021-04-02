import React, {Component, Fragment} from 'react';
import './../asset/css/bootstrap.min.css'
import './../asset/css/custom.css';
import './../asset/css/responsive.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from './../asset/images/logo.png';
import facebook from './../asset/images/social_icons(1).png';
import twitter from './../asset/images/social_icons(3).png';
import instagram from './../asset/images/social_icons(5).png';
import pinterest from './../asset/images/social_icons(2).png';
import vmete from './../asset/images/socialicons(6).png';
import mSocial from './../asset/images/social_icons(4).png';

class ToNav extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Navbar collapseOnSelect expand="lg" >
                        <Navbar.Brand href="#home"><img className="navBar__logo" src={logo} alt="logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Explore</Nav.Link>
                                <Nav.Link href="#deets">Discover</Nav.Link>
                                <Nav.Link href="#deets">For Professionals</Nav.Link>

                                <NavDropdown title="..." id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">About Click Motto</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Licence</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Partnership</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Join The Team</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        <ul className="topNav__socialIcons">
                                            <li> <a href="#"> <img className="topNav__socialIconsImg" src={facebook} alt="socialicons"/> </a> </li>
                                            <li> <a href="#"> <img className="topNav__socialIconsImg" src={twitter} alt="socialicons"/> </a> </li>
                                            <li> <a href="#"> <img className="topNav__socialIconsImg" src={instagram} alt="socialicons"/> </a> </li>
                                            <li> <a href="#"> <img className="topNav__socialIconsImg" src={pinterest} alt="socialicons"/> </a> </li>
                                            <li> <a href="#"> <img className="topNav__socialIconsImg" src={vmete} alt="socialicons"/> </a> </li>
                                            <li> <a href="#"> <img className="topNav__socialIconsImg" src={mSocial} alt="socialicons"/> </a> </li>
                                        </ul>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link className="topNav__items--submitPhotos" href="#deets">Submit Photos</Nav.Link>
                                <Nav.Link href="#deets">Login</Nav.Link>
                                <Nav.Link className="topNav__items--joinFree" href="#deets">Join Free</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        );
    }
}

export default ToNav;