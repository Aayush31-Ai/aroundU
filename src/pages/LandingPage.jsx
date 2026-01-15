import Hero from "@/components/LandingPage/Hero";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import MostBookedServices from "@/components/LandingPage/MostBookedServices";
import React from "react";
import WhyChooseUs from "@/components/LandingPage/WhyChooseUs";
import FinalCTA from "@/components/LandingPage/FinalCTA";
import Footer from "@/components/Footer/Footer";
import SEO from "@/components/Common/SEO";

const LandingPage = () => {
  return (
    <div>
      <SEO 
        title="Home" 
        description="Find trusted local professionals for cleaning, repairs, and home services. Book verified experts near you instantly."
      />
      <Hero />
      <HowItWorks />
      <MostBookedServices />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
};

export default LandingPage;
