import React from "react";
import HowItWork from "../components/lendingpage/HowItWork";
import UniversalPrivacy from "../components/lendingpage/UniversalPrivacy";
import Footer from "../components/common/Footer";
import Hero from "../components/lendingpage/Hero";
import FindAnyone from "../components/lendingpage/FindAnyone";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <UniversalPrivacy />
      <FindAnyone />
      <HowItWork />
      <Footer />
    </div>
  );
};

export default LandingPage;
