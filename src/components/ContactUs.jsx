import {
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTimes,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ContactModal({ open, onClose }) {
  const location = useLocation();

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error for this field while typing
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  useEffect(() => {
    if (!open) {
      setErrors({});
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
    });
  }, [open]);

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const submissionData = {
      ...formData,
      sourcePage: location.pathname,
      submittedAt: new Date().toISOString(),
    };

    console.log("Contact Form Submission:", submissionData);
    alert(
      `Contact Form Submitted ✅\n\n` +
        `Name: ${submissionData.name}\n` +
        `Email: ${submissionData.email}\n` +
        `Phone: ${submissionData.phone}\n` +
        `Service: ${submissionData.service || "Not specified"}\n` +
        `Source Page: ${submissionData.sourcePage}`
    );

    // Reset
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
    });
    setErrors({});

    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    /* BACKDROP */
    <div
      className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* POSITION (matches top:154px but responsive) */}
      <div className="min-h-screen flex items-center justify-center px-4">
        {/* MODAL CONTAINER */}
        <div
          className="
            relative
            w-[880px]
            h-[680px]
            max-w-[95vw]
            max-h-[90vh]
            bg-black/10
            backdrop-blur-[10px]
            border
            border-white
            rounded-[24px]
            shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            text-white
            overflow-hidden
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
    fixed md:absolute
    top-4 right-4
    z-50
    text-xl
    bg-black/40
    backdrop-blur-md
    rounded-full
    w-10 h-10
    flex items-center justify-center
  "
          >
            <FaTimes />
          </button>

          <div className="grid md:grid-cols-2 h-full">
            {/* LEFT PANEL */}
            <div className="relative p-8 py-15 px-12 bg-gradient-to-br from-[#3D288F] to-[#3D288F]/50 overflow-hidden hidden md:block">
              <div className="absolute -bottom-14 -right-14 w-54 h-54 bg-pink-500 rounded-full "></div>
              <div className="absolute bottom-18 right-20 w-26 h-26 bg-purple-400 rounded-full "></div>

              <h2 className="text-4xl font-bold mb-3 leading-tight">
                Contact <br /> Information
              </h2>

              <p className="text-md text-white mb-6 max-w-xs">
                Ready to transform your digital presence? We'd love to hear
                about your project and explore how we can help you achieve your
                goals.
              </p>

              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-3">
                  <FaGlobe /> www.ctrlzs.com
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope /> socials@ctrlzs.com
                </p>
                <p className="flex items-center gap-3">
                  <FaPhone /> +91 8287427933
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-8">
                {[
                  { icon: FaInstagram, label: "Instagram" },
                  { icon: FaLinkedin, label: "Linked In" },
                  { icon: FaFacebook, label: "Facebook" },
                  { icon: FaFacebook, label: "Twitter" },
                ].map(({ icon: Icon, label }, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-3 px-4 py-2 w-1/2 rounded-full bg-[#1E1E1E] hover:bg-black/40 transition text-sm"
                  >
                    <Icon /> {label}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="px-6 py-10 md:px-12 md:py-15 bg-white/5 backdrop-blur-xl overflow-y-auto ">
              {/* MOBILE CONTACT INFO BOX */}
              <div className="mb-4 mt-5 md:hidden">
                <h2 className="text-3xl text-center font-bold mb-4 leading-tight">
                  Contact Information
                </h2>
                <div
                  className="
      bg-[#7b5cff]/20
      border
      border-white
      rounded-2xl
      p-6
      backdrop-blur-md
    "
                >
                  <div className="space-y-3 text-base">
                    <p className="flex items-center gap-3">
                      <FaGlobe /> www.ctrlzs.com
                    </p>
                    <p className="flex items-center gap-3">
                      <FaEnvelope /> socials@ctrlzs.com
                    </p>
                    <p className="flex items-center gap-3">
                      <FaPhone /> +91 8287427933
                    </p>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {[
                  {
                    label: "Name",
                    name: "name",
                    placeholder: "Your Full Name",
                  },
                  {
                    label: "Email",
                    name: "email",
                    placeholder: "yourname@example.com",
                  },
                  {
                    label: "Contact Number",
                    name: "phone",
                    placeholder: "+91 Mobile Number",
                  },
                  {
                    label: "Services Interested In",
                    name: "service",
                    placeholder: "Services",
                  },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="text-lg text-white">
                      {field.label}
                      {["name", "email", "phone"].includes(field.name) && (
                        <span className="text-red-400 ml-1">*</span>
                      )}
                    </label>

                    <input
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      inputMode={field.name === "phone" ? "numeric" : "text"}
                      className={`
          w-full
          mt-1
          px-4
          py-2.5
          rounded-lg
          bg-white/10
          outline-none
          placeholder:text-white/50
          ${
            errors[field.name]
              ? "border-2 border-red-500 focus:ring-red-400"
              : "border border-white focus:ring-[#AB6BFF]"
          }
        `}
                    />

                    {errors[field.name] && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="
      w-full
      mt-6
      py-3
      rounded-lg
      bg-[#AB6BFF]
      font-semibold
      shadow-lg
      hover:scale-[1.02]
      transition
      border-2
      border-white
      text-white
    "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
