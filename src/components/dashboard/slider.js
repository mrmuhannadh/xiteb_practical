import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import imageOne from "../../assets/slider/JPG/slider1.jpg";
import imageTwo from "../../assets/slider/JPG/slider2.jpg";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import CommonCarouselItem from "./common/commonCarouselItem";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
      totalSlides: 4,
    };
  }

  handlePrevSlide = () => {
    this.setState((prevState) => ({
      currentSlideIndex:
        prevState.currentSlideIndex === 0
          ? prevState.totalSlides - 1
          : prevState.currentSlideIndex - 1,
    }));
  };

  handleNextSlide = () => {
    this.setState((prevState) => ({
      currentSlideIndex:
        prevState.currentSlideIndex === prevState.totalSlides - 1
          ? 0
          : prevState.currentSlideIndex + 1,
    }));
  };

  render() {
    const { currentSlideIndex, totalSlides } = this.state;

    const slideItems = [
      { image: imageOne, contentHeading: "First Slide", content: "welcome" },
      { image: imageTwo, contentHeading: "Secound Slide", content: "welcome" },
      { image: imageOne, contentHeading: "Third Slide", content: "welcome" },
      { image: imageTwo, contentHeading: "Fourth Slide", content: "welcome" },
    ];
    return (
      <div className="sliderRow">
        <div className="sliderCol">
          <Container fluid className="sliderContainer">
            <Carousel
              data-bs-theme="dark"
              indicators={false}
              controls={false}
              fade={true}
              activeIndex={currentSlideIndex}
            >
              {slideItems.map((item) => {
                return (
                  <Carousel.Item className="carouselCustom">
                    <CommonCarouselItem
                      image={item.image}
                      contentHeading={item.contentHeading}
                      content={item.content}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>

            <div className="row d-flex  align-items-center sliderController">
              <div className="col justify-content-center countBox">
                <span className="countBoxValue">{currentSlideIndex + 1}</span>/
                <span className="countBoxValue">{totalSlides}</span>
              </div>
              <div className="col">
                <ArrowLeft
                  color="white"
                  size={30}
                  onClick={this.handlePrevSlide}
                />
              </div>
              <div className="col">
                <ArrowRight
                  color="white"
                  size={30}
                  onClick={this.handleNextSlide}
                />
              </div>
            </div>
          </Container>
        </div>
        <div className="verticalTextCol">#CARGOTONLOGISTICS</div>
      </div>
    );
  }
}

export default Slider;
