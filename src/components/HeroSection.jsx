// put this in Hero.jsx (React component file)
import React, { useEffect } from "react";
import FeatureBar from "./FeatureBar";

export default function Hero() {
  // useEffect(() => {
  //   function updateArcVariables() {
  //     const hero = document.querySelector(".hero-content");
  //     if (!hero) return;

  //     const heroRect = hero.getBoundingClientRect();
  //     const heroHeight = heroRect.height;         // actual hero content height
  //     const heroTop = heroRect.top;              // relative to viewport if needed

  //     /* Recommended mathematical approach:
  //        - We want the apex (top center) of semi-circle to be a bit above hero center.
  //        - Compute rise (how much to drop the circle) as a fraction of hero height.
  //        - Tweak the multipliers below to match the exact look from your Figma.
  //     */

  //     // base diameters must match CSS defaults (in px)
  //     const d1 = 200; // outer
  //     const d2 = 160; // middle
  //     const d3 = 120; // inner

  //     // Compute rise values as function of heroHeight:
  //     // These formulas are empirical but mathematically tied to heroHeight:
  //     const rise1 = Math.round(heroHeight * 0.45); // outer: ~45% of hero height
  //     const rise2 = Math.round(heroHeight * 0.35); // middle
  //     const rise3 = Math.round(heroHeight * 0.22); // inner purple arc

  //     // You can optionally add small constants or clamp values:
  //     const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  //     const r1 = clamp(rise1, 120, d1/2 - 50);
  //     const r2 = clamp(rise2, 80, d2/2 - 30);
  //     const r3 = clamp(rise3, 40, d3/2 - 10);

  //     // Set CSS variables on :root (document.documentElement)
  //     const root = document.documentElement;
  //     root.style.setProperty("--rise1", `${r1}px`);
  //     root.style.setProperty("--rise2", `${r2}px`);
  //     root.style.setProperty("--rise3", `${r3}px`);

  //     // Optionally set left offsets to keep arcs visually centered relative to logo
  //     // Adjust these formulas if your hero content width changes.
  //     const heroWidth = heroRect.width;
  //     // center-of-container (1000px) minus hero center -> offset
  //     // simple approach: shift smaller arcs slightly right to mimic design
  //     const offset2 = Math.round((d1 - d2) / 2) - Math.round(heroWidth * 0.05);
  //     const offset3 = Math.round((d1 - d3) / 2) - Math.round(heroWidth * 0.02);
  //     root.style.setProperty("--left-offset-2", `${offset2}px`);
  //     root.style.setProperty("--left-offset-3", `${offset3}px`);
  //   }

  //   // initial set and on resize
  //   updateArcVariables();
  //   window.addEventListener("resize", updateArcVariables);
  //   // optional: update after fonts load/images load
  //   window.addEventListener("load", updateArcVariables);

  //   return () => {
  //     window.removeEventListener("resize", updateArcVariables);
  //     window.removeEventListener("load", updateArcVariables);
  //   };
  // }, []);

  return (
    <section className="home-hero-wrapper">
  <div className="home-hero-content">
<div className="home-hero-arcs">
  <div className="home-hero-arc home-hero-arc-1"></div>
  <div className="home-hero-arc home-hero-arc-2"></div>
  <div className="home-hero-arc home-hero-arc-3"></div>

  {/* === ARC STATS === */}
  <div className="home-hero-arc-stats home-hero-stat-left">
    <span className="home-hero-stat-value">+120%</span>
    <span className="home-hero-stat-label">Conversions</span>
  </div>

  <div className="home-hero-arc-stats home-hero-stat-right">
    <span className="home-hero-stat-value">35+</span>
    <span className="home-hero-stat-label">Global Clients</span>
  </div>
</div>


    <div className="home-hero-logo-sec">
       <h1 className="home-hero-logo">
      Ctrl<span className="home-hero-accent">Zs</span>
    </h1>
    <p className="home-hero-subtitle">Undo ordinary</p>
    </div>
   

    <div className="home-hero-copy">
      <p className="home-hero-description">
        Where creativity meets performance we design, build, and grow brands that
        deliver results
      </p>
      <button className="home-hero-btn">Get a Free Brand Audit</button>
    </div>
  </div>

  <FeatureBar />
</section>

  );
}
