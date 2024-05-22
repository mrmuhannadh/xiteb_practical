import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style.css";

class CommonCarouselItem extends Component {
  render() {
    const { image, contentHeading, content } = this.props;

    return (
      <div className="row carouselItemWrapper">
        <div className="col-4 carouselCaption">
          <h5>{contentHeading}</h5>
          <p>{content}</p>
        </div>

        <div className="col-8 carouselImage">
          <img
            className="d-block w- h-100 sliderImage"
            src={image}
            alt="First slide"
          />
        </div>
      </div>
    );
  }
}

export default CommonCarouselItem;
