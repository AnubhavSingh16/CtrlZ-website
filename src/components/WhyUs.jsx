import { useEffect, useState } from "react";
import WhyUs from "../assets/whyUs.png";
import web from "../assets/webdev/web.png";

export default function WhyCtrlZs() {
  const features = [
    {
      title: "Your One-Stop Digital Partner",
      desc: "All your creative and marketing needs handled in one place — web development, UI/UX, video, content, SEO, and paid ads. One team, one vision, one powerful brand.",
      img: WhyUs,
    },
    {
      title: "Beautiful, High-Performance Solutions",
      desc: "Stunning design meets real results. Every project starts with creative clarity and is layered with smart digital marketing — ensuring your brand looks great and grows faster.",
      img: web,
    },
    {
      title: "Global Expertise, Local Connection",
      desc: "Work with a world-class creative team operating across time zones and cultures. We support your brand with insights tailored to any market.",
      img: WhyUs,
    },
    {
      title: "Collaboration That Builds Trust",
      desc: "Clear communication. Transparent pricing. No surprises. We keep you informed and involved at every step.",
      img: web,
    },
    {
      title: "Flexible Partnerships",
      desc: "Startup, SME, or global enterprise — get the right engagement model for your goals. Project-based, ongoing, or custom — your call.",
      img: WhyUs,
    },
    {
      title: "Strategy That Delivers",
      desc: "We turn ideas into action — planning, executing, and optimizing campaigns for maximum ROI. Your growth, guaranteed.",
      img: web,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto rotate every 5s with smooth handoff
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        const next = (activeIndex + 1) % features.length;
        setActiveIndex(next);
        setDisplayIndex(next);
        setIsTransitioning(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleClick = (index) => {
    if (index === activeIndex) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveIndex(index);
      setDisplayIndex(index);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <section className="w-full pb-16 pt-8 text-white">
      {/* TITLE */}
      <div className="text-center mb-8 sm:mb-10 px-4 sm:px-5">
        <h2 className="heading-3d no-underline">
          Why <span className="text-[#b065ff]">Ctrl Zs?</span>
        </h2>

        <p className="sm:mt-4 text-xs sm:text-sm md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed">
          We help startups and SMEs grow faster with creativity that performs
          and marketing that scales globally.
        </p>
      </div>

      {/* TOP DIVIDER */}
      <div className="w-full border-b border-white mb-12" />

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch px-5 md:px-0">
        {/* LEFT LIST */}
        <div className="flex-1 space-y-4 pr-20">
          {features.map((item, index) => {
            const isActive = index === activeIndex && !isTransitioning;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`
                 px-5 py-4 text-left cursor-pointer
                  transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "bg-white/20 border border-white shadow-[0_0_25px_rgba(255,255,255,0.6)]"
                      : "bg-white/10 border-b border-white opacity-90 hover:bg-white/20"
                  }
                `}
              >
                {item.title}
              </div>
            );
          })}
        </div>

        {/* CENTER DIVIDER */}
        <div className="hidden md:flex justify-center">
          <div className="w-px h-full bg-white/60" />
        </div>

        {/* RIGHT CARD */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div
            className=" bg-[#221038] border border-white/50 
      p-6 shadow-xl text-center flex flex-col items-center
      justify-start max-w-sm w-full"
          >
            {/* FIXED CONTENT WRAPPER */}
            <div className="relative w-full flex flex-col items-center">
              {/* IMAGE AREA (FIXED & RESPONSIVE) */}
              <div
                className={`
          relative w-full
          h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px]
          flex items-center justify-center mb-6
          transition-transform duration-700 ease-in-out
          transform-style-preserve-3d
          ${isTransitioning ? "rotate-y-180" : ""}
        `}
                style={{ perspective: "1200px" }}
              >
                {/* GLOW   */}
                <div
                  className="
            absolute
            w-56 h-56 sm:w-64 sm:h-64
            rounded-full
            bg-[#a960ec]
            blur-2xl opacity-60
          "
                />

                {/* IMAGE */}
                <img
                  src={features[displayIndex].img}
                  alt={features[displayIndex].title}
                  className="
            relative z-10
            max-w-[220px] sm:max-w-[260px]
            max-h-[220px] sm:max-h-[260px]
            object-contain
            drop-shadow-xl
            backface-hidden
          "
                />
              </div>

              {/* TEXT AREA (FIXED HEIGHT) */}
              <div className="h-[100px] sm:h-[120px] flex items-start justify-center">
                <p
                  className={`
            text-sm opacity-80 leading-relaxed max-w-xs mx-auto text-center
            transition-opacity duration-500 ease-in-out
            ${isTransitioning ? "opacity-0" : "opacity-100"}
          `}
                >
                  {features[activeIndex].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="w-full border-b border-white mt-12" />
    </section>
  );
}
