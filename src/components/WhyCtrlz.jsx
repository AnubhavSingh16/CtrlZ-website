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
        <OverlayCard title="Result Driven Approach" img={sample1} large />

        {/* SMALL CARDS */}
        <OverlayCard title="Industry Expertise" img={sample1} />
        <OverlayCard title="Future Proof Technology" img={sample1} />
        <OverlayCard title="Transparent Pricing" img={sample1} />
        <OverlayCard title="24/7 Premium Support" img={sample1} />
      </div>
    </section>
  );
}

/* OVERLAY CARD */
function OverlayCard({ title, img, large }) {
  return (
    <div
      className={`
        relative group overflow-hidden rounded-xl
        border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl
        ${large ? "lg:row-span-2 h-[440px]" : "h-[220px]"}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
