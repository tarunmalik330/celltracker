import React from "react";
import HowItWork from "../components/lendingpage/HowItWork";
import UniversalPrivacy from "../components/lendingpage/UniversalPrivacy";
import Footer from "../components/common/Footer";
import Hero from "../components/lendingpage/Hero";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <UniversalPrivacy />
      <HowItWork />
      <Footer />
    </div>
  );
};

export default LandingPage;
