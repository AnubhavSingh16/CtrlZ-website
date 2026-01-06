import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faq from "../assets/faq.png"; // <-- replace with your actual image
import quesMark from "../assets/quesMark.png";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      title: "What services does Ctrl Zs offer?",
      text: "We provide Web Development, UI/UX Design, Graphic Design, Video Editing, and AI-driven Marketing (SEO, organic, performance ads).",
    },
    {
      title: "How do we get started?",
      text: "Book a quick discovery call. We understand your goals and share a clear plan with timelines and pricing",
    },
    {
      title: "How long does a project take?",
      text: "Websites: 2–6 weeks. UI/UX: 1–4 weeks. Graphics & videos: 2–5 days. Marketing: ongoing",
    },
    {
      title: "Do you work with startups and small businesses also?",
      text: "Yes. We also specialize in helping early-stage founders build clarity, presence, and consistency online.",
    },
    {
      title: "What makes Ctrl Zs different?",
      text: "We mix creativity with performance. Everything we design or build is backed by strategy, not just visuals.",
    },
    {
      title: "How does your pricing work?",
      text: "We offer project-based pricing and monthly retainers. Costs depend on your scope and goals with absolutely no hidden fees.",
    },
    {
      title: "Do you offer revisions?",
      text: "Yes. We include revisions to make sure the final output matches your vision.",
    },
    {
      title: "How will I receive project updates?",
      text: "Through regular checkpoints by WhatsApp, email, or weekly calls. Meaning, you’re always in the loop.",
    },
    {
      title: "Can you handle everything for my brand?",
      text: "Yes. From website to social media to creatives, we manage your full digital presence end-to-end.",
    },
  ];

  return (
    <section className="w-full py-20 pt-10 text-white ">
      {/* TITLE */}
      <h2 className="text-center text-5xl font-extrabold mb-20">
        Frequently <span className="text-purple-300">Asked</span> Questions
      </h2>

      {/* LAYOUT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 px-6">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center md:mt-10">
          <div className="relative w-fit">
            {/* Purple Glow */}
            <div className="absolute inset-0 rounded-full bg-white opacity-30 blur-2xl z-0" />

            {/* Main Image */}
            <img
              src={faq}
              alt="FAQ"
              className="
    w-52
    sm:w-64
    md:w-72
    lg:w-88
    xl:w-96
    2xl:w-[420px]
    h-auto
    rounded-full
    object-cover
    shadow-xl
    relative
    z-10
  "
            />

            {/* Question Mark Overlay */}
            <img
              src={quesMark}
              alt="Question Icon"
              className="
    absolute
    top-0
    right-0
    w-16
    sm:w-20
    md:w-24
    lg:w-32
    xl:w-40
    h-auto
    z-20
    drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]
  "
            />
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="w-full md:w-2/3 space-y-4 md:px-18">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-lg border border-white rounded-md overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-base md:text-base text-white"
              >
                <span>{item.title}</span>

                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {/* CONTENT */}
              {openIndex === index && item.text && (
                <div className="px-6 pb-4 text-sm md:text-sm text-white leading-relaxed">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
