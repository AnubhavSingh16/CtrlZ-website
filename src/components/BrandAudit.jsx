import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function BrandAudit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    website: "",
    company: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only numbers for contact
    if (name === "contact" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Required";
    } else if (formData.contact.length !== 10) {
      newErrors.contact = "Enter 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    // API CALL WILL GO HERE LATER
    console.log("Form Data:", formData);

    setShowSuccess(true);
    setFormData({
      name: "",
      email: "",
      contact: "",
      website: "",
      company: "",
    });
  };

  return (
    <section className="w-full bg-gradient-to-bl from-[#2b1246]/80 via-[#1a0d24] to-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
              <span className="text-[#a96bff]">Free 15-Minute</span>
              <br />
              <span className="block text-white">Brand Audit</span>
            </h3>

            <p className="mt-4 text-md text-white max-w-xl mx-auto lg:mx-0">
              Submit your website or idea.
              <br />
              We'll review your brand presence and share
              <br />3 actionable improvements to help you grow faster.
            </p>

            {/* BULLETS */}
            <ul className="mt-6 space-y-3 max-w-md mx-auto lg:mx-0">
              {[
                "Professional brand presence analysis",
                "Actionable improvement recommendations",
                "Growth strategy insights",
                "Free consultation with our experts",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#bfa2ff] mt-1 shrink-0" />
                  <span className="text-white text-sm">{t}</span>
                </li>
              ))}
            </ul>

            {/* STATS */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  98%
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  Satisfaction Rate
                </div>
              </div>

              <div className="hidden sm:block h-10 w-px bg-white" />

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  15min
                </div>
                <div className="text-xs text-gray-300 mt-1">Quick Analysis</div>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="flex justify-center lg:justify-start">
            <form className="w-full max-w-lg bg-white border border-white/10 rounded-2xl p-6 shadow-xl px-15">
              <h4 className="text-center text-[#4E2F76] font-bold text-xl md:text-2xl mb-1">
                Get Started Today
              </h4>

              <p className="text-center text-xs text-[#474747] mb-4">
                Fill out the form below and we'll be in touch shortly.
              </p>

              {/* FORM */}
              <div className="space-y-2">
                {/* Name */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#F1F1F1] border border-black rounded-md px-3 py-2 text-sm mt-1 text-[#656565]"
                    placeholder="Your Full Name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F1F1F1] border border-black rounded-md px-3 py-2 text-sm mt-1 text-[#656565]"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Contact Number */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2 mt-1">
                    <select className="bg-[#F1F1F1] text-[#656565] border border-black rounded-md px-3 py-2 text-sm">
                      <option>+91 IN</option>
                    </select>
                    <input
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      maxLength={10}
                      className="flex-1 bg-[#F1F1F1] text-[#656565] border border-black rounded-md px-3 py-2 text-sm"
                      placeholder="Mobile Number*"
                    />
                  </div>
                  {errors.contact && (
                    <p className="text-xs text-red-500">{errors.contact}</p>
                  )}
                </div>

                {/* Website */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">
                    Website URL
                  </label>
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-[#F1F1F1] border border-black rounded-md px-3 py-2 text-sm mt-1 text-[#474747]"
                    placeholder="www.yourwebsite.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs font-semibold text-[#474747]">
                    Company
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#F1F1F1] border border-black rounded-md px-3 py-2 text-sm mt-1 text-[#656565]"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-6 w-full rounded-md py-3 text-white font-semibold 
                           bg-gradient-to-r from-[#9b66ff] to-[#8a4cf0] 
                           hover:scale-[1.02] transition-transform"
              >
                Get My Free Audit
              </button>
            </form>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          {/* CARD */}
          <div
            className="
        relative max-w-lg w-[90%]
        rounded-3xl overflow-hidden
        animate-[fadeInUp_0.4s_ease-out]
        shadow-2xl
      "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#623592] via-[#1a0d24] to-black"></div>

            <div
              className="
    absolute inset-0
    opacity-[0.18]
    blur-[2px]
    bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.9)_1.4px,transparent_1.6px)]
    bg-[size:20px_20px]
  "
            ></div>
            {/* CONTENT */}
            <div className="relative p-8 sm:p-10 text-center text-white">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-wide text-center">
                Thank you for trusting{" "}
                <span className="text-[#bfa2ff]">Ctrl Zs</span> 🤍
              </h3>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Your free{" "}
                <span className="font-semibold text-white">
                  15-minute brand audit
                </span>{" "}
                is officially in motion.
                <br />
                <br />
                Our team will carefully review your brand presence and share
                <span className="text-white font-medium">
                  {" "}
                  3 clear, actionable improvements
                </span>{" "}
                you can apply immediately to strengthen your brand.
                <br />
                <br />
                You’ll hear from us soon on the email you shared.
              </p>

              {/* CTA */}
              <button
                onClick={() => setShowSuccess(false)}
                className="
            mt-8 inline-flex items-center justify-center
            px-8 py-3 rounded-xl
            bg-gradient-to-r from-[#9b66ff] to-[#8a4cf0]
            text-white font-semibold
            hover:scale-[1.03] active:scale-[0.98]
            transition-transform duration-200
          "
              >
                Got it ✨
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
