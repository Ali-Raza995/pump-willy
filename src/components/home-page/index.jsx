import React from "react";
import Navbar from "./navbar/navbar";
import IntroSection from "./navbar/intro-section";
import BuySection from "./buy-section/buy-section";
import UtilitiesSections from "./utilities-section/utilities-sections";
import AboutBrett from "./about-brett/about-brett";
import TokenomicsSection from "./tokenomics-section/tokenomics-section";
import BuyTutorialSection from "./buy-tutorial-section/buy-tutorial-section";
import ContactUs from "./contact-us/contact-us";
import Footer from "./footer/footer";

const HomePage = () => {
  return (
    <div className="relative z-50 bg-lyllw/40 font-['Londrina_Solid'] overflow-hidden">

      <Navbar />
      <IntroSection />
      <BuySection />
      <AboutBrett />
      <TokenomicsSection />
      <BuyTutorialSection />
      <UtilitiesSections />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
