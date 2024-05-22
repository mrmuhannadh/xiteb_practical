import React, { Component } from "react";
import Header from "../components/dashboard/header";
import Slider from "../components/dashboard/slider";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
      </div>
    );
  }
}

export default DashboardPage;
