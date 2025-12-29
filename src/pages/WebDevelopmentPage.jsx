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
import WhatWeOfferComman from "../components/WhatWeOfferComman";

import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";

import { processData } from "../data/OurProcessData";


export default function WebDevelopmentPage() {
  const cards = [sample1, sample2, sample3, sample1, sample2, sample3];

  const webSlides = [
    {
      image: sample1,
      title: "Custom Coded Website Design & Development",
      description:
        "Build a website that’s as unique as your brand. We create custom-coded, scalable websites using Webflow, React, Next.js, and WordPress - engineered for performance, flexibility, and growth. Every line of code is optimized for SEO, speed, and long-term stability.",
    },
    {
      image: sample2,
      title: "CMS Website Development",
      description:
      "Manage content effortlessly with a powerful CMS. Whether it’s Webflow CMS or WordPress, we develop intuitive backends that allow your team to publish, edit, and update content without touching code - built for both editors and search engines.",
    },
    {
      image: sample3,
      title: "E-Commerce Development",
      description:
      "Turn browsers into buyers. We build conversion-driven online stores using Shopify, WooCommerce, or Webflow E-Commerce, complete with secure payment gateways, inventory management, and real-time analytics.",
    },
    {
      image: sample1,
      title: "Website Performance Optimization",
      description:
      "Speed, Core Web Vitals, and mobile responsiveness define your rankings. We optimize load times, server response, and site architecture - ensuring your website performs flawlessly on Google’s PageSpeed, Lighthouse, and mobile-first indexing.",
    },
    {
      image: sample1,
      title: "Website Maintenance & Support",
      description:
      "Stay online, secure, and stress-free. Our maintenance plans include backups, uptime monitoring, security updates, and content management - so your website runs smoothly while you focus on your business.",
    },
    {
      image: sample1,
      title: "Multi-Platform & API Integration",
      description:
      "Connect everything. From CRM (HubSpot, Salesforce) to chatbots, analytics, and booking systems, we integrate third-party tools that automate workflows and create a seamless digital ecosystem.",
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
        <section className="webdev-hero bg-black -z-20">
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
          {/* CTA BUTTON */}
          <button className="webdev-btn">Start Your Project</button>

          <div className="bg-black "></div>

          <FloatingText lines={1} />
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

      <div className="w-full bg-white py-8">
        <div
          className="max-w-7xl mx-auto px-6
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
    gap-y-14 gap-x-16"
        >
          {/* 1 — Happy Clients */}
          <div className="relative text-center flex flex-col items-center">
            <img
              src={m1}
              alt="Happy Clients"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
            />

            <h3 className="mt-5 text-3xl sm:text-4xl font-bold text-purple-900">
              24+
            </h3>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-purple-900">
              Happy Clients
            </p>

            <p className="mt-4 text-sm sm:text-base text-purple-900 max-w-xs">
              From brand websites to full-scale digital ecosystems built in 2025
              alone
            </p>

            {/* Divider */}
            <span
              className="hidden lg:block absolute top-1/2 -right-8
        h-38 w-[2px] bg-[#310071]/60 -translate-y-1/2"
            ></span>

            <span
              className="block sm:hidden mt-14
        h-[2px] w-28 bg-[#310071]/40"
            ></span>
          </div>

          {/* 2 — Client Satisfaction */}
          <div className="relative text-center flex flex-col items-center">
            <img
              src={m2}
              alt="Client Satisfaction"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
            />

            <h3 className="mt-5 text-3xl sm:text-4xl font-bold text-purple-900">
              98%
            </h3>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-purple-900">
              Client Satisfaction
            </p>

            <p className="mt-4 text-sm sm:text-base text-purple-900 max-w-xs">
              Clients appreciate our transparent process, timely delivery, and
              quality output
            </p>

            {/* Divider */}
            <span
              className="hidden lg:block absolute top-1/2 -right-8
        h-38 w-[2px] bg-[#310071]/60 -translate-y-1/2"
            ></span>

            <span
              className="block sm:hidden mt-14
        h-[2px] w-28 bg-[#310071]/40"
            ></span>
          </div>

          {/* 3 — Load Time */}
          <div className="relative text-center flex flex-col items-center">
            <img
              src={m3}
              alt="Performance"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
            />

            <h3 className="mt-5 text-3xl sm:text-4xl font-bold text-purple-900">
              &lt;3s
            </h3>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-purple-900">
              Average Load Time
            </p>

            <p className="mt-4 text-sm sm:text-base text-purple-900 max-w-xs">
              Every CtrlZ’s website is optimized for performance and SEO
              readiness
            </p>

            {/* Divider */}
            <span
              className="hidden lg:block absolute top-1/2 -right-8
        h-38 w-[2px] bg-[#310071]/60 -translate-y-1/2"
            ></span>

            <span
              className="block sm:hidden mt-14
        h-[2px] w-28 bg-[#310071]/40"
            ></span>
          </div>

          {/* 4 — Support */}
          <div className="text-center flex flex-col items-center">
            <img
              src={m4}
              alt="24/7 Support"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
            />

            <h3 className="mt-5 text-3xl sm:text-4xl font-bold text-purple-900">
              24/7
            </h3>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-purple-900">
              Support Available
            </p>

            <p className="mt-4 text-sm sm:text-base text-purple-900 max-w-xs">
              We stay connected, from strategy to launch and beyond
            </p>
          </div>
        </div>
      </div>

      <TrustedBy />

      <WhatWeOffer slides={webSlides} slidesPerView={3} delay={2200} />

      {/* <WhatWeOfferComman/> */}

      <OurProcess processData={processData.webDevelopment} />

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
