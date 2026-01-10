// export default function VideoEditing() {
//   return (
//     <div>VideoEditing</div>
//   )
// }

import React, { useState } from "react";
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
import FloatingText from "../components/FloatingText";

import mask1 from "../assets/mask1.png";
import mask2 from "../assets/mask2.png";
import mask3 from "../assets/mask3.png";
import mask4 from "../assets/mask4.png";

import ContactModal from "../components/ContactUs";

import { processData } from "../data/OurProcessData";
import { whyCtrlzData } from "../data/WhyCtrlZsData";
import { differencesData } from "../data/DifferencesData";
import { pricingData } from "../data/PricingData";
import { getStartedData } from "../data/GetStartedData";

import testimonialBackg from "../assets/testimonialBackg.svg";

const webSlides = [
  {
    image: sample1,
    title: "Performance Marketing (Meta + Google Ads)",
    description:
      "We help you scale profitably with data-driven ad strategies. From audience targeting to creative testing and budget optimization, everything is built to reduce CAC and improve ROAS across Meta and Google Ads.",
  },
  {
    image: sample1,
    title: "Social Media Marketing & LinkedIn Presence",
    description:
      "Build visibility and authority for both your brand and founders. We handle strategy, content, design, short-form videos, posting, and analytics to grow a strong, consistent presence across social platforms and LinkedIn.",
  },
  {
    image: sample1,
    title: "Content Marketing & Authority Building",
    description:
      "Grow long-term trust with structured, SEO-driven content. From blogs and landing pages to content repurposing, we help you build topical authority that compounds over time.",
  },
  {
    image: sample1,
    title: "SEO, AEO, GEO & Online Reputation Optimization",
    description:
      "A complete visibility system for search, voice, and local discovery. We optimize technical SEO, content, backlinks, structured data, and regional targeting to improve rankings, credibility, and long-term search performance.",
  },
];

const faqsLeft = [
  {
    q: "What is included in your AI Marketing services?",
    a: `SEO, content creation, paid ads, social media management, analytics, and automation —
everything needed to drive scalable and performance-focused digital growth.`,
  },
  {
    q: "Is AI Marketing suitable for small businesses?",
    a: `Yes. AI reduces operational costs, improves targeting accuracy,
and helps small businesses compete effectively with larger brands.`,
  },
  {
    q: "Do you create content and creatives too?",
    a: `Yes. We handle posts, reels, ad creatives, thumbnails,
captions, hooks, and scripts as part of execution.`,
  },
  {
    q: "Will I have to sign a long-term contract?",
    a: `No. We offer flexible monthly plans with optional retainers —
no long-term lock-ins.`,
  },
];

const faqsRight = [
  {
    q: "What platforms do you manage?",
    a: `Instagram, LinkedIn, YouTube, Facebook,
Google Ads, Meta Ads, and other major platforms.`,
  },
  {
    q: "Do you provide performance reports?",
    a: `Yes. Monthly performance reports, live dashboards,
and bi-weekly calls (depending on the plan).`,
  },
  {
    q: "Can you manage ads and organic content together?",
    a: `Yes. Most clients choose a blended strategy
for better reach, engagement, and conversions.`,
  },
  {
    q: "What if I only want SEO or only social media?",
    a: `We offer standalone SEO and social media packages.
Contact us to customize a plan that fits your needs.`,
  },
];

export default function AiMarketing() {
  const location = useLocation();

  const [openContact, setOpenContact] = useState(false);

  const color = location.state?.color || "purple";

  return (
    <>
      <div className="w-full min-h-screen bg-black flex items-end justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              AI-POWERED <br />
              <span className="text-[#b58cff]">DIGITAL</span> <br />
              MARKETING
            </h1>

            <p className="mt-2 text-gray-100 max-w-xl text-lg  leading-relaxed">
              From AI-driven SEO to predictive ads and full-scale social media
              systems, Ctrl Zs builds marketing engines that rank, convert, and
              scale globally.
            </p>

            <p className="mt-8 font-bold text-xl text-gray-100">
              Key numbers that reflect how we build, deliver, and support our
              clients.
            </p>

            {/* STATS */}
            <div className="mt-6 space-y-3 text-sm">
  <div className="flex items-center gap-3">
    <img
      src={mask1}
      alt=""
      className="w-7 h-7 object-contain"
    />
    <span>
     <b className="text-xl font-bold">50+</b> Campaigns Delivered
    </span>
  </div>

  <div className="flex items-center gap-3">
    <img
      src={mask2}
      alt=""
      className="w-7 h-7 object-contain"
    />
    <span>
      <b className="text-xl font-bold">98%</b> Client Satisfaction
    </span>
  </div>

  <div className="flex items-center gap-3">
    <img
      src={mask3}
      alt=""
      className="w-7 h-7 object-contain"
    />
    <span>
      <b className="text-xl font-bold">15+</b> Growth Clients
    </span>
  </div>

  <div className="flex items-center gap-3">
    <img
      src={mask4}
      alt=""
      className="w-7 h-7 object-contain"
    />
    <span>
     <b className="text-xl font-bold">100%</b> On-Time Reporting
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
              onClick={() => {
                setOpenContact(true);
              }}
              className="mt-20 w-[50%] bg-white text-[#160032]
    font-bold py-4 rounded-lg shadow
    transition-all duration-300 ease-out
    hover:-translate-y-[5px]
  hover:shadow-[0_0_25px_rgba(155,102,255,0.75)]
    "
            >
              Start Your Project
            </button>
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
          <OurProcess processData={processData.ai} />
        </div>
      </div>

      <WhyCtrlZ data={whyCtrlzData.ai} />
      {/* 
      <WhyCtrlZsDiff data={differencesData.ai} /> */}

      <Pricing data={pricingData.ai} />

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

      <GetStarted data={getStartedData.ai} />

      <FaqServices faqsLeft={faqsLeft} faqsRight={faqsRight} />

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
}
