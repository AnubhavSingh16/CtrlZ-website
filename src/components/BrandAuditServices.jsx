import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { successModalData } from "../data/SuccessModalData";
import { useLocation } from "react-router-dom";

export default function GetStarted({ data }) {
  const location = useLocation();
  const pathname = location.pathname;

  const routeToModalKey = {
    "/web-development": "web",
    "/video-editing": "video",
    "/ui-development": "ui",
    "/ai-marketing": "ai",
    "/logo-design": "graphic",
  };

  const modalKey =
    routeToModalKey[pathname] && successModalData[routeToModalKey[pathname]]
      ? routeToModalKey[pathname]
      : "custom";

  const modalData = successModalData[modalKey];

  console.log("success", successModalData);
  if (!data) return null;

  const { left, form } = data;

  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  /* ---------- VALIDATION ---------- */
  const validate = () => {
    const e = {};

    // Name (required)
    if (!values.name.trim()) e.name = "Required";

    // Email (optional but validated if entered)
    if (values.email.trim() && !/\S+@\S+\.\S+/.test(values.email)) {
      e.email = "Invalid email";
    }

    // Contact (required + 10 digits)
    if (!values.contact.trim()) {
      e.contact = "Required";
    } else if (!/^\d{10}$/.test(values.contact)) {
      e.contact = "Must be a 10-digit number";
    }

    return e;
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // fake API call
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
      setValues({ name: "", email: "", contact: "", website: "" });
    }, 1500);
  };

  return (
    <>
      <section className="w-full bg-gradient-to-br from-black via-[#0d021b] to-black py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* LEFT CONTENT (UNCHANGED) */}
          <div className="p-6 sm:p-8 md:p-12 text-center lg:text-left">
            <h2 className="text-[#6E00FF] text-3xl sm:text-3xl md:text-5xl font-extrabold">
              {left.headingTop}
            </h2>

            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight">
              {left.headingMain}
            </h3>

            <p className="mt-4 text-md md:text-sm sm:text-base text-[#424242] leading-relaxed">
              {left.description}
            </p>

            <ul className="mt-8 space-y-3 sm:space-y-4">
              {left.checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-800 justify-center sm:justify-start"
                >
                  <span className="mt-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-black text-xs" />
                  </span>
                  <span className="text-sm md:text-sm sm:text-base text-left">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM (UI SAME, LOGIC ADDED) */}
          <div className="p-6 sm:p-8 md:p-12 bg-white relative">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4E2F76] text-center">
                {form.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-[#222222] text-center">
                {form.subtitle}
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4 sm:space-y-5"
              >
                <Input
                  label="Name"
                  required
                  placeholder="Enter your full name"
                  value={values.name}
                  error={errors.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />

                <Input
                  label="Contact Number"
                  required
                  placeholder="10-digit mobile number"
                  value={values.contact}
                  error={errors.contact}
                  onChange={(e) =>
                    setValues({ ...values, contact: e.target.value })
                  }
                />

                <Input
                  label="Email"
                  type="email"
                  value={values.email}
                  placeholder="you@example.com (optional)"
                  error={errors.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />

                <Input
                  label="Website / Idea Description"
                  placeholder="Your website URL or brief idea"
                  value={values.website}
                  onChange={(e) =>
                    setValues({ ...values, website: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-[#A66CFF] hover:bg-[#8f56e8] text-white font-semibold py-3 rounded-lg"
                >
                  {loading ? "Sending..." : form.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <SuccessModal onClose={() => setShowModal(false)} data={modalData} />
      )}
    </>
  );
}

/* ---------- INPUT (UI SAME) ---------- */
function Input({
  label,
  value,
  onChange,
  type = "text",
  error,
  required,
  placeholder,
}) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-bold text-black mb-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full rounded-md px-4 py-2.5 sm:py-3 text-sm
          text-black bg-gray-100 border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-purple-500
        "
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

/* ---------- MODAL ---------- */
function SuccessModal({ onClose, data }) {
  console.log("im inmodalk", data);
  if (!data) return null;

  const { title, description, primaryButton, secondaryButton } = data;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-lg w-full rounded-2xl p-6 text-center shadow-2xl border-4 border-purple-800">
        {/* TITLE */}
        <h2 className="text-2xl font-extrabold text-[#4E2F76]">{title}</h2>

        {/* DESCRIPTION */}
        <p
          className="mt-4 text-sm text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* ACTIONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-5">
          {/* SECONDARY */}
          <button
            onClick={onClose}
            className="
              w-full
              border border-[#A66CFF]
              text-[#A66CFF]
              font-semibold
              py-3
              rounded-lg
              hover:bg-[#A66CFF]/10
              transition
            "
          >
            {secondaryButton.text}
          </button>

          {/* PRIMARY */}
          <button
            onClick={() => {
              onClose();
              window.location.href = primaryButton.redirectTo;
            }}
            className="
              w-full
              bg-[#A66CFF]
              hover:bg-[#8f56e8]
              text-white
              font-semibold
              py-3
              rounded-lg
              transition
            "
          >
            {primaryButton.text}
          </button>
        </div>
      </div>
    </div>
  );
}
