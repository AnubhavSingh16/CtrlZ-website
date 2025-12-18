import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function WhatWeOffer({ slides = [] }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-6xl text-white mb-25 tracking-wide">
        WHAT WE OFFER
      </h1>

     
      <div className="relative w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] mx-auto flex justify-center">
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-full flex justify-center z-0">
          <div className="absolute -top-2 w-[92%] h-[420px] rounded-3xl bg-[#DFC7FF]" />
          <div className="absolute top-4 w-[96%] h-[420px] rounded-3xl bg-[#D0AEFD]" />
        </div>

        <Swiper
          direction="vertical"
          loop
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={300}
          allowTouchMove={false}
          className="relative z-10 h-[480px] w-full flex justify-center"
          modules={[Autoplay]}
        >
          {slides.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              {/* CARD */}
              <div
                className="
    relative z-20
    h-[460px] w-[96%]
    grid grid-cols-2
    rounded-3xl overflow-hidden
    bg-white
    shadow-[0_30px_60px_rgba(0,0,0,0.28)]"
              >
                {/* LEFT — IMAGE (Centering/Cover fixed) */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* RIGHT — TEXT (Max-Width adjusted for shorter lines) */}
                <div
                  className="
                    w-full h-full 
                    bg-gradient-to-br from-[#2b005a] to-[#6a00ff]
                    flex flex-col justify-start p-6 
                    overflow-y-auto 
                    scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent
                    items-center
                    text-center
                    
                  "
                >
                  {/* Max Width changed from max-w-md to max-w-sm */}
                  <div className="w-full max-w-sm mt-5"> 
    <div className="pr-15 text-center">
         <h3 className="text-2xl font-bold mb-4 text-white flex-shrink-0 ">
                      {item.title}
                    </h3>
    </div>
                   
                  <div className="pr-15 text-center">
                        <p className="text-sm leading-relaxed text-white/90 ">
                      {item.description}
                    </p>
                  </div>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}