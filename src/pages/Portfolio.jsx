import React, { useState } from "react";
import { portfolioItems } from "../data/PortfolioData";
import { MdArrowForward } from "react-icons/md";
import Testimonials from "../components/Testimonials";
import { useNavigate } from "react-router-dom";


import FAQ from "../components/Faq";
import BrandAudit from "../components/BrandAudit";


import paidads from "../assets/paidads.png";

const filters = [
  { label: "ALL", value: "all" },
  { label: "WEB DEVELOPMENT", value: "web" },
  { label: "UI/UX DESIGN", value: "uiux" },
  { label: "GRAPHIC DESIGN", value: "graphic" },
  { label: "VIDEO EDITING", value: "video" },
  { label: "AI MARKETING", value: "ai" },
];

export default function Portfolio() {
    const navigate = useNavigate();

  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.categories.includes(active));

  return (
    <>
       <section className="portfolio-backg min-h-screen  px-6 py-20 text-white ">
      {/* TITLE */}
      <h1
        className="
  text-center
  font-bold
  mt-16 mb-10

  text-3xl        /* mobile */
  sm:text-4xl     /* small tablets */
  md:text-5xl     /* tablets / small laptops */
  lg:text-5xl     /* desktop */
  xl:text-6xl     /* large screens */
"
      >
        OUR <span className="text-[#8a5ced]">PORTFOLIO</span>
      </h1>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-white pb-4">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`
              px-5 py-2 text-sm font-semibold uppercase
              transition-all
              ${
                active === f.value
                  ? "bg-[#AB6BFF] text-white"
                  : "text-white/70 hover:text-white"
              }
            `}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="
    group
    relative
    rounded-lg
    bg-white/5
    backdrop-blur-xl
    border border-white
    overflow-hidden
    transition-all duration-500
    hover:-translate-y-2
    hover:border-[#bfa2ff]

    flex flex-col
    h-[420px]
  "
          >
            {/* IMAGE */}
            <div className="h-52 overflow-hidden flex-shrink-0">
              <img
                src={paidads}
                loading="lazy"
                decoding="async"
                alt={item.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>

              <p className="text-md text-white mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* BUTTON FIXED AT BOTTOM */}
              <div className="mt-auto">
                <button
               onClick={() => navigate("/contact-us")}

                  className="
    border border-white
    rounded-sm
    px-10 py-2
    flex items-center justify-center gap-2
    text-white text-sm font-semibold

    transition-all duration-300

    hover:border-purple-300
    hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]
    hover:-translate-y-[1px]
  "
                >
                  Explore <MdArrowForward />
                </button>
              </div>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#bfa2ff]/10 opacity-0 group-hover:opacity-100 blur-2xl transition -z-10" />
          </div>
        ))}
      </div>
    </section>

      <Testimonials/>

       <FAQ/>
      
        <BrandAudit/>
    </>
 
  );
}
