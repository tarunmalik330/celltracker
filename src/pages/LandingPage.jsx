import React from "react";
import HowItWork from "../components/landingpage/HowItWork";
import UniversalPrivacy from "../components/landingpage/UniversalPrivacy";
import Hero from "../components/landingpage/Hero";
import FindAnyone from "../components/landingpage/FindAnyone";
import Footer from "../components/common/Footer";
import { footerLink2 } from "../components/common/Helper";

const LandingPage = () => {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Hero />
      <UniversalPrivacy />
      <FindAnyone />
      <HowItWork />
      <Footer mapdata={footerLink2} />
    </div>
  );
};

export default LandingPage;
