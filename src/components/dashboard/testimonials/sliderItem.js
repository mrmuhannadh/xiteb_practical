import React, { Component } from "react";
import "./style.css";

class SliderItem extends Component {
  render() {
    const { comment, commenterName, commenterPosition } = this.props;
    return (
      <div>
        <div className="d-flex talk-bubble-slider tri-right border btm-right-in">
          <div className="customShape">
            <span className="quoteMark">&#8220;</span>
          </div>

          <div className="talktext d-flex align-items-center">
            <p>{comment}</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end commenterSection">
          <span className="commenterName">{commenterName}</span>
          <span className="commenterPosition">{commenterPosition}</span>
        </div>
      </div>
    );
  }
}

export default SliderItem;
