import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

class CommonNavBarItem extends Component {
  render() {
    const { topic, items } = this.props;
    return (
      <NavDropdown
        title={topic}
        id="collapsible-nav-dropdown"
        className="custom-dropdown"
      >
        {items.map((item, index) => (
          <NavDropdown.Item key={index} href={item.href}>
            {item.label}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  }
}

export default CommonNavBarItem;
