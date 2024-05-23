import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

class SliderItem extends Component {
  render() {
    const { image, topicText, bodyText } = this.props;
    return (
      <Card className="d-flex mx-2 sliderCardContainer shadow mb-4 bg-white">
        <div className="row">
          <div className="col-md-6 ">
            <Card.Img variant="top" src={image} className="sliderImageC" />
          </div>
          <div className="col-md-5 sliderCardTextContainer">
            <Card.Text>
              <span className="sliderItemHeading">{topicText}</span>
              <p className="sliderItemBody">{bodyText}</p>
              <div className="d-flex align-items-center readMoreContainer">
                <ArrowRightCircleFill />{" "}
                <span className="px-2 readMoreText">Read More</span>
              </div>
            </Card.Text>
          </div>
        </div>
      </Card>
    );
  }
}

export default SliderItem;
