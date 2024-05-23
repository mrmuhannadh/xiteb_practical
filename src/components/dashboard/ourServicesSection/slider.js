import React from "react";
import Slider from "react-slick";
import "./style.css";
import SliderItem from "./sliderItem";
import imageTest from "../../../assets/slider/JPG/slider1.jpg";

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10000,
    appendDots: (dots) => (
      <div className="">
        <ul
          style={{ margin: "0px" }}
          className="d-flex justify-content-end dotsBg"
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <div>
      <div className="container slider-container">
        <Slider {...settings}>
          <div>
            <SliderItem
              image={imageTest}
              topicText="Air Freight Services"
              bodyText="At our Auto Service garage, we are fully apprciate how difficult
                occur it is for people to find."
            />
          </div>
          <div>
            <SliderItem
              image={imageTest}
              topicText="Drone Services"
              bodyText="At our Auto Service garage, we are fully apprciate how difficult
                occur it is for people to find."
            />
          </div>
          <div>
            <SliderItem
              image={imageTest}
              topicText="Drone Services"
              bodyText="At our Auto Service garage, we are fully apprciate how difficult
                occur it is for people to find."
            />
          </div>
          <div>
            <SliderItem
              image={imageTest}
              topicText="Air Freight Services"
              bodyText="At our Auto Service garage, we are fully apprciate how difficult
                occur it is for people to find."
            />
          </div>
          <div>
            <SliderItem
              image={imageTest}
              topicText="Drone Services"
              bodyText="At our Auto Service garage, we are fully apprciate how difficult
                occur it is for people to find."
            />
          </div>
          <div>
            <SliderItem
              image={imageTest}
              topicText="Air Freight Services"
              bodyText="At our Auto Service garage, we are fully apprciate how difficult
                occur it is for people to find."
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponent;
