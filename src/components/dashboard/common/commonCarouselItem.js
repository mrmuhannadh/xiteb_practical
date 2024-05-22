import React, { Component } from "react";
import "../style.css";
import CommonButton from "./commonButton";

class CommonCarouselItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <div className="row carouselItemWrapper">
        <div className="col-md-4 carouselCaption">
          <div className="topContent">
            <h5 className="contentHeading">
              <div className="d-flex align-items-center">
                <div className="vr border-5 opacity-100 verticleLine"></div>
                <span className="px-2">LOGISTIC</span>
              </div>
            </h5>
            <div className="subHeading">
              Best Shipping
              <span className="subHeadingHighlight">
                <br />
                Partner
              </span>
            </div>
            <div className="descriptionConent text-justify my-2">
              Paragraphs are the building blocks of papers. Many students define
              paragraphs in terms of length: a paragraph is a group of
            </div>

            <div className="mt-1 py-4">
              <CommonButton
                height="40px"
                width="170px"
                fontColor="#fff"
                backgroundColor="rgb(249, 191, 4)"
                text="DISCOVER MORE"
              />
            </div>
          </div>
        </div>

        <div className="col-md-8 carouselImage">
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
