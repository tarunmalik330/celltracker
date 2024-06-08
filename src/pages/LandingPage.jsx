import React from "react";
import HowItWork from "../components/lendingpage/HowItWork";
import UniversalPrivacy from "../components/lendingpage/UniversalPrivacy";
import Hero from "../components/lendingpage/Hero";
import FindAnyone from "../components/lendingpage/FindAnyone";
import LendingFooter from "../components/lendingpage/LendingFooter";

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
