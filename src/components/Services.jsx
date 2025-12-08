import React from "react";
import seo from "../assets/seo.jpg";
import ui from "../assets/ui.png";
import paidads from "../assets/paidads.png";
import videograpic from "../assets/videograpic.png";
import web from "../assets/web.png";

export default function Services() {
  return (
    <>
      <section className="services-section">
        <h2 className="services-title">Our Services</h2>

        <div className="services-grid">
          {/* Large top card */}
          <div className="service-card large-card">
            <img src={web} alt="Web Development" />
            <h3>Web Development</h3>
            <p>
              UI/UX design, Web Development, Content writing, Graphic design and
              Video Editing
            </p>
          </div>

          {/* Middle row */}
          <div className="service-card small-card middle-left">
            <img src={paidads} alt="Paid Ads" />
            <h3>Paid Ads</h3>
            <p>Marketing, Design & Growth strategy for brands</p>
          </div>

          <div className="service-card small-card middle-right">
            <img src={ui} alt="UI/UX Design" />
            <h3>UI/UX Design</h3>
            <p>Brand identity, Interface design & Product visuals</p>
          </div>

          {/* SEO centered row */}
          <div className="service-card small-card seo-center">
            <img src={seo} alt="SEO" />
            <h3>SEO</h3>
            <p>
              UI/UX design, Web Development, Graphic design and Video Editing
            </p>
          </div>

          {/* Bottom row */}
          <div className="service-card small-card bottom-left">
            <img src={videograpic} alt="Graphic Design" />
            <h3>Graphic Design</h3>
            <p>Creative brand visuals & Motion graphics</p>
          </div>

          <div className="service-card small-card bottom-right">
            <img src={videograpic} alt="Video Editing" />
            <h3>Video Editing</h3>
            <p>Professional video editing & storytelling</p>
          </div>
        </div>
      </section>

      <div className="floating-text-container my-4">
        {/* LINE 1 — Left → Right */}
        <div className="floating-text left-to-right ">
          Video Editing • UI/UX Design • SEO • Web Development • Paid Ads •
          Graphic Design •
        </div>

        {/* LINE 2 — Right → Left */}
        <div className="floating-text right-to-left">
          Video Editing • UI/UX Design • SEO • Web Development • Paid Ads •
          Graphic Design •
        </div>
      </div>
    </>
  );
}
