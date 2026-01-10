import React from "react";

export default function WhyCtrlZ({ data }) {
  if (!data || !data.cards) return null;

  return (
    <section className="relative w-full md:py-10 py-8 px-4">
      {/* Heading */}

       <div className="w-full text-center mb-10">
    <h2 className="heading-3d no-underline">
        WHY CTRL ZS?
      </h2>

  </div>

     
      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.cards.map((card, index) => (
          <OverlayCard
            key={index}
            title={card.title}
            description={card.description}
            img={card.img}
            large={card.large}
          />
        ))}
      </div>
    </section>
  );
}

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