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


/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= DATA ================= */

const VALUES = [
  {
    title: "Innovation First",
    desc: "We embrace AI, automation, and emerging technologies.",
    icon: MdLightbulbOutline,
  },
  {
    title: "Results Driven",
    desc: "No vanity metrics — only measurable business growth.",
    icon: MdBarChart,
  },
  {
    title: "Transparency",
    desc: "Clear communication, honest timelines, no surprises.",
    icon: MdVisibility,
  },
  {
    title: "Partnership Mindset",
    desc: "We grow with our clients, not just for them.",
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
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs">
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
              <button onClick={() => navigate("/contact-us")} className="rounded-xl bg-gradient-to-r from-[#a970ff] to-[#d946ef] px-8 py-4 font-semibold hover:scale-105 transition">
                Start a Conversation →
              </button>
              <button  onClick={() => navigate("/")} className="rounded-xl border border-white/20 px-8 py-4 font-semibold hover:border-[#bfa2ff] hover:text-[#bfa2ff] transition">
                View Our Portfolio
              </button>
            </div>
          </div>
        </motion.section>

        {/* ================= OUR STORY ================= */}
        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* LABEL */}
            <p className="text-xs uppercase tracking-widest text-[#bfa2ff] mb-6">
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
                  <h3 className="text-xl font-bold mb-4">
                    The name itself reflects what we stand for.
                  </h3>

                  <p className="text-white/75 leading-relaxed">
                    <span className="text-[#bfa2ff] font-semibold">Ctrl Z</span>{" "}
                    means undo.
                    <br />
                    <br />
                    <span className="text-[#bfa2ff] font-semibold">
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
            <div className="mt-20 rounded-2xl border border-white/10 bg-black/50 p-14">
              <p className="text-white/70 text-lg leading-relaxed">
                We built Ctrl Zs as a solutions-first digital agency — where
                creativity meets performance, and every decision is backed by
                intent.
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
            <p className="text-xs uppercase tracking-widest text-[#bfa2ff] mb-4">
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
  bg-white/5
  backdrop-blur-xl
  p-10
  text-left

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

                  <p className="text-white/70">{v.desc}</p>

                  <div className="absolute inset-0 rounded-2xl bg-[#bfa2ff]/5 opacity-0 group-hover:opacity-100 blur-xl transition -z-10" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW WE WORK ================= */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs text-[#bfa2ff]">
              Our Process
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              How We <span className="text-[#bfa2ff]">Work</span>
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto mb-20 text-lg">
              A transparent, collaborative approach at every stage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {PROCESS.map((p, i) => (
                <div key={p.step} className="relative">
                  <div className="group rounded-2xl border border-white/60 bg-white/5 backdrop-blur-xl p-8 text-left hover:border-[#bfa2ff]/40 transition hover:animate-bounce">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl font-extrabold text-[#bfa2ff]/30">
                        {p.step}
                      </span>

                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#a970ff]/30 to-[#6a00ff]/20 flex items-center justify-center text-[#bfa2ff]">
                        <p.icon size={22} />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3">{p.title}</h3>

                    <p className="text-white/70 text-sm">{p.desc}</p>
                  </div>

                  {/* ARROW BETWEEN STEPS (DESKTOP ONLY) */}
                  {i < PROCESS.length - 1 && (
                    <MdArrowForward
                      size={22}
                      className="hidden lg:block absolute top-1/2 -right-6 text-[#bfa2ff]/30"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to <span className="text-[#bfa2ff]">Get Started?</span>
          </h2>

          <p className="text-white text-lg max-w-2xl mx-auto mb-12">
            Let’s transform your digital presence and drive real growth.
          </p>

          <button onClick={() => navigate("/contact-us")} className="rounded-xl bg-gradient-to-r from-[#a970ff] to-[#d946ef] px-10 py-4 text-lg font-semibold hover:scale-105 transition shadow-[0_0_40px_rgba(169,112,255,0.35)]">
            Contact Us Today →
          </button>
        </section>
      </div>
    </section>
  );
}
