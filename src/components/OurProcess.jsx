import React from "react";
import {
  FaLightbulb,
  FaSearch,
  FaSitemap,
  FaPencilRuler,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";

import "../styles/pages/commanComponents.css";

function ProcessSteps() {
  const steps = [
    "DISCOVER (1 WEEK)",
    "RESEARCH & STRATEGY",
    "WIREFRAMES & FLOWS",
    "DESIGN & PROTOTYPING",
    "USABILITY TESTING & ITERATION",
    "HANDOFF & SUPPORT",
  ];

  return (
    <div className="w-full mt-12 mb-20 px-4">
      <div
  className="
    flex flex-wrap sm:flex-nowrap
    items-stretch
    justify-center
    gap-3 sm:gap-0
    max-w-7xl mx-auto
  "
>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`
              relative flex items-center
              px-4 py-3 pr-10
              text-[11px] sm:text-sm
              font-semibold uppercase tracking-wide
              min-w-[140px] sm:min-w-[160px]
              max-w-[180px] sm:max-w-[220px]
              text-center
              leading-tight
              whitespace-normal
              break-words
              ${
                index % 2 === 0
                  ? "bg-[#a970ff] text-white"
                  : "bg-white text-[#7b3fe4]"
              }
              clip-arrow
            `}
          >
            {/* STEP NUMBER */}
            <span
              className={`
                mr-2 w-6 h-6 shrink-0
                rounded-full
                flex items-center justify-center
                text-xs font-bold
                ${
                  index % 2 === 0
                    ? "bg-white text-[#7b3fe4]"
                    : "bg-[#a970ff] text-white"
                }
              `}
            >
              {index + 1}
            </span>

            <span className="block">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function Process() {
  return (
    <>
    {/* HEADER */}
      <div className="text-center mt-20 mb-16 px-4">
        <h2 className="text-3xl md:text-7xl font-bold text-white mb-4">
          Our Process
        </h2>
        <p className="max-w-3xl mx-auto text-white/80 text-sm md:text-2xl leading-relaxed">
          A proven methodology that transforms your vision into a
          high-performing digital experience
        </p>
      </div>

      <ProcessSteps />
      
    <section className="relative w-full py-20 px-6  overflow-hidden">
     
      {/* BACKGROUND CIRCLES */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-20 w-64 h-64 border border-white/30 rounded-full" />
        <div className="absolute top-40 right-32 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 border border-white/20 rounded-full" />
      </div>

      {/* GRID */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">

        <Card
          icon={<FaLightbulb />}
          title="DISCOVER & STRATEGY"
          text=" We understand your goals, target audience, and competitive landscape to craft a conversion-driven web strategy."
        />

        <Card
          icon={<FaSearch />}
          title="UI/UX WIREFRAMING"
          text="User interviews, persona creation, competitor benchmarking. Output: User personas, journey maps, and prioritized pain points."
          active
        />

        <Card
          icon={<FaSitemap />}
          title="VISUAL DESIGN & MOCKUPS"
          text="Rapid iterations of core user flows and wireframes. Output: Clickable low-fi prototype for validation."
        />

        <Card
          icon={<FaPencilRuler />}
          title="DEVELOPMENT & TESTING"
          text="High-fidelity UI design, animations, accessibility, and responsiveness. Output: Polished Figma prototype ready for handoff."
        />

        <Card
          icon={<FaCheckCircle />}
          title="SEO SETUP & LAUNCH"
          text="Real user testing with data-backed design refinements. Output: Usability report and final design files."
        />

        <Card
          icon={<FaCode />}
          title="ONGOING AMC"
          text="Developer-ready specs, tokens, QA, and support during implementation. Optional: Design system maintenance and feature sprints."
        />
      </div>
    </section>
    </>
    
  );
}

function Card({ icon, title, text, active }) {
  return (
    <div className="relative bg-white/10 backdrop-blur-xl border border-[#BF8EFF] rounded-2xl px-5 pt-20 pb-8 text-center shadow-2xl group">

      {/* ICON */}
      <div
        className={`
          absolute -top-12 left-1/2 -translate-x-1/2
          w-28 h-28 rounded-full
          flex items-center justify-center
          text-4xl 
          transition-all duration-500 ease-out
          
          ${active ? "bg-white text-purple-700" : "bg-[#a970ff] text-white"}

          shadow-[0_0_22px_rgba(169,112,255,0.65)]
          group-hover:shadow-[0_0_45px_rgba(169,112,255,1)]
          group-hover:scale-110

          animate-[float_6s_ease-in-out_infinite]
        `}
      >
        {icon}
      </div>

      {/* CONTENT */}
      <h3 className="text-white font-bold text-lg tracking-wide mb-4 mt-2">
        {title}
      </h3>

      <p className="text-sm text-white/80 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

