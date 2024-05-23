import React, { Component } from "react";
import "./style.css";
import StatSectionItem from "./statSectionItem";

class StatsSectionComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row statContatiner">
          <StatSectionItem amount="800" description="Delivered packages" />
          <StatSectionItem amount="137" description="Countries covered" />
          <StatSectionItem amount="740" description="Tons of Goods" />
          <StatSectionItem amount="600" description="Satisfied Clients" />
        </div>
      </div>
    );
  }
}

export default StatsSectionComponent;
