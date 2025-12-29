import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

export default function WhyCtrlZsDiff() {
  const differences = [
    {
      problem:
        "Users leave within seconds because your site is confusing, cluttered, or doesn’t immediately show value.",
      solution:
        "We create intuitive navigation and user flows that guide visitors exactly where they need to go, reducing bounce rates by up to 60%."
    },
    {
      problem:
        "Visitors browse your site but rarely take action—sign up, purchase, or contact you.",
      solution:
        "Strategic placement of CTAs, simplified checkout flows, and persuasive visual hierarchy that turns browsers into customers."
    },
    {
      problem:
        "Your mobile users struggle with tiny buttons, unreadable text, and broken layouts on their devices.",
      solution:
        "Responsive designs that work flawlessly across all devices, ensuring every user has a premium experience regardless of screen size."
    },
    {
      problem:
        "Complex user journeys force users to click through endless screens to complete simple tasks.",
      solution:
        "We eliminate unnecessary steps and optimize task flows, reducing completion time and user frustration dramatically."
    },
    {
      problem:
        "Your product looks different across platforms, confusing users and diluting your brand identity.",
      solution:
        "We create comprehensive design systems ensuring consistent, recognizable experiences across every touchpoint."
    },
    {
      problem:
        "Your product excludes users with disabilities, limiting your reach and potentially violating regulations.",
      solution:
        "WCAG-compliant designs that welcome all users, expanding your market reach while meeting global accessibility standards."
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#fafafa] relative overflow-hidden">
      
      {/* Dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-6xl font-extrabold text-[#5b1db3] mb-10 sm:mb-14">
          WHY CTRL ZS?
        </h2>

        {/* Main Comparison Card */}
        <div className="border-8 border-[#3E008E] rounded-xl overflow-hidden shadow-lg">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-center font-bold text-2xl">
            <div className="bg-[#FFDDDD] py-4 text-black">
              ❌ THE PROBLEM
            </div>
            <div className="bg-[#EDDFFF] py-4 text-black">
              ✅ OUR SOLUTION
            </div>
          </div>

          {/* Difference Rows */}
          <div>
            {differences.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10"
              >
                
                {/* Problem */}
                <div className="bg-[#FFDDDD] px-4 py-3 sm:p-8 flex gap-3">
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-[15px] text-black leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-[#EDDFFF] px-4 py-3 sm:p-8 flex gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-[15px] text-black leading-relaxed">
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
