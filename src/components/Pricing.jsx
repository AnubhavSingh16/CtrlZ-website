import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="w-full bg-black py-24 px-6 relative overflow-hidden">
      
      {/* Gradient background */}
      <div className="absolute inset-0  bg-gradient-to-br from-[#3a1f5c] via-black to-black opacity-90" />

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

          {/* STARTER */}
          <PricingCard
            title="Starter"
            price="₹49,999"
            features={[
              "5-page responsive website",
              "Mobile-first design",
              "Basic SEO optimization",
              "Contact form integration",
              "1 month post-launch support",
              "Google Analytics setup",
              "Social media integration",
              "SSL certificate included",
            ]}
          />

          {/* PROFESSIONAL */}
          <PricingCard
            title="Professional"
            price="₹99,999"
            popular
            features={[
              "10-page responsive website",
              "Custom UI/UX design",
              "Advanced SEO optimization",
              "CMS integration (WordPress/Webflow)",
              "1 month post-launch support",
              "3 months premium support",
              "Performance optimization",
              "Email marketing integration",
              "Blog setup",
              "Lead generation forms",
              "Chat widget integration",
            ]}
          />

          {/* ENTERPRISE */}
          <PricingCard
            title="Enterprise"
            price="₹2,49,999"
            enterprise
            features={[
              "Unlimited pages",
              "Custom React/Next.js development",
              "Full e-commerce functionality",
              "Advanced animations & interactions",
              "12 months premium support",
              "Multi-language support",
              "Custom admin dashboard",
              "Priority support & SLA",
              "Dedicated project manager",
              "White-glove onboarding",
              "Training sessions included",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

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
        <button className="mt-8 w-full py-3 rounded-lg bg-[#5600C733] border border-white hover:bg-purple-700 text-white shadow-lg font-semibold transition-none  shadow-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
