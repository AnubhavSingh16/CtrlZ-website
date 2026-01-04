import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import faq from "../assets/faq.png";

export default function ContactUs() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    if (errors[name]) {
      const copy = { ...errors };
      delete copy[name];
      setErrors(copy);
    }
  };

  const validateForm = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Required";
    if (!formData.email.trim()) e.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = "Invalid email";
    if (!formData.phone.trim()) e.phone = "Required";
    else if (!/^\d{10}$/.test(formData.phone))
      e.phone = "Enter 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log({
      ...formData,
      source: location.pathname,
      submittedAt: new Date().toISOString(),
    });

    alert("Thanks! We’ll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", service: "" });
    setErrors({});
  };

  return (
    <section className="relative min-h-screen bg-[#0b0710] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b1246] via-[#160a24] to-black" />

      {/* MAIN */}
      <div className="relative mt-20 z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* IMAGE SIDE */}
        <div className="relative flex flex-col items-center text-center gap-6">
          {/* Animated blobs */}
          <div className="absolute w-82 h-82 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-70 h-70 bg-pink-500/20 rounded-full blur-3xl animate-[spin_25s_linear_infinite]" />
          <div className="absolute w-62 h-62 bg-indigo-400/20 rounded-full blur-2xl animate-bounce" />

          {/* Image */}
          <div className="relative z-10 rounded-full overflow-hidden shadow-2xl">
            <img
              src={faq}
              alt="Contact Ctrl Zs"
              className="w-[420px] max-w-full object-cover"
            />
          </div>

          {/* CONTACT NOTE */}
          <div className="relative z-10 max-w-md">
            <p className="text-lg font-semibold text-white">
              Let’s build something meaningful together
            </p>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">
              Whether you have a clear plan or just an idea, our team is here to
              guide you with strategy, design, and execution - step by step.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="relative z-10 w-full max-w-lg mt-4">
            <p className="text-sm uppercase tracking-wider text-white/60 mb-3">
              Quick Connect
            </p>

            <div className="flex flex-col items-center gap-3 hover:cursor-pointer">
              {/* SOCIAL LINKS – ONE LINE */}
              <div className="flex flex-wrap justify-center gap-3">
                <a className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm flex items-center gap-2">
                  <FaInstagram /> Instagram
                </a>
                <a className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm flex items-center gap-2">
                  <FaLinkedin /> LinkedIn
                </a>
                <a className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm flex items-center gap-2">
                  <FaFacebook /> Facebook
                </a>
              </div>

              {/* QUICK LINKS – SECOND LINE */}
              <div className="flex flex-wrap justify-center gap-3">
                <a className="px-4 py-2 rounded-full bg-[#AB6BFF]/20 border border-[#AB6BFF]/40 text-sm">
                  About Us
                </a>
                <a className="px-4 py-2 rounded-full bg-[#AB6BFF]/20 border border-[#AB6BFF]/40 text-sm">
                  Blogs
                </a>
                <a className="px-4 py-2 rounded-full bg-[#AB6BFF]/20 border border-[#AB6BFF]/40 text-sm">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/50 rounded-3xl p-8 sm:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <h1 className="text-4xl font-extrabold mb-4">
            Let’s <span className="text-[#bfa2ff]">Connect</span>
          </h1>
          <p className="text-white/80 mb-8 max-w-md">
            Tell us about your idea, product, or problem. We’ll help you craft
            something exceptional.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Your full name"
            />

            <Input
              label="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@example.com"
            />

            <Input
              label="Contact Number"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="10-digit mobile number"
            />

            <div>
              <label className="text-sm font-medium">
                Service Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none"
              >
                <option value="" disabled className="text-black">
                  Select a service
                </option>
                <option className="text-black">Web Development</option>
                <option className="text-black">UI / UX Design</option>
                <option className="text-black">Video Editing</option>
                <option className="text-black">AI Marketing</option>
                <option className="text-black">Custom</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 rounded-xl bg-[#AB6BFF] font-semibold hover:scale-[1.02] transition shadow-lg"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT FOOTER */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <FaEnvelope /> socials@ctrlzs.com
            </span>
            <span className="flex items-center gap-2">
              <FaPhone /> +91 8287427933
            </span>
          </div>

          {/* SOCIALS */}
          {/* <div className="flex gap-4 mt-6">
            {[FaInstagram, FaLinkedin, FaFacebook].map((Icon, i) => (
              <button
                key={i}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                <Icon />
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

/* INPUT */
function Input({ label, required, error, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        {...props}
        className={`
          w-full mt-1 px-4 py-3 rounded-xl
          bg-white/10 outline-none placeholder:text-white/50
          ${
            error
              ? "border-2 border-red-500"
              : "border border-white/20 focus:border-[#AB6BFF]"
          }
        `}
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}
