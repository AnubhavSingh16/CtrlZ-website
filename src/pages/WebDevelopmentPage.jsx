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
import FloatingText from "../components/FloatingText";

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

  const faqsLeft = [
    {
      q: "How long does it take to develop a website?",
      a: "A standard 5-page business website takes 2–3 weeks. E-commerce or custom-coded projects may take 6–12 weeks, depending on complexity and integrations.",
    },
    {
      q: "Do you provide hosting and website maintenance?",
      a: "Yes. We offer secure hosting with SSL, daily backups, and uptime monitoring, plus maintenance plans for content updates, bug fixes, and technical support.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Absolutely. We use mobile-first design principles to ensure your website looks and performs perfectly on phones, tablets, and desktops.",
    },
    {
      q: "Do you offer SEO and marketing services?",
      a: "Yes. Every site we build includes technical SEO, schema markup, and performance optimization. We also offer full digital marketing services — including SEO, CRO, and AI-driven growth strategies.",
    },
    {
      q: "What platforms do you use for web development?",
      a: "We work with React, Next.js, Webflow, and WordPress, selecting the best technology for your business goals and scalability needs.",
    },
  ];

  const faqsRight = [
    {
      q: "Who owns the website after it’s built?",
      a: "You do — 100%. We provide all design files, source code, and documentation, with no lock-ins.",
    },
    {
      q: "Can you integrate third-party tools?",
      a: "Yes. We specialize in API integrations with CRMs (HubSpot, Salesforce), payment systems (Stripe, Razorpay, PayPal), and marketing tools.",
    },
    {
      q: "What makes Ctrl Zs different?",
      a: "We bridge design, code, and marketing strategy. Our team builds business-driven websites that rank higher, convert faster, and scale globally — backed by transparent pricing and 24/7 support.",
    },
    {
      q: "Why Collaboration That Builds Trust?",
      a: "We believe in clear communication, milestone-based delivery, and long-term partnerships — ensuring transparency, accountability, and measurable business impact.",
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

          <FloatingText lines={1}/>
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

      <OurProcess />

      <WhyCtrlZ />

      <Pricing
        plans={[
          {
            title: "Starter",
            price: "₹49,999",
            popular: false,
            features: [
              "5-page responsive website",
              "Mobile-first design",
              "Basic SEO optimization",
              "Contact form integration",
              "1 month post-launch support",
              "Google Analytics setup",
              "Social media integration",
              "SSL certificate included",
            ],
          },
          {
            title: "Professional",
            price: "₹99,999",
            popular: true,
            features: [
              "10-page responsive website",
              "Custom UI/UX design",
              "Advanced SEO optimization",
              "CMS integration (WordPress/Webflow)",
              "1 month post-launch support",
              "3 months premium support",
              "Performance optimization",
              "Email marketing integration",
              "Blog setup",
              "Lead generation forms",
              "Chat widget integration",
            ],
          },
          {
            title: "Enterprise",
            price: "₹2,49,999",
            popular: false,
            features: [
              "Unlimited pages",
              "Custom React/Next.js development",
              "Full e-commerce functionality",
              "Advanced animations & interactions",
              "12 months premium support",
              "Multi-language support",
              "Custom admin dashboard",
              "Priority support & SLA",
              "Dedicated project manager",
              "White-glove onboarding",
              "Training sessions included",
            ],
          },
        ]}
      />

      <GetStarted />

      <FaqServices faqsLeft={faqsLeft} faqsRight={faqsRight} />
    </>
  );
}
