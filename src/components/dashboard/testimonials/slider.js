import React, { Component } from "react";
import Slider from "react-slick";
import SliderItem from "./sliderItem";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

class CustomerSlider extends Component {
  render() {
    const slider = React.createRef();

    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <div>
        <div className="container slider-container">
          <Slider ref={slider} {...settings}>
            <div>
              <SliderItem
                comment="This is a sample comment to check whether the component is working as expected, Yes it working well, So now we can add some more words make the div full with textsm, Nice work"
                commenterName="JOHN DEO"
                commenterPosition="Managing Director"
              />
            </div>
            <div>
              <SliderItem
                comment="This is a sample comment to check whether the component is working as expected, Yes it working well, So now we can add some more words make the div full with textsm, Nice work"
                commenterName="SLide Two"
                commenterPosition="Managing Director"
              />
            </div>
            <div>
              <SliderItem
                comment="This is a sample comment to check whether the component is working as expected, Yes it working well, So now we can add some more words make the div full with textsm, Nice work"
                commenterName="Slide Three"
                commenterPosition="Managing Director"
              />
            </div>
          </Slider>
        </div>
        <div className="d-flex controllersDiv">
          <div className="arrowDiv">
            <ChevronLeft onClick={() => slider?.current?.slickPrev()} />
          </div>
          <div className="arrowDiv">
            <ChevronRight onClick={() => slider?.current?.slickNext()} />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerSlider;
