import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faq from "../assets/faq.png"; // <-- replace with your actual image
import quesMark from "../assets/quesMark.png";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      title: "WHY Ctrl Zs",
      text: "We help startups and SMEs grow faster with creativity that performs and marketing that scales globally.",
    },
    { title: "Your One-Stop Digital Partner" },
    { title: "Beautiful, High-Performance Solutions" },
    { title: "Global Expertise, Local Connection" },
    { title: "Collaboration That Builds Trust" },
    { title: "Flexible Partnerships" },
  ];

  return (
    <section className="w-full py-20 pt-10 text-white ">
      {/* TITLE */}
      <h2 className="text-center text-5xl font-extrabold mb-20">
        Frequently <span className="text-purple-300">Asked</span> Questions
      </h2>

      {/* LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* LEFT IMAGE */}
        <div className="flex justify-center items-start mt-5">
          <div className="relative w-fit">
            {/* Purple Glow Behind Everything */}
            <div className="absolute inset-0 rounded-full bg-white opacity-30 blur-2xl z-0"></div>

            {/* Main Image */}
            <img
              src={faq}
              alt="FAQ"
              className="w-96 h-auto rounded-full object-cover shadow-xl relative z-10"
            />

            {/* Question Mark Image Overlay */}
            <img
              src={quesMark}
              alt="Question Icon"
              className="absolute top-0 right-0 w-40 h-auto z-20 
                 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]"
            />
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-lg border border-white rounded-xl overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg"
              >
                <span>{item.title}</span>

                {openIndex === index ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </button>

              {/* CONTENT */}
              {openIndex === index && item.text && (
                <p className="px-6 pb-4 text-sm text-white">{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
