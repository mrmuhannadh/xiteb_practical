import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CommonButton from "./common/commonButton";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="g-2 p-1 navItems">
              <NavDropdown title="HOME" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PAGES" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#memes">TRACKING</Nav.Link>
              <NavDropdown title="SERVICES" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="BLOG" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog 2</NavDropdown.Item>
              </NavDropdown>
              <div className="mt-1 px-1">
                <CommonButton
                  height="50px"
                  width="150px"
                  fontColor="#fff"
                  backgroundColor="rgb(249, 191, 4)"
                  text="GET A QUOTE"
                />
              </div>
              <div className="mt-1 px-1">
                <CommonButton
                  height="50px"
                  width="150px"
                  fontColor="#fff"
                  backgroundColor="rgb(0, 0, 0)"
                  text="SIGN IN"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
