import React from "react";
import Header from "../components/Header";
import Footer from "../components/common/Footer";
import FindYourPhone from "../components/FindYourPhone";
import Joincompanies from "../components/Joincompanies";
import Celltrackers from "../components/Celltrackers";
import HowItWorks from "../components/HowItWorks";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Celltrackers />
      <HowItWorks />
      <Joincompanies />
      <FindYourPhone />
      <Footer />
    </div>
  );
};

export default HomePage;
