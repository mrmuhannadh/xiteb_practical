import React from "react";
import Slider from "react-slick";
import "./style.css";
import imageOne from "../../../assets/logo/PNG/780.png";
import imageTwo from "../../..//assets/logo/PNG/genesis.png";
import imageThree from "../../..//assets/logo/PNG/lightHouse.png";
import imageFour from "../../..//assets/logo/PNG/spectraLink.png";
import imageFive from "../../..//assets/logo/WEBP/light.webp";
import imageSix from "../../..//assets/logo/SVG/integriom.svg";

function ClientLogoSection(props) {
  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="container slider-container-client">
      <div className="sliderBox">
        <Slider {...settings}>
          <div className="sliderImageContainer">
            <img src={imageOne} className="sliderImageClient grayscale" />
          </div>
          <div className="sliderImageContainer">
            <img src={imageTwo} className="sliderImageClient grayscale" />
          </div>
          <div className="sliderImageContainer">
            <img src={imageThree} className="sliderImageClient grayscale" />
          </div>
          <div className="sliderImageContainer">
            <img src={imageFour} className="sliderImageClient grayscale" />
          </div>
          <div className="sliderImageContainer">
            <img src={imageFive} className="sliderImageClient grayscale" />
          </div>
          <div className="sliderImageContainer">
            <img src={imageSix} className="sliderImageClient grayscale" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ClientLogoSection;
