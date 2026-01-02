import React from "react";

export default function AboutUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0710] text-white">
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b1246]/60 via-[#14081f] to-black" />
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] bg-[size:18px_18px]" />

      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center text-center px-5">
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80">
              Digital Growth Agency
            </span>

            <h1 className="mt-8 text-[clamp(36px,6vw,64px)] font-extrabold tracking-tight">
              We're Building the Future of{" "}
              <span className="text-[#bfa2ff]">Digital Marketing</span>
            </h1>

            <p className="mt-6 text-white/75 text-base sm:text-lg">
              We combine creativity, technology, and strategy to help brands thrive
              in the digital age.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="rounded-xl bg-gradient-to-r from-[#a970ff] to-[#d946ef] px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#a970ff55]">
                Start a Conversation →
              </button>
              <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition-all duration-300 hover:border-[#bfa2ff] hover:text-[#bfa2ff]">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* ================= OUR STORY ================= */}
        <section className="min-h-screen flex items-center px-5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#bfa2ff] mb-3">
                Our Story
              </p>

              <h2 className="text-4xl font-extrabold mb-6">
                Built to Fix What's{" "}
                <span className="text-[#bfa2ff]">Broken</span>
              </h2>

              <p className="text-white/75 mb-5">
                Most brands don't fail because they lack effort — they fail because
                their digital presence lacks clarity.
              </p>

              <p className="font-semibold">That's where Ctrl Zs comes in.</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-[#bfa2ff]/50 hover:bg-gradient-to-br hover:from-[#a970ff1a] hover:to-transparent hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-4">
                The name reflects what we stand for.
              </h3>

              <p className="text-white/75">
                <span className="text-[#bfa2ff] font-semibold">Ctrl Z</span> means undo.
                <br />
                <span className="text-[#bfa2ff] font-semibold">Zs</span> stands for Solutions.
              </p>
            </div>
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="min-h-screen flex items-center px-5">
          <div className="max-w-6xl mx-auto w-full text-center">
            <h2 className="text-4xl font-extrabold mb-14">
              What We <span className="text-[#bfa2ff]">Stand For</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all duration-500 hover:border-[#bfa2ff]/40 hover:bg-[#a970ff14] hover:translate-y-[-6px]"
                >
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#bfa2ff] transition">
                    {v.title}
                  </h3>
                  <p className="text-white/75">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className="min-h-screen flex items-center px-5">
          <div className="max-w-7xl mx-auto text-center w-full">
            <h2 className="text-4xl font-extrabold mb-6">
              Everything Under <span className="text-[#bfa2ff]">One Roof</span>
            </h2>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-500 hover:scale-[1.03] hover:border-[#bfa2ff]/50 hover:bg-gradient-to-br hover:from-[#a970ff1a] hover:to-transparent"
                >
                  <h3 className="font-bold mb-2 group-hover:text-[#bfa2ff]">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/75">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW WE WORK ================= */}
        <section className="min-h-screen flex items-center px-5">
          <div className="max-w-7xl mx-auto text-center w-full">
            <h2 className="text-4xl font-extrabold mb-12">
              How We <span className="text-[#bfa2ff]">Work</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
              {PROCESS.map((p) => (
                <div
                  key={p.step}
                  className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-[#bfa2ff]/50 hover:translate-y-[-8px]"
                >
                  <span className="text-3xl font-extrabold text-[#bfa2ff]">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-bold">{p.title}</h3>
                  <p className="text-sm text-white/75 mt-2">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEEDBACK ================= */}
        <section className="min-h-screen flex items-center justify-center px-5">
          <div className="max-w-2xl w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all hover:border-[#bfa2ff]/50">
            <h2 className="text-3xl font-extrabold mb-6 text-center">
              Share <span className="text-[#bfa2ff]">Your Thoughts</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input className="rounded-lg bg-black/40 px-4 py-3 outline-none focus:ring-2 focus:ring-[#bfa2ff]" placeholder="Your name" />
              <input className="rounded-lg bg-black/40 px-4 py-3 outline-none focus:ring-2 focus:ring-[#bfa2ff]" placeholder="your@email.com" />
            </div>

            <textarea rows="4" className="w-full rounded-lg bg-black/40 px-4 py-3 outline-none mb-6 focus:ring-2 focus:ring-[#bfa2ff]" placeholder="Share your thoughts..." />

            <button className="w-full rounded-xl bg-gradient-to-r from-[#a970ff] to-[#d946ef] py-4 font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_#a970ff55]">
              Submit Feedback
            </button>
          </div>
        </section>

      </div>
    </section>
  );
}

/* ================= DATA ================= */

const VALUES = [
  { title: "Innovation First", desc: "We embrace AI and automation." },
  { title: "Results Driven", desc: "No vanity metrics — only growth." },
  { title: "Transparency", desc: "Clear communication always." },
  { title: "Partnership Mindset", desc: "We grow together." },
];

const SERVICES = [
  { title: "Branding & Design", desc: "Visual identities that stand out." },
  { title: "Content Strategy", desc: "Content that converts." },
  { title: "Video Production", desc: "High-impact video content." },
  { title: "Digital Marketing", desc: "Data-driven campaigns." },
  { title: "Web Development", desc: "Fast & scalable websites." },
  { title: "AI Integration", desc: "Automation that scales." },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Understand the problem." },
  { step: "02", title: "Strategy", desc: "Plan the roadmap." },
  { step: "03", title: "Execution", desc: "Build with precision." },
  { step: "04", title: "Optimization", desc: "Improve continuously." },
];
