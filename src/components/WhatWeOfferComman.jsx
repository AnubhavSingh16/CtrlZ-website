import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/pages/webDev.css";


import web from "../assets/web.png";
// import card2 from "../assets/card2.png";
// import card3 from "../assets/card3.png";

const cards = [web, web, web];

export default function WebDevOfferStack() {
  return (
    <section className="web-dev-offer-section">
      <Swiper
        direction="vertical"
        effect="cards"
        grabCursor={true}
        mousewheel={true}
        speed={800}
        modules={[EffectCards, Mousewheel]}
        className="web-dev-offer-swiper"
      >
        {cards.map((img, index) => (
          <SwiperSlide key={index} className="web-dev-offer-slide">
            <div className="web-dev-offer-card">
              <img src={img} alt="offer card" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
