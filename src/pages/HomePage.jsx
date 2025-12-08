import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Hero from "../components/HeroSection";
import FeatureBar from "../components/FeatureBar";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Testimonials from "../components/Testimonials";
import WhyCtrlZs from "../components/WhyUs";
import FAQ from "../components/Faq";
import BrandAudit from "../components/brandAudit";


export default function Home() {
  return (
    <>
      
      <Hero />
      
      <Services />

      <OurWork/>

      <Testimonials/>

      <WhyCtrlZs/>
      
      <FAQ/>

      <BrandAudit/>

    </>
  );
}
