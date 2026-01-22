import Hero from "@/components/LandingPage/Hero";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import MostBookedServices from "@/components/LandingPage/MostBookedServices";
import React, { useEffect } from "react";
import WhyChooseUs from "@/components/LandingPage/WhyChooseUs";
import FinalCTA from "@/components/LandingPage/FinalCTA";
import Footer from "@/components/Footer/Footer";
import SEO from "@/components/Common/SEO";
import axios from "axios";

const LandingPage = () => {
useEffect(() => {
  const fetchPosts = async () => {
    const API_BASE_URL = (
      import.meta.env.VITE_API_URL ||
      import.meta.env.API_URL ||
      "http://localhost:3000"
    ).replace(/\/+$/, "");

    const res = await axios.get(`${API_BASE_URL}/posts`);
    console.log(res.data);
  };

  fetchPosts();
}, []);

  return (
    <div>
      <SEO 
        title="Home Services Platform"
        description="Affordable home services platform for daily needs—trusted service providers, personal tutor near me, repairs, and maintenance with instant booking and notifications."
        keywords="home services platform, affordable home services, daily home services, personal tutor near me, trusted service providers, on-demand home services"
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
