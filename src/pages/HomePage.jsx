import React from "react";
import Header from "../components/Header";
import Footer from "../components/common/Footer";
import FindYourPhone from "../components/FindYourPhone";
import Joincompanies from "../components/Joincompanies";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Joincompanies />
      <FindYourPhone />
      <Footer />
    </div>
  );
};

export default HomePage;
