import React from "react";
import Hero from "../components/HeroSection";
import FeatureBar from "../components/FeatureBar";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Testimonials from "../components/Testimonials";
import WhyCtrlZs from "../components/WhyUs";
import FAQ from "../components/Faq";
import BrandAudit from "../components/BrandAudit";
import FloatingText from "../components/FloatingText";


export default function Home() {
  return (
    <>
      
      <Hero/>
      
      <Services />

      <FloatingText lines={2} />

      <OurWork/>

      <Testimonials/>

      <WhyCtrlZs/>
      
      <FAQ/>

      <BrandAudit/>

    </>
  );
}
