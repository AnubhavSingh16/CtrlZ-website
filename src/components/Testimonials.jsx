import React from "react";
import { FaStar, FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import avatar from "../assets/testimonial.jpg";
import testimonialBackg from "../assets/testimonialBackg.svg";

const testimonials = [
  {
    text: "Clear, patient SEO support, cleaner structure and better-quality leads.",
    name: "Amardeep Singh",
    rating: 5,
  },
  {
    text: "They brought clarity to our social media and redesigned our site, the brand feels more modern.",
    name: "Arvinder Singh",
    rating: 5,
  },
  {
    text: "User flow was simplified thoughtfully, the product feels smoother and clearer.",
    name: "Mandeep",
    rating: 5,
  },
  {
    text: "Clear communication and dependable delivery, the site is fast, mobile-friendly, and simple to manage.",
    name: "Chetan Sinha",
    rating: 5,
  },
  {
    text: "Campaigns were structured properly, results became steadier and more efficient.",
    name: "Mr. Sunil Khatri",
    rating: 5,
  },
  {
    text: "Content built around intent, not just words, attracting better-quality leads now.",
    name: "Sahil Tuteja",
    rating: 5,
  },
    {
    text: "Calm, collaborative design process, the final interface truly reflects our brand.",
    name: "Akash Chauhan",
    rating: 5,
  },
  {
    text: "They aligned our content and visuals, everything now feels part of one brand.",
    name: "SK & KD",
    rating: 5,
  },
  
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

   {/* WHITE OPACITY LAYER (between bg & cards) */}
      
      <div className="w-full mx-auto py-16">

        <style>{`
          .marquee {
            width: 100%;
            position: relative;
             overflow-x: hidden;   
             overflow-y: visible; 
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
  background: rgba(0, 0, 0, 0.50); 
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 18px;
  padding: 60px 20px 20px;
  color: white;
  position: relative;
  box-shadow: 0 15px 40px rgba(0,0,0,0.6);
  transition: all 0.3s ease;
}
          .marquee-card:hover {
            box-shadow: 0 0 25px rgba(155,77,255,0.45);
            transform: translateY(-4px);
          }
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

        {/* HEADING */}
        <h2 className="text-center text-6xl font-bold text-white mb-6">
          Testimonials
        </h2>

        <div className="mx-auto mb-14 h-[3px] w-[25%] bg-gradient-to-r from-transparent via-white to-transparent"></div>

        {/* MARQUEES */}
        <div className="marquee py-10">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((item, index) => (
      <div className="marquee-card" key={index}>
        
        {/* Quote icon */}
        <FaQuoteRight className="absolute top-4 right-4 text-purple-300 text-xl" />

        {/* Avatar */}
        <img
          src={avatar}
          alt={item.name}
          className="testimonial-avatar"
        />

        {/* Name + Rating */}
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

        {/* Text */}
        <p className="marquee-text mb-6">
          “{item.text}”
        </p>

        {/* Bottom quote */}
        <FaQuoteLeft className="absolute bottom-4 left-4 text-purple-300 text-xl" />
      </div>
    ))}
          </div>
        </div>

      <div className="marquee py-10">
  <div className="marquee-track reverse">
    {[...testimonials, ...testimonials].map((item, index) => (
      <div className="marquee-card" key={index}>
        
        {/* Quote icon */}
        <FaQuoteRight className="absolute top-4 right-4 text-purple-300 text-xl" />

        {/* Avatar */}
        <img
          src={avatar}
          alt={item.name}
          className="testimonial-avatar"
        />

        {/* Name + Rating */}
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

        {/* Text */}
        <p className="marquee-text mb-6">
          “{item.text}”
        </p>

        {/* Bottom quote */}
        <FaQuoteLeft className="absolute bottom-4 left-4 text-purple-300 text-xl" />
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}
