import React from "react";
import HowItWork from "../components/lendingpage/HowItWork";
import UniversalPrivacy from "../components/lendingpage/UniversalPrivacy";
import Footer from "../components/common/Footer";

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
