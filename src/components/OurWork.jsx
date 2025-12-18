import React from "react";
import seo from "../assets/seo.jpg";
import ui from "../assets/ui.png";
import paidads from "../assets/paidads.png";
import videograpic from "../assets/videograpic.png";
import web from "../assets/web.png";

const projects = [
  { title: "Flicklist", img: seo, desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing" },
  { title: "Mall n Mall Cable", img: seo, desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing" },
  { title: "Akashic Shades", img: ui, desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing" },
  { title: "Flicklist", img: paidads, desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing" },
  { title: "Akashic Shades", img: web, desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing" },
  // { title: "Flicklist", img: videograpic, desc: "UI/UX design, Web Development, Content writing, Graphic design and Video Editing" },
];

export default function OurWork() {
  return (
    <section className="w-full py-[50px] text-white relative">

    
      <div className="max-w-full mx-auto text-center">
        <h2 className="services-title text-center">Our Work</h2>
      </div>

      <div className="flex gap-8 overflow-x-auto scrollbar-hide mt-15 justify-center p-10 ">

        {projects.map((p, i) => (
          <div
            key={i}
            className="
              min-w-[310px] bg-white/10 backdrop-blur-lg rounded-2xl p-4 
              shadow-xl hover:shadow-[0_0_20px_4px_rgba(155,77,255,0.6)]
              transition-all duration-300
              text-left  hover:scale-105 border border-white
            "
          >
            <h3 className="text-white text-lg font-semibold mt-4">{p.title}</h3>

            <img
              src={p.img}
              className="rounded-xl w-full h-60 object-cover mt-2 border-2 border-white"
            />

            <p className="text-gray-200 text-sm mt-4 leading-relaxed">
              {p.desc}
            </p>

            <button
              className="mt-4 w-[60%] bg-[#E3CDFF] text-[#4E2F76] font-semibold py-2 rounded-md hover:bg-white transition text-centre px-3"
            >
              Explore →
            </button>
          </div>
        ))}

      </div>

    </section>
  );
}
