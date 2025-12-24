// export default function VideoEditing() {
//   return (
//     <div>VideoEditing</div>
//   )
// }

import React from "react";
import "../styles/pages/uiPage.css";
import editedVideo from "../assets/editedVideo.mp4";
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

import linkd2 from "../assets/linkd2.png";
import ig2 from "../assets/ig2.png";
import youtube from "../assets/youtube.png";
import linkedIn from "../assets/linkedIn.png";

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

export default function AiMarketing() {
  const location = useLocation();

  const color = location.state?.color || "purple";

  return (
    <>
      <div className="w-full min-h-screen bg-black flex items-end justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              AI-POWERED <br />
              <span className="text-[#b58cff]">DIGITAL</span> <br />
              MARKETING
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl text-sm sm:text-base leading-relaxed">
              From AI-driven SEO to predictive ads and full-scale social media
              systems, Ctrl Zs builds marketing engines that rank, convert, and
              scale globally.
            </p>

            <p className="mt-8 font-semibold text-sm text-gray-200">
              Key numbers that reflect how we build, deliver, and support our
              clients.
            </p>

            {/* STATS */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>
                  <b>50+</b> Campaigns Delivered
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>
                  <b>98%</b> Client Satisfaction
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>
                  <b>15+</b> Growth Clients
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>
                  <b>100%</b> On-Time Reporting
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="relative w-full h-[100%] bg-[#a970ff] 
shadow-[0_30px_80px_rgba(168,85,247,0.45)]
flex flex-col items-center justify-center"
          >
            {/* CENTER IMAGE */}
            <div className="relative w-[60%] max-w-[360px]">
              <div className="rounded-2xl p-[3px] bg-white shadow-lg">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={sample1}
                    alt="Digital Marketing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* TOP CENTER TAG */}
              <div
                className="absolute -top-12 left-0 z-30
  bg-white text-[#160032]
  text-xs font-semibold px-4 py-2
  rounded-sm shadow"
              >
                SEO, AEO, GEO & ORM
              </div>

              {/* CONTENT TAG — BOTTOM RIGHT */}
              <div
                className="absolute -bottom-12 right-0 z-30
  bg-white text-[#160032]
  text-sm font-semibold px-6 py-2
  rounded-sm shadow"
              >
                Content Marketing
              </div>

              {/* TOP RIGHT FLOATING ICON BOX */}
              <div
                className="absolute -top-10 -right-5 z-20
                       bg-white rounded-xl px-4 py-3
                       shadow-lg flex flex-col items-center gap-1"
              >
                {/* ICONS */}
                <div className="flex gap-2">
                  <img src={ig2} className="w-8 h-8" alt="LinkedIn" />
                  <img src={ig2} className="w-8 h-8" alt="Instagram" />
                </div>

                {/* TEXT */}
                <div className="text-[10px] font-semibold text-gray-700 leading-tight text-center">
                  Social Media <br /> Marketing
                </div>
              </div>

              {/* BOTTOM LEFT FLOATING ICON BOX */}
              <div
                className="absolute -bottom-6 -left-6 z-20
  bg-white rounded-xl px-4 py-3
  shadow-lg flex flex-col items-center gap-1"
              >
                {/* ICONS */}
                <div className="flex gap-2">
                  <img src={ig2} className="w-8 h-8" alt="Meta Ads" />
                  <img src={ig2} className="w-8 h-8" alt="Google Ads" />
                </div>

                {/* TEXT */}
                <div className="text-[10px] font-semibold text-gray-700 text-center">
                  Meta & Google <br /> Ads
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              className="mt-20 w-[50%] bg-white text-[#160032]
    font-bold py-4 rounded-lg shadow
    hover:scale-[1.03] transition"
            >
              Start Your Project
            </button>
          </div>
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
