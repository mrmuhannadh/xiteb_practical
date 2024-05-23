import React from "react";
import imageOne from "../../../assets/welcome/JPG/imageOne.jpg";
import imageTwo from "../../../assets/welcome/PNG/imageTwo.png";
import RightTriRecShape from "./rightTriangleRectangle";
import "./welcomeStyle.css";
import Parallelogram from "./parallelogram";
import CommonButton from "../common/commonButton";
import TriangleShape from "./triangleBottomLeftShape";

function WelcomeSection() {
  return (
    <div className="row welcomeSectionMainBox w-100">
      <div className="col-md-6 imageSection flex">
        <div className="imageOneDiv">
          <img src={imageOne} className="imageOne" alt="imageOne" />
        </div>
        <div className="imageTwoDiv">
          <img src={imageTwo} className="imageTwo" alt="imageTwo" />
          <div className="parallelogramContainer">
            <Parallelogram className="parallelogramShape" />
          </div>
          <div className="triangleShapeContainer">
            <TriangleShape />
          </div>
        </div>
        <RightTriRecShape className="triRecShape" />
      </div>

      <div className="col-md-6 textSection">
        <div className="parallelogramContainer">
          <Parallelogram className="parallelogramShape" />
        </div>
        <div className="content">
          <p className="topic">
            TransMax Logistics Around <span>the World</span>
          </p>
          <p>
            Transmax is the world's driving worldwide coordinations supplier --
            we uphold industry and exchange the worldwide trade of merchandise
            through land transport.
          </p>
          <p className="subPara">
            Our worth added administrations qurantee the progression of products
            proceeds consistently and supply chains stay lean and stramlined for
            progress
          </p>
          <div className="my-4 px-1">
            <CommonButton
              height="50px"
              width="170px"
              fontColor="rgb(46, 98, 122)"
              backgroundColor="rgb(245, 245, 245)"
              text="MORE ABOUT THIS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
