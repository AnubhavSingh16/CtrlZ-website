import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing({ plans = []}) {
  return (
    <section className="w-full bg-black py-24 px-6 relative overflow-hidden">
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a1f5c] via-black to-black opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          READY TO START?
        </h2>

        <p className="mt-4 text-white max-w-2xl mx-auto text-base md:text-lg">
          Choose the package that fits your needs. All packages include clean
          code, responsive design, and our commitment to excellence
        </p>

        {/* Cards */}
        <div className="mt-25 grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


function PricingCard({ title, price, features, popular }) {
  return (
    <div
      className={`m-4 relative rounded-2xl border-2 border-[#CCA6FF] overflow-visible bg-gradient-to-b from-[#6a1bdc] to-[#1a1a1a]
      ${popular ? "scale-105" : ""}`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 
                        bg-white text-purple-700 text-sm font-semibold 
                        px-5 py-1.5 rounded-full shadow-md z-20">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="py-8 text-center">
        <span className="inline-block px-6 py-2 border border-white rounded-full text-white text-sm font-bold">
          {title}
        </span>

        <h3 className="mt-6 text-4xl font-extrabold text-white">
          {price}
        </h3>
      </div>

      {/* Features */}
      <div className="bg-black/60 px-8 py-8 text-left">
        <ul className="space-y-4 text-gray-200 text-sm">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="mt-8 w-full py-3 rounded-lg bg-[#5600C733] border border-white hover:bg-purple-700 text-white shadow-sm font-semibold transition-none shadow-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
