import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ContactModal from "../components/ContactUs";


export default function FaqServices({ faqsLeft = [], faqsRight = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
     const [openContact, setOpenContact] = useState(false);
  


  const renderFAQ = (item, index) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={index}
        className="border border-white rounded-xl overflow-hidden"
      >
        {/* Question */}
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-center justify-between px-6 py-4 text-left text-white hover:border-purple-400 transition-all"
        >
          <span className="text-sm md:text-base">{item.q}</span>
          <FaChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Answer */}
        {isOpen && (
          <div className="px-6 pb-5 text-left">
            <div className="w-full h-px bg-white mb-4" />
            <p className="text-sm text-white leading-relaxed">
              {item.a}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-[black] via-[#0d0214] to-black py-20 px-6">
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
            {faqsLeft.map((item, i) => renderFAQ(item, i))}
          </div>
          <div className="space-y-4">
            {faqsRight.map((item, i) =>
              renderFAQ(item, i + faqsLeft.length)
            )}
          </div>
        </div>

        {/* Buttons */}
       <div className="flex justify-center">
  <button
  onClick={() => {setOpenContact(true)}}
    className="
      border border-white
      bg-purple-500
      hover:bg-white/90
      hover:text-black
      text-white
      font-semibold
      px-24
      py-4
      rounded-xl
      transition-all
      
    "
  >
    Book a Free Consultation
  </button>
</div>

      </div>

       <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </section>
  );
}
