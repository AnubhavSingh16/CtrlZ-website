import React from "react";
import sample1 from "../assets/webdev/web.png";

export default function WhyCtrlZ() {
  return (
    <section className="relative w-full md:py-18 py-8 px-4">

      {/* Heading */}
      <h2 className="text-center text-white text-3xl md:text-6xl font-bold tracking-wide mb-8 md:mb-14">
        WHY CTRL ZS?
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* BIG CARD (2x height) */}
        <OverlayCard
         title="Results-Focused Thinking"  
        description="We don’t build websites just to look good. We design with intent - aligning structure, visuals, and messaging to support real business goals like clarity, trust, and conversions."
         img={sample1} 
         large 
         />

        {/* SMALL CARDS */}
        <OverlayCard title="Hands-On Experience Across Projects"
        description="Our team has worked with startups, founders, and growing businesses across different industries, giving us practical insight into what actually works - and what doesn’t." 
        img={sample1} />

        <OverlayCard title="Fast, Thoughtful Delivery" 
        description="We move quickly, but never carelessly. Our process is designed to ship efficiently while leaving room for feedback, iteration, and refinement."
        img={sample1} />

        <OverlayCard title="Modern, Scalable Tech" 
        description= "Every project is built using clean, modern frameworks that are easy to scale and maintain. No lock-ins, no shortcuts - just code you can grow with."
        img={sample1} />

        <OverlayCard title="Clear & Transparent Pricing"
        description= "You’ll always know what you’re paying for. We define scope upfront, communicate clearly, and avoid surprises - so decisions stay simple and stress-free." 
        img={sample1} />
      </div>
    </section>
  );
}

/* OVERLAY CARD */
function OverlayCard({ title, img, large, description }) {
  return (
    <div
      className={`
        relative group overflow-hidden rounded-xl
        border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl
        ${large ? "lg:row-span-2 h-[460px]" : "h-[220px]"}
      `}
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* TEXT OVERLAY */}
      <div
        className="
          absolute bottom-0 left-0 right-0 z-10
          bg-black/65 backdrop-blur-md
          text-white p-4
          transition-all duration-[900ms] ease-in-out
          group-hover:translate-y-full
        "
      >
        <h3 className={`${large ? "text-lg" : "text-base"} font-semibold mb-1`}>
          {title}
        </h3>

         <p className="text-sm text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
