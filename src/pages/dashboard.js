import React, { Component } from "react";
import Header from "../components/dashboard/headerAndSlider/header";
import WelcomeSection from "../components/dashboard/welcomeSection/welcomeSection";
import Slider from "../components/dashboard/headerAndSlider/slider";
import ServiceSection from "../components/dashboard/ourServicesSection/serviceSection";
import StatsSectionComponent from "../components/dashboard/StatsSection/statsSectionComponent";
import ScrollAnimation from "react-animate-on-scroll";
import TestmonialsSection from "../components/dashboard/testimonials/testimonialsSection";
import ClientLogoSection from "../components/dashboard/clientLogoSection/clientLogoSection";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <WelcomeSection />
        </ScrollAnimation>
        <ServiceSection />
        <StatsSectionComponent />
        <TestmonialsSection />
        <ClientLogoSection />
      </div>
    );
  }
}

export default DashboardPage;
