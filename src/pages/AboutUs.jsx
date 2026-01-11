import React from "react";
import { motion } from "framer-motion";
import {
  MdLightbulbOutline,
  MdBarChart,
  MdVisibility,
  MdGroups,
  MdSearch,
  MdMap,
  MdRocketLaunch,
  MdAutorenew,
  MdArrowForward,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import {
  MdBrush,
  MdArticle,
  MdVideocam,
  MdCampaign,
  MdCode,
  MdSmartToy,
} from "react-icons/md";

import logo from "../assets/logoHome.png";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= DATA ================= */

const VALUES = [
  {
    title: "Innovation First",
    desc: "We actively embrace AI, automation, and emerging technologies to stay ahead of the curve — so your brand never falls behind it.",
    icon: MdLightbulbOutline,
  },
  {
    title: "Results Driven",
    desc: "Every strategy we design is focused on measurable outcomes. No vanity metrics — just real growth, real performance, and real impact on your business.",
    icon: MdBarChart,
  },
  {
    title: "Transparency",
    desc: "Clear communication, honest timelines, and straightforward reporting. No hidden surprises. No unnecessary complexity. Ever.",
    icon: MdVisibility,
  },
  {
    title: "Partnership Mindset",
    desc: "We don't work for brands — we work with them. Your goals become our goals, and your growth is treated like our own.",
    icon: MdGroups,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understand goals, audience, and challenges.",
    icon: MdSearch,
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Craft a roadmap with clear KPIs and milestones.",
    icon: MdMap,
  },
  {
    step: "03",
    title: "Execution",
    desc: "Bring strategy to life with precision and creativity.",
    icon: MdRocketLaunch,
  },
  {
    step: "04",
    title: "Optimization",
    desc: "Iterate, refine, and scale what works.",
    icon: MdAutorenew,
  },
];

const SERVICES = [
  {
    title: "Branding & Design",
    desc: "Visual identities that stand out and connect with your audience.",
    icon: MdBrush,
    link: "/ui-development",
  },
  {
    title: "Content Strategy",
    desc: "Compelling content that drives engagement and conversions.",
    icon: MdArticle,
    link: "/graphic-design",
  },
  {
    title: "Video Production",
    desc: "High-impact video content for all platforms and purposes.",
    icon: MdVideocam,
    link: "/video-editing",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven campaigns that deliver measurable results.",
    icon: MdCampaign,
    link: "/ai-marketing",
  },
  {
    title: "Web Development",
    desc: "Fast, scalable websites built for performance.",
    icon: MdCode,
    link: "/web-development",
  },
  {
    title: "AI Integration",
    desc: "Smart automation systems that scale your operations.",
    icon: MdSmartToy,
    link: "/ai-marketing",
  },
];

/* ================= COMPONENT ================= */

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden  text-white cursor-default">
      {/* ===== GLOBAL PURPLE BACKGROUND ===== */}

      <div className="relative z-10">
        {/* ================= HERO ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="min-h-screen flex items-center justify-center px-6 text-center"
        >
          <div className="max-w-5xl">
            <span className="inline-block rounded-full border font-semibold border-white/80 bg-white/10 px-4 py-2 text-sm">
              Digital Growth Agency
            </span>

            <h1 className="mt-8 text-[clamp(36px,6vw,64px)] font-extrabold">
              We’re Building the Future of{" "}
              <span className="text-[#bfa2ff]">Digital Marketing</span>
            </h1>

            <p className="mt-6 text-white/70 text-lg max-w-3xl mx-auto">
              Creativity, technology, and strategy — aligned for real growth.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact-us")}
                className="rounded-xl bg-gradient-to-r from-[#a970ff] to-[#d946ef] px-8 py-4 font-semibold hover:scale-105 transition"
              >
                Start a Conversation →
              </button>
              <button
                onClick={() => navigate("/")}
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold hover:border-[#bfa2ff] hover:text-[#bfa2ff] transition"
              >
                View Our Portfolio
              </button>
            </div>
          </div>
        </motion.section>

        {/* ================= OUR STORY ================= */}
        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* LABEL */}
            <p className="text-lg ml-2 font-semibold uppercase tracking-widest text-[#d2bffa] mb-6">
              Our Story
            </p>

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-[clamp(36px,5vw,52px)] font-extrabold leading-tight mb-8">
                  Built to Fix What’s{" "}
                  <span className="text-[#bfa2ff]">Broken</span> in <br />
                  Digital Growth
                </h2>

                <div className="space-y-6 text-white/70 text-lg leading-relaxed max-w-xl">
                  <p>
                    Ctrl Zs was born from a simple realization: most brands
                    don’t fail because they lack effort — they fail because
                    their digital presence lacks clarity, consistency, and
                    direction.
                  </p>

                  <p>
                    We saw businesses spending time, money, and energy on
                    marketing that looked good on the surface but didn’t
                    actually perform. Designs without strategy. Content without
                    intent. Campaigns without systems. Everyone was moving fast
                    — but very few were moving right.
                  </p>

                  <p className="text-white font-semibold">
                    That’s where Ctrl Zs comes in.
                  </p>
                </div>
              </div>

              {/* RIGHT GLASS CARD */}
              <div className="relative">
                <div
                  className="
      rounded-2xl
      border border-white
      bg-gradient-to-br from-white/5 to-white/[0.02]
      backdrop-blur-xl
      p-10
      shadow-[0_0_60px_rgba(169,112,255,0.18)]
    "
                >
                  <h3 className="text-xl font-bold mb-2 text-center">
                    The name itself reflects what we stand for.
                  </h3>

                  {/* LOGO */}
                  <div className="my-12 flex justify-center ">
                    <img
                      src={logo}
                      alt="Ctrl Zs Logo"
                      className=" h-32 md:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(169,112,255,0.35)]"
                    />
                  </div>

                  <p className="text-white leading-relaxed text-center">
                    <span className="text-[#bfa2ff] text-xl font-bold">
                      Ctrl Z
                    </span>{" "}
                    means undo.
                    <br />
                    <br />
                    <span className="text-[#bfa2ff]  text-xl font-bold">
                      Zs
                    </span>{" "}
                    stands for Solutions — because fixing a brand isn’t about
                    one reset, it’s about continuous refinement.
                  </p>
                </div>

                {/* SOFT PURPLE GLOW */}
                <div className="absolute -inset-2 rounded-2xl bg-[#bfa2ff]/10 blur-2xl -z-10" />
              </div>
            </div>

            {/* BOTTOM HIGHLIGHT STRIP */}
            <div className="mt-20 rounded-2xl border border-white/10 bg-black/50 p-14 shadow-[0_0_40px_rgba(168,85,247,0.5)]
