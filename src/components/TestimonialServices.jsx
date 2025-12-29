import React from "react";
import { FaStar } from "react-icons/fa";
import "../styles/pages/commanComponents.css";

// const testimonials = [
//   {
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "Gautam Kamboj",
//     role: "Astrologer, Youtuber",
//     rating: 5,
//   },
//   {
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "Gautam Kamboj",
//     role: "Astrologer, Youtuber",
//     rating: 5,
//   },
//   {
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "Gautam Kamboj",
//     role: "Astrologer, Youtuber",
//     rating: 5,
//   },
//   {
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "Gautam Kamboj",
//     role: "Astrologer, Youtuber",
//     rating: 5,
//   },
//   {
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "Gautam Kamboj",
//     role: "Astrologer, Youtuber",
//     rating: 5,
//   },
// ];


const testimonials = [
  {
    text: "Clear, patient SEO support, cleaner structure and better-quality leads.",
    name: "Amardeep Singh",
    role: "Co-Founder, M2Hub.pro (SEO)",
    rating: 3,
  },
  {
    text: "They brought clarity to our social media and redesigned our site, the brand feels more modern.",
    name: "Arvinder Singh",
    role : "Founder, Money Bridge (Social Media + Website)",
    rating: 3.5,
  },
  {
    text: "User flow was simplified thoughtfully, the product feels smoother and clearer.",
    name: "Mandeep",
    role : "Founder, MindWaveDAO.com (UI/UX Design)",
    rating: 5,
  },
  {
    text: "Clear communication and dependable delivery, the site is fast, mobile-friendly, and simple to manage.",
    name: "Chetan Sinha",
    role : "Founder, BudgetAccountants.co.uk (Web Development)",
    rating: 4,
  },
  {
    text: "Campaigns were structured properly, results became steadier and more efficient.",
    name: "Mr. Sunil Khatri",
    role : " Founder, Fincana Solutions (Paid Social)",
    rating: 5,
  },
  {
    text: "Content built around intent, not just words, attracting better-quality leads now.",
    name: "Sahil Tuteja",
    role : "Founder, Aspiris LeadFlow (Content)",
    rating: 4,
  },
    {
    text: "Calm, collaborative design process, the final interface truly reflects our brand.",
    name: "Akash Chauhan",
    role : "Akashic Shades (UI/UX)",
    rating: 4,
  },
  {
    text: "They aligned our content and visuals, everything now feels part of one brand.",
    name: "SK & KD",
    role :  "Content + Graphics",
    rating: 4,
  },
  
];

export default function TrustedBy() {
  return (
    <section className="py-24 overflow-hidden">
      <h2 className="text-center text-6xl font-bold text-white mb-8">
        What Our Clients Say
      </h2>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="marquee-card" key={index}>
              {/* STARS */}
              <div className="flex gap-1 text-purple-300">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              {/* TEXT */}
              <p className="marquee-text">
                “{item.text}”
              </p>

              {/* AUTHOR */}
              <div>
                <p className="font-semibold text-white">
                  {item.name}
                </p>
                <p className="text-xs text-white/70">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
