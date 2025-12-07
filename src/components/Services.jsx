import React from "react";

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">

        {/* Large top card */}
        <div className="service-card large-card">
          <img src="/web-dev.jpg" alt="Web Development" />
          <h3>Web Development</h3>
          <p>
            UI/UX design, Web Development, Content writing, Graphic design and
            Video Editing
          </p>
        </div>

        {/* Middle row */}
        <div className="service-card small-card middle-left">
          <img src="/design.jpg" alt="Paid Ads" />
          <h3>Paid Ads</h3>
          <p>Marketing, Design & Growth strategy for brands</p>
        </div>

        <div className="service-card small-card middle-right">
          <img src="/uiux.jpg" alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <p>Brand identity, Interface design & Product visuals</p>
        </div>

        {/* SEO centered row */}
        <div className="service-card small-card seo-center">
          <img src="/seo.jpg" alt="SEO" />
          <h3>SEO</h3>
          <p>
            UI/UX design, Web Development, Graphic design and Video Editing
          </p>
        </div>

        {/* Bottom row */}
        <div className="service-card small-card bottom-left">
          <img src="/graphic.jpg" alt="Graphic Design" />
          <h3>Graphic Design</h3>
          <p>Creative brand visuals & Motion graphics</p>
        </div>

        <div className="service-card small-card bottom-right">
          <img src="/video.jpg" alt="Video Editing" />
          <h3>Video Editing</h3>
          <p>Professional video editing & storytelling</p>
        </div>

      </div>
    </section>
  );
}
