import React from "react";
import { FaStar } from "react-icons/fa";
import testimonialBackg from "../assets/testimonialBackg.svg";
import testimonialExclam from "../assets/testimonialExclam.png";
import testimonialExclam2 from "../assets/testimonialExclam2.png";

const testimonials = [
  { text: "Clear, patient SEO support, cleaner structure and better-quality leads.", name: "Amardeep Singh", rating: 4 },
  { text: "They brought clarity to our social media and redesigned our site, the brand feels more modern.", name: "Arvinder Singh", rating: 5 },
  { text: "User flow was simplified thoughtfully, the product feels smoother and clearer.", name: "Mandeep", rating: 4 },
  { text: "Clear communication and dependable delivery, the site is fast, mobile-friendly, and simple to manage.", name: "Chetan Sinha", rating: 4 },
  { text: "Campaigns were structured properly, results became steadier and more efficient.", name: "Mr. Sunil Khatri", rating: 4 },
  { text: "Content built around intent, not just words, attracting better-quality leads now.", name: "Sahil Tuteja", rating: 5 },
  { text: "Calm, collaborative design process, the final interface truly reflects our brand.", name: "Akash Chauhan", rating: 4 },
  { text: "They aligned our content and visuals, everything now feels part of one brand.", name: "SK & KD", rating: 5 },
];

export default function TrustedBy() {
  return (
    <section
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${testimonialBackg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full mx-auto py-16">

        {/* ================= STYLES ================= */}
        <style>{`
         .marquee {
  width: 100%;
  overflow: hidden;
  position: relative;

  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 18%,
    black 82%,
    transparent 100%
  );

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 18%,
    black 82%,
    transparent 100%
  );
}


          .marquee-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: marquee-left 30s linear infinite;
          }

          .marquee-track.reverse {
            animation: marquee-right 34s linear infinite;
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
            min-width: 340px;
            padding: 32px 28px;
            background: linear-gradient(
  260deg,
  #05000a 10%,
  #1a0830 25%,
  #3a136f 55%,
  #1a0830 75%,
  #05000a 100%
);

            backdrop-filter: blur(10px);
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,0.25);
            color: white;
            position: relative;

            box-shadow: 0 15px 25px rgba(0,0,0,0.6);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .marquee-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 0 28px rgba(155,77,255,0.45);
            z-index: 5;
          }

          .marquee-text {
            font-size: 14px;
            line-height: 1.6;
            opacity: 0.9;
            margin-top: 6px;
          }

          /* Disable fade on small devices */
          @media (max-width: 768px) {
            .marquee {
              mask-image: none;
              -webkit-mask-image: none;
            }
            .marquee-track {
              animation-duration: 45s;
            }
          }
        `}</style>

        {/* ================= TITLE ================= */}
        <div className="w-full text-center mb-10">
          <h2 className="heading-3d">Testimonials</h2>
        </div>

        {/* ================= FIRST MARQUEE ================= */}
        <div className="marquee py-10">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className="marquee-card" key={index}>
                <img src={testimonialExclam} alt="" className="absolute -top-2 -right-4 w-14 h-14 opacity-80" />

                <p className="font-semibold">{item.name}</p>
                <div className="flex gap-1 text-purple-300 mt-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <p className="marquee-text mt-4">{item.text}</p>

                <img src={testimonialExclam2} alt="" className="absolute -bottom-2 -left-2 w-8 h-8 opacity-80" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECOND MARQUEE ================= */}
        <div className="marquee py-10">
          <div className="marquee-track reverse">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className="marquee-card" key={index}>
                <img src={testimonialExclam} alt="" className="absolute -top-2 -right-4 w-14 h-14 opacity-80" />

                <p className="font-semibold">{item.name}</p>
                <div className="flex gap-1 text-purple-300 mt-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <p className="marquee-text mt-4">{item.text}</p>

                <img src={testimonialExclam2} alt="" className="absolute -bottom-2 -left-2 w-8 h-8 opacity-80" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
