import React, { Component } from "react";
import Header from "../components/dashboard/headerAndSlider/header";
import WelcomeSection from "../components/dashboard/welcomeSection/welcomeSection";
import Slider from "../components/dashboard/headerAndSlider/slider";
import ServiceSection from "../components/dashboard/ourServicesSection/serviceSection";
import StatsSectionComponent from "../components/dashboard/StatsSection/statsSectionComponent";
import ScrollAnimation from "react-animate-on-scroll";
import TestmonialsSection from "../components/dashboard/testimonials/testimonialsSection";
import ClientLogoSection from "../components/dashboard/clientLogoSection/clientLogoSection";
import NewsSection from "../components/dashboard/newsSection/newsSection";
import Footer from "../components/dashboard/common/footer";
import MoveUpButton from "../components/dashboard/common/moveUpScreenButton";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <WelcomeSection />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <ServiceSection />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <StatsSectionComponent />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <TestmonialsSection />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <ClientLogoSection />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <NewsSection />
        </ScrollAnimation>
        <Footer />
        <MoveUpButton />
      </div>
    );
  }
}

export default DashboardPage;
