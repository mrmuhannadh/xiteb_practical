import React, { Component } from "react";
import "./welcomeStyle.css";

class RightTriRecShape extends Component {
  render() {
    return (
      <div className="talk-bubble tri-right left-top">
        <div className="talktext text-center justify-content-center">
          <span className="clientAmount">15,350 +</span>
          <br />
          <span>Clients Worldwide</span>
        </div>
      </div>
    );
  }
}

export default RightTriRecShape;
