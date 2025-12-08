import React from "react";
import LN1 from "../assets/LN1.png";
import LN2 from "../assets/LN2.png";
import LN3 from "../assets/LN3.png";
import LN4 from "../assets/LN4.png";

export default function FeatureBar() {
  return (
    <>
    <div className="feature-bar">
      
      <div className="feature-item">
        <img src={LN1} className="icon-style" alt="" />
        <h3>End-to-end</h3>
        <p>From strategy to execution. We handle it all</p>
      </div>

      <div className="divider"></div>

      <div className="feature-item">
        <img src={LN2} className="icon-style" alt="" />
        <h3>Design + Growth</h3>
        <p>We combine creative design with growth-driven SEO & Marketing</p>
      </div>

      <div className="divider"></div>

      <div className="feature-item">
        <img src={LN3} className="icon-style" alt="" />
        <h3>Global Ready</h3>
        <p>Your Brand, built for an international audience</p>
      </div>

      <div className="divider"></div>

      <div className="feature-item">
        <img src={LN4} className="icon-style" alt="" />
        <h3>Transparent Pricing</h3>
        <p>No hidden costs, only clear & customized packages</p>
      </div>

      

    </div>



    </>
    
  );
}
