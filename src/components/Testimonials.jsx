import React from "react";
import { FaStar, FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import avatar from "../assets/testimonial.jpg";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Gautam Kamboj",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Akash Chauhan",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Gautam Kamboj",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Akash Chauhan",
    rating: 5,
  },
];

export default function TrustedBy() {
  return (
    <section className="py-24 overflow-hidden relative">
      {/* ================= ALL CSS – SAME PAGE ONLY ================= */}
      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-track {
          display: flex;
          gap: 24px;
          animation: marquee-left 30s linear infinite;
        }

        .marquee-track.reverse {
          animation: marquee-right 30s linear infinite;
        }

        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .marquee-card {
          min-width: 360px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          border: 1px solid white;
          border-radius: 18px;
          padding: 60px 20px 20px;
          color: white;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
        }

        .marquee-card:hover {
          box-shadow: 0 0 25px rgba(155,77,255,0.45);
          transform: translateY(-4px);
        }

        /* AVATAR — HALF OUTSIDE TOP */
        .testimonial-avatar {
          position: absolute;
          top: -28px;
          left: 20px;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          border: 2px solid white;
          object-fit: cover;
          background: #000;
        }

        .marquee-text {
          font-size: 14px;
          line-height: 1.6;
          opacity: 0.9;
          margin-top: 6px;
        }
      `}</style>

      <h2 className="text-center text-6xl font-bold text-white mb-6">
        Testimonials
      </h2>

      <div className="mx-auto mb-14 h-[3px] w-[25%] bg-gradient-to-r from-transparent via-white to-transparent"></div>


      {/* ===== FIRST MARQUEE (LEFT → RIGHT) ===== */}
      <div className="marquee py-10">
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="marquee-card" key={index}>
              {/* QUOTE ICON */}
              <FaQuoteRight className="absolute top-4 right-4 text-purple-300 text-xl" />

              {/* AVATAR */}
              <img
                src={avatar}
                alt={item.name}
                className="testimonial-avatar"
              />

              {/* NAME + STARS */}
              <div>
                <p className="font-semibold text-white">
                  {item.name}
                </p>

                <div className="flex gap-1 text-purple-300 mt-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>

              {/* TEXT */}
              <p className="marquee-text mb-6">
                “{item.text}”
              </p>
<FaQuoteLeft className="absolute bottom-4 left-4 text-purple-300 text-xl" />

            </div>
          ))}
        </div>
      </div>

      {/* ===== SECOND MARQUEE (RIGHT → LEFT) ===== */}
      <div className="marquee  py-10">
        <div className="marquee-track reverse">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="marquee-card" key={index}>
              <FaQuoteRight className="absolute top-4 right-4 text-purple-300 text-xl" />

              <img
                src={avatar}
                alt={item.name}
                className="testimonial-avatar"
              />

              <div>
                <p className="font-semibold text-white">
                  {item.name}
                </p>

                <div className="flex gap-1 text-purple-300 mt-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>

              <p className="marquee-text mb-6">
                “{item.text}”
              </p>
              <FaQuoteLeft className="absolute bottom-4 left-4 text-purple-300 text-xl" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
