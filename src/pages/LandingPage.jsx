import React from "react";
import Footer from "../components/common/Footer";
import HowItWork from "../components/lendingpage/HowItWork";
import UniversalPrivacy from "../components/lendingpage/UniversalPrivacy";

const LandingPage = () => {
  return (
    <div>
      <UniversalPrivacy />
      <HowItWork />
      <Footer />
    </div>
  );
};

export default LandingPage;
