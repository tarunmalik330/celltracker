import React from "react";
import HowItWork from "../components/landingpage/HowItWork";
import UniversalPrivacy from "../components/landingpage/UniversalPrivacy";
import Hero from "../components/landingpage/Hero";
import FindAnyone from "../components/landingpage/FindAnyone";
import LendingFooter from "../components/landingpage/LandingFooter";

const LandingPage = () => {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Hero />
      <UniversalPrivacy />
      <FindAnyone />
      <HowItWork />
      <LendingFooter />
    </div>
  );
};

export default LandingPage;
