import React from "react";
import Header from "../components/Header";
import Footer from "../components/homepage/Footer";
import FindYourPhone from "../components/FindYourPhone";
import Joincompanies from "../components/Joincompanies";
import Celltrackers from "../components/homepage/Celltrackers";
import HowItWorks from "../components/HowItWorks";
import CreateYourAccount from "../components/CreateYourAccount";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Celltrackers />
      <HowItWorks />
      <Joincompanies />
      <CreateYourAccount />
      <FindYourPhone />
      <Footer />
    </div>
  );
};

export default HomePage;
