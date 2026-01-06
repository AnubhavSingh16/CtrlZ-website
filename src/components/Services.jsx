import React, { useEffect, useState } from "react";
import seo from "../assets/seo.jpg";
import ui from "../assets/ui.png";
import paidads from "../assets/paidads.png";
import web from "../assets/web.png";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable & high-converting websites",
    path: "/web-development",
    img: seo,
  },
  {
    title: "Graphic Design",
    desc: "Performance marketing & growth strategy",
    path: "/graphic-design",
    img: paidads,
  },
  {
    title: "Video Editing",
    desc: "Organic traffic & long-term visibility",
    path: "/video-editing",
    img: seo,
  },
  {
    title: "UI / UX Design",
    desc: "Pixel-perfect interfaces & brand identity",
    path: "/ui-development",
    img: ui,
  },
  {
    title: "Ai Marketing",
    desc: "Performance marketing & growth strategy",
    path: "/ai-marketing",
    img: paidads,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  //   useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const interval = setInterval(() => {
  //       setActiveIndex((prev) => (prev + 1) % services.length);
  //     }, 500);

  //     return () => clearInterval(interval);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <section className="home-services-section">
      {/* HEADING */}
      <h2 className="text-center text-6xl font-bold text-white mb-6">
        Services
      </h2>

      <div className="mx-auto mb-14 h-[3px] w-[15%] bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div className="home-services-stage">
        <div className="home-services-glow" />

        {services.map((service, index) => {
          const total = services.length;

          const position =
            index === activeIndex
              ? "active"
              : `home-services-pos-${
                  ((index - activeIndex + total) % total) + 1
                }`;

          return (
            <div
              key={index}
              className={`home-services-card ${position}`}
              onClick={() => navigate(service.path)}
              role="button"
              tabIndex={0}
            >
              {/* IMAGE */}
              <img src={service.img} alt={service.title} />

              {/* TEXT OVERLAY */}
              <div className="home-services-text">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
