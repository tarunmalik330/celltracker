import React from "react";
import Header from "../components/homepage/Header";
import Footer from "../components/common/Footer";
import FindYourPhone from "../components/homepage/FindYourPhone";
import Joincompanies from "../components/homepage/Joincompanies";
import Celltrackers from "../components/homepage/Celltrackers";
import HowItWorks from "../components/homepage/HowItWorks";
import CreateYourAccount from "../components/homepage/CreateYourAccount";
import { footerLink } from "../components/common/Helper";

const HomePage = () => {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <Celltrackers />
      <HowItWorks />
      <Joincompanies />
      <CreateYourAccount />
      <FindYourPhone />
      <Footer mapdata={footerLink} />
    </div>
  );
};

export default HomePage;
