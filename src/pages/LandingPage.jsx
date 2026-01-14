import Hero from "@/components/LandingPage/Hero";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import MostBookedServices from "@/components/LandingPage/MostBookedServices";
import React from "react";
import WhyChooseUs from "@/components/LandingPage/WhyChooseUs";
import FinalCTA from "@/components/LandingPage/FinalCTA";
import Footer from "@/components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <MostBookedServices />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
};

export default LandingPage;
