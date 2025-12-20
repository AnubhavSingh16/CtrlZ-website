// export default function VideoEditing() {
//   return (
//     <div>VideoEditing</div>
//   )
// }

import React from "react";
import "../styles/pages/uiPage.css";
import VideoEditing2 from "../assets/videoEditing2.mp4";
import { FaUsers, FaStar, FaClock } from "react-icons/fa";
import { BiStopwatch } from "react-icons/bi";
import { useLocation } from "react-router-dom";

import { IoPeople } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import WhatWeOffer from "../components/whatWeOffer";

import "swiper/css";
import "swiper/css/effect-coverflow";

import sample1 from "../assets/webdev/web.png";
import sample2 from "../assets/webdev/web.png";
import sample3 from "../assets/webdev/web.png";
import TrustedBy from "../components/TestimonialServices";
import Pricing from "../components/Pricing";
import GetStarted from "../components/BrandAuditServices";
import FaqServices from "../components/FaqServices";
import OurProcess from "../components/OurProcess";
import WhyCtrlZ from "../components/WhyCtrlz";
import WhyCtrlZsDiff from "../components/whyCtrlzDiff";

import mask1 from "../assets/mask1.png";
import mask2 from "../assets/mask2.png";
import mask3 from "../assets/mask3.png";
import mask4 from "../assets/mask4.png";

const webSlides = [
  {
    image: sample1,
    title: "Custom Coded Website Design & Development",
    description:
      "Build a website that’s as unique as your brand. We create custom-coded, scalable websites using Webflow, React, Next.js, and WordPress — engineered for performance, flexibility, and growth. Every line of code is optimized for SEO, speed, and long-term stability.",
  },
  {
    image: sample2,
    title: "Custom Coded Website Design & Development",
    description:
      "Build a website that’s as unique as your brand. We create custom-coded, scalable websites using Webflow, React, Next.js, and WordPress — engineered for performance, flexibility, and growth. Every line of code is optimized for SEO, speed, and long-term stability.",
  },
  {
    image: sample3,
    title: "Custom Coded Website Design & Development",
    description:
      "Build a website that’s as unique as your brand. We create custom-coded, scalable websites using Webflow, React, Next.js, and WordPress — engineered for performance, flexibility, and growth. Every line of code is optimized for SEO, speed, and long-term stability.",
  },
  {
    image: sample1,
    title: "Custom Coded Website Design & Development",
    description:
      "Build a website that’s as unique as your brand. We create custom-coded, scalable websites using Webflow, React, Next.js, and WordPress — engineered for performance, flexibility, and growth. Every line of code is optimized for SEO, speed, and long-term stability.",
  },
  {
    image: sample1,
    title: "Custom Coded Website Design & Development",
    description:
      "Build a website that’s as unique as your brand. We create custom-coded, scalable websites using Webflow, React, Next.js, and WordPress — engineered for performance, flexibility, and growth. Every line of code is optimized for SEO, speed, and long-term stability.",
  },
  {
    image: sample1,
    title: "Custom Coded Website Design & Development",
    description:
      "Build a website that’s as unique as your brand. We create custom-coded, scalable websites using Webflow, React, Next.js, and WordPress — engineered for performance, flexibility, and growth. Every line of code is optimized for SEO, speed, and long-term stability.",
  },
];

const faqsLeft = [
  {
    q: "How long does editing take?",
    a: `Basic: 3–5 days
 Pro: 2–3 days
 Enterprise: 24–48 hours
 Rush delivery available.
`,
  },
  
  {
    q: "What formats do you accept?",
    a: "MP4, MOV, AVI, RAW footage, all camera formats. Deliverables include MP4 (H.264), 4K/8K exports.",
  },
  {
    q: "Do you provide music?",
    a: "Yes — royalty-free + optional custom compositions.",
  },
   {
    q: "Do you help with script/storyboarding?",
    a: "Yes. Included in Enterprise; available as add-ons.",
  },
  
];

const faqsRight = [
  {
    q: "Can you create videos without footage?",
    a: "Yes — stock, animations, motion graphics, AI-generated visuals.",
  },
  {
    q: "Do you optimize for YouTube/Reels/TikTok?",
    a: "Yes. Includes aspect ratio, pacing, hooks, captions, metadata suggestions.",
  },
  {
    q: "Refund policy?",
    a: "Full refund if you’re unsatisfied after the first draft and revisions don’t fix it.",
  },
 
  // {
  //   q: "Do you work internationally?",
  //   a: "Yes — 100%. We work with clients across the US, UK, Europe, and Asia, offering remote collaboration, virtual reviews, and real-time updates.",
  // },
];

