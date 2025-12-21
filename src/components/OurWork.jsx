import React from "react";
import seo from "../assets/seo.jpg";
import ui from "../assets/ui.png";
import paidads from "../assets/paidads.png";
import web from "../assets/web.png";

const projects = [
  {
    title: "Flicklist",
    img: seo,
    desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing",
  },
  {
    title: "Mall n Mall Cable",
    img: seo,
    desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing",
  },
  {
    title: "Akashic Shades",
    img: ui,
    desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing",
  },
  {
    title: "Flicklist",
    img: paidads,
    desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing",
  },
  {
    title: "Akashic Shades",
    img: web,
    desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing",
  },
];

export default function OurWork() {
  return (
    <section className="w-full py-[50px] text-white relative ">

      {/* TITLE */}
            {/* HEADING */}
        <h2 className="text-center text-6xl font-bold text-white mb-6">
          Our Work
        </h2>

        <div className="mx-auto mb-14 h-[3px] w-[20%] bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* INFINITE SCROLL */}
      <div className="w-full flex justify-center">
      <div className="ourwork-marquee mt-10 py-10">
        <div className="ourwork-track">

          {[...projects, ...projects].map((p, i) => (
            <div
              key={i}
              className="
                w-[310px] shrink-0
                bg-white/10 backdrop-blur-lg rounded-2xl p-4 
                shadow-xl hover:shadow-[0_0_20px_4px_rgba(155,77,255,0.6)]
                transition-shadow duration-300
                text-left border border-white
              "
            >
              <h3 className="text-white text-lg font-semibold mt-4">
                {p.title}
              </h3>

              <img
                src={p.img}
                alt={p.title}
                className="rounded-xl w-full h-60 object-cover mt-2 border-2 border-white"
              />

              <p className="text-gray-200 text-sm mt-4 leading-relaxed">
                {p.desc}
              </p>

              <button
                className="mt-4 w-[60%] bg-[#E3CDFF] text-[#4E2F76] font-semibold py-2 rounded-md hover:bg-white transition px-3"
              >
                Explore →
              </button>
            </div>
          ))}

        </div>
      </div>
</div>
      {/* ONLY SCROLL CSS */}
      <style>{`
        .ourwork-marquee {
          width: 100%;
          overflow: hidden;
        }

        .ourwork-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: ourwork-scroll 35s linear infinite;
        }

        .ourwork-marquee:hover .ourwork-track {
          animation-play-state: paused;
        }

        @keyframes ourwork-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}
