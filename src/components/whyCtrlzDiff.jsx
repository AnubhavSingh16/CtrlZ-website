import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

export default function WhyCtrlZsDiff() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-6xl font-extrabold text-[#5b1db3] mb-10 sm:mb-14">
          WHY CTRL ZS?
        </h2>

        {/* Main Card */}
        <div className="border-8 border-[#3E008E] rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT — Problem */}
            <div className="bg-[#FFDDDD] p-6 sm:p-8 lg:p-10">
              <h3 className="text-3xl text-center font-bold text-black mb-5">
                THE PROBLEM
              </h3>

              <ul className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] text-black">
                <li className="flex gap-3 items-start">
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <span>
                    Users leave within seconds because your site is confusing, cluttered, or doesn’t immediately show value.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <span>
                    Visitors browse your site but rarely take action—sign up, purchase, or contact you.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <span>
                    Your mobile users struggle with tiny buttons, unreadable text, and broken layouts on their devices.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <span>
                    Your product looks different across platforms, confusing users and diluting your brand identity.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <span>
                    Your product excludes users with disabilities, limiting your reach and potentially violating regulations.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT — Solution */}
            <div className="bg-[#EDDFFF] p-6 sm:p-8 lg:p-10">
              <h3 className="text-3xl text-center font-bold text-black mb-5">
                OUR SOLUTION
              </h3>

              <ul className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] text-black">
                <li className="flex gap-3 items-start">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Users leave within seconds because your site is confusing, cluttered, or doesn’t immediately show value.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Users leave within seconds because your site is confusing, cluttered, or doesn’t immediately show value.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Users leave within seconds because your site is confusing, cluttered, or doesn’t immediately show value.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Users leave within seconds because your site is confusing, cluttered, or doesn’t immediately show value.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>
                   Users leave within seconds because your site is confusing, cluttered, or doesn’t immediately show value.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
