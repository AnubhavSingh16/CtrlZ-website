import React, {useState} from "react";
import { FaCheckCircle } from "react-icons/fa";

import ContactModal from "../components/ContactUs";


export default function Pricing({ data }) {
  if (!data) return null;
  
    const [openContact, setOpenContact] = useState(false);

  const { title, subheading, plans } = data;

  return (
    <section className="w-full py-12 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b  via-[#0d0215] to-black opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="heading-3d no-underline">
          {title}
        </h2>

        <p className="mt-4 text-white max-w-2xl mx-auto text-base md:text-lg lg:text-xl">
          {subheading}
        </p>

        {/* Cards */}
        <div className="mt-12 md:mt-22 lg:mt-24 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} setOpenContact={setOpenContact}/>
          ))}
        </div>
      </div>

            <ContactModal open={openContact} onClose={() => setOpenContact(false)} />

    </section>
  );
}

function PricingCard({ title, price, features, popular, setOpenContact }) {
  return (
    <div
      className={`relative rounded-2xl border-2 border-[#CCA6FF] overflow-visible
      bg-gradient-to-b from-[#6a1bdc] to-[#1a1a1a]
      ${popular ? "scale-105" : ""}`}
    >
      {/* Popular badge */}
      {popular && (
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 
                        bg-white text-purple-700 text-sm font-semibold 
                        px-5 py-1.5 rounded-full shadow-md z-20"
        >
          Most Popular
        </div>
      )}

      {/* Header */}
     <div className="py-8 text-center">
  <span className="inline-block px-6 py-2 border border-white rounded-full text-white text-sm font-bold">
    {title}
  </span>

  <h3 className="mt-6 text-white">
    <span className="text-sm font-medium mr-1">
      starts at
    </span>
    <span className="text-4xl font-extrabold">
      {price}
    </span>
  </h3>
</div>

      {/* Features */}
      <div className="bg-black/60 px-8 py-8 text-left">
        <ul className="space-y-4 text-gray-200 text-sm">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button
        onClick={()=> {setOpenContact(true)}}
          className="
    mt-8 w-full py-3 rounded-lg
    bg-[#5600C733] border border-white
    text-white font-semibold

    shadow-[0_0_18px_rgba(255,255,255,0.35)]
    hover:shadow-[0_0_28px_rgba(255,255,255,0.6)]
    hover:bg-purple-700

    transition-all duration-300
  "
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