">
              <p className="text-white/90 text-lg leading-relaxed">
                We built{" "}
                <span className="text-xl text-purple-300 font-bold">
                  Ctrl Zs{" "}
                </span>
                as a solutions-first digital agency — where creativity meets
                performance, and every decision is backed by intent.
              </p>

              <p className="mt-4 text-white font-semibold text-lg">
                Helping brands grow with clarity, not chaos.
              </p>
            </div>
          </div>
        </section>

        {/* ================= OUR VALUES ================= */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-[#ae8bf9] font-semibold mb-4">
              Our Values
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-20">
              What We <span className="text-[#bfa2ff]">Stand For</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className="
  group
  relative
  rounded-2xl
  border border-white/60
 bg-black/50
  backdrop-blur-xl
  p-10
  text-left
shadow-[0_25px_80px_rgba(0,0,0,0.65)]
  transition-all duration-500 ease-out
  hover:-translate-y-3
  hover:shadow-[0_25px_80px_rgba(0,0,0,0.65)]
  hover:border-[#bfa2ff]
"
                >
                  <div className="mb-6 h-12 w-12 rounded-xl bg-gradient-to-br from-[#a970ff]/30 to-[#6a00ff]/20 flex items-center justify-center text-[#bfa2ff]">
                    <v.icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{v.title}</h3>

                  <p className="text-white">{v.desc}</p>

                  <div className="absolute inset-0 rounded-2xl bg-[#bfa2ff]/5 opacity-0 group-hover:opacity-100 blur-xl transition -z-10" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className="py-20 px-6 relative bg-gradient-to-b  via-[#2d0847] to-black">
          <div className="max-w-7xl mx-auto text-center">
            {/* LABEL */}
            <p className="text-sm uppercase tracking-widest text-[#ae8bf9] font-semibold mb-4">
              What We Do
            </p>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Everything Under <span className="text-[#bfa2ff]">One Roof</span>
            </h2>

            {/* SUBTEXT */}
            <p className="text-white/70 max-w-2xl mx-auto mb-16 text-lg">
              Everything you need to build, market, and scale your digital
              presence.
            </p>

            {/* CARDS */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  onClick={() => navigate(s.link)}
                  className="
    group
    relative
    cursor-pointer
    rounded-2xl
    border border-white/60

    bg-white/5
    backdrop-blur-xl

    p-8
    text-left

    shadow-[0_25px_80px_rgba(0,0,0,0.65)]
    transition-all duration-500 ease-out

    hover:-translate-y-3
    hover:border-[#bfa2ff]
    hover:bg-white/90
  "
                >
                  {/* ICON */}
                  <div
                    className="
      mb-6 h-12 w-12 rounded-xl
      bg-gradient-to-br from-[#a970ff]/30 to-[#6a00ff]/20
      flex items-center justify-center
      text-[#bfa2ff]
      transition-all duration-500
      group-hover:bg-[#bfa2ff]/20
      group-hover:text-[#6a00ff]
    "
                  >
                    <s.icon size={26} />
                  </div>

                  {/* CONTENT */}
                  <h3
                    className="
      text-xl font-semibold mb-3
      text-white
      transition-colors duration-500
      group-hover:text-black
    "
                  >
                    {s.title}
                  </h3>

                  <p
                    className="
      leading-relaxed mb-10
      text-white/80
      transition-colors duration-500
      group-hover:text-black/70
    "
                  >
                    {s.desc}
                  </p>

                  {/* HOVER ARROW */}
                  <div
                    className="
      absolute bottom-6 right-6
      flex items-center gap-2
      text-[#6a00ff]
      opacity-0 translate-x-2
      group-hover:opacity-100 group-hover:translate-x-0
      transition-all duration-300
      pointer-events-none
    "
                  >
                    <span className="text-md font-semibold">Explore</span>
                    <MdArrowForward size={25} />
                  </div>

                  {/* SOFT PURPLE GLOW */}
                  <div
                    className="
      absolute inset-0 rounded-2xl
      bg-[#bfa2ff]/20
      opacity-0 group-hover:opacity-100
      blur-2xl
      transition
      -z-10
    "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW WE WORK ================= */}
        <section className="py-16 px-6 bg-gradient-to-b from-[black]  via-[#2f0d49] to-black">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block mb-6 rounded-full border border-white/80 bg-white/5 px-6 py-2 text-sm font-semibold text-[#bfa2ff]">
              Our Process
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              How We <span className="text-[#bfa2ff]">Work</span>
            </h2>

            <p className="text-white max-w-2xl mx-auto mb-20 text-lg">
              A transparent, collaborative approach at every stage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative ">
              {PROCESS.map((p, i) => (
                <div key={p.step} className="relative">
                  <div className="group rounded-2xl border border-white/60 bg-white/5 backdrop-blur-xl p-8 text-left hover:border-[#bfa2ff]/40 transition hover:animate-bounce">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl font-extrabold text-[#bfa2ff]">
                        {p.step}
                      </span>

                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#a970ff]/30 to-[#6a00ff]/20 flex items-center justify-center text-[#bfa2ff]">
                        <p.icon size={24} />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3">{p.title}</h3>

                    <p className="text-white/70 text-sm">{p.desc}</p>
                  </div>

                  {/* ARROW BETWEEN STEPS (DESKTOP ONLY) */}
                  {i < PROCESS.length - 1 && (
                    <MdArrowForward
                      size={24}
                      className="hidden lg:block absolute top-1/2 -right-7 text-[#bfa2ff]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-[black]   to-black group">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to <span className="text-[#bfa2ff]">Get Started?</span>
          </h2>

          <p className="text-white text-lg max-w-2xl mx-auto mb-12">
            Let’s transform your digital presence and drive real growth.
          </p>

          <button
            onClick={() => navigate("/contact-us")}
            className="rounded-xl bg-gradient-to-r from-[#a970ff] to-[#d946ef] px-10 py-4 text-lg font-semibold hover:scale-105 transition shadow-[0_0_40px_rgba(169,112,255,0.35)] group-hover:animate-bounce"
          >
            Contact Us Today →
          </button>
        </section>
      </div>
    </section>
  );
}
