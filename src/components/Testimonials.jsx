import React from "react";
import { FaQuoteRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import testimonial from "../assets/testimonial.jpg";


const testimonials = [
  {
    name: "Gautam Kamboj",
    img: "/pic1.jpg",
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Akash Chauhan",
    img: "/pic2.jpg",
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Gautam Kamboj",
    img: "/pic1.jpg",
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Akash Chauhan",
    img: "/pic2.jpg",
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Akash Chauhan",
    img: "/pic2.jpg",
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Gautam Kamboj",
    img: "/pic1.jpg",
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Akash Chauhan",
    img: "/pic2.jpg",
    rating: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 text-white">
      {/* Heading */}
      <h2 className="text-center text-5xl font-bold mb-16 drop-shadow-lg ">
        Testimonials
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20
            rounded-2xl p-6 shadow-xl hover:shadow-[0_0_25px_5px_rgba(155,77,255,0.4)]
            transition-all duration-300"
          >
            {/* Top-right Quote */}
            <FaQuoteRight className="absolute top-2 right-3 text-purple-300 text-2xl" />

            {/* Profile Row */}
            <div className="flex items-center gap-3">
              <img
                src={testimonial}
                alt={t.name}
                className="w-20 h-20 rounded-full border-2 border-purple-300 object-cover"
              />

              <div className="text-left">
                <h3 className="text-lg font-semibold">{t.name}</h3>

                {/* Rating */}
                <div className="flex mt-1 text-yellow-400">
                  {Array(t.rating).fill().map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm opacity-90 leading-relaxed text-left mb-4">
              {t.desc}
            </p>

            {/* Bottom-left Quote */}
            <FaQuoteLeft className="absolute bottom-3 left-3 text-purple-300 text-xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
