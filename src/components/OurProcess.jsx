import React from "react";
import {
  FaLightbulb,
  FaSearch,
  FaSitemap,
  FaPencilRuler,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";

import prog1 from "../assets/prog1.png";
import prog2 from "../assets/prog2.png";
import prog3 from "../assets/prog3.png";
import prog4 from "../assets/prog4.png";
import prog5 from "../assets/prog5.png";
import prog6 from "../assets/prog6.png";

import "../styles/pages/commanComponents.css";

function ProcessSteps({ steps }) {
  return (
    <div className="w-full mt-12 mb-20 px-4">
      <div className="flex flex-wrap sm:flex-nowrap items-stretch justify-center gap-3 sm:gap-0 max-w-7xl mx-auto">
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
              text-center leading-tight
              ${
                index % 2 === 0
                  ? "bg-[#a970ff] text-white"
                  : "bg-white text-[#7b3fe4]"
              }
              clip-arrow
            `}
          >
            <span
              className={`
    mr-1 ml-4 w-6 aspect-square p-1
    rounded-full
    flex items-center justify-center
    text-xs font-bold leading-none
    ${index % 2 === 0 ? "bg-white text-[#7b3fe4]" : "bg-[#a970ff] text-white"}
  `}
            >
              {index + 1}
            </span>

            {/* SAME TITLE */}
            <span>{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Process({ processData }) {
  const { steps } = processData;
  console.log("stepss", steps);

  return (
    <>
      <div className="text-center mt-20 mb-16 px-4">

        
        <h2 className="heading-3d no-underline ">
          OUR PROCESS
        </h2>

        <p className="max-w-3xl mx-auto text-white/80 text-sm md:text-2xl leading-relaxed">
          {processData.subheading}
        </p>
      </div>

      <ProcessSteps steps={steps} />

      <section className="relative w-full py-20 px-6 overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">
          {steps.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

function Card({ img, title, text, active }) {
  return (
    <div className="relative bg-black/40 backdrop-blur-2xl border border-[#BF8EFF] rounded-lg px-5 pt-20 pb-8 text-center shadow-2xl group hover:cursor-pointer">
      {/* IMAGE BADGE */}
      <div
        className={`
          absolute -top-12 left-1/2 -translate-x-1/2
          w-28 h-28 rounded-full
          flex items-center justify-center
          transition-all duration-500 ease-out
          
          ${active ? "bg-white" : "bg-[#a970ff]"}

          shadow-[0_0_22px_rgba(169,112,255,0.65)]
          group-hover:shadow-[0_0_25px_rgba(169,112,255,1)]
          group-hover:scale-104

        `}
      >
        <img src={img} alt={title} className="w-14 h-14 object-contain" />
      </div>

      {/* CONTENT */}
      <h3 className="text-white font-bold text-lg tracking-wide mb-4 mt-2">
        {title}
      </h3>

      <p className="text-sm text-white/80 leading-relaxed">{text}</p>
    </div>
  );
}
