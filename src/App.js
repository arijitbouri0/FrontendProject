import React from "react";
import Navbar from "./Component/NavBar/NavBar";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Features from "./Component/Features/Features";
import HowItWorks from "./Component/How it Works/HowItWorks";
import TalkToSales from "./Component/Talk to sales/TalkToSales";
import ConnectStore from "./Component/Connect Store/ConnectStore";
import SocialProof from "./Component/Social Proof/SocailProof";
import Pricing from "./Component/Pricing/Pricing";
import Works from './Component/HowItWorks/howItWorks'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Works/>
    <HowItWorks/>
    <ConnectStore/>
    <TalkToSales className="container mx-auto mt-10"/>
    <SocialProof/>
    <Pricing/>
    <Footer/>
    </>
  );
}

export default App;
