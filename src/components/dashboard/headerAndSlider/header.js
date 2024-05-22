import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CommonButton from "../common/commonButton";
import NavLogo from "../../../assets/logo/PNG/navLogo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import CommonNavBarItem from "../common/commonNavBarItem";

class Header extends Component {
  render() {
    const pageItems = [
      { label: "home 1", href: "#action/3.1" },
      { label: "home 2", href: "#action/3.2" },
    ];

    return (
      <>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-1">
            <Container fluid className="px-5">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={NavLogo}
                  width="160"
                  height="60"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Navbar.Brand href="#home">
                    <img
                      alt=""
                      src={NavLogo}
                      width="160"
                      height="80"
                      className="d-inline-block align-top"
                    />
                  </Navbar.Brand>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 navItems">
                    <div className="d-flex">
                      <div className="vr border-5 opacity-100 verticleLine"></div>
                    </div>
                    <CommonNavBarItem topic="HOME" items={pageItems} />
                    <CommonNavBarItem topic="PAGES" items={pageItems} />
                    <Nav.Link href="#tracking">TRACKING</Nav.Link>
                    <CommonNavBarItem topic="SERVICES" items={pageItems} />
                    <CommonNavBarItem topic="BLOG" items={pageItems} />
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
                        width="120px"
                        fontColor="#fff"
                        backgroundColor="rgb(0, 0, 0)"
                        text="SIGN IN"
                      />
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}

export default Header;
