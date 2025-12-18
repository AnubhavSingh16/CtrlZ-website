import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqsLeft = [
  "How long does it take to develop a website?",
  "Do you provide hosting and website maintenance?",
  "Will my website be mobile-friendly?",
  "Do you offer SEO and marketing services?",
  "What platforms do you use for web development?",
];

const faqsRight = [
  "Who owns the website after it’s built?",
  "Can you integrate third-party tools?",
  "What makes Ctrl Zs different?",
  "Why Collaboration That Builds Trust?",
];

export default function FaqServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const renderFAQ = (question, index) => {
    const isOpen = openIndex === index;

    return (
      <button
        key={index}
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between border border-white rounded-xl px-6 py-4 text-left text-white hover:border-purple-400 transition-all"
      >
        <span className="text-sm md:text-base">{question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    );
  };

  return (
    <section className="w-full bg-gradient-to-br  from-black to-[#2b1247]  py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Pill */}
        <div className="inline-flex items-center justify-center mb-6">
          <span className="px-10 py-2 rounded-full border text-purple-300 border-white text-sm tracking-wide">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
          FREQUENTLY ASKED <br /> QUESTIONS
        </h2>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="space-y-4">
            {faqsLeft.map((q, i) => renderFAQ(q, i))}
          </div>
          <div className="space-y-4">
            {faqsRight.map((q, i) => renderFAQ(q, i + faqsLeft.length))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-purple-500 hover:bg-purple-600 text-white border-white border font-semibold px-15 py-4 rounded-xl transition-all">
            Let’s Build Your Website
          </button>
          <button className="border border-white hover:border-purple-400 text-white font-semibold px-15 py-4 rounded-xl transition-all">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
