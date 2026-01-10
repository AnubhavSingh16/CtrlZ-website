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

import graphicBg from "../assets/graphicBg.png";

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
    title: "Brand Identity Design",
    description:
      "We craft visual identities that resonate with your audience and reflect your brand's core values.",
    },
  {
    image: sample1,
    title: "Marketing Collateral",
    description:
    "High-impact marketing materials designed to communicate clearly and convert effectively across offline and online touchpoints.",
  },
  {
    image: sample1,
    title: "Packaging Design",
    description:
    "Thoughtfully designed packaging that stands out on shelves and communicates your brand story at first glance.",
  },
  {
    image: sample1,
    title: "Social Media Graphics",
    description:
    "Scroll-stopping social content optimized for engagement across all major platforms.",
  },
   {
    image: sample1,
    title: "Digital Marketing Assets ",
    description:
    "Conversion-optimized visuals built specifically for performance-driven digital campaigns",
  },
    {
    image: sample1,
    title: "Infographics & Illustrations",
    description:
    "Complex ideas transformed into engaging, easy-to-understand visual stories your audience will remember.",
  },
];

const faqsLeft = [
  {
    q: "What makes you different from other design agencies?",
    a: `We provide Strategic Design Breakdowns explaining the psychology, conversion logic, and strategic reasoning behind every design. No one else does this.`,
  },
  {
    q: "How do unlimited revisions work?",
    a: `Unlimited means unlimited. Revise as many times as needed until you’re satisfied. No hidden fees.
We optimize for results — not billable hours.`,
  },
  {
    q: "Can I use the service occasionally?",
    a: `Yes. Pause whenever you want.
You only pay for the months you use.`,
  },
  {
    q: "How fast is your turnaround time?",
    a: `Professional plans: 2–3 days
Essential plans: 3–5 days
Rush delivery: 24–48 hours`,
  },
  {
    q: "Do I get all source files?",
    a: `Yes — AI, PSD, Figma, SVG, PNG, PDF, everything.`,
  },
];

const faqsRight = [
  {
    q: "Do you support multiple brands?",
    a: `Yes. Multi-brand plans available.
Our design systems ensure consistency across all entities.`,
  },
  {
    q: "Can you work within existing brand guidelines?",
    a: `Absolutely — and we improve them using psychology and strategic clarity.`,
  },
  {
    q: "Will your designs improve conversions?",
    a: `Yes.
We use behavioral design frameworks, CRO logic, and A/B-tested principles proven to increase conversions by up to 89%.`,
  },
  {
    q: "Which tools do you use?",
    a: `Adobe Creative Suite, Figma, Sketch, and any tool your team requires.`,
  },
 
];

export default function GraphicDesign() {
  const location = useLocation();

  const [openContact, setOpenContact] = useState(false);

  const color = location.state?.color || "purple";

  return (
    <>
      <div className="relative w-full   text-white overflow-hidden py-16">
        {/* TOP CONTENT */}
        <div className="max-w-7xl mx-auto px-6 pt-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            GRAPHIC <span className="text-purple-400">DESIGNING</span>
          </h1>

          <p className="mt-6 text-white/80 text-lg sm:text-xl md:text-xl max-w-4xl mx-auto">
            Strategic Graphic Design Services Engineered to Improve Conversions,
            <br className="hidden md:block" />
            Not Just Aesthetics
          </p>

          {/* <p className="mt-4 font-semibold text-xl">
            Proven Performance, Measurable Results
          </p> */}
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-4 ">
            {/* CENTER IMAGE */}
            <div className="flex justify-center">
              <img
                src={graphicBg}
                alt="Graphic Design Desk"
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* RIGHT SIDE POINTERS */}
          <div className="flex flex-col gap-6">

  <div className="flex items-center gap-3">
    <img
      src={mask1}
      alt="mask icon"
      className="h-7 w-7 object-contain"
    />
    <p>
      <strong className="text-xl font-bold">50+</strong>{" "}
      <span className="text-white">Campaigns Delivered</span>
    </p>
  </div>

  <div className="flex items-center gap-3">
    <img
      src={mask2}
      alt="mask icon"
      className="h-7 w-7 object-contain"
    />
    <p>
      <strong className="text-xl font-bold">98%</strong>{" "}
      <span className="text-white">Client Satisfaction</span>
    </p>
  </div>

  <div className="flex items-center gap-3">
    <img
      src={mask3}
      alt="mask icon"
      className="h-7 w-7 object-contain"
    />
    <p>
      <strong className="text-xl font-bold">15+</strong>{" "}
      <span className="text-white">Growth Clients</span>
    </p>
  </div>

  <div className="flex items-center gap-3">
    <img
      src={mask4}
      alt="mask icon"
      className="h-7 w-7 object-contain"
    />
    <p>
      <strong className="text-xl font-bold">100%</strong>{" "}
      <span className="text-white">On-Time Reporting</span>
    </p>
  </div>

  {/* BUTTON */}
  <button
    onClick={() => setOpenContact(true)}
    className="
      mt-4
      bg-white text-black
      px-18 py-4
      rounded-lg
      font-bold
      w-fit
      hover:scale-105
      transition-all
      shadow-xl mr-10
    
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
        <h2 className="heading-3d no-underline">
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

      <WhatWeOffer data={webSlides}/>


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
      <OurProcess processData={processData.graphic} />
        </div>
      </div>

      <WhyCtrlZ data={whyCtrlzData.graphic} />
      {/* 
      <WhyCtrlZsDiff data={differencesData.ai} /> */}

      <Pricing data={pricingData.graphic} />

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

      <GetStarted data={getStartedData.graphic} />

      <FaqServices faqsLeft={faqsLeft} faqsRight={faqsRight} />

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
}
