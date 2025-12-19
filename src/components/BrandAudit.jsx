import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function BrandAudit() {
  return (
    <section className="w-full bg-gradient-to-bl from-[#2b1246]/80 via-[#1a0d24] to-black py-16">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* GRID — CLOSER SPACING */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

          {/* LEFT SIDE */}
          <div className="text-left pr-4">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              <span className="text-[#a96bff]">Free 15-Minute</span>
              <br />
              <span className="block text-white">Brand Audit</span>
            </h3>

            <p className="mt-4 text-sm text-gray-200 max-w-xl">
              Submit your website or idea. We'll review your brand presence and
              share 3 actionable improvements to help you grow faster.
            </p>

            {/* BULLETS */}
            <ul className="mt-6 space-y-3 max-w-md">
              {[
                "Professional brand presence analysis",
                "Actionable improvement recommendations",
                "Growth strategy insights",
                "Free consultation with our experts",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#bfa2ff] mt-1" />
                  <span className="text-gray-200 text-sm">{t}</span>
                </li>
              ))}
            </ul>

            {/* STATS */}
            <div className="mt-8 flex items-center gap-6 max-w-sm">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-white">98%</div>
                <div className="text-xs text-gray-300 mt-1">Satisfaction Rate</div>
              </div>

              <div className="h-10 w-px bg-gray-600/40" />

              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">15min</div>
                <div className="text-xs text-gray-300 mt-1">Quick Analysis</div>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="flex justify-center lg:justify-start">
            <form className="w-full max-w-md bg-white backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">

              <h4 className="text-center text-[#4E2F76] font-bold text-2xl mb-1">
                Get Started Today
              </h4>

              <p className="text-center text-xs text-[#474747] mb-4">
                Fill out the form below and we'll be in touch shortly.
              </p>

              {/* FORM FIELDS WITH LABELS */}
              <div className="space-y-4">

                {/* Name */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">Name</label>
                  <input
                    className="w-full bg-white/10 border border-black rounded-md px-3 py-2 
                               text-sm text-[#474747] placeholder:text-gray-400 mt-1"
                    placeholder="Your Full Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">Email</label>
                  <input
                    className="w-full bg-white/10 border border-black rounded-md px-3 py-2 
                               text-sm text-[#474747] placeholder:text-gray-400 mt-1"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">Contact Number</label>
                  <div className="flex gap-2 mt-1">
                    <select className="bg-white/10 border border-black rounded-md px-3 py-2 
                                        text-sm text-[#474747]">
                      <option>+91 IN</option>
                    </select>
                    <input
                      className="flex-1 bg-white/10 border border-black rounded-md px-3 py-2 
                                 text-sm text-[#474747] placeholder:text-gray-400"
                      placeholder="Mobile Number*"
                    />
                  </div>
                </div>

                {/* Website or Idea */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">Website / Idea Description</label>
                  <input
                    className="w-full bg-white/10 border border-black rounded-md px-3 py-2 
                               text-sm text-[#474747] placeholder:text-gray-400 mt-1"
                    placeholder="www.yourwebsite.com or Brief idea"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">Budget</label>
                  <select
                    className="w-full bg-white/10 border border-black rounded-md px-3 py-2 
                               text-sm text-[#474747] mt-1"
                  >
                    <option>Select your budget range</option>
                  </select>
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                className="mt-5 w-full rounded-md py-3 text-white font-semibold 
                           bg-gradient-to-r from-[#9b66ff] to-[#8a4cf0] shadow-lg 
                           hover:scale-[1.02] transition-transform"
              >
                Get Our Free Audit
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
