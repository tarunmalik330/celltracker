import React from "react";
import HowItWork from "../components/lendingpage/HowItWork";
import UniversalPrivacy from "../components/lendingpage/UniversalPrivacy";
import Hero from "../components/lendingpage/Hero";
import FindAnyone from "../components/lendingpage/FindAnyone";
import LendingFooter from "../components/lendingpage/LendingFooter";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <UniversalPrivacy />
      <FindAnyone />
      <HowItWork />
      <LendingFooter/>
    </div>
  );
};

export default LandingPage;
