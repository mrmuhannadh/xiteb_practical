import React, { Component } from "react";
import "./style.css";
import CountUp from "react-countup";

class StatSectionItem extends Component {
  render() {
    const { amount, description } = this.props;

    return (
      <div className="col-md-3 d-flex align-items-center justify-content-center">
        <div className="backgroundContainer">{amount}</div>
        <div className="foregroundContainer">
          <div className="d-flex align-items-center justify-content-center">
            <div className=" countText">
              <CountUp start={0} end={amount} />
            </div>
            <div className=" descriptionText">{description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatSectionItem;
