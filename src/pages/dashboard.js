import React, { Component } from "react";
import Header from "../components/dashboard/headerAndSlider/header";
import WelcomeSection from "../components/dashboard/welcomeSection/welcomeSection";
import Slider from "../components/dashboard/headerAndSlider/slider";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <WelcomeSection />
      </div>
    );
  }
}

export default DashboardPage;