export default function VideoEditing() {
  const location = useLocation();

  const color = location.state?.color || "purple";

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src={VideoEditing2}
          muted
          playsInline
        />

        {/* Dark overlay (for contrast like reference image) */}
        <div className="absolute inset-0 opacity-50 bg-black -z-0"></div>

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          {/* Heading */}
          <h1
            className="text-5xl sm:text-5xl lg:text-7xl font-extrabold text-white
             drop-shadow-[0_0_25px_rgba(168,85,247,0.55)]"
          >
            Video Creation <br />
            <span className="text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.75)]">
              & Editing
            </span>
          </h1>

          {/* Play Button */}
          {/* <button className="mt-10 w-24 h-24 rounded-full bg-purple-600/90 
                       flex items-center justify-center
                       hover:scale-110 transition-transform">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-10 h-10 ml-1"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button> */}

          <button
            className="mt-12 px-18 py-5 bg-white text-[#160032]
             font-bold rounded-xl
             shadow-[0_15px_35px_rgba(168,85,247,0.45)]
             hover:shadow-[0_20px_45px_rgba(168,85,247,0.65)]
             hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>

      <div className="w-full py-12 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="text-center flex flex-col items-center">
              <img className="h-24 mb-2" src={mask1} alt="" />
              <h3 className="text-3xl lg:text-4xl font-bold mt-3 text-white">
                50+
              </h3>
              <p className="text-lg lg:text-2xl font-semibold mt-3 text-white">
                Project Delivered
              </p>
              <p className="text-sm mt-3 text-white max-w-xs">
                From brand websites to full-scale digital ecosystems built in
                2025 alone
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center flex flex-col items-center">
              <img className="h-24 mb-2" src={mask2} alt="" />
              <h3 className="text-3xl lg:text-4xl font-bold mt-3 text-white">
                98%
              </h3>
              <p className="text-lg lg:text-2xl font-semibold mt-3 text-white">
                Client Satisfaction
              </p>
              <p className="text-sm mt-3 text-white max-w-xs">
                Clients appreciate our transparent process, timely delivery, and
                quality output
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center flex flex-col items-center">
              <img className="h-24 mb-2" src={mask3} alt="" />
              <h3 className="text-3xl lg:text-4xl font-bold mt-3 text-white">
                15+
              </h3>
              <p className="text-lg lg:text-2xl font-semibold mt-3 text-white">
                Happy Clients
              </p>
              <p className="text-sm mt-3 text-white max-w-xs">
                Every CtrlZ’s website is optimized for performance and SEO
                readiness
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-center flex flex-col items-center">
              <img className="h-24 mb-2" src={mask4} alt="" />
              <h3 className="text-3xl lg:text-4xl font-bold mt-3 text-white">
                100%
              </h3>
              <p className="text-lg lg:text-2xl font-semibold mt-3 text-white">
                On-Time Delivery
              </p>
              <p className="text-sm mt-3 text-white max-w-xs">
                We stay connected, from strategy to launch and beyond
              </p>
            </div>
          </div>
        </div>
      </div>

      <TrustedBy />

      <WhatWeOffer slides={webSlides} slidesPerView={3} delay={2200} />

      <OurProcess />

      <WhyCtrlZ />

      <Pricing
        plans={[
          {
            title: "Starter",
            price: "₹29,999",
            popular: false,
            features: [
              "Individuals & small businesses",
              "Basic user interviews + personas",
              "Low-fidelity wireframes",
              "Basic UI screens (desktop only)",
              "Short remote testing sessions",
              "Basic component guide",
              "Figma files + specs",
              "1 revision cycle",
              "1–2 weeks",
              "Up to 5 pages",
              "Figma, Miro",
            ],
          },

          {
            title: "Enterprise",
            price: "₹99,999",
            popular: true,
            features: [
              "Established brands & product teams",
              "In-depth research + competitor analysis",
              "High-fidelity, interactive prototypes",
              "Pixel-perfect UI with animations (up to 20 pages)",
              "Full moderated & unmoderated testing",
              "Fully documented comprehensive design system",
              "Full dev handoff + style tokens & Storybook support",
              "Multiple iterations + ongoing support",
              "6–8 weeks",
              "Up to 40 pages",
              "Figma, Miro, Lookback, Hotjar, UsabilityHub",
            ],
          },

          {
            title: "Professional",
            price: "₹49,999",
            popular: false,
            features: [
              "Startups & SMEs",
              "Detailed interviews + journey mapping",
              "Interactive mid-fidelity prototypes",
              "Responsive UI for web & mobile (up to 10 pages)",
              "Standard usability testing",
              "Reusable components & style guide",
              "Complete handoff with developer-ready docs",
              "2 revision cycles + post-launch support",
              "3–5 weeks",
              "Up to 10 pages",
              "Figma, Miro, Lookback, Hotjar",
            ],
          },
        ]}
      />

      <GetStarted />

      <FaqServices faqsLeft={faqsLeft} faqsRight={faqsRight} />
    </>
  );
}
