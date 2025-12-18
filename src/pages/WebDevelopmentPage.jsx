import React from "react";
import "../styles/pages/webDev.css";
import { FaUsers, FaStar, FaClock } from "react-icons/fa";
import { BiStopwatch } from "react-icons/bi";

import { IoPeople } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import WhatWeOffer from "../components/whatWeOffer";

import "swiper/css";
import "swiper/css/effect-coverflow";

import clients from "../assets/webdev/clients.png";

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

export default function WebDevelopmentPage() {
  const cards = [sample1, sample2, sample3, sample1, sample2, sample3];

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

  return (
    <>
      <div className="webdev-wrapper">
        {/* HERO SECTION */}
        <section className="webdev-hero bg-black -z-20">
          {/* 🔥 DIAGONAL BACKGROUND */}
          <div className="webdev-diagonal-bg"></div>

          <div className="webdev-text mt-20">
            <h1 className="webdev-title">
              WEB <span className="highlight">DEVELOPMENT</span>
            </h1>

            <p className="webdev-subtitle">
              Build future-ready, high-converting websites
              <br />
              that drive business growth.
            </p>
          </div>

          {/* SWIPER SHOWCASE */}
          <div className="webdev-swiper-container">
            <Swiper
              effect={"coverflow"}
              centeredSlides={true}
              grabCursor={true}
              loop={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 400,
                modifier: 5,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="webdev-swiper"
            >
              {cards.map((img, i) => (
                <SwiperSlide key={i} className="swiper-card">
                  <img src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="bg-black "></div>
          {/* CTA BUTTON */}
          <button className="webdev-btn">Start Your Project</button>

          <div className="floating-text-container w-full">
            {/* LINE 1 — Left → Right */}
            <div className="floating-text left-to-right w-full">
              Video Editing • UI/UX Design • SEO • Web Development • Paid Ads •
              Graphic Design •
            </div>
          </div>
          <div className="trusted-by">Trusted By Industry Leaders</div>

          <div>
            <p className="webdev-subtitle text-xl">
              Join successful businesses that chose Ctrl Zs for their
              <br />
              web development
            </p>
          </div>
        </section>
      </div>

      <div className="w-full bg-white border-t border-b border-gray-200 py-10 mb-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-10 px-6">
          {/* 1 — Happy Clients */}
          <div className="text-center flex-1">
            <IoPeople className="text-purple-800 mx-auto" size={92} />
            {/* <img src={clients}></img> */}
            <h3 className="text-4xl font-bold mt-2 text-purple-900">24+</h3>
            <p className="text-2xl font-semibold mt-4 text-purple-900">
              Happy Clients
            </p>
            <p className="text-sm mt-4 text-purple-900">
              From brand websites to full-scale digital ecosystems built in 2025
              alone
            </p>
          </div>

          {/* Divider */}
          <div className="w-[2px] h-48 bg-[#310071]"></div>

          {/* 2 — Client Satisfaction */}
          <div className="text-center flex-1">
            <FaStar className="text-purple-800 mx-auto" size={92} />
            <h3 className="text-4xl font-bold mt-2 text-purple-900">98%</h3>
            <p className="text-2xl font-semibold mt-4 text-purple-900">
              Client Satisfaction
            </p>
            <p className="text-sm mt-4 text-purple-900">
              Clients appreciate our transparent process, timely delivery, and
              quality output
            </p>
          </div>

          {/* Divider */}
          <div className="w-[2px] h-48 bg-[#310071]"></div>

          {/* 3 — Load Time */}
          <div className="text-center flex-1">
            <BiStopwatch className="text-purple-800 mx-auto" size={100} />
            <h3 className="text-4xl font-bold mt-2 text-purple-900">&lt;3s</h3>
            <p className="text-2xl font-semibold mt-4 text-purple-900">
              Average Load Time
            </p>
            <p className="text-sm mt-4 text-purple-900">
              Every CtrlZ’s website is optimized for performance and SEO
              readiness
            </p>
          </div>

          {/* Divider */}
          <div className="w-[2px] h-48 bg-[#310071]"></div>

          {/* 4 — Support */}
          <div className="text-center flex-1">
            <TbClock24 className="text-purple-800 mx-auto" size={92} />
            <h3 className="text-4xl font-bold mt-2 text-purple-900">24/7</h3>
            <p className="text-2xl font-semibold mt-4 text-purple-900">
              Support Available
            </p>
            <p className="text-sm mt-4 text-purple-900">
              We stay connected, from strategy to launch and beyond
            </p>
          </div>
        </div>
      </div>

       <TrustedBy />

      <WhatWeOffer slides={webSlides} slidesPerView={3} delay={2200} />

      <OurProcess/>

      <WhyCtrlZ/>

      <Pricing/>
      
      <GetStarted/>

      <FaqServices/>

      
      
    </>
  );
}
