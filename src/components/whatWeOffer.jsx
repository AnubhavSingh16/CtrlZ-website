// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// export default function WhatWeOffer({ slides = [] }) {
//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center px-4">
//       {/* TITLE */}
//       <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-16 tracking-wide">
//         WHAT WE OFFER
//       </h1>

//       {/* CARD STACK WRAPPER */}
//       <div className="relative w-full md:w-[85%] lg:w-[70%] xl:w-[60%] flex justify-center">
//         {/* BACK STACK SHADOW CARDS */}
//         <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-full flex justify-center z-0">
//           <div className="absolute -top-2 w-[92%] h-[420px] rounded-3xl bg-[#DFC7FF]" />
//           <div className="absolute top-4 w-[96%] h-[420px] rounded-3xl bg-[#D0AEFD]" />
//         </div>

//         {/* SWIPER */}
//         <Swiper
//           direction="vertical"
//           loop
//           slidesPerView={1}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           speed={500}
//           allowTouchMove={false}
//           modules={[Autoplay]}
//           className="relative z-10 h-[480px] w-full"
//         >
//           {slides.map((item, index) => (
//             <SwiperSlide
//               key={index}
//               className="flex items-center justify-center"
//             >
//               {/* MAIN CARD */}
//               <div
//                 className="
//                   relative
//                   h-[460px] w-[96%]
//                   grid grid-cols-1 md:grid-cols-2
//                   rounded-3xl overflow-hidden
//                   bg-white
//                   shadow-[0_30px_60px_rgba(0,0,0,0.28)]
//                 "
//               >
//                 {/* LEFT — IMAGE */}
//                 <div className="relative w-full h-full">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* RIGHT — CONTENT (FIXED) */}
//                 <div
//                   className="
//                     w-full h-full
//                     px-10
//                     bg-gradient-to-br from-[#2b005a] to-[#6a00ff]
//                   "
//                 >
//                   <div
//                     className="
//                      text-center
//                       w-[50%]
                     
//                        py-8
//                       flex flex-col
                     
//                     "
//                   >
//                     <h3 className="text-base font-semibold text-white mb-4 break-words">
//                       {item.title}
//                     </h3>

//                     <p className="text-sm text-white/90 leading-relaxed break-words">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

import OfferCard from "../components/OfferCard";

const offers = [
  {
    title: "Custom Coded Website Design & Development",
    description:
      "Build a website that’s as unique as your brand. We create custom-coded, scalable websites engineered for performance, flexibility, and long-term growth.",
  },
  {
    title: "Conversion-Focused UI/UX Design",
    description:
      "Interfaces designed using behavioral psychology, CRO logic, and proven UX frameworks to maximize engagement and conversions.",
  },
  {
    title: "High-Performance Web Applications",
    description:
      "Robust, scalable applications built with modern stacks like React, Next.js, and Node — optimized for speed and reliability.",
  },
];

export default function WhatWeOffer({data}) {

  
  return (
    <section className="relative min-h-[300vh] px-6">
      {/* TITLE */}


      <div className="z-30 w-full text-center">
        <h1 className="heading-3d no-underline ">
          WHAT WE OFFER
        </h1>
      </div>

      {data.map((item, index) => (
        <OfferCard
          key={index}
          index={index}
          total={data.length}
          item={item}
        />
      ))}
    </section>
  );
}
