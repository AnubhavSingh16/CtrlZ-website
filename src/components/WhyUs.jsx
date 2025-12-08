import WhyUs from "../assets/WhyUs.png";

export default function WhyCtrlZs() {
  return (
    <section className="w-full py-16  text-white ">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold">
          Why <span className="text-[#b065ff]">Ctrl Zs?</span>
        </h2>
        <p className="mt-4 text-sm opacity-80 max-w-2xl mx-auto">
          We help startups and SMEs grow faster with creativity that performs
          and marketing that scales globally.
        </p>
      </div>

      {/* 🔹 DIVIDER LINE #1 */}
      <div className="w-full max-w-full mx-auto mt-6 mb-12 border-b border-white"></div>

      {/* MAIN CONTAINER WITH DIVIDER */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 px-5 md:px-0 items-start">
        {/* LEFT LIST */}
        <div className="space-y-4 mr-10">
          {[
            "Your One-Stop Digital Partner",
            "Beautiful, High-Performance Solutions",
            "Global Expertise, Local Connection",
            "Collaboration That Builds Trust",
            "Flexible Partnerships",
            "Strategy That Delivers",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border-b border-white rounded-md px-5 py-4 text-left hover:bg-white/20 transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="w-px bg-white h-full mx-auto"></div>

        {/* RIGHT CARD */}
        <div
          className="bg-white/10 border border-white/20 rounded-xl 
            p-6 shadow-xl text-center ml-10 flex flex-col items-center 
            justify-start max-w-sm w-full"
        >
          <div className="relative w-full flex justify-center">
            {/* 🌟 Gradient Glow Behind Image */}
            <div
              className="absolute inset-0 w-64 h-64 mx-auto rounded-full 
                  bg-gradient-to-r from-[#06000ba6] via-[#f3f3f3] to-[#06000d]
                  blur-2xl opacity-60"
            >
                
            </div>

            {/* 📌 Actual Image */}
            <img
              src={WhyUs}
              alt="Ctrl Zs"
              className="relative w-64 h-auto object-contain mx-auto drop-shadow-xl z-10"
            />
          </div>

          <p className="text-6xl font-bold mb-2">Ctrl Zs</p>

          <p className="text-sm opacity-80 leading-relaxed max-w-xs mx-auto">
            All your creative and marketing needs handled in one place. Web
            development, UI/UX, video, content, SEO, and paid ads. One team, one
            vision, one powerful brand.
          </p>
        </div>
      </div>

      {/* 🔹 DIVIDER LINE #2 */}
      <div className="w-full max-w-full mx-auto mt-12 border-b border-white"></div>
    </section>
  );
}
