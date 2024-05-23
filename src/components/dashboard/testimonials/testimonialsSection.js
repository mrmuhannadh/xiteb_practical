import React, { Component } from "react";
import "./style.css";
import CustomerSlider from "./slider";
import WhyChooseUs from "./whyChooseUsItem";

class TestmonialsSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row testMonContainer">
          <div className="col-md-6">
            <span className="heading">TRUSTED CLIENTS</span>
            <p className="subHeading">
              LOREM IPSUM DOLOR SIT AMET CONESECTETUR
            </p>

            <CustomerSlider />
          </div>
          <div className="col-md-6">
            <span className="heading">WHY CHOOSE US</span>
            <p className="subHeading">
              LOREM IPSUM DOLOR SIT AMET CONESECTETUR
            </p>
            <div className="listItems">
              <hr style={{ margin: 0 }} />
              <WhyChooseUs topic="Topic one" description="Text" />
              <WhyChooseUs topic="Topic Two" description="Text" />
              <WhyChooseUs topic="Topic three" description="Text" />
              <WhyChooseUs topic="Topic four" description="Text" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestmonialsSection;
