import React from "react";
import "../styles/pages/uiPage.css";
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

import logoUi from "../assets/logoUi.png";

import wp from "../assets/wp.png";
import ig from "../assets/ig.png";
import youtube from "../assets/youtube.png";
import linkedIn from "../assets/linkedIn.png";

import uihero1 from "../assets/uihero1.png";
import uihero2 from "../assets/uihero2.png";
import uihero3 from "../assets/uihero3.png";
import uihero4 from "../assets/uihero4.png";

import uibackg from "../assets/uibackg.png";
import sample1 from "../assets/webdev/web.png";
import sample2 from "../assets/webdev/web.png";
import sample3 from "../assets/webdev/web.png";
import TrustedBy from "../components/TestimonialServices";
import Pricing from "../components/Pricing";
import BrandAudit from "../components/BrandAudit";
import GetStarted from "../components/BrandAuditServices";
import FaqServices from "../components/FaqServices";
import OurProcess from "../components/OurProcess";
import WhyCtrlZ from "../components/WhyCtrlz";
import WhyCtrlZsDiff from "../components/whyCtrlzDiff";
import FloatingText from "../components/FloatingText";

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
    q: "What’s your typical project timeline?",
    a: `Most projects take 6–8 weeks, depending on complexity.

Week 1–2: Research & UX strategy  
Week 3–5: Wireframes, UI design, prototyping  
Week 6: Testing, feedback, and final delivery  

Need it faster? Ask about our express design sprints for startups.`,
  },
  {
    q: "How much does a UI/UX project cost?",
    a: "Costs vary by project size and complexity. Simple websites start at $700–$1,000, while product interfaces may range higher. You’ll always receive a transparent, custom quote.",
  },
  {
    q: "What’s included in your process?",
    a: "We cover everything — from UX strategy and wireframing to UI prototyping, usability testing, and developer-ready handoff.",
  },
  {
    q: "What tools do you use?",
    a: "We primarily design in Figma, use Miro for ideation and workshops, and provide developer-ready handoff with design tokens and detailed specs.",
  },
  {
    q: "How do you measure success?",
    a: "We track conversion rates, engagement time, and usability metrics using tools like Hotjar, FullStory, and Google Analytics.",
  },
];

const faqsRight = [
  {
    q: "Can you redesign my website or app?",
    a: "Absolutely. We begin with a UX audit to identify gaps, then redesign the experience to improve usability, performance, and conversions.",
  },
  {
    q: "Can you handle development too?",
    a: "Yes. Our UI/UX and web development teams collaborate closely to deliver pixel-perfect builds using React, Webflow, or WordPress.",
  },
  {
    q: "Do you also design mobile apps?",
    a: "Yes. We specialize in responsive web and mobile app UI/UX to ensure seamless experiences across all devices.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes — 100%. We work with clients across the US, UK, Europe, and Asia, offering remote collaboration, virtual reviews, and real-time updates.",
  },
];

const iconConnect = [wp, ig, youtube, linkedIn];

export default function Uipage() {
  const location = useLocation();

  const color = location.state?.color || "purple";

  return (
    <>
      <div className="relative  overflow-hidden pt-30">
        {/* Background Image */}
        <img
          src={uibackg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* White overlay */}
        <div className="absolute inset-0 bg-white/80 -z-0"></div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative flex flex-col items-center text-center">
            {/* Floating cards – LEFT */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 space-y-6">
              <div className="floating-card rotate-[16deg]">
                <img src={uihero1} alt="" />
              </div>
              <div className="floating-card rotate-[-8deg] ml-8">
                <img src={uihero2} alt="" />
              </div>
            </div>

            {/* Floating cards – RIGHT */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 space-y-6">
              <div className="floating-card rotate-[-16deg]">
                <img src={uihero3} alt="" />
              </div>
              <div className="floating-card rotate-[16deg] mr-8">
                <img src={uihero4} alt="" />
              </div>
            </div>

            {/* Center Icon */}
            <div className="w-28 h-28 rounded-xl  flex items-center justify-center mb-6">
              {/* <span className="text-3xl font-bold text-purple-600">↟</span> */}
              <img src={logoUi} alt="logo" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-gray-900">
              UI / UX <span className="text-purple-600">DESIGN</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl md:text-2xl sm:text-base text-black">
              UI/UX design services that convert,<br></br> engage, and delight
              users
            </p>

            {/* Trusted */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={sample2}
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              {/* <span className="text-lg text-black">
                Trusted by many industry leaders
              </span> */}
            </div>

            {/* CTA */}
            <button className="mt-8 px-16 py-4 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
              Start Your Project
            </button>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              {iconConnect.map((icon, index) => (
                <div key={index}>
                  <img
                    src={icon}
                    alt="social-icon"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <FloatingText lines={1} />

      <div className="w-full flex flex-col items-center justify-center text-center px-4 pt-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-wide px-14">
          Proven Performance, Measurable Results
        </h2>

        <p className="max-w-2xl text-sm sm:text-base lg:text-2xl text-white ">
          Key numbers that reflect how we build, deliver, and support our
          clients.
        </p>
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

      <WhyCtrlZsDiff />

      {/* <WhyCtrlZ /> */}

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
