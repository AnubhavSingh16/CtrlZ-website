import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OfferCard({ index, total, item }) {
  console.log("itemmmmm offer", item);
  const ref = useRef(null);
  
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
    once: false,
  });

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        ref={ref}
        animate={{
          scale: isInView ? 1 - (total - index) * 0.01 : 1,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{
          top: `calc(-12vh + ${index * 36}px)`,
          zIndex: total - index,
        }}
        className="
          relative
          w-[92%] md:w-[80%] lg:w-[60%]
          h-[500px]
          grid grid-cols-1 md:grid-cols-2
          rounded-3xl
          overflow-hidden
          bg-white
          shadow-[0_30px_60px_rgba(0,0,0,0.3)]
        "
      >
        {/* LEFT */}
        <div className="relative w-full h-full flex items-center justify-center bg-white">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="
      w-full h-full
      object-cover
    "
          />
        </div>

        {/* RIGHT */}
        <div className="bg-gradient-to-b from-[#310071] to-[#5D00D7] px-10 py-12 flex flex-col text-center ">
          <h3 className="text-3xl font-semibold text-white mb-4">
            {item.title}
          </h3>
          <p className="text-white/90 leading-relaxed text-xl">{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
