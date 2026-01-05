// export default function VideoEditing() {
//   return (
//     <div>VideoEditing</div>
//   )
// }

import React, {useState} from "react";
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

import graphicBg from "../assets/graphicBg.png";

import ContactModal from "../components/ContactUs";

import { processData } from "../data/OurProcessData";
import { whyCtrlzData } from "../data/WhyCtrlZsData";
import { differencesData } from "../data/DifferencesData";
import { pricingData } from "../data/PricingData";
import { getStartedData } from "../data/GetStartedData";

const webSlides = [
  {
    image: sample1,
    title: "Performance Marketing (Meta + Google Ads)",
    description: "Scale smarter, not harder. We use data-driven targeting, creative testing, and continuous optimization to reduce CAC and improve ROAS. \n Includes \n Meta Ads (Facebook & Instagram),Google Search & Display Ads, Budget allocation & optimization, Audience & keyword clustering, Creative testing frameworks, Conversion tracking & performance dashboards",
  },
  {
    image: sample1,
    title: "Social Media Marketing & LinkedIn Presence (Founder + Company)",
    description: "Build authority, visibility, and trust across platforms - not just posts. \n Includes \n Social media strategy for brand & founders, LinkedIn founder personal branding, LinkedIn company page management, Content strategy & monthly calendars, Reels & short-form video editing, Graphic design for posts & creatives, Copywriting, captions & hooks, Scheduling & publishing, Hashtag & trend research, Monthly analytics & insights",
  },
  {
    image: sample1,
    title: "Content Marketing & Authority Building",
    description: "Build trust, visibility, and long-term growth through structured, evergreen content. \n Includes \n Keyword-driven content outlines, Long-form blogs & landing page content, Topical authority & content clustering, Multi-platform content repurposing, SEO-optimized blogs, Content performance tracking",
  },
  {
    image: sample1,
    title: "SEO, AEO, GEO & ORM Optimization",
    description: "A complete search and reputation system built for visibility, credibility, and long-term growth. \nIncludes\n Technical SEO (site health, speed, indexing, crawlability), On-Page SEO (content optimization, headings, internal linking), Off-Page SEO (authority building, backlinks, brand signals), Answer Engine Optimization (AEO) for question-based & conversational searches, Voice & conversational search optimization, Geographic SEO (GEO) for multi-location & multi-country visibility, Keyword research & search intent mapping, Content structure & topical authority planning, Structured data, schema & FAQ implementation, Google Search Console & indexing setup, Region-specific pages & keyword optimization",
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


export default function GraphicDesign() {
  const location = useLocation();

   const [openContact, setOpenContact] = useState(false);
  

  const color = location.state?.color || "purple";

  return (
    <>
     <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0b0710] via-[#1a0b2e] to-[#3b1d5f] text-white overflow-hidden">
      
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          GRAPHIC <span className="text-purple-400">DESIGNING</span>
        </h1>

        <p className="mt-4 text-white/80 max-w-3xl mx-auto">
          Strategic Graphic Design Services Engineered to Improve Conversions,
          <br />
          Not Just Aesthetics
        </p>

        <p className="mt-4 font-semibold">
          Proven Performance, Measurable Results
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 items-center">

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
              <img
                src={graphicBg} // your exact image here
                alt="Graphic Design Desk"
                className="w-full rounded-xl object-cover"
              />
          </div>

          {/* RIGHT SIDE POINTERS */}
          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-purple-400 rounded-full" />
              <p>
                <strong>50+</strong>{" "}
                <span className="text-white/70">
                  Campaigns Delivered
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-purple-400 rounded-full" />
              <p>
                <strong>98%</strong>{" "}
                <span className="text-white/70">
                  Client Satisfaction
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-purple-400 rounded-full" />
              <p>
                <strong>15+</strong>{" "}
                <span className="text-white/70">
                  Growth Clients
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-purple-400 rounded-full" />
              <p>
                <strong>100%</strong>{" "}
                <span className="text-white/70">
                  On-Time Reporting
                </span>
              </p>
            </div>

            {/* BUTTON */}
            <button
              className="
                mt-4
                bg-white text-black
                px-10 py-4
                rounded-xl
                font-semibold
                w-fit
                hover:scale-105
                transition-all
                shadow-xl
              "
            >
              Start Your Project
            </button>

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

      <WhatWeOffer slides={webSlides} slidesPerView={3} delay={2200} />

      <OurProcess processData={processData.ai} />

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
