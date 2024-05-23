import React from "react";
import "./style.css";

function CommonButton({
  height = "50px",
  width = "100px",
  fontColor = "#fff",
  backgroundColor = "#007bff",
  text,
  fontSize = "12px",
}) {
  const buttonStyle = {
    height: height,
    width: width,
    color: fontColor,
    backgroundColor: backgroundColor,
    fontSize: fontSize,
  };
  return (
    <div className="commonButton" style={buttonStyle}>
      {text}
    </div>
  );
}

export default CommonButton;
