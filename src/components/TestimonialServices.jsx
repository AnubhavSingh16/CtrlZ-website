import React from "react";
import { FaStar } from "react-icons/fa";
import "../styles/pages/commanComponents.css";

const testimonials = [
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Gautam Kamboj",
    role: "Astrologer, Youtuber",
    rating: 5,
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Gautam Kamboj",
    role: "Astrologer, Youtuber",
    rating: 5,
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Gautam Kamboj",
    role: "Astrologer, Youtuber",
    rating: 5,
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Gautam Kamboj",
    role: "Astrologer, Youtuber",
    rating: 5,
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Gautam Kamboj",
    role: "Astrologer, Youtuber",
    rating: 5,
  },
];

export default function TrustedBy() {
  return (
    <section className="py-24 overflow-hidden">
      <h2 className="text-center text-6xl font-bold text-white mb-14">
        What our clients say
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
