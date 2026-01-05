import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OfferCard({ index, total, item }) {
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
          scale: isInView ? 1 - (total - index) * 0.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{
          top: `calc(-6vh + ${index * 36}px)`,
          zIndex: total - index,
        }}
        className="
          relative
          w-[92%] md:w-[80%] lg:w-[70%]
          h-[450px]
          grid grid-cols-1 md:grid-cols-2
          rounded-3xl
          overflow-hidden
          bg-white
          shadow-[0_30px_60px_rgba(0,0,0,0.3)]
        "
      >
        {/* LEFT */}
        <div className="flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border-4 border-purple-600 flex items-center justify-center font-bold text-purple-700">
            ⚛
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-gradient-to-br from-[#3b0ca3] to-[#6a1cff] px-10 py-12 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            {item.title}
          </h3>
          <p className="text-white/90 leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
