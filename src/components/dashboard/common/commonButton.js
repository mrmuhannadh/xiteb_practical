import React, { Component } from "react";
import "./style.css";

class CommonButton extends Component {
  render() {
    const { height, width, fontColor, backgroundColor, text } = this.props;

    const buttonStyle = {
      height: height,
      width: width,
      color: fontColor,
      backgroundColor: backgroundColor,
    };
    return (
      <div className="commonButton" style={buttonStyle}>
        {text}
      </div>
    );
  }
}

CommonButton.defaultProps = {
  height: "50px",
  width: "100px",
  fontColor: "#fff",
  backgroundColor: "#007bff",
};

export default CommonButton;
