import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import uibackg from "../assets/uibackg.png";

export default function WhyCtrlZsDiff({ data }) {
  if (!data || !data.differences) return null;

  return (
    <section className="relative overflow-hidden py-16 sm:pb-20 lg:pb-24">
      {/* Background Image */}
      <img
        src={uibackg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/90 -z-10" />

      {/* Dotted Texture (optional – keeps your previous feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:18px_18px] opacity-60 -z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#5b1db3] mb-4">
          {data.heading || "WHY CTRL ZS?"}
        </h2>

        <h3 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-[#5b1db3] mb-10 sm:mb-14 max-w-3xl mx-auto">
          {data.subHeading || "More about us, what difference we create"}
        </h3>

        {/* Main Comparison Card */}
        <div className="border-8 border-[#3E008E] rounded-xl overflow-hidden shadow-xl backdrop-blur-sm bg-white/70">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-center font-bold">
            <div className="bg-[#FFDDDD] py-3 sm:py-4 text-black text-lg sm:text-xl md:text-2xl lg:text-3xl">
              THE PROBLEM
            </div>
            <div className="bg-[#EDDFFF] py-3 sm:py-4 text-black text-lg sm:text-xl md:text-2xl lg:text-3xl">
              OUR SOLUTION
            </div>
          </div>

          {/* Rows */}
          <div>
            {data.differences.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10"
              >
                {/* Problem */}
                <div className="bg-[#FFDDDD] px-4 py-2 sm:py-4 sm:px-6 flex gap-3">
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-[15px] text-black leading-snug">
                    {item.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-[#EDDFFF] px-4 py-2 sm:py-4 sm:px-6 flex gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-[15px] text-black leading-snug">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
