import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Hero from "../components/HeroSection";
import FeatureBar from "../components/FeatureBar";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
      
      <Hero />
      {/* <FeatureBar/> */}
      <Services />

    </>
  );
}
