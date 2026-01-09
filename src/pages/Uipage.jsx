import React, { useState } from "react";
import "../styles/pages/uiPage.css";
import { FaUsers, FaStar, FaClock } from "react-icons/fa";
import { BiStopwatch } from "react-icons/bi";
import { useLocation } from "react-router-dom";

import { IoPeople } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import WhatWeOffer from "../components/whatWeOffer";
import ContactModal from "../components/ContactUs";

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

import { processData } from "../data/OurProcessData";
import { differencesData } from "../data/DifferencesData";
import { pricingData } from "../data/PricingData";
import { getStartedData } from "../data/GetStartedData";

import testimonialBackg from "../assets/testimonialBackg.svg";

const webSlides = [
  {
    image: sample1,
    title: "UI Design",
    description:
      "Pixel-perfect interfaces that blend aesthetics with functionality, creating memorable visual experiences.",
  },
  {
    image: sample2,
    title: "UX Research",
    description:
      "Deep user insights through interviews, surveys, and behavioral analysis to inform design decisions.",
  },
  {
    image: sample3,
    title: "Wireframing & Prototyping",
    description:
      "Interactive prototypes that bring ideas to life and validate concepts before development.",
  },
  {
    image: sample1,
    title: "Design Systems",
    description:
      "Scalable design systems that ensure consistency and accelerate product development.",
  },
  {
    image: sample1,
    title: "Usability Testing",
    description:
      "Real user testing to validate designs and optimize for maximum conversion and satisfaction.",
  },
  {
    image: sample1,
    title: "Conversion Optimization",
    description:
      "Data-driven design improvements that directly impact your bottom line and business metrics.",
  },
];

const faqsLeft = [
  {
    q: "What’s your typical project timeline?",
    a: `Most projects take 6–8 weeks, depending on complexity.`
  },
  {
    q: "How much does a UI/UX project cost?",
    a: "Costs vary by project size and complexity. Rest assured, you’ll always receive a transparent, custom quote.",
  },
  {
    q: "What’s included in your process?",
    a: "We cover everything — from UX strategy and wireframing to UI prototyping, testing, and developer-ready handoff.",
  },
  {
    q: "What tools do you use?",
    a: "We design primarily in Figma, use Miro for ideation, and provide developer-ready handoff with tokens and specs.",
  },
  {
    q: "How do you measure success?",
    a: "We track conversion rates, engagement time, and usability metrics via Hotjar, FullStory, and Google Analytics.",

  },
];

const faqsRight = [
  {
    q: "Can you redesign my website or app?",
    a: "Absolutely. We begin with a UX audit, identify gaps, and redesign for better usability and conversions.",
  },
  {
    q: "Can you handle development too?",
    a: "Yes - our UI/UX and web development teams collaborate to ensure pixel-perfect builds in React, Webflow, or WordPress.",
  },
  {
    q: "Do you also design mobile apps?",
    a: "Yes, we specialize in responsive web and mobile app UI/UX for seamless cross-device experiences.",
  },
  {
    q: "Do you work internationally?",
    a: "100%. We offer remote UI/UX design services for clients in the US, UK, Europe, and Asia, with virtual reviews and real-time updates.",
  },
];

const iconConnect = [wp, ig, youtube, linkedIn];

export default function Uipage() {
  const location = useLocation();
  const [openContact, setOpenContact] = useState(false);

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
            <button
              onClick={() => {
                setOpenContact(true);
              }}
              className="mt-8 px-16 py-4 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
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

      <div className="w-full flex flex-col items-center justify-center text-center px-4">
        <FloatingText lines={1} />
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
            </div>
          </div>
        </div>
      </div>

      <TrustedBy />

      <WhatWeOffer data={webSlides} />

      <div className="relative min-h-screen w-full overflow-hidden">
        {/* BLURRED BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 -z-20 scale-100"
          style={{
            backgroundImage: `url(${testimonialBackg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
          }}
        />

        {/* DARK / COLOR OVERLAY (optional but recommended) */}
        {/* <div className="absolute inset-0 bg-black/40 -z-10" /> */}

        {/* CONTENT GOES HERE */}
        <div className="relative z-10">
          <OurProcess processData={processData.UiDevelopment} />
        </div>
      </div>

      <WhyCtrlZsDiff data={differencesData.ui} />

      {/* <WhyCtrlZ /> */}

      <Pricing data={pricingData.ui} />

      <div className="w-full bg-white py-12 px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left text — 70% */}
          <div className="w-full md:w-[70%] text-left">
            <p className="text-xl md:text-3xl font-bold text-gray-900 leading-snug">
              Tell us your requirements and we’ll build a tailored plan just for
              you.
            </p>
          </div>

          {/* Right button — 30% */}
          <div className="w-full md:w-[30%] flex md:justify-end">
            <button
              onClick={() => setOpenContact(true)}
              className="
    relative isolate
    w-full md:w-auto
    px-12 py-4 rounded-full
    bg-purple-700 text-white font-semibold
    overflow-hidden

    transition-all duration-300
    hover:scale-[1.03]

    shadow-[0_0_20px_rgba(168,85,247,0.45)]
  "

              /* glow ring */
            >
              {/* Rotating glow */}
              <span
                className="
      pointer-events-none
      absolute inset-[-2px]
      rounded-full

      bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.9),transparent)]
      animate-[spin_4s_linear_infinite]

      opacity-70
      blur-md
    "
              />

              {/* Button content */}
              <span className="relative z-10">Get in touch</span>
            </button>
          </div>
        </div>
      </div>

      <GetStarted data={getStartedData.ui} />

      <FaqServices faqsLeft={faqsLeft} faqsRight={faqsRight} />

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
}
