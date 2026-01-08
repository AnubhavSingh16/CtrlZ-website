import React from "react";
import LN1 from "../assets/LN1.png";
import LN2 from "../assets/LN2.png";
import LN3 from "../assets/LN3.png";
import LN4 from "../assets/LN4.png";

export default function FeatureBar() {
  return (
    <div className="home-hero-featurebar">
      
      <div className="home-hero-featurebar-item">
        <img src={LN1} className="home-hero-featurebar-icon" alt="" />
        <h3 className="text-xl">End-to-end</h3>
        <p className="text-sm">From strategy to execution. We handle it all</p>
      </div>

      <div className="home-hero-featurebar-divider"></div>

      <div className="home-hero-featurebar-item">
        <img src={LN2} className="home-hero-featurebar-icon" alt="" />
        <h3 className="text-xl">Design + Growth</h3>
        <p className="text-sm">We combine creative design with growth-driven SEO & Marketing</p>
      </div>

      <div className="home-hero-featurebar-divider"></div>

      <div className="home-hero-featurebar-item">
        <img src={LN3} className="home-hero-featurebar-icon" alt="" />
        <h3 className="text-xl">Global Ready</h3>
        <p className="text-sm">Your Brand, built for an international audience</p>
      </div>

      <div className="home-hero-featurebar-divider"></div>

      <div className="home-hero-featurebar-item">
        <img src={LN4} className="home-hero-featurebar-icon" alt="" />
        <h3 className="text-xl">Transparent Pricing</h3>
        <p className="text-sm">No hidden costs, only clear & customized packages</p>
      </div>

    </div>
  );
}
