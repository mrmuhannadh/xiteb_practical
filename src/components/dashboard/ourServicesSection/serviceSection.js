import React from "react";
import "./style.css";
import SliderComponent from "./slider";

function ServiceSection() {
  return (
    <>
      <div className="justify-content-center text-center">
        <p style={{ color: "green" }}>Real Solution, Real Fast!</p>

        <h2 className="headingStyle">Best Global Logistics Solutions</h2>
      </div>
      <SliderComponent />
    </>
  );
}

export default ServiceSection;
