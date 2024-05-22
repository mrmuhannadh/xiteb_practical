import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CommonButton from "./common/commonButton";
import NavLogo from "../../assets/logo/PNG/navLogo.png";
import Offcanvas from "react-bootstrap/Offcanvas";

class Header extends Component {
  render() {
    return (
      <>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid className="px-5">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={NavLogo}
                  width="160"
                  height="80"
                  className="d-inline-block align-top"
                />{" "}
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
                    <NavDropdown title="HOME" id="collapsible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Blog 1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Blog 2
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="PAGES" id="collapsible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Blog 1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Blog 2
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#memes">TRACKING</Nav.Link>
                    <NavDropdown title="SERVICES" id="collapsible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Blog 1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Blog 2
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="BLOG" id="collapsible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Blog 1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Blog 2
                      </NavDropdown.Item>
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
