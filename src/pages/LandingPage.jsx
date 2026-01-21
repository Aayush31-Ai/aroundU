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
useEffect(()=>{
const fetch=async()=>{
  const res=await axios.get("http://localhost:3000/posts");
  console.log(res.data);
}
fetch()
},[])

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
