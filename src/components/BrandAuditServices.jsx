import React from "react";
import { FaCheck } from "react-icons/fa";

export default function GetStarted() {
  return (
    <section className="w-full bg-gradient-to-br from-[black] via-[#0d021b] to-black py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="p-8 md:p-12">
          <h2 className="text-[#6E00FF] text-5xl md:text-4xl font-extrabold">
            Free Download:
          </h2>

          <h3 className="mt-2 text-4xl md:text-4xl font-extrabold text-black leading-tight">
            Ultimate Website Launch <br /> & Performance Checklist
          </h3>

          <p className="mt-4 text-[#424242] text-base">
            Before you go live, make sure your website is built to convert. Get
            CtrlZs’ exclusive 40-point Web Development Checklist. Covering
            everything from performance and SEO to design and security. Trusted
            by founders and creators to launch websites that actually work.
          </p>

          {/* LIST */}
          <ul className="mt-6 space-y-4">
            {[
              "Core Web Vitals & Speed Optimization Framework",
              "Conversion-Focused Design Principles",
              "SEO & Indexing Best Practices",
              "Responsive & Mobile-First Guidelines",
              "Security & Maintenance Essentials",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800">
                <span className="mt-1 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                  <FaCheck className="text-black text-xs" />
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* STATS */}
          {/* <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-5xl font-extrabold text-black">98%</p>
              <p className="text-md text-black ">Satisfaction Rate</p>
            </div>

            <div className="h-12 w-px bg-[#A4A4A4]" />

            <div>
              <p className="text-5xl font-extrabold text-black">15min</p>
              <p className="text-md text-black">Quick Analysis</p>
            </div>
          </div> */}
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-12 bg-white relative">
          {/* subtle circles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#e9e9e9_1px,transparent_1px)] bg-[length:80px_80px] opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-[#4E2F76]">
              Get Started Today
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Fill out the form below and we’ll be in touch shortly.
            </p>

            <form className="mt-6 space-y-5">
              <Input label="Name" placeholder="Your Full Name" />
              <Input label="Email" placeholder="you@example.com" type="email" />
              <Input label="Contact Number" placeholder="+91  Mobile Number*" />
              <Input
                label="Website / Idea Description"
                placeholder="www.yourwebsite.com or Describe your business idea"
              />

              <select
                className="
    w-full 
    rounded-md 
    px-4 
    py-3 
    text-sm 
    text-black 
    bg-gray-100 
    border 
    border-gray-300 
    focus:outline-none 
    focus:ring-2 
    focus:ring-purple-500
  "
              >
                <option>Select your budget range</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
              </select>
              <button
                type="button"
                className="w-full mt-4 bg-[#A66CFF] hover:bg-[#8f56e8] text-white font-semibold py-3 rounded-lg transition-none"
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

/* ================= INPUT ================= */

function Input({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-bold text-black mb-1">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full 
          rounded-md 
          px-4 
          py-3 
          text-sm 
          text-black 
          bg-gray-100 
          border 
          border-gray-300 
          placeholder-gray-500
          focus:outline-none 
          focus:ring-2 
          focus:ring-purple-500
        "
      />
    </div>
  );
}
