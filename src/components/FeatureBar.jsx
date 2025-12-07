import React from "react";

export default function FeatureBar() {
  return (
    <div className="feature-bar">
      <div className="feature-item">
        <h3>End-to-end</h3>
        <p>From strategy to execution. We handle it all</p>
      </div>

      <div className="divider"></div>

      <div className="feature-item">
        <h3>Design + Growth</h3>
        <p>We combine creative design with growth-driven SEO & Marketing</p>
      </div>

      <div className="divider"></div>

      <div className="feature-item">
        <h3>Global Ready</h3>
        <p>Your Brand, built for an international audience</p>
      </div>

      <div className="divider"></div>

      <div className="feature-item">
        <h3>Transparent Pricing</h3>
        <p>No hidden costs, only clear & customized packages</p>
      </div>
    </div>
  );
}
